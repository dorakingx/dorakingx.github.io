import LanguageSwitcher from "@/components/LanguageSwitcher";
import { translations, type Locale } from "@/data/translations";

export default function SiteHeader({ locale }: { locale: Locale }) {
  const t = translations[locale].navigation;
  return (
    <header className="page-width">
      <a href="#main" className="skip-link">{t.skip}</a>
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-b border-white/10 py-5">
        <nav aria-label={locale === "ja" ? "ページ内ナビゲーション" : "Main navigation"} className="flex items-center gap-5 text-sm text-zinc-400 sm:gap-7">
          <a className="transition hover:text-white" href="#projects">{t.projects}</a>
          <a className="transition hover:text-white" href="#awards">{t.awards}</a>
          <a className="transition hover:text-white" href="#contact">{t.contact}</a>
        </nav>
        <LanguageSwitcher locale={locale} />
      </div>
    </header>
  );
}
