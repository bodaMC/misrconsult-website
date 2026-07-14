import type { Project } from "./types";


export const mivida: Project = {
  "slug": "mivida",
  "title": "Mivida",
  "categoryId": "residential",
  "location": "Cairo, Egypt",
  "year": "2017",
  "client": "EMAAR",
  "clientLogo": "/clients/emaar-temp.png",
  "clientLogoSize": "max-w-[80px]",
  "area": "3,500,000 m²",
  "heroImage": "/projects/mivida/01.webp",
  "span": "",
  "tagline": "Mivida — Buildings & Infrastructure delivered by Misrconsult in Cairo, Egypt.",
  "overview": "Misrconsult provided engineering consultancy for Mivida, a residential developments project located in Cairo, Egypt. The development spans 3,500,000 m² with a delivery scope covering buildings & infrastructure.",
  "challenge": "Delivering coordinated multidisciplinary engineering across a 3,500,000 m² development in Cairo, Egypt, meeting client programme requirements and international design standards.",
  "solution": "Misrconsult deployed integrated design coordination, QA/QC governance, and phased delivery aligned with the buildings & infrastructure — ensuring buildable, code-compliant solutions across all disciplines.",
  "services": [
    "Infrastructure Planning",
    "Wet Utilities",
    "Roads & Highways",
    "Engineering Consultancy",
    "Project Management"
  ],
  "gallery": [
    "/projects/mivida/01.webp",
    "/projects/mivida/02.webp",
    "/projects/mivida/03.webp",
    "/projects/mivida/04.webp",
  ],
  "stats": [
    {
      "value": "3.5",
      "label": "Million m²",
      "suffix": "M"
    },
    {
      "value": "Cairo",
      "label": "Location",
      "suffix": ""
    },
    {
      "value": "Buildings",
      "label": "Delivery Scope",
      "suffix": ""
    },
    {
      "value": "Emaar",
      "label": "Engineering Partner",
      "suffix": ""
    }
  ],
  "highlights": [
    {
      "title": "Infrastructure Planning",
      "description": "Misrconsult delivered infrastructure planning as part of the engineering scope for Mivida in Cairo, Egypt."
    },
    {
      "title": "Wet Utilities",
      "description": "Misrconsult delivered wet utilities as part of the engineering scope for Mivida in Cairo, Egypt."
    },
    {
      "title": "Roads & Highways",
      "description": "Misrconsult delivered roads & highways as part of the engineering scope for Mivida in Cairo, Egypt."
    }
  ]
};
export const mividaInfrastructure: Project = {
  ...mivida,
  slug: "mivida-infrastructure",
  categoryId: "infrastructure",
  heroImage: "/projects/mivida/04.webp",
};
