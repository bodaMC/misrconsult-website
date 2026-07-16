import type { Project } from "./types";

// TODO: Verify whether this is industrial or residential worker housing
// TODO: Confirm completion year
// TODO: Confirm client name
// TODO: Replace placeholder heroImage with project-specific photography
// TODO: Replace placeholder gallery images with project-specific photography
export const laborCamp: Project = {
  "slug": "labor-camp",
  "title": "Labor Camp",
  "categoryId": "residential",
  "location": "Kingdom of Saudi Arabia",
  "year": "2012",
  "client": "Royal Commission for Jubail & Yanbu",
  "clientLogo": "/clients/rcjy-new.png",
  "clientLogoSize": "max-w-[65px]",
  "area": "500,000 m²",
  "heroImage": "/projects/labor-camp/01.webp",
  "span": "",
  "tagline": "Labor Camp — Full Design Package delivered by Misrconsult in Kingdom of Saudi Arabia.",
  "overview": "Misrconsult provided engineering consultancy for Labor Camp, a industrial facilities project located in Kingdom of Saudi Arabia. The development spans 500,000 m² with a delivery scope covering full design package.",
  "challenge": "Delivering coordinated multidisciplinary engineering across a 500,000 m² development in Kingdom of Saudi Arabia, meeting client programme requirements and international design standards.",
  "solution": "Misrconsult deployed integrated design coordination, QA/QC governance, and phased delivery aligned with the full design package — ensuring buildable, code-compliant solutions across all disciplines.",
  "services": [
    "Architectural Design",
    "Structural Engineering",
    "MEP Engineering",
    "Project Management",
    "Engineering Consultancy"
  ],
  "gallery": [
    "/projects/labor-camp/02.webp",
    "/projects/labor-camp/03.webp",
    "/projects/labor-camp/04.webp",
    "/projects/labor-camp/05.webp",
   "/projects/labor-camp/05.webp",
    "/projects/labor-camp/06.webp",
    "/projects/labor-camp/07.webp",
    "/projects/labor-camp/08.webp",
    "/projects/labor-camp/09.webp",
  ],
  "stats": [
    {
      "value": "500",
      "label": "Thousand m²",
      "suffix": "K"
    },
    {
      "value": "Kingdom of Saudi Arabia",
      "label": "Location",
      "suffix": ""
    },
    {
      "value": "Full",
      "label": "Delivery Scope",
      "suffix": ""
    },
    {
      "value": "Royal Commission",
      "label": "Engineering Partner",
      "suffix": ""
    }
  ],
  "highlights": [
    {
      "title": "Architectural Design",
      "description": "Misrconsult delivered architectural design as part of the engineering scope for Labor Camp in Kingdom of Saudi Arabia."
    },
    {
      "title": "Structural Engineering",
      "description": "Misrconsult delivered structural engineering as part of the engineering scope for Labor Camp in Kingdom of Saudi Arabia."
    },
    {
      "title": "MEP Engineering",
      "description": "Misrconsult delivered mep engineering as part of the engineering scope for Labor Camp in Kingdom of Saudi Arabia."
    }
  ]
};
export const laborCampInfrastructure: Project = {
  ...laborCamp,
  slug: "labor-camp-infrastructure",
  categoryId: "infrastructure",
};
