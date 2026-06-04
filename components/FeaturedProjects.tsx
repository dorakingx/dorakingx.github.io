import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Four focused experiments"
          description="A compact selection across AI writing, quantum education, quantum music, and game AI."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.repositoryName} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
