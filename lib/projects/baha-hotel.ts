import type { Project } from "./types";


export const bahaHotel: Project = {
  "slug": "baha-hotel",
  "title": "Baha Hotel",
  "categoryId": "hotels",
  "location": "Al Baha, Saudi Arabia",
  "year": "2011",
  "client": "Higher Education Fund",
  "clientLogo": "/clients/sandouq.png",
  "clientLogoSize": "max-w-[75px]",
  "area": "103,000 m²",
  "heroImage": "/projects/baha/04.webp",
  "span": "",
  "tagline": "Baha Hotel — Full Design Package delivered by Misrconsult in Al Baha, Saudi Arabia.",
  "overview": "Misrconsult provided engineering consultancy for Baha Hotel, a hotels & resorts project located in Al Baha, Saudi Arabia. The development spans 103,000 m² with a delivery scope covering full design package.",
  "challenge": "Delivering coordinated multidisciplinary engineering across a 103,000 m² development in Al Baha, Saudi Arabia, meeting client programme requirements and international design standards.",
  "solution": "Misrconsult deployed integrated design coordination, QA/QC governance, and phased delivery aligned with the full design package — ensuring buildable, code-compliant solutions across all disciplines.",
  "services": [
    "Architectural Design",
    "Structural Engineering",
    "MEP Engineering",
    "Project Management",
    "Engineering Consultancy"
  ],
  "gallery": [
    "/projects/baha/04.webp",
    "/projects/baha/02.webp",
    "/projects/baha/01.webp",
    "/projects/baha/03.webp",
    "/projects/baha/01.webp",
  ],
  "stats": [
   
  ],
  "highlights": [
   
  ]
};
export const bahaHotelInfrastructure: Project = {
  ...bahaHotel,
  slug: "baha-hotel-infrastructure",
  categoryId: "infrastructure",
};
