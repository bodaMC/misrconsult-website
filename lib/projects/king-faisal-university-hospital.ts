import type { Project } from "./types";

// TODO: Confirm completion year

export const kingFaisalUniversityHospital: Project = {
  "slug": "king-faisal-university-hospital",
  "title": "King Faisal University Hospital",
  "categoryId": "healthcare",
  "location": "Kingdom of Saudi Arabia",
  "year": "2007",
  "client": "King Faisal University",
  "clientLogo": "/clients/kfu-logo.png",
  "clientLogoSize": "max-w-[84px]",
  "area": "106,000 m²",
  "heroImage":  "/projects/kfu-hospital/02.webp",
  "span": "",
  "tagline": "King Faisal University Hospital — Full Design Package delivered by Misrconsult in Kingdom of Saudi Arabia.",
  "overview": "The project comprises a four-level facility featuring a parking level, public dealings areas, consular offices, and telecommunications and accounting facilities. MisrConsult provided the working drawings and complete construction documentation for the project in association with CDC Architect Abdel-Halim Ibrahim.",
  "challenge": "Delivering coordinated multidisciplinary engineering across a 13,780 m² development in Kingdom of Saudi Arabia, meeting client programme requirements and international design standards.",
  "solution": "Misrconsult deployed integrated design coordination, QA/QC governance, and phased delivery aligned with the full design package — ensuring buildable, code-compliant solutions across all disciplines.",
  "services": [
    "Architectural Design",
    "Structural Engineering",
    "MEP Engineering",
    "Project Management",
    "Engineering Consultancy"
  ],
  "gallery": [
     "/projects/kfu-hospital/01.webp",
     "/projects/kfu-hospital/02.webp",
     "/projects/kfu-hospital/03.webp",
     "/projects/kfu-hospital/04.webp",
  ],
  "stats": [
    {
      "value": "106",
      "label": "Thousand m²",
      "suffix": "K"
    },
    {
      "value": "KSA",
      "label": "Location",
      "suffix": ""
    },
    {
      "value": "Full",
      "label": "Delivery Scope",
      "suffix": ""
    },
    {
      "value": "King Faisal University",
      "label": "Engineering Partner",
      "suffix": ""
    }
  ],
  "highlights": [
    {
      "title": "Architectural Design",
      "description": "Misrconsult delivered architectural design as part of the engineering scope for King Faisal University Hospital in Kingdom of Saudi Arabia."
    },
    {
      "title": "Structural Engineering",
      "description": "Misrconsult delivered structural engineering as part of the engineering scope for King Faisal University Hospital in Kingdom of Saudi Arabia."
    },
    {
      "title": "MEP Engineering",
      "description": "Misrconsult delivered mep engineering as part of the engineering scope for King Faisal University Hospital in Kingdom of Saudi Arabia."
    }
  ]
};
export const kingFaisalUniversityHospitalInfrastructure: Project = {
  ...kingFaisalUniversityHospital,
  slug: "king-faisal-university-hospital-infrastructure",
  categoryId: "infrastructure",
};
