import Link from "next/link";
import type { ProjectCategory } from "@/lib/projects";

type CategoryCardProps = {
  category: ProjectCategory;
  projectCount: number;
  className?: string;
};

export function CategoryCard({ category, projectCount, className = "" }: CategoryCardProps) {
  const projectLabel = projectCount === 1 ? "Project" : "Projects";

  return (
    <Link
      href={`/projects/${category.slug}`}
      className={`group relative overflow-hidden ${className}`}
    >
      <article className="h-full">
        <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[3/4] lg:min-h-[320px]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url('${category.image}')` }}
          />
          <div className="absolute inset-0 bg-misr-950/30 transition-colors duration-500 group-hover:bg-misr-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-misr-950/95 via-misr-950/30 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
            <span className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-misr-gold">
              {projectCount} {projectLabel}
            </span>
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-white transition-transform duration-300 group-hover:-translate-y-1 lg:text-3xl">
              {category.label}
            </h3>
            <div className="mt-4 flex h-0 items-center gap-2 overflow-hidden opacity-0 transition-all duration-500 group-hover:h-6 group-hover:opacity-100">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                Explore Category
              </span>
              <span className="text-misr-gold">→</span>
            </div>
          </div>

          <div className="absolute left-0 top-0 h-1 w-0 bg-misr-gold transition-all duration-500 group-hover:w-full" />
        </div>
      </article>
    </Link>
  );
}
