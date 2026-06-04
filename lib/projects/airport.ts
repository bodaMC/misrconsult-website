import type { Project } from "./types";

export const airport: Project = {
  slug: "airport",
  title: "Cairo International Airport Terminal Expansion",
  category: "Transport",
  location: "Heliopolis, Cairo, Egypt",
  year: "2025",
  client: "Egyptian Holding Company for Airports",
  area: "95,000 m²",
  heroImage:
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2400&auto=format&fit=crop",
  heroVideo:
    "https://videos.pexels.com/video-files/1280955/1280955-hd_1920_1080_25fps.mp4",
  span: "",
  tagline:
    "Next-generation terminal infrastructure serving 40 million passengers annually.",
  overview:
    "The Cairo International Airport Terminal Expansion delivers a new international concourse, expanded apron infrastructure, and integrated landside facilities. MisrConsult led structural engineering, MEP systems design, and construction-phase coordination across live airport operations.",
  challenge:
    "Expanding terminal capacity while maintaining 24/7 flight operations, coordinating airside and landside interfaces, and meeting ICAO Category II performance standards within a compressed delivery window.",
  solution:
    "Phased construction envelopes, modular roof truss systems, and a dedicated airside logistics corridor enabled parallel workstreams without operational disruption — delivering the concourse shell 11 weeks ahead of programme.",
  services: [
    "Structural Engineering",
    "MEP Engineering",
    "Infrastructure Planning",
    "Project Management",
    "Aviation Systems Integration",
  ],
  gallery: [
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556388150-64d6c638e972?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1474309093492-40abbe88b7ad?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581094794329-c8112a89c12c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
  ],
  stats: [
    { value: "40", label: "Million Passengers/yr", suffix: "M" },
    { value: "95", label: "Thousand m² GFA", suffix: "K" },
    { value: "24", label: "Hour Operations", suffix: "/7" },
    { value: "11", label: "Weeks Ahead", suffix: "" },
  ],
};
