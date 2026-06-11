import type { Project } from "./types";

export const oraSilversands: Project = {
  slug: "ora-silversands",
  title: "ORA Silversands",
  categoryId: "residential",
  location: "North Coast, Egypt",
  year: "2024",
  client: "ORA",
  clientLogo: "/clients/ora.png",
  clientLogoSize: "max-w-[80px]",
  area: "700,000 m²",
  heroImage: "/projects/ora-silversands/01.jpg",
  span: "",
  tagline:
    "A master-planned coastal community redefining luxury living on Egypt's North Coast.",
  overview:
    "ORA Silversands is a landmark residential destination spanning 700,000 m² along Egypt's North Coast — integrating villas, apartments, lagoon networks, and resort amenities within a unified master plan. MisrConsult delivered structural engineering, infrastructure coordination, and construction-phase supervision across all residential phases.",
  challenge:
    "Engineering a large-scale coastal development on sandy terrain while managing marine exposure, phased delivery across multiple building typologies, and strict programme milestones for a premium residential launch.",
  solution:
    "Coastal-adapted foundation systems, centralised MEP distribution networks, and phased BIM-coordinated construction sequencing enabled parallel delivery of residential clusters without compromising structural integrity or finish quality.",
  services: [
    "Structural Engineering",
    "Infrastructure Planning",
    "MEP Engineering",
    "Project Management",
    "Construction Supervision",
  ],
  gallery: [
    "/projects/ora-silversands/02.jpg",
    "/projects/ora-silversands/01.jpg",
    "/projects/ora-silversands/04.jpg",
    "/projects/ora-silversands/05.jpg",
  ],
  stats: [
    { value: "700", label: "Thousand m² Development", suffix: "K" },
    { value: "6", label: "Residential Phases", suffix: "" },
    { value: "48", label: "Months Programme", suffix: "" },
    { value: "100", label: "On-Time Milestones", suffix: "%" },
  ],
};
