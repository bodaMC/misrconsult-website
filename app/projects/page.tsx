import type { Metadata } from "next";
import { Footer } from "@/components/home/footer";
import { CategoryCard } from "@/components/projects/category-card";
import { ProjectNav } from "@/components/projects/project-nav";
import { getCategoriesWithCounts } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects | MisrConsult",
  description:
    "Explore MisrConsult's portfolio across residential, hospitality, healthcare, infrastructure, and commercial sectors.",
};

export default function ProjectsPage() {
  const categories = getCategoriesWithCounts();

  return (
    <>
      <ProjectNav
        title="Projects"
        backHref="/"
        backLabel="Home"
      />
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
          <span className="animate-fade-up animation-delay-200 text-xs font-semibold uppercase tracking-[0.35em] text-misr-gold">
            Portfolio
          </span>
          <h1 className="animate-fade-up animation-delay-400 mt-4 max-w-3xl font-[family-name:var(--font-cormorant)] text-5xl font-light leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Project <span className="font-semibold text-misr-400">Categories</span>
          </h1>
          <p className="animate-fade-up animation-delay-600 mt-6 max-w-xl text-lg leading-relaxed text-white/65">
            Browse our work by sector — from landmark towers and resorts to
            airports, campuses, and industrial complexes.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-misr-gold/50 to-transparent" />
      </section>

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="absolute inset-0 grid-architecture opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                projectCount={category.projectCount}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
