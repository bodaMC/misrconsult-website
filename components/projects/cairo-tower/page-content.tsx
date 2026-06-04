import type { Project } from "@/lib/projects";
import { FadeIn } from "../fade-in";
import { ProjectCta } from "../project-cta";
import { ProjectHero } from "../project-hero";
import { ProjectNav } from "../project-nav";

const structuralHighlights = [
  {
    title: "Mega-Frame System",
    description:
      "Composite steel-concrete mega-columns with outrigger trusses at levels 18, 36, and 48 distribute lateral loads across the full tower footprint.",
  },
  {
    title: "Tuned Mass Damper",
    description:
      "A 420-tonne pendulum damper at roof level reduces wind-induced sway by 38%, meeting occupant comfort criteria for hospitality floors.",
  },
  {
    title: "Deep Foundation",
    description:
      "Bored piles to 62m depth through Nile alluvium, with pressure-grouted rock sockets achieving 12,000 kN ultimate capacity per pile.",
  },
];

export function CairoTowerPageContent({ project }: { project: Project }) {
  return (
    <>
      <ProjectNav title={project.title} />
      <ProjectHero project={project} />

      {/* Vertical engineering — unique to tower */}
      <section className="relative overflow-hidden bg-misr-950 py-24 lg:py-32">
        <div className="absolute inset-0 grid-architecture opacity-25" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-gold">
              Structural Innovation
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-white md:text-5xl">
              Vertical <span className="font-semibold text-misr-400">Engineering</span>
            </h2>
            <div className="mt-6 h-px w-16 bg-misr-gold" />
          </FadeIn>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {structuralHighlights.map((item, i) => (
              <FadeIn key={item.title} delay={i * 120}>
                <div className="group h-full border border-white/10 bg-misr-900/50 p-8 transition-all duration-500 hover:border-misr-gold/40 hover:bg-misr-800/60">
                  <span className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-misr-gold/40 transition-colors duration-300 group-hover:text-misr-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="relative overflow-hidden bg-misr-cream py-24 lg:py-32">
        <div className="gradient-radial-green absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-600">
              Project Overview
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-misr-950 md:text-5xl">
              Engineering the <span className="font-semibold text-misr-700">Skyline</span>
            </h2>
            <div className="mt-6 h-px w-16 bg-misr-gold" />
          </FadeIn>

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn delay={100}>
              <p className="text-base leading-relaxed text-misr-800/80 md:text-lg">
                {project.overview}
              </p>
            </FadeIn>
            <div className="space-y-8">
              <FadeIn delay={200}>
                <div className="border-l-2 border-misr-600 pl-6">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-misr-600">
                    The Challenge
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-misr-800/75 md:text-base">
                    {project.challenge}
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={300}>
                <div className="border-l-2 border-misr-gold pl-6">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-misr-gold">
                    Our Solution
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-misr-800/75 md:text-base">
                    {project.solution}
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative bg-misr-800 py-24 lg:py-28">
        <div className="absolute inset-0 grid-architecture opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-gold">
              Scope of Work
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-white md:text-5xl">
              Services <span className="font-semibold text-misr-400">Provided</span>
            </h2>
          </FadeIn>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.services.map((service, i) => (
              <FadeIn key={service} delay={i * 80}>
                <li className="group flex items-center gap-4 border border-white/10 bg-white/5 p-6 transition-all duration-500 hover:border-misr-gold/40 hover:bg-white/10">
                  <span className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-misr-gold/50 transition-colors duration-300 group-hover:text-misr-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-white/80 transition-colors duration-300 group-hover:text-white">
                    {service}
                  </span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery — tall aspect emphasis */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="absolute inset-0 grid-architecture opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-600">
                Visual Documentation
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-misr-950 md:text-5xl">
                Tower <span className="font-semibold text-misr-700">Gallery</span>
              </h2>
            </div>
          </FadeIn>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.gallery.map((image, i) => (
              <FadeIn
                key={image}
                delay={i * 60}
                className={i === 0 ? "sm:col-span-2 lg:row-span-2" : ""}
              >
                <div
                  className={`group relative overflow-hidden ${
                    i === 0 ? "aspect-[3/4] sm:aspect-auto sm:min-h-[480px]" : "aspect-[4/3]"
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${image}')` }}
                  />
                  <div className="absolute inset-0 bg-misr-950/0 transition-colors duration-500 group-hover:bg-misr-950/25" />
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-misr-gold transition-all duration-500 group-hover:w-full" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-misr-950 py-24 lg:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url('${project.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-misr-950/90 via-misr-800/95 to-misr-950/90" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-gold">
                Key Metrics
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-white md:text-5xl">
                Tower <span className="font-semibold text-misr-400">Statistics</span>
              </h2>
            </div>
          </FadeIn>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {project.stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 100}>
                <div className="group border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-500 hover:border-misr-gold/40 hover:bg-white/10">
                  <p className="font-[family-name:var(--font-cormorant)] text-5xl font-semibold text-white">
                    {stat.value}
                    {stat.suffix && (
                      <span className="text-xl font-light text-misr-gold">{stat.suffix}</span>
                    )}
                  </p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-white/50 transition-colors duration-300 group-hover:text-white/70">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ProjectCta />
    </>
  );
}
