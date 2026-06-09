import type { Project } from "@/lib/projects";
import { StandardProjectPageContent } from "../standard-project-page-content";

export function EgyptianConsulateJeddahPageContent({ project }: { project: Project }) {
  return <StandardProjectPageContent project={project} />;
}
