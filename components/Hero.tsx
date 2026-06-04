/* eslint-disable @next/next/no-img-element */

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden px-6 py-16 sm:px-10 lg:px-12">
      <img
        src="/images/quantum-hero.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,5,5,0.94)_0%,rgba(5,5,5,0.76)_42%,rgba(5,5,5,0.38)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#050505] to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-sm font-medium text-teal-100 shadow-glow">
            @dorakingx
          </p>
          <h1 className="text-5xl font-semibold tracking-normal text-white sm:text-7xl lg:text-8xl">Doraking</h1>
          <p className="mt-5 text-2xl font-medium text-teal-100 sm:text-3xl">May the Quantum be with you.</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200 sm:text-xl">
            Quantum computing researcher, AI/Web3 builder, and creator of experimental software products.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://github.com/dorakingx"
              className="rounded-md bg-teal-300 px-5 py-3 text-center text-sm font-semibold text-zinc-950 transition hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              View GitHub
            </a>
            <a
              href="#projects"
              className="rounded-md border border-white/15 bg-white/[0.08] px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-teal-200/50 hover:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-white/15 bg-white/[0.08] px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-violet-200/50 hover:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-violet-200 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              Contact / Collaborate
            </a>
          </div>
        </div>

        <div className="glass-panel glow-border hidden rounded-lg p-6 lg:block">
          <dl className="grid gap-5">
            {[
              ["Research", "Quantum algorithms and simulation"],
              ["Build", "AI agents, Web3 apps, OSS prototypes"],
              ["Create", "Writing tools, games, music experiments"]
            ].map(([term, detail]) => (
              <div key={term} className="rounded-md border border-white/10 bg-black/20 p-5">
                <dt className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-200/80">{term}</dt>
                <dd className="mt-2 text-lg text-zinc-100">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
