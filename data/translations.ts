export type Locale = "en" | "ja";

export const translations = {
  en: {
    hero: {
      badge: "@dorakingx",
      name: "Doraking",
      tagline: "May the Quantum be with you",
      description:
        "Quantum computing researcher, AI/Web3 builder, and creator of experimental software products.",
      ctaGithub: "View GitHub",
      ctaProjects: "View Projects",
      ctaContact: "Contact / Collaborate",
      cards: [
        { term: "Research", detail: "Quantum computing and quantum algorithms" },
        { term: "Build", detail: "AI agents and blockchain applications" },
        { term: "Create", detail: "Open-source tools and experimental software" }
      ]
    },
    about: {
      eyebrow: "About",
      title: "Research depth with product speed",
      body: "Doraking works across quantum computing, AI agents, Web3 applications, creative tools, and open-source software. The work combines research-level technical knowledge with fast product prototyping, turning experimental ideas into usable software for learning, exploration, and collaboration."
    },
    projects: {
      eyebrow: "Featured Projects",
      title: "Selected Projects",
      description:
        "A curated selection of public repositories spanning AI writing, quantum education, quantum music, and game AI."
    },
    skills: {
      eyebrow: "Skills",
      title: "Quantum, AI, and Blockchain",
      description:
        "Research and product development across quantum computing, AI, and blockchain."
    },
    openSource: {
      eyebrow: "Open Source",
      title: "Experimental software in the open",
      body: "The GitHub profile contains experimental prototypes, hackathon projects, research explorations, and open-source software across quantum computing, AI systems, creative tools, and web applications.",
      cta: "View GitHub Profile"
    },
    contact: {
      eyebrow: "Contact",
      title: "Collaborate on ambitious experiments",
      body: "Open to collaborations, research opportunities, hackathons, OSS projects, and freelance work.",
      links: [
        { label: "Medium", href: "https://medium.com/@doraking" },
        { label: "Substack", href: "https://substack.com/@doraking" },
        { label: "X", href: "https://x.com/dorakingxyz" },
        { label: "Bluesky", href: "https://bsky.app/profile/doraking.bsky.social" },
        { label: "Reddit", href: "https://www.reddit.com/user/dorakingx" }
      ]
    }
  },
  ja: {
    hero: {
      badge: "@dorakingx",
      name: "Doraking",
      tagline: "量子と共にあらんことを",
      description:
        "量子コンピューティング研究者、AI/Web3ビルダー、実験的ソフトウェアプロダクトのクリエイター。",
      ctaGithub: "GitHubを見る",
      ctaProjects: "プロジェクトを見る",
      ctaContact: "コンタクト / コラボ",
      cards: [
        { term: "研究", detail: "量子コンピューティングと量子アルゴリズム" },
        { term: "開発", detail: "AIエージェントとブロックチェーンアプリケーション" },
        { term: "創作", detail: "オープンソースツールと実験的ソフトウェア" }
      ]
    },
    about: {
      eyebrow: "About",
      title: "研究の深さとプロダクトの速度",
      body: "Dorakingは量子コンピューティング、AIエージェント、Web3アプリケーション、クリエイティブツール、オープンソースソフトウェアにわたって活動しています。研究レベルの技術知識と高速なプロダクトプロトタイピングを組み合わせ、実験的なアイデアを学習・探索・コラボレーションのための実用的なソフトウェアに変えています。"
    },
    projects: {
      eyebrow: "注目プロジェクト",
      title: "選定プロジェクト",
      description:
        "AI執筆、量子教育、量子音楽、ゲームAIにわたる、公開リポジトリから厳選したプロジェクト。"
    },
    skills: {
      eyebrow: "スキル",
      title: "量子、AI、ブロックチェーン",
      description:
        "量子コンピューティング、AI、ブロックチェーンにわたる研究とプロダクト開発。"
    },
    openSource: {
      eyebrow: "オープンソース",
      title: "公開の場での実験的ソフトウェア",
      body: "GitHubプロフィールには、量子コンピューティング、AIシステム、クリエイティブツール、Webアプリケーションにわたる実験的プロトタイプ、ハッカソンプロジェクト、研究探索、オープンソースソフトウェアが含まれています。",
      cta: "GitHubプロフィールを見る"
    },
    contact: {
      eyebrow: "コンタクト",
      title: "野心的な実験でコラボレーション",
      body: "コラボレーション、研究機会、ハッカソン、OSSプロジェクト、フリーランスの仕事を歓迎しています。",
      links: [
        { label: "Medium", href: "https://medium.com/@doraking" },
        { label: "Substack", href: "https://substack.com/@doraking" },
        { label: "X", href: "https://x.com/dorakingxyz" },
        { label: "Bluesky", href: "https://bsky.app/profile/doraking.bsky.social" },
        { label: "Reddit", href: "https://www.reddit.com/user/dorakingx" }
      ]
    }
  }
} as const;

export type Translations = (typeof translations)[Locale];
