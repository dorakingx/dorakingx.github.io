/**
 * Explicit allowlist for the portfolio's Selected Projects section.
 *
 * Add or remove repository names here. Display order is newest update first.
 * The sync script only fetches
 * repositories in this list and never discovers new repositories
 * automatically.
 */
export const selectedRepositoryNames = [
  "q11-emergency",
  "novelpilot",
  "qisquiz",
  "musiq",
  "AlphaQuoridor",
  "QSimCity"
] as const;

export type SelectedRepositoryName = (typeof selectedRepositoryNames)[number];
