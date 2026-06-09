import type { Project } from "./types";

export const cairoTower: Project = {
  slug: "cairo-tower",
  title: "Nile Tower Complex",
  categoryId: "mixed-use",
  location: "Cairo, Egypt",
  year: "2024",
  client: "Nile Development Group",
  area: "185,000 m²",
  heroImage:
    "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2400&auto=format&fit=crop",
  heroVideo:
    "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4",
  span: "lg:col-span-2 lg:row-span-2",
  tagline:
    "A landmark 52-storey mixed-use tower redefining the Cairo skyline.",
  overview:
    "The Nile Tower Complex stands as one of Cairo's most ambitious vertical developments — integrating premium office space, luxury hospitality, and retail within a single structurally unified tower. MisrConsult led full structural and MEP engineering from concept through construction administration.",
  challenge:
    "Designing a supertall structure on complex Nile-adjacent soil conditions while meeting stringent seismic performance criteria and aggressive programme milestones.",
  solution:
    "We deployed a composite mega-frame system with tuned mass damping, BIM-integrated clash detection, and phased construction sequencing that delivered 14% schedule savings without compromising safety margins.",
  services: [
    "Structural Engineering",
    "MEP Engineering",
    "Project Management",
    "BIM Coordination",
    "Construction Supervision",
  ],
  gallery: [
    "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581094794329-c8112a89c12c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
  ],
  stats: [
    { value: "52", label: "Storeys", suffix: "" },
    { value: "185", label: "Thousand m² GFA", suffix: "K" },
    { value: "36", label: "Months Delivery", suffix: "" },
    { value: "14", label: "Schedule Savings", suffix: "%" },
  ],
};
