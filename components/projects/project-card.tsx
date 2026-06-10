import Link from "next/link";
import type { Project } from "@/lib/projects";
import { getCategoryLabel } from "@/lib/projects";
import { ClientLogoBadge } from "./client-logo-badge";

type ProjectCardProps = {
  project: Project;
  showCategory?: boolean;
  className?: string;
};

export function ProjectCard({
  project,
  showCategory = true,
  className = "",
}: ProjectCardProps) {
  const metaLabel = showCategory
    ? `${getCategoryLabel(project.categoryId)} · ${project.location.split(",")[0]}`
    : project.location.split(",")[0];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative overflow-hidden ${project.span} ${className}`}
    >
      <article className="h-full">
        <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[280px]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url('${project.heroImage}')` }}
          />
          <div className="absolute inset-0 bg-misr-950/30 transition-colors duration-500 group-hover:bg-misr-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-misr-950/90 via-misr-950/20 to-transparent" />

          {project.clientLogo ? (
            <div className="absolute right-4 top-4 z-10 sm:right-5 sm:top-5 lg:right-6 lg:top-6">
              <ClientLogoBadge
                alt={`${project.client} logo`}
                logoSize={project.clientLogoSize}
                src={project.clientLogo}
                variant="card"
              />
            </div>
          ) : null}

          <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
            <span className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-misr-gold">
              {metaLabel}
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
  );
}
