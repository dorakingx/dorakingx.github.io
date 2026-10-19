import type { Metadata, Viewport } from "next";
import "../globals.css";
import SiteHeader from "@/components/SiteHeader";

const siteUrl = "https://dorakingx.github.io";
const title = "Doraking — Quantum & AI Portfolio";
const description =
  "Portfolio of Doraking, a quantum computing researcher and AI/Web3 software builder.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/en/",
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
    url: `${siteUrl}/en/`,
    images: [
      {
        url: "/images/doraking.webp",
        width: 416,
        height: 416,
        alt: "Doraking’s profile picture"
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

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <SiteHeader locale="en" />
        {children}
      </body>
    </html>
  );
}
