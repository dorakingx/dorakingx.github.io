import SectionHeader from "@/components/SectionHeader";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Skills"
          title="Research, engineering, and creative systems"
          description="Technical range for prototypes that need both scientific rigor and practical product instincts."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <section key={group.name} className="glass-panel rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white">{group.name}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-md border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-zinc-200">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
