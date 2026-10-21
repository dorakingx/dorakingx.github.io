import type { Locale } from "@/data/translations";
import { translations } from "@/data/translations";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function FeaturedProjects({ locale = "en" }: { locale?: Locale }) {
  const t = translations[locale].projects;
  return (
    <section id="projects" aria-labelledby="projects-title" className="page-width section-space border-t border-white/10">
      <div className="mb-8 sm:mb-10">
        <h2 id="projects-title" className="section-title">{t.title}</h2>
        <p className="mt-3 text-base leading-7 text-zinc-400">{t.description}</p>
      </div>
      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => <ProjectCard key={project.repositoryName} locale={locale} project={project} />)}
      </div>
    </section>
  );
}
