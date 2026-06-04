export type Project = {
  name: string;
  repositoryName: string;
  description: string;
  tags: string[];
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    name: "NovelPilot",
    repositoryName: "novelpilot",
    description:
      "AI-powered creative writing and novel development tool for generating, organizing, and improving stories.",
    tags: ["AI", "Writing Tool", "Creative Tech", "Web App"]
  },
  {
    name: "Qisquiz",
    repositoryName: "qisquiz",
    description:
      "Quantum computing quiz and exam preparation app designed to help learners practice quantum computing concepts.",
    tags: ["Quantum Computing", "Education", "Quiz App", "Qiskit"]
  },
  {
    name: "musiq",
    repositoryName: "musiq",
    description:
      "Experimental project exploring the intersection of quantum computing, OpenQASM, and music.",
    tags: ["Quantum Music", "OpenQASM", "Creative Coding", "Quantum Computing"]
  },
  {
    name: "AlphaQuoridor",
    repositoryName: "AlphaQuoridor",
    description:
      "AlphaZero-style AI project for the board game Quoridor, combining game AI, search, and reinforcement-learning-inspired methods.",
    tags: ["Game AI", "AlphaZero", "Python", "Reinforcement Learning"]
  }
];
