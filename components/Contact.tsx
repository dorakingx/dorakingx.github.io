import type { Locale } from "@/data/translations";
import { translations } from "@/data/translations";
import SectionHeader from "@/components/SectionHeader";

type Props = {
  locale?: Locale;
};

export default function Contact({ locale = "en" }: Props) {
  const t = translations[locale].contact;

  return (
    <section id="contact" className="px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow={t.eyebrow} title={t.title} />
        <div className="glass-panel rounded-lg p-6 sm:p-8">
          <p className="text-center text-lg leading-8 text-zinc-200">{t.body}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            {t.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-md border border-white/15 bg-white/[0.06] px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-teal-200/50 hover:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-zinc-950"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
