import type { Project } from "@/lib/projects";
import { StandardProjectPageContent } from "../standard-project-page-content";

export function JubailIndustrialCollegePageContent({ project }: { project: Project }) {
  return <StandardProjectPageContent project={project} />;
}
