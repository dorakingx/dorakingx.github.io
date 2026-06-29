import type { Metadata, Viewport } from "next";
import "../globals.css";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const siteUrl = "https://dorakingx.github.io";
const title = "Technical Portfolio";
const description =
  "Dorakingのポートフォリオ。量子コンピューティング研究者、AI/Web3ビルダー。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/ja/",
    languages: {
      en: `${siteUrl}/en/`,
      ja: `${siteUrl}/ja/`,
      "x-default": `${siteUrl}/en/`
    }
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.ico"
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: `${siteUrl}/ja/`,
    images: [
      {
        url: "/images/quantum-hero.png",
        width: 1536,
        height: 864,
        alt: "H、X、位相、CNOT、測定ゲートを持つ理論的な量子回路図"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/quantum-hero.png"]
  }
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark"
};

export default function JaLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="font-sans antialiased">
        <header className="fixed right-4 top-4 z-50">
          <LanguageSwitcher locale="ja" />
        </header>
        {children}
      </body>
    </html>
  );
}
