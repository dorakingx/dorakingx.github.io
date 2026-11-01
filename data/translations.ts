export type Locale = "en" | "ja";

export const translations = {
  en: {
    hero: {
      name: "Doraking",
      role: "Quantum & Blockchain Developer",
      description: "I turn research and experimental ideas into software for learning, creating, and exploring.",
      ctaProjects: "Explore projects",
      avatarAlt: "Doraking’s profile picture"
    },
    navigation: { about: "About", projects: "Projects", awards: "Awards", contact: "Contact", skip: "Skip to content" },
    projects: { title: "Selected Projects", description: "Experiments in quantum computing, AI, and creative software." },
    awards: {
      title: "Selected Awards",
      q11Emergency: {
        achievement: "1st Place at the IIIT Dharwad node in Qollab × IonQ Global Quantum Hackathon 2026",
        linkLabel: "View hackathon results"
      },
      qsimcity: {
        achievement: "Finalist in the WISER Education Challenge for the WISER Summer Program 2026 Industry Challenge",
        linkLabel: "View announcement"
      }
    },
    contact: {
      title: "Let’s connect.",
      body: "For collaborations, research, or a conversation about what’s next."
    }
  },
  ja: {
    hero: {
      name: "Doraking",
      role: "Quantum & Blockchain Developer",
      description: "研究と実験的なアイデアを、学び・創作・探索のためのソフトウェアにしています。",
      ctaProjects: "プロジェクトを見る",
      avatarAlt: "Dorakingのプロフィール画像"
    },
    navigation: { about: "About", projects: "Projects", awards: "Awards", contact: "Contact", skip: "本文へ移動" },
    projects: { title: "Selected Projects", description: "量子コンピューティング、AI、創作をめぐるソフトウェア。" },
    awards: {
      title: "Selected Awards",
      q11Emergency: {
        achievement: "Qollab × IonQ Global Quantum Hackathon 2026のIIIT Dharwad会場で第1位を受賞",
        linkLabel: "ハッカソンの結果を見る"
      },
      qsimcity: {
        achievement: "WISER Summer Program 2026 Industry ChallengeのWISER Education Challengeでファイナリストに選出",
        linkLabel: "発表を見る"
      }
    },
    contact: {
      title: "つながりましょう。",
      body: "コラボレーション、研究、次のアイデアについて。"
    }
  }
} as const;

export type Translations = (typeof translations)[Locale];
