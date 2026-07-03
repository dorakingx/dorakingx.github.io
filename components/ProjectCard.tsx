/* eslint-disable @next/next/no-img-element */

import type { Project } from "@/data/projects";
import type { Locale } from "@/data/translations";

type ProjectCardProps = {
  project: Project;
  locale?: Locale;
};

export default function ProjectCard({ project, locale = "en" }: ProjectCardProps) {
  const repositoryUrl = project.repositoryName
    ? `https://github.com/dorakingx/${project.repositoryName}`
    : null;
  const badge = project.websiteOnly ? (locale === "ja" ? "ウェブサイト" : "Website") : "OSS";

  return (
    <article className="glow-border group flex h-full flex-col rounded-lg">
      <div className="glass-panel flex h-full flex-col rounded-lg p-6 transition duration-200 group-hover:-translate-y-1">
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={project.faviconUrl}
              alt=""
              aria-hidden="true"
              width={28}
              height={28}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="h-7 w-7 shrink-0 rounded-md bg-white/10 object-contain p-0.5"
            />
            <h3 className="min-w-0 text-2xl font-semibold tracking-normal text-white">{project.name}</h3>
          </div>
          <span className="shrink-0 rounded-full border border-teal-300/25 bg-teal-300/10 px-3 py-1 text-xs font-medium text-teal-100">
            {badge}
          </span>
        </div>
        <p className="mt-4 flex-1 text-base leading-7 text-zinc-300">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-md border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-zinc-200">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          {repositoryUrl ? (
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              {locale === "ja" ? "GitHubリポジトリ" : "GitHub Repository"}
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-teal-200/60 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              {locale === "ja" ? "ウェブサイトを見る" : "Visit Website"}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
