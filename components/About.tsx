import type { Locale } from "@/data/translations";
import { translations } from "@/data/translations";
import SectionHeader from "@/components/SectionHeader";

type Props = {
  locale?: Locale;
};

export default function About({ locale = "en" }: Props) {
  const t = translations[locale].about;

  return (
    <section id="about" className="px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow={t.eyebrow} title={t.title} />
        <div className="glass-panel rounded-lg p-6 sm:p-8">
          <p className="text-lg leading-9 text-zinc-200">{t.body}</p>
        </div>
      </div>
    </section>
  );
}
