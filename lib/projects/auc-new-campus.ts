import type { Project } from "./types";

export const aucNewCampus: Project = {
  "slug": "auc-new-campus",
  "title": "AUC New Campus",
  "categoryId": "educational",
  "location": "Cairo, Egypt",
  "year": "2000",
  "client": "AUC",
  "clientLogo": "/clients/AUC.png",
  "clientLogoSize": "max-w-[55px]",
  "area": "1,000,000 m²",
  "heroImage": "/projects/auc/02.webp",
  "span": "",
  "tagline": "AUC New Campus — Infrastructure delivered by MisrConsult in Cairo, Egypt.",
  "overview": "MisrConsult provided engineering consultancy for AUC New Campus, a educational facilities project located in Cairo, Egypt. The development spans 1,000,000 m² with a delivery scope covering infrastructure.",
  "challenge": "Delivering coordinated multidisciplinary engineering across a 1,000,000 m² development in Cairo, Egypt, meeting client programme requirements and international design standards.",
  "solution": "MisrConsult deployed integrated design coordination, QA/QC governance, and phased delivery aligned with the infrastructure — ensuring buildable, code-compliant solutions across all disciplines.",
  "services": [
    "Infrastructure Planning",
    "Wet Utilities",
    "Roads & Highways",
    "Engineering Consultancy",
    "Project Management"
  ],
  "gallery": [
    "/projects/auc/01.webp",
    "/projects/auc/02.webp",
    "/projects/auc/03.webp",
    "/projects/auc/04.webp",
    "/projects/auc/05.webp",
  ],
  "stats": [
    {
      "value": "1.0",
      "label": "Million m²",
      "suffix": "M"
    },
    {
      "value": "Cairo",
      "label": "Location",
      "suffix": ""
    },
    {
      "value": "Infra.",
      "label": "Delivery Scope",
      "suffix": ""
    },
    {
      "value": "AUC",
      "label": "Engineering Partner",
      "suffix": ""
    }
  ],
  "highlights": [
    {
      "title": "Infrastructure Planning",
      "description": "MisrConsult delivered infrastructure planning as part of the engineering scope for AUC New Campus in Cairo, Egypt."
    },
    {
      "title": "Wet Utilities",
      "description": "MisrConsult delivered wet utilities as part of the engineering scope for AUC New Campus in Cairo, Egypt."
    },
    {
      "title": "Roads & Highways",
      "description": "MisrConsult delivered roads & highways as part of the engineering scope for AUC New Campus in Cairo, Egypt."
    }
  ]
};
export const aucNewCampusInfrastructure: Project = {
  ...aucNewCampus,
  categoryId: "infrastructure",
};