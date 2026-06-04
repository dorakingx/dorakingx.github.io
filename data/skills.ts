export type SkillGroup = {
  name: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Quantum Computing",
    skills: ["Qiskit", "OpenQASM", "Quantum algorithms", "Quantum error correction", "Quantum simulation"]
  },
  {
    name: "AI / Agents",
    skills: ["LLMs", "Gemini API", "AI agents", "Prompt engineering", "Evaluation"]
  },
  {
    name: "Web Development",
    skills: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Django"]
  },
  {
    name: "Creative Software",
    skills: ["AI writing tools", "Game AI", "Music experiments", "Interactive applications"]
  },
  {
    name: "Research / Engineering",
    skills: ["Python", "Numerical simulation", "Scientific computing", "GitHub", "OSS development"]
  }
];
