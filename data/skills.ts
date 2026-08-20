export type SkillGroup = {
  name: string;
  nameJa: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Quantum Computing",
    nameJa: "量子コンピューティング",
    skills: ["Qiskit", "OpenQASM", "Quantum algorithms", "Quantum error correction", "Quantum simulation"]
  },
  {
    name: "AI & Creative Software",
    nameJa: "AI・クリエイティブソフトウェア",
    skills: [
      "LLMs",
      "Gemini API",
      "AI agents",
      "Prompt engineering",
      "Evaluation",
      "AI writing tools",
      "Game AI",
      "Music experiments",
      "Interactive applications"
    ]
  },
  {
    name: "Engineering",
    nameJa: "エンジニアリング",
    skills: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Django",
      "Python",
      "Numerical simulation",
      "Scientific computing",
      "GitHub",
      "OSS development"
    ]
  }
];
