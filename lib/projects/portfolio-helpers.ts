import { getCategoryById } from "./categories";
import type { ProjectCategoryId } from "./categories";
import type { Project, ProjectStat } from "./types";

export type PortfolioProjectInput = {
  slug: string;
  title: string;
  categoryId: ProjectCategoryId;
  location: string;
  area: string;
  scope: string;
  client?: string;
  year?: string;
  heroImage?: string;
  tagline?: string;
  overview?: string;
  challenge?: string;
  solution?: string;
};

const GALLERY_BY_CATEGORY: Record<ProjectCategoryId, string[]> = {
  residential: [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
  ],
  hotels: [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
  ],
  educational: [
    "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541339907192-e70056c376c9?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
  ],
  healthcare: [
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1538108149393-fbbd8189d6da?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1631217868264-e5b1bb5e2c59?q=80&w=1200&auto=format&fit=crop",
  ],
  "mixed-use": [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop",
  ],
  infrastructure: [
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556388150-64d6c638e972?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1474309093492-40abbe88b7ad?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
  ],
  commercial: [
    "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
  ],
  industrial: [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581094794329-c8112a89c12c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
  ],
};

function scopeToServices(scope: string): string[] {
  const normalized = scope.toLowerCase();

  if (normalized.includes("mep") && normalized.includes("structure")) {
    return [
      "Structural Engineering",
      "MEP Engineering",
      "HVAC Design",
      "Electrical Systems",
      "Construction Supervision",
    ];
  }

  if (normalized.includes("mep")) {
    return [
      "MEP Engineering",
      "HVAC Design",
      "Electrical Systems",
      "Plumbing & Fire Protection",
      "Project Management",
    ];
  }

  if (normalized.includes("infrastructure") || normalized.includes("wastewater") || normalized.includes("sanitary")) {
    return [
      "Infrastructure Planning",
      "Wet Utilities",
      "Roads & Highways",
      "Engineering Consultancy",
      "Project Management",
    ];
  }

  if (normalized.includes("buildings") && normalized.includes("landscape")) {
    return [
      "Architectural Design",
      "Structural Engineering",
      "Landscape Coordination",
      "MEP Engineering",
      "Project Management",
    ];
  }

  if (normalized.includes("buildings")) {
    return [
      "Architectural Design",
      "Structural Engineering",
      "MEP Engineering",
      "Construction Supervision",
      "Project Management",
    ];
  }

  if (normalized.includes("tender")) {
    return [
      "Engineering Consultancy",
      "Wet Utilities",
      "Tenders & QS",
      "Infrastructure Planning",
      "Project Management",
    ];
  }

  return [
    "Architectural Design",
    "Structural Engineering",
    "MEP Engineering",
    "Project Management",
    "Engineering Consultancy",
  ];
}

function buildStats(area: string, scope: string, location: string): ProjectStat[] {
  const digits = area.replace(/[^\d]/g, "");
  const numeric = digits ? Number(digits) : 0;

  let value = digits || "—";
  let suffix = "";
  let label = "Project Area";

  if (numeric >= 1_000_000) {
    value = (numeric / 1_000_000).toFixed(1);
    suffix = "M";
    label = "Million m²";
  } else if (numeric >= 1_000) {
    value = Math.round(numeric / 1_000).toString();
    suffix = "K";
    label = "Thousand m²";
  }

  const region = location.split(",")[0]?.trim() || location;

  return [
    { value, label, suffix },
    { value: region, label: "Location", suffix: "" },
    { value: scope.split(" ")[0] || "Full", label: "Delivery Scope", suffix: "" },
    { value: "MisrConsult", label: "Engineering Partner", suffix: "" },
  ];
}

function buildGallery(categoryId: ProjectCategoryId, heroImage: string): string[] {
  const pool = GALLERY_BY_CATEGORY[categoryId];
  return [heroImage, ...pool.filter((image) => image !== heroImage)].slice(0, 6);
}

export function buildPortfolioProject(input: PortfolioProjectInput): Project {
  const category = getCategoryById(input.categoryId);
  const heroImage = input.heroImage ?? category.image;
  const services = scopeToServices(input.scope);
  const client = input.client ?? "TBD";
  const year = input.year ?? "TBD";

  const tagline =
    input.tagline ??
    `${input.title} — ${input.scope} delivered by MisrConsult in ${input.location}.`;

  const overview =
    input.overview ??
    `MisrConsult provided engineering consultancy for ${input.title}, a ${category.label.toLowerCase()} project located in ${input.location}. The development spans ${input.area} with a delivery scope covering ${input.scope.toLowerCase()}.`;

  const challenge =
    input.challenge ??
    `Delivering coordinated multidisciplinary engineering across a ${input.area} development in ${input.location}, meeting client programme requirements and international design standards.`;

  const solution =
    input.solution ??
    `MisrConsult deployed integrated design coordination, QA/QC governance, and phased delivery aligned with the ${input.scope.toLowerCase()} — ensuring buildable, code-compliant solutions across all disciplines.`;

  return {
    slug: input.slug,
    title: input.title,
    categoryId: input.categoryId,
    location: input.location,
    year,
    client,
    area: input.area,
    heroImage,
    span: "",
    tagline,
    overview,
    challenge,
    solution,
    services,
    gallery: buildGallery(input.categoryId, heroImage),
    stats: buildStats(input.area, input.scope, input.location),
  };
}
