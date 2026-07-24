import path from "node:path";
import { fileURLToPath } from "node:url";
import { syncGitHubProjects } from "./lib/github-project-sync.mjs";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

await syncGitHubProjects({
  repositoryRoot,
  token: process.env.GITHUB_TOKEN
});
