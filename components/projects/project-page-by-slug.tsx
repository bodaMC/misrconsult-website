import type { Project } from "@/lib/projects";
import { AirportPageContent } from "./airport/page-content";
import { BusinessHubPageContent } from "./business-hub/page-content";
import { CairoTowerPageContent } from "./cairo-tower/page-content";
import { OraSilversandsPageContent } from "./ora-silversands/page-content";

const contentBySlug = {
  "cairo-tower": CairoTowerPageContent,
  "business-hub": BusinessHubPageContent,
  airport: AirportPageContent,
  "ora-silversands": OraSilversandsPageContent,
} as const;

type ProjectSlug = keyof typeof contentBySlug;

function isProjectSlug(slug: string): slug is ProjectSlug {
  return slug in contentBySlug;
}

type ProjectPageBySlugProps = {
  slug: string;
  project: Project;
};

export function ProjectPageBySlug({ slug, project }: ProjectPageBySlugProps) {
  if (!isProjectSlug(slug)) {
    return null;
  }

  const Content = contentBySlug[slug];
  return <Content project={project} />;
}
