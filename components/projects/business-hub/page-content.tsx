import type { Project } from "@/lib/projects";
import { FadeIn } from "../fade-in";
import { ProjectCta } from "../project-cta";
import { ProjectHero } from "../project-hero";
import { ProjectNav } from "../project-nav";

const campusParcels = [
  { name: "North Tower", gfa: "32,000 m²", use: "Grade-A Offices" },
  { name: "South Tower", gfa: "28,000 m²", use: "Grade-A Offices" },
  { name: "Convention Centre", gfa: "18,000 m²", use: "Events & Conferences" },
  { name: "Retail Podium", gfa: "42,000 m²", use: "Retail & F&B" },
];

export function BusinessHubPageContent({ project }: { project: Project }) {
  return (
    <>
      <ProjectNav title={project.title} />
      <ProjectHero project={project} />

      {/* Split overview with hero image — unique layout */}
      <section className="relative overflow-hidden bg-misr-cream py-24 lg:py-32">
        <div className="gradient-radial-green absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <FadeIn>
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-600">
                  Project Overview
                </span>
                <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-misr-950 md:text-5xl">
                  A Campus for <span className="font-semibold text-misr-700">Commerce</span>
                </h2>
                <div className="mt-6 h-px w-16 bg-misr-gold" />
                <p className="mt-8 text-base leading-relaxed text-misr-800/80 md:text-lg">
                  {project.overview}
                </p>
              </FadeIn>
              <div className="mt-10 space-y-8">
                <FadeIn delay={150}>
                  <div className="border-l-2 border-misr-600 pl-6">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-misr-600">
                      The Challenge
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-misr-800/75 md:text-base">
                      {project.challenge}
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={250}>
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
            <FadeIn delay={100}>
              <div className="relative aspect-[4/5] overflow-hidden lg:aspect-auto lg:min-h-[560px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${project.gallery[1]}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-misr-950/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 border border-white/20 bg-misr-950/70 p-6 backdrop-blur-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-misr-gold">
                    Site Area
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-cormorant)] text-3xl font-light text-white">
                    12 Hectares
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Campus masterplan — unique section */}
      <section className="relative bg-misr-950 py-24 lg:py-32">
        <div className="absolute inset-0 grid-architecture opacity-25" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-gold">
              Master Planning
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-white md:text-5xl">
              Campus <span className="font-semibold text-misr-400">Parcels</span>
            </h2>
          </FadeIn>
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {campusParcels.map((parcel, i) => (
              <FadeIn key={parcel.name} delay={i * 100}>
                <div className="group flex items-start justify-between border border-white/10 p-6 transition-all duration-500 hover:border-misr-gold/40 hover:bg-misr-900/50">
                  <div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-white">
                      {parcel.name}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/50">
                      {parcel.use}
                    </p>
                  </div>
                  <p className="text-right font-[family-name:var(--font-cormorant)] text-lg text-misr-gold">
                    {parcel.gfa}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services — horizontal strip */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-28">
        <div className="absolute inset-0 grid-architecture opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-600">
              Scope of Work
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-misr-950 md:text-5xl">
              Services <span className="font-semibold text-misr-700">Provided</span>
            </h2>
          </FadeIn>
          <div className="mt-12 flex flex-wrap gap-3">
            {project.services.map((service, i) => (
              <FadeIn key={service} delay={i * 60}>
                <span className="inline-block border border-misr-700/30 bg-misr-cream px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-misr-800 transition-all duration-300 hover:border-misr-600 hover:bg-misr-700 hover:text-white">
                  {service}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery — asymmetric 2-column */}
      <section className="relative bg-misr-800 py-24 lg:py-32">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-gold">
              Visual Documentation
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-white md:text-5xl">
              Campus <span className="font-semibold text-misr-400">Gallery</span>
            </h2>
          </FadeIn>
          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            <FadeIn>
              <div className="group relative aspect-[16/10] overflow-hidden lg:min-h-[400px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${project.gallery[0]}')` }}
                />
                <div className="absolute inset-0 bg-misr-950/0 transition-colors duration-500 group-hover:bg-misr-950/20" />
              </div>
            </FadeIn>
            <div className="grid grid-cols-2 gap-4">
              {project.gallery.slice(1, 5).map((image, i) => (
                <FadeIn key={image} delay={i * 80}>
                  <div className="group relative aspect-square overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${image}')` }}
                    />
                    <div className="absolute inset-0 bg-misr-950/0 transition-colors duration-500 group-hover:bg-misr-950/20" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-misr-cream py-24 lg:py-28">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-600">
                Key Metrics
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-misr-950 md:text-5xl">
                Project <span className="font-semibold text-misr-700">Statistics</span>
              </h2>
            </div>
          </FadeIn>
          <div className="mt-14 grid gap-px bg-misr-700/20 sm:grid-cols-2 lg:grid-cols-4">
            {project.stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 100}>
                <div className="bg-misr-cream p-8 text-center">
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
