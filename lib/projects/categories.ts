export const PROJECT_CATEGORIES = [
  {
    id: "residential-developments",
    label: "Residential Developments",
    description:
      "Master-planned communities, luxury residences, and high-rise residential towers engineered for comfort, durability, and lasting value.",
  },
  {
    id: "educational-facilities",
    label: "Educational Facilities",
    description:
      "Universities, schools, and research campuses designed to inspire learning through intelligent structural systems and flexible spatial planning.",
  },
  {
    id: "hotels-hospitality",
    label: "Hotels & Hospitality",
    description:
      "Luxury hotels, resorts, and hospitality destinations where architectural distinction meets rigorous engineering performance.",
  },
  {
    id: "hospitals-healthcare",
    label: "Hospitals & Healthcare",
    description:
      "Medical centres and healthcare facilities built to exacting standards of safety, functionality, and operational efficiency.",
  },
  {
    id: "mixed-use-developments",
    label: "Mixed-Use Developments",
    description:
      "Integrated commercial, retail, and residential complexes that unify diverse programmes within cohesive structural and MEP frameworks.",
  },
  {
    id: "infrastructure-projects",
    label: "Infrastructure Projects",
    description:
      "Airports, transport hubs, utilities, and civic infrastructure delivering connectivity and capacity at national scale.",
  },
] as const;

export type ProjectCategoryId = (typeof PROJECT_CATEGORIES)[number]["id"];

export type ProjectCategory = {
  id: ProjectCategoryId;
  label: string;
  description: string;
};

export function getCategoryById(id: ProjectCategoryId): ProjectCategory {
  const category = PROJECT_CATEGORIES.find((c) => c.id === id);
  if (!category) {
    throw new Error(`Unknown project category: ${id}`);
  }
  return category;
}

export function getCategoryLabel(id: ProjectCategoryId): string {
  return getCategoryById(id).label;
}
