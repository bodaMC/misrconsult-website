import type { Project } from "./types";

// TODO: Confirm completion year
// TODO: Confirm client name
// TODO: Replace placeholder heroImage with project-specific photography
// TODO: Replace placeholder gallery images with project-specific photography
export const ebbUniversityYemen: Project = {
  "slug": "ebb-university-yemen",
  "title": "IBB University",
  "categoryId": "educational",
  "location": "Yemen",
  "year": "2004",
  "client": "Ibb University",
  "clientLogo": "/clients/ebb-yemen.png",
  "clientLogoSize": "max-w-[60px]",
  "area": "800,000 m²",
  "heroImage": "/projects/ebb/03.webp",
  "span": "",
  "tagline": "EBB University — Infrastructure Design delivered by Misrconsult in Yemen.",
  "overview": "Misrconsult provided engineering consultancy for EBB University, a educational facilities project located in Yemen. The development spans 800,000 m² with a delivery scope covering infrastructure design.",
  "challenge": "Delivering coordinated multidisciplinary engineering across a 800,000 m² development in Yemen, meeting client programme requirements and international design standards.",
  "solution": "Misrconsult deployed integrated design coordination, QA/QC governance, and phased delivery aligned with the infrastructure design — ensuring buildable, code-compliant solutions across all disciplines.",
  "services": [
    "Infrastructure Planning",
    "Wet Utilities",
    "Roads & Highways",
    "Engineering Consultancy",
    "Project Management"
  ],
  "gallery": [
    "/projects/ebb/01.webp",
    "/projects/ebb/02.webp",
    "/projects/ebb/03.webp",
  ],
  "stats": [
    {
      "value": "800",
      "label": "Thousand m²",
      "suffix": "K"
    },
    {
      "value": "Yemen",
      "label": "Location",
      "suffix": ""
    },
    {
      "value": "Infrastructure",
      "label": "Delivery Scope",
      "suffix": ""
    },
    {
      "value": "IBB University",
      "label": "Engineering Partner",
      "suffix": ""
    }
  ],
  "highlights": [
    {
      "title": "Infrastructure Planning",
      "description": "Misrconsult delivered infrastructure planning as part of the engineering scope for EBB University in Yemen."
    },
    {
      "title": "Wet Utilities",
      "description": "Misrconsult delivered wet utilities as part of the engineering scope for EBB University in Yemen."
    },
    {
      "title": "Roads & Highways",
      "description": "Misrconsult delivered roads & highways as part of the engineering scope for EBB University in Yemen."
    }
  ]
};
export const ebbUniversityYemenInfrastructure: Project = {
  ...ebbUniversityYemen,
  slug: "ebb-university-yemen-infrastructure",
  categoryId: "infrastructure",
   "heroImage": "/projects/ebb/02.webp",
};
