import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, rm, stat, utimes, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import {
  fetchRepositoryMetadata,
  parseProjectCurationNames,
  parseSelectedRepositoryNames,
  syncGitHubProjects,
  validateCurationRegistry
} from "./lib/github-project-sync.mjs";

const silentLogger = {
  log() {},
  warn() {}
};

function repository(overrides = {}) {
  return {
    name: "example",
    private: false,
    visibility: "public",
    owner: { login: "dorakingx" },
    fork: false,
    archived: false,
    is_template: false,
    html_url: "https://github.com/dorakingx/example",
    description: "Example repository",
    homepage: "https://example.com",
    language: "TypeScript",
    topics: ["z-topic", "a-topic"],
    stargazers_count: 3,
    updated_at: "2026-07-24T00:00:00Z",
    ...overrides
  };
}

function response(body, status = 200, statusText = "OK") {
  return {
    status,
    statusText,
    ok: status >= 200 && status < 300,
    async json() {
      return body;
    }
  };
}

function fetchReturning(body, status = 200, statusText = "OK") {
  return async () => response(body, status, statusText);
}

test("allowlist and curation registry have an exact one-to-one match", () => {
  assert.doesNotThrow(() =>
    validateCurationRegistry(["one", "two"], ["one", "two"])
  );
  assert.throws(
    () => validateCurationRegistry(["one", "one"], ["one"]),
    /selectedRepositoryNames contains duplicate names: one/
  );
  assert.throws(
    () => validateCurationRegistry(["one", "two"], ["one"]),
    /missing projectCuration entries: two/
  );
  assert.throws(
    () => validateCurationRegistry(["one"], ["one", "two"]),
    /projectCuration entries not in allowlist: two/
  );
});

test("registry parsers detect duplicate literal entries", () => {
  assert.throws(
    () =>
      parseSelectedRepositoryNames(
        'export const selectedRepositoryNames = ["one", "one"] as const;'
      ),
    /duplicate names: one/
  );
  assert.throws(
    () =>
      parseProjectCurationNames(
        "export const projectCuration = { one: {}, one: {} };"
      ),
    /duplicate names: one/
  );
});

const excludedRepositories = [
  ["private repository", repository({ private: true, visibility: "private" })],
  ["renamed repository", repository({ name: "renamed-example" })],
  ["archived repository", repository({ archived: true })],
  ["forked repository", repository({ fork: true })],
  ["template repository", repository({ is_template: true })]
];

for (const [name, payload] of excludedRepositories) {
  test(`excludes a ${name}`, async () => {
    const result = await fetchRepositoryMetadata({
      repositoryName: "example",
      fetchImpl: fetchReturning(payload),
      logger: silentLogger
    });

    assert.equal(result, null);
  });
}

for (const unavailableRepository of [
  "private or otherwise inaccessible repository returned as 404",
  "deleted repository returned as 404"
]) {
  test(`excludes a ${unavailableRepository}`, async () => {
    const result = await fetchRepositoryMetadata({
      repositoryName: "example",
      fetchImpl: fetchReturning({}, 404, "Not Found"),
      logger: silentLogger
    });

    assert.equal(result, null);
  });
}

test("fails closed on a GitHub API error", async () => {
  await assert.rejects(
    fetchRepositoryMetadata({
      repositoryName: "example",
      fetchImpl: fetchReturning({}, 500, "Internal Server Error"),
      logger: silentLogger
    }),
    /GitHub API request failed for example: 500 Internal Server Error/
  );
});

test("fails closed on a GitHub API network failure", async () => {
  await assert.rejects(
    fetchRepositoryMetadata({
      repositoryName: "example",
      fetchImpl: async () => {
        throw new Error("network unavailable");
      },
      logger: silentLogger
    }),
    /network unavailable/
  );
});

async function createSyncFixture(t) {
  const repositoryRoot = await mkdtemp(path.join(os.tmpdir(), "github-project-sync-"));
  const dataDirectory = path.join(repositoryRoot, "data");

  t.after(() => rm(repositoryRoot, { recursive: true, force: true }));
  await mkdir(dataDirectory);
  await writeFile(
    path.join(dataDirectory, "selected-repositories.ts"),
    'export const selectedRepositoryNames = ["example"] as const;\n'
  );
  await writeFile(
    path.join(dataDirectory, "project-curation.ts"),
    "export const projectCuration = { example: {} };\n"
  );

  return repositoryRoot;
}

test("no-change execution does not rewrite generated metadata", async (t) => {
  const repositoryRoot = await createSyncFixture(t);
  const outputPath = path.join(repositoryRoot, "data", "github-projects.generated.ts");
  const options = {
    repositoryRoot,
    fetchImpl: fetchReturning(repository()),
    logger: silentLogger
  };
  const firstResult = await syncGitHubProjects(options);

  assert.deepEqual(firstResult, { changed: true, eligibleRepositoryCount: 1 });
  const fixedTime = new Date("2020-01-01T00:00:00Z");
  await utimes(outputPath, fixedTime, fixedTime);
  const before = await stat(outputPath);
  const beforeContent = await readFile(outputPath, "utf8");
  const secondResult = await syncGitHubProjects(options);
  const after = await stat(outputPath);

  assert.deepEqual(secondResult, { changed: false, eligibleRepositoryCount: 1 });
  assert.equal(await readFile(outputPath, "utf8"), beforeContent);
  assert.equal(after.mtimeMs, before.mtimeMs);
});

test("API failure leaves existing generated metadata unchanged", async (t) => {
  const repositoryRoot = await createSyncFixture(t);
  const outputPath = path.join(repositoryRoot, "data", "github-projects.generated.ts");
  const existingContent = "// known-good generated metadata\n";

  await writeFile(outputPath, existingContent);
  await assert.rejects(
    syncGitHubProjects({
      repositoryRoot,
      fetchImpl: fetchReturning({}, 503, "Service Unavailable"),
      logger: silentLogger
    }),
    /503 Service Unavailable/
  );
  assert.equal(await readFile(outputPath, "utf8"), existingContent);
});
