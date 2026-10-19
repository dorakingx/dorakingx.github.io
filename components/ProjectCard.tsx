/* eslint-disable @next/next/no-img-element */
import type { Project } from "@/data/projects";
import type { Locale } from "@/data/translations";
import { formatProjectUpdatedAt } from "@/lib/project-metadata";

export default function ProjectCard({ project, locale = "en" }: { project: Project; locale?: Locale }) {
  const updated = formatProjectUpdatedAt(project.updatedAt, locale);
  const tags = locale === "ja" ? project.tagsJa ?? project.tags : project.tags;
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#141817] transition-colors hover:border-white/25">
      <div className="flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-white/10 bg-[#0d100f] p-3 sm:p-4">
        <img src={project.previewUrl} alt={locale === "ja" ? project.previewAltJa : project.previewAlt}
          width={1200} height={750} loading="lazy" decoding="async"
          className="h-full w-full rounded-lg object-contain" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-7">
        <h3 className="text-2xl font-semibold tracking-tight text-white">{project.name}</h3>
        <p className="mt-3 text-base leading-7 text-zinc-300">{locale === "ja" ? project.descriptionJa : project.description}</p>
        <ul aria-label={locale === "ja" ? "技術・分野" : "Technologies and topics"} className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs leading-5 text-teal-200/90">
          {tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <div className="mt-auto pt-7">
          <div className="flex flex-wrap items-center gap-5">
            {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`${locale === "ja" ? "サイトを開く" : "Visit site"}: ${project.name}`} className="project-link text-teal-200">{locale === "ja" ? "サイトを開く" : "Visit site"} <span aria-hidden="true">↗</span></a> : null}
            {project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`GitHub: ${project.name}`} className="project-link text-zinc-200">GitHub <span aria-hidden="true">↗</span></a> : null}
          </div>
          {updated ? <time dateTime={updated.dateTime} className="mt-4 block text-xs leading-5 text-zinc-400">{updated.label}</time> : null}
        </div>
      </div>
    </article>
  );
}
