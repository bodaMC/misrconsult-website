import { airport } from "./airport";
import { businessHub } from "./business-hub";
import { cairoTower } from "./cairo-tower";
import { oraSilversands } from "./ora-silversands";
import {
  PROJECT_CATEGORIES,
  getCategoryById,
  getCategoryBySlug,
  getCategoryLabel,
  isCategorySlug,
} from "./categories";
import type { ProjectCategory, ProjectCategoryId } from "./categories";
import type { Project, ProjectStat } from "./types";

export type { ProjectCategory, ProjectCategoryId, Project, ProjectStat };

export {
  PROJECT_CATEGORIES,
  getCategoryById,
  getCategoryBySlug,
  getCategoryLabel,
  isCategorySlug,
};

export { airport, businessHub, cairoTower };

export const allProjects: Project[] = [cairoTower, businessHub, airport, oraSilversands];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((project) => project.slug === slug);
}

export function getProjectsByCategoryId(categoryId: ProjectCategoryId): Project[] {
  return allProjects.filter((project) => project.categoryId === categoryId);
}

export function getProjectCountByCategoryId(categoryId: ProjectCategoryId): number {
  return getProjectsByCategoryId(categoryId).length;
}

export function getCategoriesWithCounts(): Array<
  ProjectCategory & { projectCount: number }
> {
  return PROJECT_CATEGORIES.map((category) => ({
    ...category,
    projectCount: getProjectCountByCategoryId(category.id),
  }));
}
