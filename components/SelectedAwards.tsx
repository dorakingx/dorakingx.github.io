import { translations, type Locale } from "@/data/translations";

export default function SelectedAwards({ locale = "en" }: { locale?: Locale }) {
  const t = translations[locale].awards;
  return (
    <section id="awards" aria-labelledby="awards-title" className="page-width section-space border-t border-white/10">
      <h2 id="awards-title" className="section-title">{t.title}</h2>
      <article className="mt-8 rounded-xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-zinc-100">{t.project}</h3>
        <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-300">{t.achievement}</p>
        <a href="https://qollab.xyz/explore/hackathon-2026/iiit-dharwad" target="_blank" rel="noreferrer" className="project-link mt-4 text-teal-200">
          {t.linkLabel}
          <span aria-hidden="true">↗</span>
        </a>
      </article>
    </section>
  );
}
