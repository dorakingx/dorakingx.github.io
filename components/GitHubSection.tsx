import type { Locale } from "@/data/translations";
import { translations } from "@/data/translations";
import SectionHeader from "@/components/SectionHeader";

type Props = {
  locale?: Locale;
};

export default function GitHubSection({ locale = "en" }: Props) {
  const t = translations[locale].openSource;

  return (
    <section id="open-source" className="px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow={t.eyebrow} title={t.title} />
        <div className="glass-panel glow-border rounded-lg p-6 text-center sm:p-10">
          <p className="mx-auto max-w-3xl text-lg leading-9 text-zinc-200">{t.body}</p>
          <a
            href="https://github.com/dorakingx"
            className="mt-8 inline-flex rounded-md bg-teal-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-zinc-950"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
