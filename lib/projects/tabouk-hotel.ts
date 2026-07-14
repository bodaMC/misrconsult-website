import type { Project } from "./types";

// TODO: Confirm completion year
// TODO: Confirm client name
// TODO: Replace placeholder heroImage with project-specific photography
// TODO: Replace placeholder gallery images with project-specific photography
export const taboukHotel: Project = {
  "slug": "tabouk-hotel",
  "title": "Grand Millennium Hotel",
  "categoryId": "hotels",
  "location": "Tabouk, Saudi Arabia",
  "year": "2011",
  "client": "Grand Millennium",
  "clientLogo": "/clients/grand.png",
  "clientLogoSize": "max-w-[75px]",
  "area": "101,726 m²",
  "heroImage": "/projects/tabouk/01.webp",
  "span": "",
  "tagline": "Tabouk Hotel — Full Design Package delivered by MisrConsult in Tabouk, Saudi Arabia.",
  "overview": "MisrConsult provided engineering consultancy for Tabouk Hotel, a hotels & resorts project located in Tabouk, Saudi Arabia. The development spans 101,726 m² with a delivery scope covering full design package.",
  "challenge": "Delivering coordinated multidisciplinary engineering across a 101,726 m² development in Tabouk, Saudi Arabia, meeting client programme requirements and international design standards.",
  "solution": "MisrConsult deployed integrated design coordination, QA/QC governance, and phased delivery aligned with the full design package — ensuring buildable, code-compliant solutions across all disciplines.",
  "services": [
    "Architectural Design",
    "Structural Engineering",
    "MEP Engineering",
    "Project Management",
    "Engineering Consultancy"
  ],
  "gallery": [
    "/projects/tabouk/01.webp",
    "/projects/tabouk/02.webp",
    "/projects/tabouk/03.webp",
    "/projects/tabouk/04.webp",
    "/projects/tabouk/05.webp",
  ],
  "stats": [
    {
      "value": "102",
      "label": "Thousand m²",
      "suffix": "K"
    },
    {
      "value": "Tabouk",
      "label": "Location",
      "suffix": ""
    },
    {
      "value": "Full",
      "label": "Delivery Scope",
      "suffix": ""
    },
    {
      "value": "Grand Millennium",
      "label": "Engineering Partner",
      "suffix": ""
    }
  ],
  "highlights": [
    {
      "title": "Architectural Design",
      "description": "MisrConsult delivered architectural design as part of the engineering scope for Tabouk Hotel in Tabouk, Saudi Arabia."
    },
    {
      "title": "Structural Engineering",
      "description": "MisrConsult delivered structural engineering as part of the engineering scope for Tabouk Hotel in Tabouk, Saudi Arabia."
    },
    {
      "title": "MEP Engineering",
      "description": "MisrConsult delivered mep engineering as part of the engineering scope for Tabouk Hotel in Tabouk, Saudi Arabia."
    }
  ]
};
export const taboukHotelInfrastructure: Project = {
  ...taboukHotel,
  categoryId: "infrastructure",
};
