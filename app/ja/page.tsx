import Contact from "@/components/Contact";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import SelectedAwards from "@/components/SelectedAwards";

export default function Page() {
  return (
    <main id="main">
      <Hero locale="ja" />
      <FeaturedProjects locale="ja" />
      <SelectedAwards locale="ja" />
      <Contact locale="ja" />
    </main>
  );
}
