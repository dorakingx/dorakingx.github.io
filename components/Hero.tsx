/* eslint-disable @next/next/no-img-element */
import type { Locale } from "@/data/translations";
import { translations } from "@/data/translations";

export default function Hero({ locale = "en" }: { locale?: Locale }) {
  const t = translations[locale].hero;
  return (
    <section id="about" className="page-width py-12 sm:py-16">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-5 gap-y-5 sm:gap-x-12 sm:gap-y-6">
        <h1 className="text-5xl font-semibold tracking-[-0.055em] text-white sm:text-7xl lg:text-8xl">{t.name}</h1>
        <img src="/images/doraking.webp" alt={t.avatarAlt} width={208} height={208}
          fetchPriority="high" className="h-16 w-16 rounded-2xl object-cover ring-1 ring-white/15 sm:row-span-2 sm:h-40 sm:w-40 sm:rounded-3xl lg:h-52 lg:w-52" />
        <div className="col-span-2 max-w-2xl sm:col-span-1 sm:col-start-1 sm:row-start-2">
          <p className="text-xl font-medium leading-relaxed text-zinc-100 sm:text-2xl">{t.role}</p>
          <p className="mt-4 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">{t.description}</p>
          <a href="#projects" className="primary-link mt-7">
            {t.ctaProjects} <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
