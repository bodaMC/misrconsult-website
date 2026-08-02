import type { Project } from "./types";

// TODO: Confirm completion year
// TODO: Confirm client name
// TODO: Replace placeholder heroImage with project-specific photography
// TODO: Replace placeholder gallery images with project-specific photography
export const capitalGardensNewCairo: Project = {
  "slug": "capital-gardens-new-cairo",
  "title": "Capital Gardens New Cairo",
  "categoryId": "residential",
  "location": "New Cairo, Egypt",
  "year": "Ongoing",
  "client": "Palm Hills",
  "clientLogo": "/clients/palm-hills.png",
  "clientLogoSize": "max-w-[60px]",
  "area": "518,707 m²",
  "heroImage": "/projects/capital-gardens/01.webp",
  "span": "",
  "tagline": "Capital Gardens New Cairo — Full Design Package delivered by Misrconsult in New Cairo, Egypt.",
  "overview": "The project spans a 434,000 m² site with a total built-up area of 518,707 m², comprising 133 residential buildings, nine underground parking facilities, and extensive infrastructure works. Misrconsult provided the master plan, detailed multidisciplinary design, tender documentation, permit drawings, and complete infrastructure design for the entire development.",
  "challenge": "Delivering coordinated multidisciplinary engineering across a 518,707 m² development in New Cairo, Egypt, meeting client programme requirements and international design standards.",
  "solution": "Misrconsult deployed integrated design coordination, QA/QC governance, and phased delivery aligned with the full design package — ensuring buildable, code-compliant solutions across all disciplines.",
  "services": [
    "Architectural Design",
    "Structural Engineering",
    "MEP Engineering",
    "Project Management",
    "Engineering Consultancy"
  ],
  "gallery": [
    "/projects/capital-gardens/01.webp",
    "/projects/capital-gardens/02.webp",
    "/projects/capital-gardens/04.webp",
  ],
  "stats": [
   
  ],
  "highlights": [

  ]
};
export const capitalGardensNewCairoInfrastructure: Project = {
  ...capitalGardensNewCairo,
  slug: "capital-gardens-new-cairo-infrastructure",
  categoryId: "infrastructure",
};
