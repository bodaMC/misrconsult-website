import type { Project } from "@/lib/projects";
import { FadeIn } from "../fade-in";
import { ProjectCta } from "../project-cta";
import { ProjectHero } from "../project-hero";
import { ProjectNav } from "../project-nav";

const projectPhases = [
  { phase: "Phase 01", period: "Months 1–8", title: "Site Enabling & Piling", status: "Complete" },
  { phase: "Phase 02", period: "Months 9–18", title: "Concourse Structure", status: "Complete" },
  { phase: "Phase 03", period: "Months 19–28", title: "MEP & Fit-Out", status: "In Progress" },
  { phase: "Phase 04", period: "Months 29–32", title: "Commissioning", status: "Planned" },
];

const criticalSystems = [
  "Baggage Handling Systems",
  "HVAC & Smoke Control",
  "Apron Floodlighting",
  "Fire Suppression Networks",
  "ICAO Nav-Aids Interface",
  "Passenger Boarding Bridges",
];
