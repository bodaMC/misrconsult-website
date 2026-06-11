import type { Project } from "./types";

// TODO: PDF shows "???" for one area field — using 420,000 m² from portfolio slide
// TODO: Confirm completion year
// TODO: Replace placeholder heroImage with project-specific photography
// TODO: Replace placeholder gallery images with project-specific photography
export const mividaGardens: Project = {
  "slug": "mivida-gardens",
  "title": "Mivida Gardens",
  "categoryId": "residential",
  "location": "5th Settlement, Cairo, Egypt",
  "year": "TBD",
  "client": "EMAAR",
  "clientLogo": "/clients/emaar-temp.png",
  "clientLogoSize": "max-w-[80px]",
  "area": "420,000 m²",
  "heroImage":  "/projects/mivida-gardens/03.png",
  "span": "",
  "tagline": "Mivida Gardens — Full Design Package delivered by MisrConsult in 5th Settlement, Cairo, Egypt.",
  "overview": "MisrConsult provided engineering consultancy for Mivida Gardens, a residential developments project located in 5th Settlement, Cairo, Egypt. The development spans 420,000 m² with a delivery scope covering full design package.",
  "challenge": "Delivering coordinated multidisciplinary engineering across a 420,000 m² development in 5th Settlement, Cairo, Egypt, meeting client programme requirements and international design standards.",
  "solution": "MisrConsult deployed integrated design coordination, QA/QC governance, and phased delivery aligned with the full design package — ensuring buildable, code-compliant solutions across all disciplines.",
  "services": [
    "Architectural Design",
    "Structural Engineering",
    "MEP Engineering",
    "Project Management",
    "Engineering Consultancy"
  ],
  "gallery": [
    "/projects/mivida-gardens/01.png",
    "/projects/mivida-gardens/02.png",
    "/projects/mivida-gardens/03.png",
    "/projects/mivida-gardens/04.png",
    "/projects/mivida-gardens/05.png",
    "/projects/mivida-gardens/06.png",
  ],
  "stats": [
    {
      "value": "420",
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
      "value": "MisrConsult",
      "label": "Engineering Partner",
      "suffix": ""
    }
  ],
  "highlights": [
    {
      "title": "Architectural Design",
      "description": "MisrConsult delivered architectural design as part of the engineering scope for Mivida Gardens in 5th Settlement, Cairo, Egypt."
    },
    {
      "title": "Structural Engineering",
      "description": "MisrConsult delivered structural engineering as part of the engineering scope for Mivida Gardens in 5th Settlement, Cairo, Egypt."
    },
    {
      "title": "MEP Engineering",
      "description": "MisrConsult delivered mep engineering as part of the engineering scope for Mivida Gardens in 5th Settlement, Cairo, Egypt."
    }
  ]
};
