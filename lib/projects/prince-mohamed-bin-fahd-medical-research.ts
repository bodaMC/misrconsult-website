import type { Project } from "./types";

// TODO: Confirm completion year
// TODO: Confirm client name
// TODO: Replace placeholder heroImage with project-specific photography
// TODO: Replace placeholder gallery images with project-specific photography
export const princeMohamedBinFahdMedicalResearch: Project = {
  "slug": "prince-mohamed-bin-fahd-medical-research",
  "title": "Prince Mohamed Bin Fahd Center for Medical Research",
  "categoryId": "healthcare",
  "location": "Dammam, Saudi Arabia",
  "year": "1998",
  "client": "University of Dammam",
  "clientLogo": "/clients/University-of-Dammam.png",
  "clientLogoSize": "max-w-[72px]",
  "area": "107,000 m²",
  "heroImage": "/projects/prince-mohamed-ben-fahd/03.webp",
  "span": "",
  "tagline": "Prince Mohamed Bin Fahd Center for Medical Research — Full Design Package delivered by Misrconsult in Dammam, Saudi Arabia.",
  "overview": "Misrconsult provided engineering consultancy for Prince Mohamed Bin Fahd Center for Medical Research, a healthcare & hospitals project located in Dammam, Saudi Arabia. The development spans 107,000 m² with a delivery scope covering full design package.",
  "challenge": "Delivering coordinated multidisciplinary engineering across a 107,000 m² development in Dammam, Saudi Arabia, meeting client programme requirements and international design standards.",
  "solution": "Misrconsult deployed integrated design coordination, QA/QC governance, and phased delivery aligned with the full design package — ensuring buildable, code-compliant solutions across all disciplines.",
  "services": [
    "Architectural Design",
    "Structural Engineering",
    "MEP Engineering",
    "Project Management",
    "Engineering Consultancy"
  ],
  "gallery": [
    "/projects/prince-mohamed-ben-fahd/01.webp",
    "/projects/prince-mohamed-ben-fahd/02.webp",
    "/projects/prince-mohamed-ben-fahd/03.webp",
    "/projects/prince-mohamed-ben-fahd/04.webp",
    "/projects/prince-mohamed-ben-fahd/05.webp",
  ],
  "stats": [
    {
      "value": "107",
      "label": "Thousand m²",
      "suffix": "K"
    },
    {
      "value": "Dammam",
      "label": "Location",
      "suffix": ""
    },
    {
      "value": "Full",
      "label": "Delivery Scope",
      "suffix": ""
    },
    {
      "value": "Uni. of Dammam",
      "label": "Engineering Partner",
      "suffix": ""
    }
  ],
  "highlights": [
    {
      "title": "Architectural Design",
      "description": "Misrconsult delivered architectural design as part of the engineering scope for Prince Mohamed Bin Fahd Center for Medical Research in Dammam, Saudi Arabia."
    },
    {
      "title": "Structural Engineering",
      "description": "Misrconsult delivered structural engineering as part of the engineering scope for Prince Mohamed Bin Fahd Center for Medical Research in Dammam, Saudi Arabia."
    },
    {
      "title": "MEP Engineering",
      "description": "Misrconsult delivered mep engineering as part of the engineering scope for Prince Mohamed Bin Fahd Center for Medical Research in Dammam, Saudi Arabia."
    }
  ]
};
export const princeMohamedBinFahdMedicalResearchInfrastructure: Project = {
  ...princeMohamedBinFahdMedicalResearch,
  slug: "prince-mohamed-bin-fahd-medical-research-infrastructure",
  categoryId: "infrastructure",
};
