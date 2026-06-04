import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/home/footer";
import { allProjects, featuredProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects | MisrConsult",
  description:
    "Explore landmark engineering and infrastructure projects delivered by MisrConsult across Egypt and the Middle East.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-misr-950">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 animate-slow-zoom bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2400&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-misr-950/60 via-misr-950/50 to-misr-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-misr-950/90 via-misr-950/50 to-transparent" />
          <div className="gradient-radial-green absolute inset-0" />
        </div>
        <div className="absolute inset-0 grid-architecture opacity-30" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
          <Link
            href="/"
            className="animate-fade-up group mb-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-misr-gold"
          >
            <span className="flex h-8 w-8 items-center justify-center border border-white/20 transition-all duration-300 group-hover:border-misr-gold">
              ←
            </span>
            Back to Home
          </Link>

          <span className="animate-fade-up animation-delay-200 text-xs font-semibold uppercase tracking-[0.35em] text-misr-gold">
            Portfolio
          </span>
          <h1 className="animate-fade-up animation-delay-400 mt-4 max-w-3xl font-[family-name:var(--font-cormorant)] text-5xl font-light leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Our <span className="font-semibold text-misr-400">Projects</span>
          </h1>
          <p className="animate-fade-up animation-delay-600 mt-6 max-w-xl text-lg leading-relaxed text-white/65">
            Landmark developments demonstrating engineering precision, architectural
            distinction, and lasting impact.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-misr-gold/50 to-transparent" />
      </section>

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="absolute inset-0 grid-architecture opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            {allProjects.map((project) => (
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
                      <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-white transition-transform duration-300 group-hover:-translate-y-1 lg:text-3xl">
                        {project.title}
                      </h2>
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
        </div>
      </section>

      <Footer />
    </>
  );
}
