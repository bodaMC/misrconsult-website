import Link from "next/link";
import { CategoryCard } from "@/components/projects/category-card";
import { getCategoriesWithCounts } from "@/lib/projects";

export function Projects() {
  const categories = getCategoriesWithCounts();

  return (
    <section id="projects" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute inset-0 grid-architecture opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-600">
            Portfolio
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-misr-950 md:text-5xl lg:text-6xl">
            Project <span className="font-semibold text-misr-700">Categories</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-misr-800/70">
            Explore our portfolio by sector — from residential communities and
            hospitality destinations to infrastructure and industrial facilities.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              projectCount={category.projectCount}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 border border-misr-700 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-misr-700 transition-all duration-300 hover:border-misr-600 hover:bg-misr-700 hover:text-white"
          >
            View All Categories
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
