export type Locale = "en" | "ja";

export const translations = {
  en: {
    hero: {
      badge: "@dorakingx",
      name: "Doraking",
      tagline: "May the Quantum be with you.",
      description:
        "Quantum computing researcher, AI/Web3 builder, and creator of experimental software products.",
      ctaGithub: "View GitHub",
      ctaProjects: "View Projects",
      ctaContact: "Contact / Collaborate",
      cards: [
        { term: "Research", detail: "Quantum algorithms and simulation" },
        { term: "Build", detail: "AI agents, Web3 apps, OSS prototypes" },
        { term: "Create", detail: "Writing tools, games, music experiments" }
      ]
    },
    about: {
      eyebrow: "About",
      title: "Research depth with product speed",
      body: "Doraking works across quantum computing, AI agents, Web3 applications, creative tools, and open-source software. The work combines research-level technical knowledge with fast product prototyping, turning experimental ideas into usable software for learning, exploration, and collaboration."
    },
    projects: {
      eyebrow: "Featured Projects",
      title: "Four focused experiments",
      description:
        "A compact selection across AI writing, quantum education, quantum music, and game AI."
    },
    skills: {
      eyebrow: "Skills",
      title: "Research, engineering, and creative systems",
      description:
        "Technical range for prototypes that need both scientific rigor and practical product instincts."
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
        { label: "X/Twitter", href: "https://x.com/doraking_en" }
      ]
    }
  },
  ja: {
    hero: {
      badge: "@dorakingx",
      name: "Doraking",
      tagline: "量子とともにあらんことを。",
      description:
        "量子コンピューティング研究者、AI/Web3ビルダー、実験的ソフトウェアプロダクトのクリエイター。",
      ctaGithub: "GitHubを見る",
      ctaProjects: "プロジェクトを見る",
      ctaContact: "コンタクト / コラボ",
      cards: [
        { term: "研究", detail: "量子アルゴリズムとシミュレーション" },
        { term: "開発", detail: "AIエージェント、Web3アプリ、OSSプロトタイプ" },
        { term: "創作", detail: "ライティングツール、ゲーム、音楽実験" }
      ]
    },
    about: {
      eyebrow: "About",
      title: "研究の深さとプロダクトの速度",
      body: "Dorakingは量子コンピューティング、AIエージェント、Web3アプリケーション、クリエイティブツール、オープンソースソフトウェアにわたって活動しています。研究レベルの技術知識と高速なプロダクトプロトタイピングを組み合わせ、実験的なアイデアを学習・探索・コラボレーションのための実用的なソフトウェアに変えています。"
    },
    projects: {
      eyebrow: "注目プロジェクト",
      title: "4つの集中した実験",
      description: "AI執筆、量子教育、量子音楽、ゲームAIにわたるコンパクトな選集。"
    },
    skills: {
      eyebrow: "スキル",
      title: "研究・エンジニアリング・クリエイティブシステム",
      description:
        "科学的厳密さと実践的なプロダクト感覚の両方を必要とするプロトタイプのための技術的な幅。"
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
        { label: "X/Twitter", href: "https://x.com/doraking_ja" }
      ]
    }
  }
} as const;

export type Translations = (typeof translations)[Locale];
