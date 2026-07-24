import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import ts from "typescript";

export const GITHUB_OWNER = "dorakingx";

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

function parseSource(source, filePath) {
  return ts.createSourceFile(
    filePath,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS
  );
}

function findVariableInitializer(sourceFile, variableName) {
  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) {
      continue;
    }

    for (const declaration of statement.declarationList.declarations) {
      if (
        ts.isIdentifier(declaration.name) &&
        declaration.name.text === variableName &&
        declaration.initializer
      ) {
        return unwrapExpression(declaration.initializer);
      }
    }
  }

  throw new Error(`Could not find ${variableName}.`);
}

function assertNoDuplicates(values, registryName) {
  const seen = new Set();
  const duplicates = new Set();

  for (const value of values) {
    if (seen.has(value)) {
      duplicates.add(value);
    }

    seen.add(value);
  }

  if (duplicates.size > 0) {
    throw new Error(
      `${registryName} contains duplicate names: ${[...duplicates].join(", ")}.`
    );
  }
}

export function parseSelectedRepositoryNames(source, filePath = "selected-repositories.ts") {
  const initializer = findVariableInitializer(
    parseSource(source, filePath),
    "selectedRepositoryNames"
  );

  if (!ts.isArrayLiteralExpression(initializer)) {
    throw new Error("selectedRepositoryNames must be an array literal.");
  }

  const names = initializer.elements.map((element) => {
    if (!ts.isStringLiteral(element)) {
      throw new Error("Every selected repository name must be a string literal.");
    }

    return element.text;
  });

  if (names.length === 0) {
    throw new Error("The selected repository allowlist must not be empty.");
  }

  assertNoDuplicates(names, "selectedRepositoryNames");
  return names;
}

function propertyNameText(name) {
  if (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isNumericLiteral(name)) {
    return name.text;
  }

  throw new Error("Every projectCuration key must be a static property name.");
}

export function parseProjectCurationNames(source, filePath = "project-curation.ts") {
  const initializer = findVariableInitializer(parseSource(source, filePath), "projectCuration");

  if (!ts.isObjectLiteralExpression(initializer)) {
    throw new Error("projectCuration must be an object literal.");
  }

  const names = initializer.properties.map((property) => {
    if (!ts.isPropertyAssignment(property) || !property.name) {
      throw new Error("Every projectCuration entry must be a property assignment.");
    }

    return propertyNameText(property.name);
  });

  assertNoDuplicates(names, "projectCuration");
  return names;
}

export function validateCurationRegistry(selectedNames, curationNames) {
  assertNoDuplicates(selectedNames, "selectedRepositoryNames");
  assertNoDuplicates(curationNames, "projectCuration");

  const selected = new Set(selectedNames);
  const curated = new Set(curationNames);
  const missingCuration = selectedNames.filter((name) => !curated.has(name));
  const unexpectedCuration = curationNames.filter((name) => !selected.has(name));

  if (missingCuration.length > 0 || unexpectedCuration.length > 0) {
    const details = [];

    if (missingCuration.length > 0) {
      details.push(`missing projectCuration entries: ${missingCuration.join(", ")}`);
    }

    if (unexpectedCuration.length > 0) {
      details.push(`projectCuration entries not in allowlist: ${unexpectedCuration.join(", ")}`);
    }

    throw new Error(
      `Selected repository allowlist and projectCuration must match one-to-one (${details.join(
        "; "
      )}).`
    );
  }
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
  return left.localeCompare(right, "en");
}

function githubHeaders(token) {
  const headers = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "dorakingx-portfolio-repository-sync"
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

export async function fetchRepositoryMetadata({
  repositoryName,
  owner = GITHUB_OWNER,
  token,
  fetchImpl = globalThis.fetch,
  logger = console
}) {
  const response = await fetchImpl(
    `https://api.github.com/repos/${owner}/${encodeURIComponent(repositoryName)}`,
    { headers: githubHeaders(token) }
  );

  if (response.status === 404) {
    logger.warn(
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

  if (repository.name !== repositoryName) {
    exclusionReasons.push(`repository was renamed to ${repository.name ?? "an unknown name"}`);
  }

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
    logger.warn(`[excluded] ${repositoryName}: ${exclusionReasons.join("; ")}.`);
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

export function serializeMetadata(metadata) {
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

async function readOrNull(filePath) {
  try {
    return await readFile(filePath, "utf8");
  } catch (error) {
    if (error?.code === "ENOENT") {
      return null;
    }

    throw error;
  }
}

export async function syncGitHubProjects({
  repositoryRoot,
  owner = GITHUB_OWNER,
  token,
  fetchImpl = globalThis.fetch,
  logger = console
}) {
  const allowlistPath = path.join(repositoryRoot, "data", "selected-repositories.ts");
  const curationPath = path.join(repositoryRoot, "data", "project-curation.ts");
  const outputPath = path.join(repositoryRoot, "data", "github-projects.generated.ts");
  const [allowlistSource, curationSource] = await Promise.all([
    readFile(allowlistPath, "utf8"),
    readFile(curationPath, "utf8")
  ]);
  const selectedNames = parseSelectedRepositoryNames(allowlistSource, allowlistPath);
  const curationNames = parseProjectCurationNames(curationSource, curationPath);

  validateCurationRegistry(selectedNames, curationNames);

  const fetchedRepositories = await Promise.all(
    selectedNames.map((repositoryName) =>
      fetchRepositoryMetadata({
        repositoryName,
        owner,
        token,
        fetchImpl,
        logger
      })
    )
  );
  const metadata = fetchedRepositories.filter((repository) => repository !== null);
  const nextOutput = serializeMetadata(metadata);
  const currentOutput = await readOrNull(outputPath);

  if (currentOutput === nextOutput) {
    logger.log("GitHub project metadata is already up to date.");
    return { changed: false, eligibleRepositoryCount: metadata.length };
  }

  await writeFile(outputPath, nextOutput, "utf8");
  logger.log(
    `Updated ${path.relative(repositoryRoot, outputPath)} with ${metadata.length} eligible repositories.`
  );
  return { changed: true, eligibleRepositoryCount: metadata.length };
}
