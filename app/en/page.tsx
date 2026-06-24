import About from "@/components/About";
import Contact from "@/components/Contact";
import FeaturedProjects from "@/components/FeaturedProjects";
import GitHubSection from "@/components/GitHubSection";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function EnPage() {
  return (
    <main>
      <Hero locale="en" />
      <About locale="en" />
      <FeaturedProjects locale="en" />
      <Skills locale="en" />
      <GitHubSection locale="en" />
      <Contact locale="en" />
    </main>
  );
}
