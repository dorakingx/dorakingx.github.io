/* eslint-disable @next/next/no-img-element */
import { translations, type Locale } from "@/data/translations";
import { socialLinks } from "@/data/social-links";

export default function Contact({ locale = "en" }: { locale?: Locale }) {
  const t = translations[locale].contact;
  return (
    <section id="contact" aria-labelledby="contact-title" className="page-width section-space border-t border-white/10">
      <h2 id="contact-title" className="section-title">{t.title}</h2>
      <p className="mt-3 text-base leading-7 text-zinc-400">{t.body}</p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {socialLinks.map((link) => (
          <a key={link.name} href={link.href} target="_blank" rel="noreferrer" className="social-link flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-4 transition hover:border-white/30 hover:bg-white/[0.06]" aria-label={`${link.name}: ${link.handle}`}>
            <span className={`social-icon social-icon-${link.icon} flex h-10 w-10 shrink-0 items-center justify-center rounded-lg`}>
              <img src={`/social-icons/${link.icon}.svg`} alt="" aria-hidden="true" width={22} height={22} className="h-[22px] w-[22px] invert" />
            </span>
            <span className="font-medium text-zinc-100">{link.name}</span>
            <span aria-hidden="true" className="ml-auto text-zinc-500">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
