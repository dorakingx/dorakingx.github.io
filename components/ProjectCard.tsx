import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const repositoryUrl = `https://github.com/dorakingx/${project.repositoryName}`;

  return (
    <article className="glow-border group flex h-full flex-col rounded-lg">
      <div className="glass-panel flex h-full flex-col rounded-lg p-6 transition duration-200 group-hover:-translate-y-1">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold tracking-normal text-white">{project.name}</h3>
          <span className="rounded-full border border-teal-300/25 bg-teal-300/10 px-3 py-1 text-xs font-medium text-teal-100">
            OSS
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
          <a
            href={repositoryUrl}
            className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-zinc-950"
          >
            GitHub Repository
          </a>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              className="rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-teal-200/60 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
