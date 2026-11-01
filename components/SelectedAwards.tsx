/* eslint-disable @next/next/no-img-element */
import { projectCuration } from "@/data/project-curation";
import { translations, type Locale } from "@/data/translations";

export default function SelectedAwards({ locale = "en" }: { locale?: Locale }) {
  const t = translations[locale].awards;
  const awards = [
    {
      project: projectCuration["q11-emergency"],
      ...t.q11Emergency,
      href: "https://qollab.xyz/explore/hackathon-2026/iiit-dharwad"
    },
    {
      project: projectCuration.QSimCity,
      ...t.qsimcity,
      href: "https://lnkd.in/p/ghdWPVi5"
    }
  ];

  return (
    <section id="awards" aria-labelledby="awards-title" className="page-width section-space border-t border-white/10">
      <h2 id="awards-title" className="section-title">{t.title}</h2>
      <div className="mt-8 grid gap-4">
        {awards.map((award) => (
          <article key={award.project.displayName} className="rounded-xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <img src={award.project.faviconUrl} alt="" aria-hidden="true" width={48} height={48} loading="lazy" className="h-12 w-12 shrink-0 rounded-xl object-contain" />
              <h3 className="min-w-0 text-xl font-semibold text-zinc-100">{award.project.displayName}</h3>
            </div>
            <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-300">{award.achievement}</p>
            <a href={award.href} target="_blank" rel="noreferrer" className="project-link mt-4 text-teal-200">
              {award.linkLabel}
              <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
