import type { Project } from "./types";

// TODO: PDF shows 1,400,000 KM² — likely a typo for m²
// TODO: Confirm completion year
// TODO: Confirm client name
// TODO: Replace placeholder heroImage with project-specific photography
// TODO: Replace placeholder gallery images with project-specific photography
export const alKhafjiJointOperationsHousing: Project = {
  "slug": "al-khafji-joint-operations-housing",
  "title": "Al-Khafji Joint Operations Housing Area",
  "categoryId": "residential",
  "location": "Al-Khafji, Saudi Arabia",
  "year": "2004",
  "client": "Al-Khafji",
  "clientLogo": "/clients/khafji-Photoroom.png",
  "clientLogoSize": "max-w-[77px]",
  "area": "1,400,000 m²",
  "heroImage": "/projects/al-khafji/01.webp",
  "span": "",
  "tagline": "Al-Khafji Joint Operations Housing Area — Full Design Package delivered by Misrconsult in Al-Khafji, Saudi Arabia.",
  "overview": "Misrconsult provided engineering consultancy for Al-Khafji Joint Operations Housing Area, a residential developments project located in Al-Khafji, Saudi Arabia. The development spans 1,400,000 m² with a delivery scope covering full design package.",
  "challenge": "Delivering coordinated multidisciplinary engineering across a 1,400,000 m² development in Al-Khafji, Saudi Arabia, meeting client programme requirements and international design standards.",
  "solution": "Misrconsult deployed integrated design coordination, QA/QC governance, and phased delivery aligned with the full design package — ensuring buildable, code-compliant solutions across all disciplines.",
  "services": [
    "Architectural Design",
    "Structural Engineering",
    "MEP Engineering",
    "Project Management",
    "Engineering Consultancy"
  ],
  "gallery": [
    "/projects/al-khafji/01.webp",
    "/projects/al-khafji/02.webp",
    "/projects/al-khafji/03.webp",
    "/projects/al-khafji/04.webp",
    "/projects/al-khafji/05.webp",
  ],
  "stats": [

  ],
  "highlights": [
  
  ]
};
export const alKhafjiJointOperationsHousingInfrastructure: Project = {
  ...alKhafjiJointOperationsHousing,
  slug: "al-khafji-joint-operations-housing-infrastructure",
  categoryId: "infrastructure",
};
