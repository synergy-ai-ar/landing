import Image from "next/image";

const members = [
  {
    name: "Andrea Kuhk",
    role: "CEO",
    image: "/members/andrea-placeholder.svg",
    bio: "Andrea leads Synergy AI's strategic vision and partnerships, focused on turning AI into measurable business growth.",
  },
  {
    name: "Daniel Seidler",
    role: "CTO",
    image: "/members/daniel-placeholder.svg",
    bio: "Daniel drives the technical architecture, ensuring scalable, secure and reliable AI systems for real-world adoption.",
  },
  {
    name: "Tomas Pilipsky",
    role: "CMO",
    image: "/members/tomas-placeholder.svg",
    bio: "Tomas leads market positioning and go-to-market execution, connecting product capabilities with customer outcomes.",
  },
];

const highlights = [
  "AI workflows aligned to business objectives",
  "Fast implementation with enterprise-grade quality",
  "Clear performance metrics and continuous optimization",
];

export default function Home() {
  return (
    <div className="hero-grid min-h-screen bg-[radial-gradient(circle_at_15%_15%,rgba(242,180,63,0.2),transparent_38%),radial-gradient(circle_at_90%_10%,rgba(15,122,108,0.24),transparent_38%)]">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-8 md:px-10 md:py-12">
        <header className="fade-up flex flex-wrap items-center justify-between gap-4">
          <div className="rounded-full border border-[color:var(--brand)] bg-white/90 px-4 py-2 text-sm font-semibold tracking-wide text-[color:var(--brand-strong)]">
            Synergy AI
          </div>
          <a
            href="#contact"
            className="rounded-full bg-[color:var(--foreground)] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[color:var(--brand-strong)]"
          >
            Book a Strategy Call
          </a>
        </header>

        <section className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <p className="fade-up text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-strong)]">
              Intelligent Growth Infrastructure
            </p>
            <h1 className="fade-up delay-1 text-4xl leading-tight font-extrabold text-[color:var(--foreground)] md:text-6xl">
              Turn AI Into Revenue, Not Just Experiments.
            </h1>
            <p className="fade-up delay-2 max-w-xl text-lg leading-relaxed text-[color:var(--muted)]">
              Synergy AI designs and implements practical AI systems that
              connect teams, decisions and execution. We help companies move
              from disconnected tools to a unified growth engine.
            </p>
            <div className="fade-up delay-3 flex flex-wrap gap-3">
              <a
                href="#solution"
                className="rounded-full bg-[color:var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--brand-strong)]"
              >
                Explore Our Solution
              </a>
              <a
                href="#team"
                className="rounded-full border border-[color:var(--foreground)] bg-white/70 px-6 py-3 text-sm font-semibold text-[color:var(--foreground)] transition hover:bg-white"
              >
                Meet the Team
              </a>
            </div>
          </div>

          <div className="fade-up delay-2 rounded-3xl border border-[color:var(--brand)]/20 bg-[color:var(--surface)] p-6 shadow-[0_20px_60px_rgba(24,34,45,0.12)] md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--brand-strong)]">
              Why it works
            </p>
            <ul className="mt-4 space-y-4">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base leading-relaxed text-[color:var(--muted)]"
                >
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent)]/25 text-[color:var(--brand-strong)]">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl bg-[color:var(--foreground)] p-4 text-white">
              <p className="text-xs uppercase tracking-[0.12em] text-white/70">
                Outcome focus
              </p>
              <p className="mt-1 text-lg font-semibold">
                From strategy to implementation in weeks, not quarters.
              </p>
            </div>
          </div>
        </section>

        <section
          id="solution"
          className="grid gap-6 rounded-3xl border border-[color:var(--foreground)]/10 bg-white/80 p-8 md:grid-cols-3"
        >
          <article className="space-y-3">
            <h2 className="text-xl font-bold text-[color:var(--foreground)]">
              Diagnose
            </h2>
            <p className="leading-relaxed text-[color:var(--muted)]">
              We map your workflows, data and customer journey to identify the
              highest-impact opportunities for AI.
            </p>
          </article>
          <article className="space-y-3">
            <h2 className="text-xl font-bold text-[color:var(--foreground)]">
              Design
            </h2>
            <p className="leading-relaxed text-[color:var(--muted)]">
              We architect a tailored solution that blends automation,
              intelligence and decision support for your exact operation.
            </p>
          </article>
          <article className="space-y-3">
            <h2 className="text-xl font-bold text-[color:var(--foreground)]">
              Deploy
            </h2>
            <p className="leading-relaxed text-[color:var(--muted)]">
              We implement, measure and optimize continuously, so AI becomes a
              strategic capability instead of a one-off project.
            </p>
          </article>
        </section>

        <section id="team" className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--brand-strong)]">
              Our Team
            </p>
            <h2 className="text-3xl font-extrabold text-[color:var(--foreground)] md:text-4xl">
              Leadership Built for Execution
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {members.map((member) => (
              <article
                key={member.name}
                className="rounded-3xl border border-[color:var(--foreground)]/10 bg-white p-4 shadow-[0_10px_36px_rgba(24,34,45,0.08)]"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-[color:var(--foreground)]/10 bg-[linear-gradient(135deg,rgba(15,122,108,0.16),rgba(242,180,63,0.18))]">
                  <Image
                    src={member.image}
                    alt={`Portrait placeholder for ${member.name}`}
                    width={640}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-bold text-[color:var(--foreground)]">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold tracking-wide text-[color:var(--brand-strong)]">
                    {member.role}
                  </p>
                  <p className="mt-3 text-[color:var(--muted)]">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="rounded-3xl bg-[color:var(--brand-strong)] p-8 text-white md:p-10"
        >
          <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
            Ready to Build Your Next Competitive Advantage?
          </h2>
          <p className="mt-3 max-w-3xl text-white/85">
            Synergy AI helps leadership teams move from AI ambition to concrete
            business outcomes. Let&apos;s define your roadmap and launch fast.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:hello@synergyai.com"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--brand-strong)] transition hover:bg-[color:var(--accent)]"
            >
              hello@synergyai.com
            </a>
            <a
              href="#"
              className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Download One-Pager
            </a>
          </div>
        </section>

        <footer className="pb-6 text-center text-sm text-[color:var(--muted)]">
          © {new Date().getFullYear()} Synergy AI. Built for measurable growth.
        </footer>
      </main>
    </div>
  );
}
