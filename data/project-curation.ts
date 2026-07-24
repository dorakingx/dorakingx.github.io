import type { SelectedRepositoryName } from "@/data/selected-repositories";

export type ProjectCuration = {
  displayName: string;
  description: string;
  descriptionJa: string;
  tags: readonly string[];
  tagsJa?: readonly string[];
  faviconUrl: string;
  liveUrlOverride?: string;
};

/**
 * Human-authored portfolio content. GitHub metadata synchronization never
 * overwrites this file.
 */
export const projectCuration: Record<SelectedRepositoryName, ProjectCuration> = {
  aiterval: {
    displayName: "AIterval",
    description:
      "A local-first Chrome extension that turns AI waiting time into short English listening practice.",
    descriptionJa:
      "AIの待ち時間を短い英語リスニング学習に変える、ローカルファーストのChrome拡張機能。",
    tags: ["TypeScript", "React", "Manifest V3", "Web Speech API"],
    faviconUrl: "/project-icons/aiterval.svg",
    liveUrlOverride: "https://aiterval-build-week.vercel.app/demo/judge"
  },
  novelpilot: {
    displayName: "NovelPilot",
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
    displayName: "musiq",
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
    description:
      "AlphaZero-style AI project for the board game Quoridor, combining game AI, search, and reinforcement-learning-inspired methods.",
    descriptionJa:
      "ボードゲーム「コリドー」のためのAlphaZeroスタイルAIプロジェクト。ゲームAI・探索・強化学習に着想を得た手法を組み合わせています。",
    tags: ["Game AI", "AlphaZero", "Python", "Reinforcement Learning"],
    faviconUrl: "https://github.com/dorakingx/AlphaQuoridor/raw/main/images/quoridor.png"
  }
};
