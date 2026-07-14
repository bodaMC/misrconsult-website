import type { Project } from "./types";

// TODO: Confirm completion year
// TODO: Confirm client name
// TODO: Replace placeholder heroImage with project-specific photography
// TODO: Replace placeholder gallery images with project-specific photography
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
  "tagline": "Zed East — Full Design Package delivered by MisrConsult in 5th Settlement, Cairo, Egypt.",
  "overview": "MisrConsult provided engineering consultancy for Zed East, a residential developments project located in 5th Settlement, Cairo, Egypt. The development spans 156,000 m² with a delivery scope covering full design package.",
  "challenge": "Delivering coordinated multidisciplinary engineering across a 156,000 m² development in 5th Settlement, Cairo, Egypt, meeting client programme requirements and international design standards.",
  "solution": "MisrConsult deployed integrated design coordination, QA/QC governance, and phased delivery aligned with the full design package — ensuring buildable, code-compliant solutions across all disciplines.",
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
    {
      "value": "156",
      "label": "Thousand m²",
      "suffix": "K"
    },
    {
      "value": "5th Settlement",
      "label": "Location",
      "suffix": ""
    },
    {
      "value": "Full",
      "label": "Delivery Scope",
      "suffix": ""
    },
    {
      "value": "ORA",
      "label": "Engineering Partner",
      "suffix": ""
    }
  ],
  "highlights": [
    {
      "title": "Architectural Design",
      "description": "MisrConsult delivered architectural design as part of the engineering scope for Zed East in 5th Settlement, Cairo, Egypt."
    },
    {
      "title": "Structural Engineering",
      "description": "MisrConsult delivered structural engineering as part of the engineering scope for Zed East in 5th Settlement, Cairo, Egypt."
    },
    {
      "title": "MEP Engineering",
      "description": "MisrConsult delivered mep engineering as part of the engineering scope for Zed East in 5th Settlement, Cairo, Egypt."
    }
  ]
};
export const zedEastInfrastructure: Project = {
  ...zedEast,
  categoryId: "infrastructure",
};
