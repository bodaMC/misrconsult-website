import Link from "next/link";
import type { ProjectCategory } from "@/lib/projects";
import { getProjectsByCategoryId } from "@/lib/projects";
import { Footer } from "@/components/home/footer";
import { ProjectCard } from "./project-card";

type CategoryPageContentProps = {
  category: ProjectCategory;
};

export function CategoryPageContent({ category }: CategoryPageContentProps) {
  const projects = getProjectsByCategoryId(category.id);

  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-misr-950">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 animate-slow-zoom bg-cover bg-center"
            style={{ backgroundImage: `url('${category.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-misr-950/60 via-misr-950/50 to-misr-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-misr-950/90 via-misr-950/50 to-transparent" />
          <div className="gradient-radial-green absolute inset-0" />
        </div>
        <div className="absolute inset-0 grid-architecture opacity-30" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
          <Link
            href="/projects"
            className="animate-fade-up group mb-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-misr-gold"
          >
            <span className="flex h-8 w-8 items-center justify-center border border-white/20 transition-all duration-300 group-hover:border-misr-gold">
              ←
            </span>
            All Categories
          </Link>

          <span className="animate-fade-up animation-delay-200 text-xs font-semibold uppercase tracking-[0.35em] text-misr-gold">
            Portfolio
          </span>
          <h1 className="animate-fade-up animation-delay-400 mt-4 max-w-3xl font-[family-name:var(--font-cormorant)] text-5xl font-light leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            {category.label}
          </h1>
          <p className="animate-fade-up animation-delay-600 mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            {category.description}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-misr-gold/50 to-transparent" />
      </section>

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="absolute inset-0 grid-architecture opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {projects.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} showCategory={false} />
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-lg text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-600">
                Coming Soon
              </span>
              <p className="mt-4 text-base leading-relaxed text-misr-800/70">
                Projects in this category are being prepared for publication. Explore
                our other sectors or contact us to discuss your requirements.
              </p>
              <Link
                href="/projects"
                className="group mt-8 inline-flex items-center gap-3 border border-misr-700 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-misr-700 transition-all duration-300 hover:border-misr-600 hover:bg-misr-700 hover:text-white"
              >
                Browse All Categories
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
