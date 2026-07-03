export type Project = {
  name: string;
  repositoryName?: string;
  description: string;
  descriptionJa: string;
  tags: string[];
  liveUrl?: string;
  faviconUrl: string;
  websiteOnly?: boolean;
};

export const projects: Project[] = [
  {
    name: "NovelPilot",
    repositoryName: "novelpilot",
    description:
      "AI-powered creative writing and novel development tool for generating, organizing, and improving stories.",
    descriptionJa:
      "ストーリーの生成・整理・改善のためのAI搭載クリエイティブライティング・小説開発ツール。",
    tags: ["AI", "Writing Tool", "Creative Tech", "Web App"],
    liveUrl: "https://novelpilot.vercel.app",
    faviconUrl: "https://github.com/dorakingx/novelpilot/raw/main/app/favicon.ico"
  },
  {
    name: "Qisquiz",
    repositoryName: "qisquiz",
    description:
      "Quantum computing quiz and exam preparation app designed to help learners practice quantum computing concepts.",
    descriptionJa:
      "学習者が量子コンピューティングの概念を練習するための量子コンピューティングクイズ・試験準備アプリ。",
    tags: ["Quantum Computing", "Education", "Quiz App", "Qiskit"],
    liveUrl: "https://qisquiz.vercel.app",
    faviconUrl: "https://github.com/user-attachments/assets/97c97586-286a-4577-8d54-1bb91f9ebb61"
  },
  {
    name: "musiq",
    repositoryName: "musiq",
    description:
      "Experimental project exploring the intersection of quantum computing, OpenQASM, and music.",
    descriptionJa:
      "量子コンピューティング、OpenQASM、音楽の交差点を探求する実験的プロジェクト。",
    tags: ["Quantum Music", "OpenQASM", "Creative Coding", "Quantum Computing"],
    liveUrl: "https://musiquantum.vercel.app/",
    faviconUrl: "https://github.com/dorakingx/musiq/raw/main/public/musiq_favicon.png"
  },
  {
    name: "AlphaQuoridor",
    repositoryName: "AlphaQuoridor",
    description:
      "AlphaZero-style AI project for the board game Quoridor, combining game AI, search, and reinforcement-learning-inspired methods.",
    descriptionJa:
      "ボードゲーム「コリドー」のためのAlphaZeroスタイルAIプロジェクト。ゲームAI・探索・強化学習に着想を得た手法を組み合わせています。",
    tags: ["Game AI", "AlphaZero", "Python", "Reinforcement Learning"],
    faviconUrl: "https://github.com/dorakingx/AlphaQuoridor/raw/main/images/quoridor.png"
  },
  {
    name: "Alice in Quantumland",
    description:
      "A quantum-focused website and community project designed to make quantum ideas more approachable and engaging.",
    descriptionJa:
      "量子のアイデアをより身近で魅力的に伝えることを目指した、量子分野のWebサイト兼コミュニティプロジェクト。",
    tags: ["Quantum Computing", "Community", "Education", "Web Platform"],
    liveUrl: "https://aliceinquantum.land",
    faviconUrl: "/project-icons/alice-in-quantumland.png",
    websiteOnly: true
  }
];
