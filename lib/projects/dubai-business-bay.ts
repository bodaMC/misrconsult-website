import type { Project } from "./types";

// TODO: Confirm completion year
// TODO: Confirm client name
export const dubaiBusinessBay: Project = {
  "slug": "dubai-business-bay",
  "title": "Dubai Business Bay",
  "categoryId": "mixed-use",
  "location": "Dubai, UAE",
  "year": "2013",
  "client": "SWA Group",
  "clientLogo": "/clients/swa-black.jpg",
  "clientLogoSize": "max-w-[60px]",
  "area": "4,460,000 m²",
  "heroImage":"/projects/dubai/03.webp",
  "span": "",
  "tagline": "Dubai Business Bay — Infrastructure Design delivered by Misrconsult in Dubai, UAE.",
  "overview": "Misrconsult provided engineering consultancy for Dubai Business Bay, a mixed-use developments project located in Dubai, UAE. The development spans 4,460,000 m² with a delivery scope covering infrastructure design.",
  "challenge": "Delivering coordinated multidisciplinary engineering across a 4,460,000 m² development in Dubai, UAE, meeting client programme requirements and international design standards.",
  "solution": "Misrconsult deployed integrated design coordination, QA/QC governance, and phased delivery aligned with the infrastructure design — ensuring buildable, code-compliant solutions across all disciplines.",
  "services": [
    "Infrastructure Planning",
    "Wet Utilities",
    "Roads & Highways",
    "Engineering Consultancy",
    "Project Management"
  ],
  "gallery": [
    "/projects/dubai/01.webp",
    "/projects/dubai/02.webp",
    "/projects/dubai/03.webp",
  ],
  "stats": [

  ],
  "highlights": [

  ]
};
export const dubaiBusinessBayInfrastructure: Project = {
  ...dubaiBusinessBay,
  slug: "dubai-business-bay-infrastructure",
  categoryId: "infrastructure",
};
