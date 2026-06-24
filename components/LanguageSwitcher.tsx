"use client";

import type { Locale } from "@/data/translations";

type Props = {
  locale: Locale;
};

export default function LanguageSwitcher({ locale }: Props) {
  const handleSwitch = (newLocale: Locale) => {
    localStorage.setItem("portfolio-language", newLocale);
    const hash = window.location.hash;
    window.location.href = `/${newLocale}/${hash}`;
  };

  return (
    <nav
      aria-label="Language switcher"
      className="flex items-center gap-1 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 backdrop-blur-md"
    >
      <button
        onClick={() => handleSwitch("en")}
        aria-current={locale === "en" ? "true" : undefined}
        className={
          locale === "en"
            ? "rounded-full px-2 py-0.5 text-xs font-semibold text-teal-300 ring-1 ring-teal-300/50"
            : "rounded-full px-2 py-0.5 text-xs font-medium text-zinc-400 transition hover:text-white"
        }
      >
        EN
      </button>
      <span className="text-xs text-white/20" aria-hidden="true">
        |
      </span>
      <button
        onClick={() => handleSwitch("ja")}
        aria-current={locale === "ja" ? "true" : undefined}
        className={
          locale === "ja"
            ? "rounded-full px-2 py-0.5 text-xs font-semibold text-teal-300 ring-1 ring-teal-300/50"
            : "rounded-full px-2 py-0.5 text-xs font-medium text-zinc-400 transition hover:text-white"
        }
      >
        日本語
      </button>
    </nav>
  );
}
