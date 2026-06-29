
import { oraSilversands } from "./ora-silversands";
import { portfolioProjectList } from "./portfolio-index";
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

export {oraSilversands };

const featuredProjects: Project[] = [ oraSilversands];

export const allProjects: Project[] = [...portfolioProjectList, ...featuredProjects ];

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
