import type { Project } from "./types";


export const zedEast: Project = {
  "slug": "zed-east",
  "title": "Zed East",
  "categoryId": "residential",
  "location": "5th Settlement, Cairo, Egypt",
  "year": "2022",
  "client": "ORA",
  "clientLogo": "/clients/ora.png",
  "clientLogoSize": "max-w-[80px]",
  "area": "156,000 m²",
  "heroImage": "/projects/zed-east/01.webp",
  "span": "",
  "tagline": "Zed East — Full Design Package delivered by Misrconsult in 5th Settlement, Cairo, Egypt.",
  "overview": "The project features three prototype buildings (G+8 and G+5) replicated across three sites, comprising 17 buildings with a 77,000 m² underground parking facility for 1,640 cars. Misrconsult provided the full architectural design, from concept review to complete construction documentation.",
  "challenge": "Delivering coordinated multidisciplinary engineering across a 156,000 m² development in 5th Settlement, Cairo, Egypt, meeting client programme requirements and international design standards.",
  "solution": "Misrconsult deployed integrated design coordination, QA/QC governance, and phased delivery aligned with the full design package — ensuring buildable, code-compliant solutions across all disciplines.",
  "services": [
    "Architectural Design",
    "Structural Engineering",
    "MEP Engineering",
    "Project Management",
    "Engineering Consultancy"
  ],
  "gallery": [
    "/projects/zed-east/01.webp",
    "/projects/zed-east/02.webp",
    "/projects/zed-east/03.webp",
    "/projects/zed-east/04.webp",
    "/projects/zed-east/05.webp",    
  ],
  "stats": [
  ],
  "highlights": [

  ]
};
export const zedEastInfrastructure: Project = {
  ...zedEast,
  slug: "zed-east-infrastructure",
  categoryId: "infrastructure",
  heroImage: "/projects/zed-east/05.webp",
};
