export const PROJECT_CATEGORIES = [
  {
    id: "residential",
    slug: "residential",
    label: "Residential Developments",
    description:
      "Master-planned communities, luxury villas, and high-rise residences engineered for comfort, durability, and lasting value across Egypt and the region.",
    image:
      "/project-hero/02a.png",
  },
  {
    id: "hotels",
    slug: "hotels",
    label: "Hotels & Resorts",
    description:
      "Luxury hotels, resorts, and hospitality destinations where architectural distinction meets rigorous engineering performance and guest experience.",
    image:
      "/project-hero/03a.jpg",
  },
  {
    id: "educational",
    slug: "educational",
    label: "Educational Facilities",
    description:
      "Universities, schools, and research campuses designed to inspire learning through intelligent structural systems and flexible spatial planning.",
    image:
      "/project-hero/04a1.png",
  },
  {
    id: "healthcare",
    slug: "healthcare",
    label: "Healthcare & Hospitals",
    description:
      "Medical centres and healthcare facilities built to exacting standards of safety, functionality, and operational efficiency.",
    image:
      "/project-hero/03.jpeg",
  },
  {
    id: "mixed-use",
    slug: "mixed-use",
    label: "Mixed-Use Developments",
    description:
      "Integrated commercial, retail, hospitality, and residential complexes unified within cohesive structural and MEP frameworks.",
    image:
     "/project-hero/01.jpg",
  },
  {
    id: "infrastructure",
    slug: "infrastructure",
    label: "Infrastructure & Transportation",
    description:
      "Airports, highways, transport hubs, and civic infrastructure delivering connectivity and capacity at national scale.",
    image:
      "/project-hero/02.png",
  },
  {
    id: "commercial",
    slug: "commercial",
    label: "Commercial & Office Buildings",
    description:
      "Grade-A office towers, business campuses, and corporate headquarters that set new benchmarks for workplace design and performance.",
    image:
      "/project-hero/01a.png",
  },
  {
    id: "industrial",
    slug: "industrial",
    label: "Industrial Facilities",
    description:
      "Manufacturing plants, logistics hubs, and industrial complexes engineered for operational efficiency, safety, and long-term resilience.",
    image:
      "/project-hero/03.png",
  },
] as const;

export type ProjectCategoryId = (typeof PROJECT_CATEGORIES)[number]["id"];

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export function getCategoryById(id: ProjectCategoryId): ProjectCategory {
  const category = PROJECT_CATEGORIES.find((c) => c.id === id);
  if (!category) {
    throw new Error(`Unknown project category: ${id}`);
  }
  return category;
}

export function getCategoryBySlug(slug: string): ProjectCategory | undefined {
  return PROJECT_CATEGORIES.find((c) => c.slug === slug);
}

export function getCategoryLabel(id: ProjectCategoryId): string {
  return getCategoryById(id).label;
}

export function isCategorySlug(slug: string): boolean {
  return PROJECT_CATEGORIES.some((c) => c.slug === slug);
}
