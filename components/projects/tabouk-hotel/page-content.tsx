import type { Project } from "@/lib/projects";
import { StandardProjectPageContent } from "../standard-project-page-content";

export function TaboukHotelPageContent({ project }: { project: Project }) {
  return <StandardProjectPageContent project={project} />;
}
