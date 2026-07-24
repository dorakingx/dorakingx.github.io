import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import test from "node:test";

const automationBranch = "automation/sync-selected-repositories";

function git(cwd, ...args) {
  return execFileSync("git", args, {
    cwd,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"]
  }).trim();
}

async function setupRemote(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), "automation-branch-update-"));
  const remote = path.join(root, "remote.git");
  const seed = path.join(root, "seed");

  t.after(() => rm(root, { recursive: true, force: true }));
  git(root, "init", "--bare", remote);
  git(root, "clone", remote, seed);
  git(seed, "config", "user.name", "Test User");
  git(seed, "config", "user.email", "test@example.com");
  await writeFile(path.join(seed, "metadata.txt"), "main\n");
  git(seed, "add", "metadata.txt");
  git(seed, "commit", "-m", "initial main");
  git(seed, "branch", "-M", "main");
  git(seed, "push", "-u", "origin", "main");
  git(seed, "switch", "-c", automationBranch);
  await writeFile(path.join(seed, "metadata.txt"), "old automation metadata\n");
  git(seed, "commit", "-am", "old automation update");
  git(seed, "push", "-u", "origin", automationBranch);
  git(seed, "switch", "main");

  return { root, remote, seed };
}

async function mergeAutomation(seed, mode) {
  if (mode === "merge") {
    git(seed, "merge", "--no-ff", automationBranch, "-m", "merge automation update");
  } else {
    git(seed, "merge", "--squash", automationBranch);
    git(seed, "commit", "-m", "squash automation update");
  }

  git(seed, "push", "origin", "main");
}

async function runWorkflowBranchUpdate(root, remote) {
  const runner = path.join(root, "runner");

  git(root, "clone", "--branch", "main", remote, runner);
  git(runner, "config", "user.name", "github-actions[bot]");
  git(runner, "config", "user.email", "41898282+github-actions[bot]@users.noreply.github.com");
  await writeFile(path.join(runner, "metadata.txt"), "new automation metadata\n");
  git(
    runner,
    "fetch",
    "origin",
    `${automationBranch}:refs/remotes/origin/${automationBranch}`
  );
  git(runner, "switch", "-C", automationBranch);
  git(runner, "add", "metadata.txt");
  git(runner, "commit", "-m", "chore: sync selected repository metadata");
  git(runner, "push", "--force-with-lease", "origin", automationBranch);

  return runner;
}

for (const [mode, label] of [
  ["merge", "merge commit"],
  ["squash", "squash merge"]
]) {
  test(`automation branch refresh works after a ${label}`, async (t) => {
    const { root, remote, seed } = await setupRemote(t);

    await mergeAutomation(seed, mode);
    const mainCommit = git(seed, "rev-parse", "main");
    const runner = await runWorkflowBranchUpdate(root, remote);
    const automationCommit = git(runner, "rev-parse", automationBranch);

    assert.doesNotThrow(() =>
      git(runner, "merge-base", "--is-ancestor", mainCommit, automationCommit)
    );
    assert.equal(
      await readFile(path.join(runner, "metadata.txt"), "utf8"),
      "new automation metadata\n"
    );
    assert.equal(
      git(remote, "show", `${automationBranch}:metadata.txt`),
      "new automation metadata"
    );
  });
}
