export const PROJECT_CATEGORIES = [
  {
    id: "residential",
    slug: "residential",
    label: "Residential Developments",
    description:
      "Master-planned communities, luxury villas, and high-rise residences engineered for comfort, durability, and lasting value across Egypt and the region.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2400&auto=format&fit=crop",
  },
  {
    id: "hotels",
    slug: "hotels",
    label: "Hotels & Resorts",
    description:
      "Luxury hotels, resorts, and hospitality destinations where architectural distinction meets rigorous engineering performance and guest experience.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2400&auto=format&fit=crop",
  },
  {
    id: "educational",
    slug: "educational",
    label: "Educational Facilities",
    description:
      "Universities, schools, and research campuses designed to inspire learning through intelligent structural systems and flexible spatial planning.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2400&auto=format&fit=crop",
  },
  {
    id: "healthcare",
    slug: "healthcare",
    label: "Healthcare & Hospitals",
    description:
      "Medical centres and healthcare facilities built to exacting standards of safety, functionality, and operational efficiency.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2400&auto=format&fit=crop",
  },
  {
    id: "mixed-use",
    slug: "mixed-use",
    label: "Mixed-Use Developments",
    description:
      "Integrated commercial, retail, hospitality, and residential complexes unified within cohesive structural and MEP frameworks.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop",
  },
  {
    id: "infrastructure",
    slug: "infrastructure",
    label: "Infrastructure & Transportation",
    description:
      "Airports, highways, transport hubs, and civic infrastructure delivering connectivity and capacity at national scale.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2400&auto=format&fit=crop",
  },
  {
    id: "commercial",
    slug: "commercial",
    label: "Commercial & Office Buildings",
    description:
      "Grade-A office towers, business campuses, and corporate headquarters that set new benchmarks for workplace design and performance.",
    image:
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2400&auto=format&fit=crop",
  },
  {
    id: "industrial",
    slug: "industrial",
    label: "Industrial Facilities",
    description:
      "Manufacturing plants, logistics hubs, and industrial complexes engineered for operational efficiency, safety, and long-term resilience.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2400&auto=format&fit=crop",
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
