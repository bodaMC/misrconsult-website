import { airport } from "./airport";
import { businessHub } from "./business-hub";
import { cairoTower } from "./cairo-tower";
import { oraSilversands } from "./ora-silversands";
import type { FeaturedProject, Project, ProjectStat } from "./types";

export type { FeaturedProject, Project, ProjectStat };

export { airport, businessHub, cairoTower };

export const allProjects: Project[] = [cairoTower, businessHub, airport, oraSilversands];
export const featured: Project[] = [cairoTower, businessHub];
export const featuredProjects: FeaturedProject[] = allProjects
  .filter((p) => featured.some((x) => x.slug === p.slug))
  .map((project) => ({
    slug: project.slug,
    title: project.title,
    category: project.category,
    location: project.location,
    heroImage: project.heroImage,
    span: project.span,
  }));

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((project) => project.slug === slug);
}
