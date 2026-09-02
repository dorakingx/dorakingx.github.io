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
    name: "AI",
    nameJa: "AI",
    skills: [
      "LLMs",
      "AI agents",
      "Prompt engineering",
      "Evaluation",
      "AI applications"
    ]
  },
  {
    name: "Blockchain",
    nameJa: "ブロックチェーン",
    skills: [
      "Web3",
      "Solana",
      "Smart contracts",
      "dApps",
      "Cryptography"
    ]
  }
];
