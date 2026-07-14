import type { Project } from "./types";

// TODO: Confirm completion year
// TODO: Confirm client name
// TODO: Replace placeholder heroImage with project-specific photography
// TODO: Replace placeholder gallery images with project-specific photography
export const n97Hills: Project = {
  "slug": "97-hills",
  "title": "97 Hills",
  "categoryId": "residential",
  "location": "Cairo, Egypt",
  "year": "Ongoing",
  "client": "Palm Hills",
  "clientLogo": "/clients/palm-hills.png",
  clientLogoSize: "max-w-[60px]",
  "area": "407,400 m²",
  span: "Full Design Package",
  "heroImage": "/projects/97-hills/05.webp",
  "tagline": "97 Hills — Full Design Package delivered by MisrConsult in Cairo, Egypt.",
  "overview": "MisrConsult provided engineering consultancy for 97 Hills, a residential developments project located in Cairo, Egypt. The development spans 407,400 m² with a delivery scope covering full design package.",
  "challenge": "Delivering coordinated multidisciplinary engineering across a 407,400 m² development in Cairo, Egypt, meeting client programme requirements and international design standards.",
  "solution": "MisrConsult deployed integrated design coordination, QA/QC governance, and phased delivery aligned with the full design package — ensuring buildable, code-compliant solutions across all disciplines.",
  "services": [
    "Architectural Design",
    "Structural Engineering",
    "MEP Engineering",
    "Project Management",
    "Engineering Consultancy"
  ],
  "gallery": [
    "/projects/97-hills/13.webp",
    "/projects/97-hills/02.webp",
    "/projects/97-hills/03.webp",
    "/projects/97-hills/04.webp",
    "/projects/97-hills/05.webp",
    "/projects/97-hills/06.webp",
    "/projects/97-hills/07.webp",
    "/projects/97-hills/08.webp",
    "/projects/97-hills/09.webp",
    "/projects/97-hills/10.webp",
    "/projects/97-hills/11.webp",
    "/projects/97-hills/12.webp",
    "/projects/97-hills/01.webp",
    
  ],
  "stats": [
    {
      "value": "407",
      "label": "Thousand m²",
      "suffix": "K"
    },
    {
      "value": "Cairo",
      "label": "Location",
      "suffix": ""
    },
    {
      "value": "Full",
      "label": "Delivery Scope",
      "suffix": ""
    },
    {
      "value": "Palm Hills",
      "label": "Engineering Partner",
      "suffix": ""
    }
  ],
  "highlights": [
    {
      "title": "Architectural Design",
      "description": "MisrConsult delivered architectural design as part of the engineering scope for 97 Hills in Cairo, Egypt."
    },
    {
      "title": "Structural Engineering",
      "description": "MisrConsult delivered structural engineering as part of the engineering scope for 97 Hills in Cairo, Egypt."
    },
    {
      "title": "MEP Engineering",
      "description": "MisrConsult delivered mep engineering as part of the engineering scope for 97 Hills in Cairo, Egypt."
    }
  ]
};
export const n97HillsInfrastructure: Project = {
  ...n97Hills,
  slug: "97-hills-infrastructure",
  categoryId: "infrastructure",
  heroImage: "/projects/97-hills-infra/01.webp",
   gallery: [ "/projects/97-hills-infra/01.webp",
    "/projects/97-hills-infra/02.webp",
     ],
};
