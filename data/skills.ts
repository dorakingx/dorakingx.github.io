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
    name: "AI / Agents",
    nameJa: "AI / エージェント",
    skills: ["LLMs", "Gemini API", "AI agents", "Prompt engineering", "Evaluation"]
  },
  {
    name: "Web Development",
    nameJa: "Web開発",
    skills: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Django"]
  },
  {
    name: "Creative Software",
    nameJa: "クリエイティブソフトウェア",
    skills: ["AI writing tools", "Game AI", "Music experiments", "Interactive applications"]
  },
  {
    name: "Research / Engineering",
    nameJa: "研究 / エンジニアリング",
    skills: ["Python", "Numerical simulation", "Scientific computing", "GitHub", "OSS development"]
  }
];
