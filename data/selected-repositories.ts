/**
 * Explicit allowlist for the portfolio's Selected Projects section.
 *
 * Add, remove, or reorder repository names here. The sync script only fetches
 * repositories in this list and never discovers new repositories
 * automatically.
 */
export const selectedRepositoryNames = [
  "aiterval",
  "novelpilot",
  "qisquiz",
  "musiq",
  "AlphaQuoridor",
  "aliceinquantumland"
] as const;

export type SelectedRepositoryName = (typeof selectedRepositoryNames)[number];
