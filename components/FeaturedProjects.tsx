import type { Locale } from "@/data/translations";
import { translations } from "@/data/translations";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/data/projects";

type Props = {
  locale?: Locale;
};

export default function FeaturedProjects({ locale = "en" }: Props) {
  const t = translations[locale].projects;

  return (
    <section id="projects" className="px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={t.eyebrow} title={t.title} description={t.description} />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.repositoryName ?? project.name}
              locale={locale}
              project={{
                ...project,
                description: locale === "ja" ? project.descriptionJa : project.description
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
