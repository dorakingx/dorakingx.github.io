import type { Metadata, Viewport } from "next";
import "../globals.css";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const siteUrl = "https://dorakingx.github.io";
const title = "Technical Portfolio";
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
        url: "/images/quantum-hero.png",
        width: 1536,
        height: 864,
        alt: "Theoretical quantum circuit diagram with H, X, phase, CNOT, and measurement gates"
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

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <header className="fixed right-4 top-4 z-50">
          <LanguageSwitcher locale="en" />
        </header>
        {children}
      </body>
    </html>
  );
}
