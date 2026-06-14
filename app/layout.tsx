import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dorakingx.github.io";
const title = "Doraking | Quantum, AI & Creative Software Portfolio";
const description = "Portfolio of Doraking, a quantum computing researcher and AI/Web3 software builder.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
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
    images: [
      {
        url: "/images/quantum-hero.png",
        width: 1536,
        height: 864,
        alt: "Abstract theoretical quantum circuit diagram"
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

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
