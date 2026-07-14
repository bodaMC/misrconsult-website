import type { Project } from "./types";

// TODO: Confirm completion year
// TODO: Confirm client name
// TODO: Replace placeholder heroImage with project-specific photography
// TODO: Replace placeholder gallery images with project-specific photography
export const sarain1: Project = {
  "slug": "sarai-1",
  "title": "Sarai — 1",
  "categoryId": "residential",
  "location": "New Cairo, Egypt",
  "year": "2019",
  "client": "Madinet Masr",
  "clientLogo": "/clients/masr.png",
  "clientLogoSize": "max-w-[67px]",
  "area": "210,000 m²",
  "heroImage": "/projects/sarai-1/05.webp",
  "span": "",
  "tagline": "Sarai — Phase 1 — Full Design Package delivered by Misrconsult in New Cairo, Egypt.",
  "overview": "Misrconsult provided engineering consultancy for Sarai — Phase 1, a residential developments project located in New Cairo, Egypt. The development spans 210,000 m² with a delivery scope covering full design package.",
  "challenge": "Delivering coordinated multidisciplinary engineering across a 210,000 m² development in New Cairo, Egypt, meeting client programme requirements and international design standards.",
  "solution": "Misrconsult deployed integrated design coordination, QA/QC governance, and phased delivery aligned with the full design package — ensuring buildable, code-compliant solutions across all disciplines.",
  "services": [
    "Architectural Design",
    "Structural Engineering",
    "MEP Engineering",
    "Project Management",
    "Engineering Consultancy"
  ],
  "gallery": [
    "/projects/sarai-1/05.webp",
    "/projects/sarai-1/02.webp",
    "/projects/sarai-1/033.webp",
    "/projects/sarai-1/044.webp",
    "/projects/sarai-1/011.webp",
    
  ],
  "stats": [
    {
      "value": "210",
      "label": "Thousand m²",
      "suffix": "K"
    },
    {
      "value": "New Cairo",
      "label": "Location",
      "suffix": ""
    },
    {
      "value": "Full",
      "label": "Delivery Scope",
      "suffix": ""
    },
    {
      "value": "Madinet Masr",
      "label": "Engineering Partner",
      "suffix": ""
    }
  ],
  "highlights": [
    {
      "title": "Architectural Design",
      "description": "Misrconsult delivered architectural design as part of the engineering scope for Sarai — Phase 1 in New Cairo, Egypt."
    },
    {
      "title": "Structural Engineering",
      "description": "Misrconsult delivered structural engineering as part of the engineering scope for Sarai — Phase 1 in New Cairo, Egypt."
    },
    {
      "title": "MEP Engineering",
      "description": "Misrconsult delivered mep engineering as part of the engineering scope for Sarai — Phase 1 in New Cairo, Egypt."
    }
  ]
};
export const sarain1Infrastructure: Project = {
  ...sarain1,
  slug: "sarai-1-infrastructure",
  categoryId: "infrastructure",
};
