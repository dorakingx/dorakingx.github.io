import type { SelectedRepositoryName } from "@/data/selected-repositories";

export type ProjectCuration = {
  displayName: string;
  projectType: "Library" | "App" | "Agent";
  description: string;
  descriptionJa: string;
  tags: readonly string[];
  tagsJa?: readonly string[];
  faviconUrl: string;
  liveUrlOverride?: string;
  showGitHubRepository?: boolean;
};

/**
 * Human-authored portfolio content. GitHub metadata synchronization never
 * overwrites this file.
 */
export const projectCuration: Record<SelectedRepositoryName, ProjectCuration> = {
  "q11-emergency": {
    displayName: "Q11 Emergency",
    projectType: "App",
    description:
      "A fire-dispatch game that teaches quantum error correction through a toy city, hidden errors, and rescue missions.",
    descriptionJa:
      "おもちゃの街で隠れたエラーを探り、消防隊を出動させながら量子誤り訂正を学ぶゲーム。",
    tags: ["Quantum Computing", "Education", "Qiskit", "React"],
    faviconUrl: "/project-icons/q11-emergency.png",
    liveUrlOverride: "https://q11-emergency.vercel.app"
  },
  novelpilot: {
    displayName: "NovelPilot",
    projectType: "Agent",
    description:
      "AI-powered creative writing and novel development tool for generating, organizing, and improving stories.",
    descriptionJa:
      "ストーリーの生成・整理・改善のためのAI搭載クリエイティブライティング・小説開発ツール。",
    tags: ["AI", "Writing Tool", "Creative Tech", "Web App"],
    faviconUrl: "/project-icons/novelpilot.png",
    liveUrlOverride: "https://novelpilot.vercel.app"
  },
  qisquiz: {
    displayName: "Qisquiz",
    projectType: "App",
    description:
      "Quantum computing quiz and exam preparation app designed to help learners practice quantum computing concepts.",
    descriptionJa:
      "学習者が量子コンピューティングの概念を練習するための量子コンピューティングクイズ・試験準備アプリ。",
    tags: ["Quantum Computing", "Education", "Quiz App", "Qiskit"],
    faviconUrl:
      "https://github.com/user-attachments/assets/97c97586-286a-4577-8d54-1bb91f9ebb61",
    liveUrlOverride: "https://qisquiz.vercel.app"
  },
  musiq: {
    displayName: "Musiq",
    projectType: "App",
    description:
      "Experimental project exploring the intersection of quantum computing, OpenQASM, and music.",
    descriptionJa:
      "量子コンピューティング、OpenQASM、音楽の交差点を探求する実験的プロジェクト。",
    tags: ["Quantum Music", "OpenQASM", "Creative Coding", "Quantum Computing"],
    faviconUrl: "https://github.com/dorakingx/musiq/raw/main/public/musiq_favicon.png",
    liveUrlOverride: "https://musiquantum.vercel.app/"
  },
  AlphaQuoridor: {
    displayName: "AlphaQuoridor",
    projectType: "Agent",
    description:
      "AlphaZero-style AI project for the board game Quoridor, combining game AI, search, and reinforcement-learning-inspired methods.",
    descriptionJa:
      "ボードゲーム「コリドー」のためのAlphaZeroスタイルAIプロジェクト。ゲームAI・探索・強化学習に着想を得た手法を組み合わせています。",
    tags: ["Game AI", "AlphaZero", "Python", "Reinforcement Learning"],
    faviconUrl: "https://github.com/dorakingx/AlphaQuoridor/raw/main/images/quoridor.png"
  },
  QSimCity: {
    displayName: "QSimCity",
    projectType: "App",
    description:
      "An explorable 3D quantum city that turns real computation traces into interactive educational visualizations.",
    descriptionJa:
      "実際の量子計算トレースを、探索可能な3D都市として可視化する教育・研究プロジェクト。",
    tags: ["Quantum Computing", "3D Visualization", "OpenQASM", "Education"],
    faviconUrl:
      "https://github.com/dorakingx/QSimCity/raw/main/apps/web/public/icons/icon-192.png",
    liveUrlOverride: "https://qsimcity.vercel.app"
  }
};
