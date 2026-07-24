import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

const helperSource = await readFile(
  new URL("../lib/project-metadata.ts", import.meta.url),
  "utf8"
);
const { outputText } = ts.transpileModule(helperSource, {
  compilerOptions: {
    module: ts.ModuleKind.ES2022,
    target: ts.ScriptTarget.ES2022
  }
});
const helperModuleUrl = `data:text/javascript;base64,${Buffer.from(outputText).toString(
  "base64"
)}`;
const { formatProjectUpdatedAt, getProjectMetadataItems } = await import(
  helperModuleUrl
);

test("formats updated dates deterministically in UTC", () => {
  const timestamp = "2026-01-01T00:30:00+14:00";

  assert.deepEqual(formatProjectUpdatedAt(timestamp, "en"), {
    label: "Updated Dec 31, 2025",
    dateTime: "2025-12-31T10:30:00.000Z"
  });
  assert.deepEqual(formatProjectUpdatedAt(timestamp, "ja"), {
    label: "更新 2025年12月31日",
    dateTime: "2025-12-31T10:30:00.000Z"
  });
});

test("omits missing, empty, and invalid updated dates", () => {
  for (const updatedAt of [undefined, null, "", "   ", "not-a-date"]) {
    assert.equal(formatProjectUpdatedAt(updatedAt, "en"), null);
  }
});

test("renders zero stars without an empty language or invalid date item", () => {
  const items = getProjectMetadataItems(
    {
      starCount: 0,
      primaryLanguage: "   ",
      updatedAt: "invalid"
    },
    "en"
  );

  assert.deepEqual(items, [
    {
      key: "stars",
      count: 0,
      ariaLabel: "0 stars"
    }
  ]);
});

test("renders a trimmed language and omits it when missing", () => {
  const withLanguage = getProjectMetadataItems(
    {
      starCount: 1,
      primaryLanguage: " TypeScript ",
      updatedAt: "2026-06-26T15:31:46Z"
    },
    "en"
  );
  const withoutLanguage = getProjectMetadataItems(
    {
      starCount: 1,
      primaryLanguage: null,
      updatedAt: "2026-06-26T15:31:46Z"
    },
    "en"
  );

  assert.deepEqual(
    withLanguage.map((item) => item.key),
    ["stars", "language", "updated"]
  );
  assert.equal(withLanguage[0].ariaLabel, "1 star");
  assert.equal(withLanguage[1].label, "TypeScript");
  assert.deepEqual(
    withoutLanguage.map((item) => item.key),
    ["stars", "updated"]
  );
});

test("metadata labels never contain invalid placeholder text", () => {
  const items = getProjectMetadataItems(
    {
      starCount: Number.NaN,
      primaryLanguage: undefined,
      updatedAt: undefined
    },
    "ja"
  );
  const labels = items
    .map((item) => (item.key === "stars" ? `★ ${item.count}` : item.label))
    .join(" ");

  assert.equal(labels, "★ 0");
  assert.doesNotMatch(labels, /NaN|Invalid Date|undefined/);
});
