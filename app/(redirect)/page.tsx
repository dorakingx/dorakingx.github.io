"use client";

import { useEffect } from "react";

export default function RootPage() {
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-language");
    let locale: string;
    if (saved === "en" || saved === "ja") {
      locale = saved;
    } else {
      locale = navigator.language.startsWith("ja") ? "ja" : "en";
      localStorage.setItem("portfolio-language", locale);
    }
    window.location.replace(`/${locale}/`);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        fontFamily: "sans-serif",
        color: "#f4f4f5",
        background: "#050505"
      }}
    >
      <p style={{ color: "#5eead4" }}>Redirecting…</p>
      <p style={{ fontSize: "0.875rem", color: "#a1a1aa" }}>
        <a href="/en/" style={{ color: "#5eead4" }}>
          English
        </a>
        {" · "}
        <a href="/ja/" style={{ color: "#5eead4" }}>
          日本語
        </a>
      </p>
    </div>
  );
}
