import Contact from "@/components/Contact";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import SelectedAwards from "@/components/SelectedAwards";

export default function Page() {
  return (
    <main id="main">
      <Hero locale="en" />
      <FeaturedProjects locale="en" />
      <SelectedAwards locale="en" />
      <Contact locale="en" />
    </main>
  );
}
