import Link from "next/link";
import { featuredProjects } from "@/lib/projects";

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute inset-0 grid-architecture opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-600">
            Portfolio
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-misr-950 md:text-5xl lg:text-6xl">
            Featured <span className="font-semibold text-misr-700">Projects</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-misr-800/70">
            Landmark developments that demonstrate our commitment to engineering
            precision, architectural distinction, and lasting impact.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`group relative overflow-hidden ${project.span}`}
            >
              <article className="h-full">
                <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[280px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${project.heroImage}')` }}
                  />
                  <div className="absolute inset-0 bg-misr-950/30 transition-colors duration-500 group-hover:bg-misr-950/50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-misr-950/90 via-misr-950/20 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                    <span className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-misr-gold">
                      {project.category} · {project.location.split(",")[0]}
                    </span>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-white transition-transform duration-300 group-hover:-translate-y-1 lg:text-3xl">
                      {project.title}
                    </h3>
                    <div className="mt-4 flex h-0 items-center gap-2 overflow-hidden opacity-0 transition-all duration-500 group-hover:h-6 group-hover:opacity-100">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                        View Case Study
                      </span>
                      <span className="text-misr-gold">→</span>
                    </div>
                  </div>

                  <div className="absolute left-0 top-0 h-1 w-0 bg-misr-gold transition-all duration-500 group-hover:w-full" />
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 border border-misr-700 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-misr-700 transition-all duration-300 hover:border-misr-600 hover:bg-misr-700 hover:text-white"
          >
            View All Projects
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 border border-misr-700 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-misr-700 transition-all duration-300 hover:border-misr-600 hover:bg-misr-700 hover:text-white"
          >
            Discuss Your Project
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
