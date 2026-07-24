import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const owner = "dorakingx";
const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const allowlistPath = path.join(repositoryRoot, "data", "selected-repositories.ts");
const outputPath = path.join(repositoryRoot, "data", "github-projects.generated.ts");

function unwrapExpression(node) {
  let current = node;

  while (
    ts.isAsExpression(current) ||
    ts.isSatisfiesExpression(current) ||
    ts.isParenthesizedExpression(current)
  ) {
    current = current.expression;
  }

  return current;
}

async function readSelectedRepositoryNames() {
  const source = await readFile(allowlistPath, "utf8");
  const sourceFile = ts.createSourceFile(
    allowlistPath,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS
  );
  let selectedNames;

  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) {
      continue;
    }

    for (const declaration of statement.declarationList.declarations) {
      if (
        !ts.isIdentifier(declaration.name) ||
        declaration.name.text !== "selectedRepositoryNames" ||
        !declaration.initializer
      ) {
        continue;
      }

      const initializer = unwrapExpression(declaration.initializer);

      if (!ts.isArrayLiteralExpression(initializer)) {
        throw new Error("selectedRepositoryNames must be an array literal.");
      }

      selectedNames = initializer.elements.map((element) => {
        if (!ts.isStringLiteral(element)) {
          throw new Error("Every selected repository name must be a string literal.");
        }

        return element.text;
      });
    }
  }

  if (!selectedNames) {
    throw new Error("Could not find selectedRepositoryNames in the allowlist.");
  }

  if (selectedNames.length === 0) {
    throw new Error("The selected repository allowlist must not be empty.");
  }

  if (new Set(selectedNames).size !== selectedNames.length) {
    throw new Error("The selected repository allowlist contains duplicate names.");
  }

  return selectedNames;
}

function normalizeOptionalText(value) {
  if (typeof value !== "string") {
    return null;
  }

  const normalized = value.trim();
  return normalized.length > 0 ? normalized : null;
}

function normalizeWebsiteUrl(value) {
  const normalized = normalizeOptionalText(value);

  if (!normalized) {
    return null;
  }

  try {
    const url = new URL(normalized);
    return url.protocol === "http:" || url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
}

function compareStrings(left, right) {
  if (left < right) {
    return -1;
  }

  if (left > right) {
    return 1;
  }

  return 0;
}

async function fetchRepository(repositoryName) {
  const headers = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "dorakingx-portfolio-repository-sync"
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetch(
    `https://api.github.com/repos/${owner}/${encodeURIComponent(repositoryName)}`,
    { headers }
  );

  if (response.status === 404) {
    console.warn(
      `[excluded] ${repositoryName}: repository was not found or is not publicly accessible.`
    );
    return null;
  }

  if (!response.ok) {
    throw new Error(
      `GitHub API request failed for ${repositoryName}: ${response.status} ${response.statusText}`
    );
  }

  const repository = await response.json();
  const exclusionReasons = [];

  if (repository.private || repository.visibility !== "public") {
    exclusionReasons.push("repository is not public");
  }

  if (repository.owner?.login !== owner) {
    exclusionReasons.push(`repository owner is not ${owner}`);
  }

  if (repository.fork) {
    exclusionReasons.push("repository is a fork");
  }

  if (repository.archived) {
    exclusionReasons.push("repository is archived");
  }

  if (repository.is_template) {
    exclusionReasons.push("repository is a template");
  }

  if (exclusionReasons.length > 0) {
    console.warn(`[excluded] ${repositoryName}: ${exclusionReasons.join("; ")}.`);
    return null;
  }

  const topics = Array.isArray(repository.topics)
    ? repository.topics.filter((topic) => typeof topic === "string").sort(compareStrings)
    : [];

  return {
    repositoryName,
    owner: repository.owner.login,
    githubUrl: repository.html_url,
    description: normalizeOptionalText(repository.description),
    homepageUrl: normalizeWebsiteUrl(repository.homepage),
    primaryLanguage: normalizeOptionalText(repository.language),
    topics,
    starCount: Number.isInteger(repository.stargazers_count)
      ? repository.stargazers_count
      : 0,
    updatedAt: repository.updated_at
  };
}

function serializeMetadata(metadata) {
  return `// This file is generated by scripts/sync-github-projects.mjs.
// Do not edit it manually; edit selected-repositories.ts or project-curation.ts instead.

import type { SelectedRepositoryName } from "@/data/selected-repositories";

export type GitHubProjectMetadata = {
  repositoryName: SelectedRepositoryName;
  owner: "dorakingx";
  githubUrl: string;
  description: string | null;
  homepageUrl: string | null;
  primaryLanguage: string | null;
  topics: readonly string[];
  starCount: number;
  updatedAt: string;
};

export const githubProjectMetadata = ${JSON.stringify(metadata, null, 2)} as const satisfies readonly GitHubProjectMetadata[];
`;
}

const selectedRepositoryNames = await readSelectedRepositoryNames();
const fetchedRepositories = await Promise.all(
  selectedRepositoryNames.map(fetchRepository)
);
const metadata = fetchedRepositories.filter((repository) => repository !== null);
const nextOutput = serializeMetadata(metadata);
let currentOutput = null;

try {
  currentOutput = await readFile(outputPath, "utf8");
} catch (error) {
  if (error?.code !== "ENOENT") {
    throw error;
  }
}

if (currentOutput === nextOutput) {
  console.log("GitHub project metadata is already up to date.");
} else {
  await writeFile(outputPath, nextOutput, "utf8");
  console.log(
    `Updated ${path.relative(repositoryRoot, outputPath)} with ${metadata.length} eligible repositories.`
  );
}
