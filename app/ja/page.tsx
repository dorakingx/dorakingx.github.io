import About from "@/components/About";
import Contact from "@/components/Contact";
import FeaturedProjects from "@/components/FeaturedProjects";
import GitHubSection from "@/components/GitHubSection";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function JaPage() {
  return (
    <main>
      <Hero locale="ja" />
      <About locale="ja" />
      <FeaturedProjects locale="ja" />
      <Skills locale="ja" />
      <GitHubSection locale="ja" />
      <Contact locale="ja" />
    </main>
  );
}
