import type { Project } from "@/lib/projects";
import { FadeIn } from "./fade-in";
import { ProjectCta } from "./project-cta";
import { ProjectHero } from "./project-hero";
import { ProjectNav } from "./project-nav";
import LazyImage from "@/components/common/LazyImage";

export function StandardProjectPageContent({ project }: { project: Project }) {

  return (
    <>
      <ProjectNav title={project.title} />
      <ProjectHero project={project} />

    

      <section className="relative overflow-hidden bg-misr-950 pt-6 pb-24 lg:pt-8 lg:py-32">
        <div className="absolute inset-0 grid-architecture opacity-25" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-gold">
              Project Overview
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-white md:text-5xl">
              Engineering <span className="font-semibold text-misr-400">Excellence</span>
            </h2>
            <div className="mt-6 h-px w-16 bg-misr-gold" />
          </FadeIn>

          <div className="mt-12 max-w-4xl">
            <FadeIn delay={100}>
              <p className="text-base leading-relaxed text-white/70 md:text-lg">
                {project.overview}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="absolute inset-0 grid-architecture opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-600">
                Visual Documentation
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-misr-950 md:text-5xl">
                Development <span className="font-semibold text-misr-700">Gallery</span>
              </h2>
            </div>
          </FadeIn>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.gallery.map((image, i) => (
              <FadeIn
                key={`${image}-${i}`}
                delay={i * 60}
                className={i === 0 ? "sm:col-span-2 lg:row-span-2" : ""}
              >
                <div
                  className={`group relative overflow-hidden ${
                    i === 0 ? "aspect-[3/4] sm:aspect-auto sm:min-h-[480px]" : "aspect-[4/3]"
                  }`}
                >
                  <LazyImage
  src={image}
  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
/>
                  <div className="absolute inset-0 bg-misr-950/0 transition-colors duration-500 group-hover:bg-misr-950/25" />
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-misr-gold transition-all duration-500 group-hover:w-full" />
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
