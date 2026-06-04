import type { Project } from "@/lib/projects";
import { FadeIn } from "../fade-in";
import { ProjectCta } from "../project-cta";
import { ProjectHero } from "../project-hero";
import { ProjectNav } from "../project-nav";

const projectPhases = [
  { phase: "Phase 01", period: "Months 1–8", title: "Site Enabling & Piling", status: "Complete" },
  { phase: "Phase 02", period: "Months 9–18", title: "Concourse Structure", status: "Complete" },
  { phase: "Phase 03", period: "Months 19–28", title: "MEP & Fit-Out", status: "In Progress" },
  { phase: "Phase 04", period: "Months 29–32", title: "Commissioning", status: "Planned" },
];

const criticalSystems = [
  "Baggage Handling Systems",
  "HVAC & Smoke Control",
  "Apron Floodlighting",
  "Fire Suppression Networks",
  "ICAO Nav-Aids Interface",
  "Passenger Boarding Bridges",
];

export function AirportPageContent({ project }: { project: Project }) {
  return (
    <>
      <ProjectNav title={project.title} />
      <ProjectHero project={project} />

      {/* Delivery timeline — unique to airport */}
      <section className="relative overflow-hidden bg-misr-cream py-24 lg:py-32">
        <div className="gradient-radial-green absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-600">
              Programme Delivery
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-misr-950 md:text-5xl">
              Construction <span className="font-semibold text-misr-700">Timeline</span>
            </h2>
            <div className="mt-6 h-px w-16 bg-misr-gold" />
          </FadeIn>

          <div className="mt-14">
            <div className="hidden h-px bg-misr-700/20 lg:block" />
            <div className="grid gap-6 lg:grid-cols-4">
              {projectPhases.map((item, i) => (
                <FadeIn key={item.phase} delay={i * 100}>
                  <div className="relative border border-misr-700/15 bg-white p-6 transition-all duration-500 hover:border-misr-600/40 hover:shadow-lg hover:shadow-misr-950/5">
                    <div className="absolute -top-3 left-6 hidden h-6 w-6 rounded-full border-2 border-misr-cream bg-misr-600 lg:block" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-misr-600">
                      {item.phase}
                    </span>
                    <p className="mt-2 text-xs text-misr-800/50">{item.period}</p>
                    <h3 className="mt-3 font-[family-name:var(--font-cormorant)] text-xl font-semibold text-misr-950">
                      {item.title}
                    </h3>
                    <span
                      className={`mt-4 inline-block text-[10px] font-semibold uppercase tracking-[0.2em] ${
                        item.status === "Complete"
                          ? "text-misr-600"
                          : item.status === "In Progress"
                            ? "text-misr-gold"
                            : "text-misr-800/40"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="relative bg-misr-950 py-24 lg:py-32">
        <div className="absolute inset-0 grid-architecture opacity-25" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-gold">
                Project Overview
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-white md:text-5xl">
                Aviation <span className="font-semibold text-misr-400">Infrastructure</span>
              </h2>
              <div className="mt-6 h-px w-16 bg-misr-gold" />
              <p className="mt-8 text-base leading-relaxed text-white/70 md:text-lg">
                {project.overview}
              </p>
            </FadeIn>
            <div className="space-y-8">
              <FadeIn delay={150}>
                <div className="border-l-2 border-misr-400 pl-6">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-misr-400">
                    The Challenge
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/60 md:text-base">
                    {project.challenge}
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={250}>
                <div className="border-l-2 border-misr-gold pl-6">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-misr-gold">
                    Our Solution
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/60 md:text-base">
                    {project.solution}
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Critical systems — unique section */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-28">
        <div className="absolute inset-0 grid-architecture opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-600">
              Systems Integration
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-misr-950 md:text-5xl">
              Critical <span className="font-semibold text-misr-700">Systems</span>
            </h2>
          </FadeIn>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {criticalSystems.map((system, i) => (
              <FadeIn key={system} delay={i * 70}>
                <li className="flex items-center gap-4 border border-misr-700/15 px-5 py-4 transition-all duration-300 hover:border-misr-600 hover:bg-misr-cream">
                  <span className="h-2 w-2 shrink-0 bg-misr-gold" />
                  <span className="text-sm font-medium text-misr-800">{system}</span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="relative bg-misr-800 py-24 lg:py-28">
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

      {/* Gallery — wide panoramic strip */}
      <section className="relative bg-misr-950 py-24 lg:py-32">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-gold">
              Visual Documentation
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-white md:text-5xl">
              Terminal <span className="font-semibold text-misr-400">Gallery</span>
            </h2>
          </FadeIn>
          <div className="mt-14 space-y-4">
            <FadeIn>
              <div className="group relative aspect-[21/9] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${project.gallery[0]}')` }}
                />
                <div className="absolute inset-0 bg-misr-950/0 transition-colors duration-500 group-hover:bg-misr-950/20" />
              </div>
            </FadeIn>
            <div className="grid gap-4 sm:grid-cols-3">
              {project.gallery.slice(1).map((image, i) => (
                <FadeIn key={image} delay={i * 60}>
                  <div className="group relative aspect-[4/3] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${image}')` }}
                    />
                    <div className="absolute inset-0 bg-misr-950/0 transition-colors duration-500 group-hover:bg-misr-950/20" />
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-misr-gold transition-all duration-500 group-hover:w-full" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-misr-cream py-24 lg:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: `url('${project.heroImage}')` }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-600">
                Key Metrics
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-misr-950 md:text-5xl">
                Terminal <span className="font-semibold text-misr-700">Statistics</span>
              </h2>
            </div>
          </FadeIn>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {project.stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 100}>
                <div className="group border border-misr-700/20 bg-white p-8 text-center transition-all duration-500 hover:border-misr-600 hover:shadow-lg hover:shadow-misr-950/5">
                  <p className="font-[family-name:var(--font-cormorant)] text-5xl font-semibold text-misr-800">
                    {stat.value}
                    {stat.suffix && (
                      <span className="text-xl font-light text-misr-600">{stat.suffix}</span>
                    )}
                  </p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-misr-800/50">
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
