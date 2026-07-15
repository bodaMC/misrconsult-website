import type { Project } from "./types";

// TODO: Confirm completion year
// TODO: Confirm client name
// TODO: Replace placeholder heroImage with project-specific photography
// TODO: Replace placeholder gallery images with project-specific photography
export const alBurouj: Project = {
  "slug": "al-burouj",
  "title": "Al Burouj",
  "categoryId": "residential",
  "location": "Al-Shorouk, Egypt",
  "year": "2023",
  "client": "Imkan",
  "clientLogo": "/clients/imkan.jpg",
  "clientLogoSize": "max-w-[92px]",
  "area": "17,640,195 m²",
  "heroImage": "/projects/al-burouj/02.webp",
  "span": "",
  "tagline": "Al Burouj — Full Design Package delivered by Misrconsult in Al-Shorouk, Egypt.",
  "overview": "Misrconsult provided engineering consultancy for Al Burouj, a residential developments project located in Al-Shorouk, Egypt. The development spans 17,640,195 m² with a delivery scope covering full design package.",
  "challenge": "Delivering coordinated multidisciplinary engineering across a 17,640,195 m² development in Al-Shorouk, Egypt, meeting client programme requirements and international design standards.",
  "solution": "Misrconsult deployed integrated design coordination, QA/QC governance, and phased delivery aligned with the full design package — ensuring buildable, code-compliant solutions across all disciplines.",
  "services": [
    "Architectural Design",
    "Structural Engineering",
    "MEP Engineering",
    "Project Management",
    "Engineering Consultancy"
  ],
  "gallery": [
    "/projects/al-burouj/04.webp",
    "/projects/al-burouj/02.webp",
    "/projects/al-burouj/03.webp",
    "/projects/al-burouj/01.webp",
    "/projects/al-burouj/05.webp",
    "/projects/al-burouj/06.webp",
    "/projects/al-burouj/07.webp",
    "/projects/al-burouj/08.webp",
    "/projects/al-burouj/09.webp",
    "/projects/al-burouj/10.webp",
    "/projects/al-burouj/11.webp",
    "/projects/al-burouj/12.webp",
    "/projects/al-burouj/13.webp",
    "/projects/al-burouj/15.webp",
    "/projects/al-burouj/16.webp",
    "/projects/al-burouj/14.webp",
  ],
  "stats": [

  ],
  "highlights": [
  ]
};
export const alBuroujInfrastructure: Project = {
  ...alBurouj,
  slug: "al-burouj-infrastructure",
  categoryId: "infrastructure",
  heroImage: "/projects/al-burouj/04.webp",
   "gallery": [
    "/projects/al-burouj/04.webp",
    "/projects/al-burouj/14.webp",
  ],
};
