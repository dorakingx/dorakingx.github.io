import SectionHeader from "@/components/SectionHeader";

const links = [
  { label: "GitHub", href: "https://github.com/dorakingx" },
  { label: "X/Twitter", href: "#" },
  { label: "Email", href: "mailto:hello@example.com" }
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Contact" title="Collaborate on ambitious experiments" />
        <div className="glass-panel rounded-lg p-6 sm:p-8">
          <p className="text-center text-lg leading-8 text-zinc-200">
            Open to collaborations, research opportunities, hackathons, OSS projects, and freelance work.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-md border border-white/15 bg-white/[0.06] px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-teal-200/50 hover:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-zinc-950"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
