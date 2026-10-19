import type { SelectedRepositoryName } from "@/data/selected-repositories";

export type ProjectCuration = {
  displayName: string;
  projectType: "Library" | "App" | "Agent";
  description: string;
  descriptionJa: string;
  tags: readonly string[];
  tagsJa?: readonly string[];
  faviconUrl: string;
  previewUrl: string;
  previewAlt: string;
  previewAltJa: string;
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
    previewUrl: "/images/projects/q11-emergency.webp",
    previewAlt: "Q11 Emergency’s city map with six quantum error-correction districts.",
    previewAltJa: "量子誤り訂正を学ぶ6つの地区が並ぶQ11 Emergencyの街。",
    projectType: "App",
    description:
      "Learn quantum error correction by reading alarms and dispatching fire crews through a toy city.",
    descriptionJa:
      "おもちゃの街で隠れたエラーを探り、消防隊を出動させながら量子誤り訂正を学ぶゲーム。",
    tags: ["Quantum Education", "Qiskit", "React"],
    faviconUrl: "/project-icons/q11-emergency.png",
    liveUrlOverride: "https://q11-emergency.vercel.app"
  },
  novelpilot: {
    displayName: "NovelPilot",
    previewUrl: "/images/projects/novelpilot.webp",
    previewAlt: "NovelPilot’s story planning workspace with characters, worldbuilding, and plot.",
    previewAltJa: "登場人物・世界観・プロットを整理するNovelPilotの執筆画面。",
    projectType: "Agent",
    description:
      "An AI writing room that turns a story idea into characters, a plot, and a complete manuscript.",
    descriptionJa:
      "物語のアイデアから、登場人物・プロット・原稿をつくるAI執筆エージェント。",
    tags: ["AI Agents", "Creative Writing", "TypeScript"],
    faviconUrl: "/project-icons/novelpilot.png",
    liveUrlOverride: "https://novelpilot.vercel.app"
  },
  qisquiz: {
    displayName: "Qisquiz",
    previewUrl: "/images/projects/qisquiz.webp",
    previewAlt: "Qisquiz’s quantum computing study app with practice and mock exams.",
    previewAltJa: "分野別の練習と模擬試験を選べるQisquizの学習画面。",
    projectType: "App",
    description:
      "Practice quantum computing and Qiskit with topic quizzes, mock exams, and progress tracking.",
    descriptionJa:
      "分野別クイズ・模擬試験・学習記録で、量子コンピューティングとQiskitを学ぶアプリ。",
    tags: ["Quantum Education", "Qiskit", "Next.js"],
    faviconUrl:
      "https://github.com/user-attachments/assets/97c97586-286a-4577-8d54-1bb91f9ebb61",
    liveUrlOverride: "https://qisquiz.vercel.app"
  },
  musiq: {
    displayName: "Musiq",
    previewUrl: "/images/projects/musiq.webp",
    previewAlt: "Musiq’s visual quantum circuit editor and audio workspace.",
    previewAltJa: "量子回路を組み立て、音に変えるMusiqの操作画面。",
    projectType: "App",
    description:
      "Compose quantum circuits and hear their results as sound, with waveform and spectrum previews.",
    descriptionJa:
      "量子回路を組み立てて音に変換し、波形とスペクトルで結果を探る音楽ツール。",
    tags: ["Quantum Music", "OpenQASM", "Python"],
    faviconUrl: "https://github.com/dorakingx/musiq/raw/main/public/musiq_favicon.png",
    liveUrlOverride: "https://musiquantum.vercel.app/"
  },
  AlphaQuoridor: {
    displayName: "AlphaQuoridor",
    previewUrl: "/images/projects/alphaquoridor.webp",
    previewAlt: "An AlphaQuoridor game showing player positions and placed walls.",
    previewAltJa: "駒の位置と壁の配置を示すAlphaQuoridorの対局画面。",
    projectType: "Agent",
    description:
      "An AlphaZero-inspired game AI for navigating and placing walls in Quoridor.",
    descriptionJa:
      "ボードゲーム「コリドー」の移動と壁の配置を考える、AlphaZeroに着想を得たAI。",
    tags: ["Game AI", "AlphaZero", "Python"],
    faviconUrl: "https://github.com/dorakingx/AlphaQuoridor/raw/main/images/quoridor.png"
  },
  QSimCity: {
    displayName: "QSimCity",
    previewUrl: "/images/projects/qsimcity.webp",
    previewAlt: "QSimCity’s explorable 3D city visualizing a quantum computation.",
    previewAltJa: "量子計算を可視化するQSimCityの探索可能な3D都市。",
    projectType: "App",
    description:
      "An explorable 3D quantum city that turns real computation traces into interactive educational visualizations.",
    descriptionJa:
      "実際の量子計算トレースを、探索可能な3D都市として可視化する教育・研究プロジェクト。",
    tags: ["Quantum Computing", "3D Visualization", "OpenQASM"],
    faviconUrl:
      "https://github.com/dorakingx/QSimCity/raw/main/apps/web/public/icons/icon-192.png",
    liveUrlOverride: "https://qsimcity.vercel.app"
  }
};
