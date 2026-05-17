import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </main>
  )
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-[var(--color-paper)]/90 backdrop-blur-sm border-b border-[var(--color-border)]">
      <span className="font-serif text-lg font-semibold tracking-tight text-[var(--color-ink)]">
        Kicking Leaves
      </span>
      <div className="flex items-center gap-8 text-sm text-[var(--color-muted)]">
        <Link href="#projects" className="hover:text-[var(--color-ink)] transition-colors">Projects</Link>
        <Link href="#about" className="hover:text-[var(--color-ink)] transition-colors">About</Link>
        <Link href="mailto:dan@kickingleaves.com" className="hover:text-[var(--color-ink)] transition-colors">Contact</Link>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-20">
      <div className="max-w-4xl">
        <p className="text-sm uppercase tracking-widest text-[var(--color-muted)] mb-8">
          Kicking Leaves
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-[var(--color-ink)] leading-[1.05] mb-8">
          Technology built<br />
          for the games<br />
          <em>we love.</em>
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-muted)] max-w-xl leading-relaxed mb-12">
          We make tools at the intersection of data, video, and sport — designed for athletes,
          coaches, and the families who show up every week.
        </p>
        <Link
          href="#projects"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-ink)] border-b border-[var(--color-ink)] pb-0.5 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
        >
          See our work
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="bg-[var(--color-dark)] text-white px-8 md:px-16 lg:px-24 py-32">
      <p className="text-sm uppercase tracking-widest text-white/40 mb-16">Projects</p>
      <div className="grid md:grid-cols-3 gap-px bg-white/10">
        <ProjectCard
          label="Softball"
          name="VeloCut"
          status="In development"
          description="Multi-angle video analysis, automated highlight clips, and a recruiting profile platform for youth softball teams. Built for coaches who want more signal, and players who deserve to be seen."
          accent="#2A7A55"
        />
        <ProjectCard
          label="Flag Football"
          name="RouteRunnr"
          status="Coming soon"
          description="Live game tracking, play-by-play scoring, and stat breakdowns for youth flag football. Fast to set up, built for the sideline."
          accent="#C07A2A"
        />
        <ProjectCard
          label="Fitness"
          name="PeakSeason"
          status="Coming soon"
          description="Sport-specific training programs designed around your season. Structured workouts, progress tracking, and programming that peaks when it counts."
          accent="#7A2A6B"
        />
      </div>
    </section>
  )
}

function ProjectCard({
  label,
  name,
  status,
  description,
  accent,
}: {
  label: string
  name: string
  status: string
  description: string
  accent: string
}) {
  return (
    <div className="bg-[var(--color-dark)] p-12 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-widest text-white/40">{label}</p>
        <span className="text-xs text-white/30 border border-white/10 rounded-full px-3 py-1">{status}</span>
      </div>
      <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{ color: accent }}>
        {name}
      </h2>
      <p className="text-white/60 leading-relaxed text-sm max-w-sm">{description}</p>
    </div>
  )
}

function About() {
  return (
    <section id="about" className="px-8 md:px-16 lg:px-24 py-32">
      <div className="max-w-5xl grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-sm uppercase tracking-widest text-[var(--color-muted)] mb-8">About</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[var(--color-ink)] leading-tight">
            Built by parents,<br />for players.
          </h2>
        </div>
        <div className="space-y-5 text-[var(--color-muted)] leading-relaxed">
          <p>
            Kicking Leaves started with a simple question: why is it so hard to capture a great
            moment from a youth sports game? The cameras are there. The talent is there. But the
            tools aren&apos;t built for this world.
          </p>
          <p>
            We&apos;re a small team of engineers and sports families building the kind of technology
            we wish existed when our kids were playing. Thoughtful, affordable, and made to last
            more than a season.
          </p>
          <p>
            Based in the Pacific Northwest.
          </p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-8 md:px-16 lg:px-24 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <span className="font-serif text-sm text-[var(--color-muted)]">Kicking Leaves</span>
      <div className="flex items-center gap-6 text-xs text-[var(--color-muted)]">
        <Link href="mailto:dan@kickingleaves.com" className="hover:text-[var(--color-ink)] transition-colors">
          dan@kickingleaves.com
        </Link>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
