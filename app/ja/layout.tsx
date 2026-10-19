import type { Metadata, Viewport } from "next";
import "../globals.css";
import SiteHeader from "@/components/SiteHeader";

const siteUrl = "https://dorakingx.github.io";
const title = "Doraking — Quantum & Blockchain Developer";
const description =
  "Quantum & Blockchain Developer、Dorakingのポートフォリオ。";

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
        url: "/images/doraking.webp",
        width: 416,
        height: 416,
        alt: "Dorakingのプロフィール画像"
      }
    ]
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/images/doraking.webp"]
  }
};

export const viewport: Viewport = {
  themeColor: "#0c100f",
  colorScheme: "dark"
};

export default function JaLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="font-sans antialiased">
        <SiteHeader locale="ja" />
        {children}
      </body>
    </html>
  );
}
