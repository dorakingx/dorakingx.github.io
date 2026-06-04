import SectionHeader from "@/components/SectionHeader";

export default function About() {
  return (
    <section id="about" className="px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="About" title="Research depth with product speed" />
        <div className="glass-panel rounded-lg p-6 sm:p-8">
          <p className="text-lg leading-9 text-zinc-200">
            Doraking works across quantum computing, AI agents, Web3 applications, creative tools, and open-source
            software. The work combines research-level technical knowledge with fast product prototyping, turning
            experimental ideas into usable software for learning, exploration, and collaboration.
          </p>
        </div>
      </div>
    </section>
  );
}
