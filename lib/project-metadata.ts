import type { Locale } from "@/data/translations";

type ProjectMetadataInput = {
  starCount: number;
  primaryLanguage: string | null | undefined;
  updatedAt: string | null | undefined;
};

export type ProjectMetadataItem =
  | {
      key: "stars";
      count: number;
      ariaLabel: string;
    }
  | {
      key: "language";
      label: string;
    }
  | {
      key: "updated";
      label: string;
      dateTime: string;
    };

export function formatProjectUpdatedAt(
  updatedAt: string | null | undefined,
  locale: Locale
) {
  if (typeof updatedAt !== "string" || updatedAt.trim().length === 0) {
    return null;
  }

  const date = new Date(updatedAt);

  if (!Number.isFinite(date.getTime())) {
    return null;
  }

  const formattedDate = new Intl.DateTimeFormat(
    locale === "ja" ? "ja-JP" : "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: "UTC"
    }
  ).format(date);

  return {
    label: locale === "ja" ? `更新 ${formattedDate}` : `Updated ${formattedDate}`,
    dateTime: date.toISOString()
  };
}

export function getProjectMetadataItems(
  metadata: ProjectMetadataInput,
  locale: Locale
): ProjectMetadataItem[] {
  const starCount =
    Number.isFinite(metadata.starCount) && metadata.starCount >= 0
      ? Math.trunc(metadata.starCount)
      : 0;
  const items: ProjectMetadataItem[] = [
    {
      key: "stars",
      count: starCount,
      ariaLabel:
        locale === "ja"
          ? `スター ${starCount}`
          : `${starCount} ${starCount === 1 ? "star" : "stars"}`
    }
  ];
  const primaryLanguage =
    typeof metadata.primaryLanguage === "string"
      ? metadata.primaryLanguage.trim()
      : "";

  if (primaryLanguage.length > 0) {
    items.push({
      key: "language",
      label: primaryLanguage
    });
  }

  const updatedAt = formatProjectUpdatedAt(metadata.updatedAt, locale);

  if (updatedAt) {
    items.push({
      key: "updated",
      ...updatedAt
    });
  }

  return items;
}
