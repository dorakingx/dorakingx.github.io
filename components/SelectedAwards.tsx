import { translations, type Locale } from "@/data/translations";

export default function SelectedAwards({ locale = "en" }: { locale?: Locale }) {
  const t = translations[locale].awards;
  return (
    <section id="awards" aria-labelledby="awards-title" className="page-width section-space border-t border-white/10">
      <div className="flex flex-wrap items-center justify-between gap-5">
        <h2 id="awards-title" className="section-title">{t.title}</h2>
        <p className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400">{t.status}</p>
      </div>
    </section>
  );
}
