import type { Project } from "@/lib/projects";
import { getCategoryById, getCategoryLabel } from "@/lib/projects";
import { ClientLogoBadge } from "./client-logo-badge";
import { ProjectBackButton } from "./project-back-button";

type ProjectHeroProps = {
  project: Pick<
    Project,
    | "title"
    | "categoryId"
    | "location"
    | "year"
    | "client"
    | "clientLogo"
    | "clientLogoSize"
    | "area"
    | "tagline"
    | "heroImage"
    | "heroVideo"
  >;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  const category = getCategoryById(project.categoryId);
  return (
    <section className="relative flex min-h-[85vh] items-end overflow-hidden bg-misr-950">
      <div className="absolute inset-0">
        {project.heroVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={project.heroImage}
            className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
          >
            <source src={project.heroVideo} type="video/mp4" />
          </video>
        ) : (
          <div
            className="absolute inset-0 animate-slow-zoom bg-cover bg-center"
            style={{ backgroundImage: `url('${project.heroImage}')` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-misr-950/60 via-misr-950/50 to-misr-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-misr-950/90 via-misr-950/50 to-transparent" />
        <div className="gradient-radial-green absolute inset-0" />
      </div>
      <div className="absolute inset-0 grid-architecture opacity-30" />

      {project.clientLogo ? (
        <div className="pointer-events-none absolute inset-x-0 top-36 z-20 lg:top-44">
          <div className="mx-auto flex max-w-7xl justify-end px-6 lg:px-8">
            <ClientLogoBadge
              alt={`${project.client} logo`}
              logoSize={project.clientLogoSize}
              src={project.clientLogo}
            />
          </div>
        </div>
      ) : null}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
        <ProjectBackButton
          href={`/projects/${category.slug}`}
          label={category.label}
        />

        <div className="animate-fade-up animation-delay-200 flex flex-wrap items-center gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-gold">
            {getCategoryLabel(project.categoryId)}
          </span>
          <span className="h-3 w-px bg-white/20" />
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">
            {project.location}
          </span>
          <span className="h-3 w-px bg-white/20" />
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">
            {project.year}
          </span>
        </div>

        <h1 className="animate-fade-up animation-delay-400 mt-6 max-w-4xl font-[family-name:var(--font-cormorant)] text-5xl font-light leading-[1.05] text-white sm:text-6xl lg:text-7xl">
          {project.title}
        </h1>
        <p className="animate-fade-up animation-delay-600 mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
          {project.tagline}
        </p>

        <div className="animate-fade-up animation-delay-800 mt-10 flex flex-wrap gap-8 border-t border-white/10 pt-8">
          {[
            { label: "Client", value: project.client },
            { label: "Area", value: project.area },
            { label: "Completed", value: project.year },
          ].map((meta) => (
            <div key={meta.label}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
                {meta.label}
              </p>
              <p className="mt-1 text-sm font-medium text-white">{meta.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-misr-gold/50 to-transparent" />
    </section>
  );
}
