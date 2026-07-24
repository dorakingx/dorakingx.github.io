import { githubProjectMetadata } from "@/data/github-projects.generated";
import { projectCuration } from "@/data/project-curation";
import {
  selectedRepositoryNames,
  type SelectedRepositoryName
} from "@/data/selected-repositories";

export type Project = {
  name: string;
  repositoryName: SelectedRepositoryName;
  githubUrl: string;
  description: string;
  descriptionJa: string;
  tags: readonly string[];
  tagsJa?: readonly string[];
  liveUrl?: string;
  faviconUrl: string;
  githubDescription: string | null;
  primaryLanguage: string | null;
  topics: readonly string[];
  starCount: number;
  updatedAt: string;
};

function validWebsiteUrl(value: string | null | undefined) {
  if (!value) {
    return undefined;
  }

  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:"
      ? url.toString()
      : undefined;
  } catch {
    return undefined;
  }
}

const metadataByRepositoryName = new Map(
  githubProjectMetadata.map((metadata) => [metadata.repositoryName, metadata])
);

/**
 * Generated GitHub metadata is combined with human-authored curation here.
 * Missing or ineligible repositories are intentionally omitted.
 */
export const projects: Project[] = selectedRepositoryNames.flatMap((repositoryName) => {
  const metadata = metadataByRepositoryName.get(repositoryName);

  if (!metadata) {
    return [];
  }

  const curation = projectCuration[repositoryName];
  const liveUrl = validWebsiteUrl(curation.liveUrlOverride ?? metadata.homepageUrl);

  return [
    {
      name: curation.displayName,
      repositoryName,
      githubUrl: metadata.githubUrl,
      description: curation.description,
      descriptionJa: curation.descriptionJa,
      tags: curation.tags,
      tagsJa: curation.tagsJa,
      liveUrl,
      faviconUrl: curation.faviconUrl,
      githubDescription: metadata.description,
      primaryLanguage: metadata.primaryLanguage,
      topics: metadata.topics,
      starCount: metadata.starCount,
      updatedAt: metadata.updatedAt
    }
  ];
});
