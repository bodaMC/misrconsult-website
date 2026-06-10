import type { Project } from "@/lib/projects";
import { AirportPageContent } from "./airport/page-content";
import { BusinessHubPageContent } from "./business-hub/page-content";
import { CairoTowerPageContent } from "./cairo-tower/page-content";
import { ProjectGalleryLightboxProvider } from "./gallery-lightbox";
import { OraSilversandsPageContent } from "./ora-silversands/page-content";
import { portfolioPageContentBySlug } from "./portfolio-page-registry";
import { StandardProjectPageContent } from "./standard-project-page-content";

const customContentBySlug = {
  "cairo-tower": CairoTowerPageContent,
  "business-hub": BusinessHubPageContent,
  airport: AirportPageContent,
  "ora-silversands": OraSilversandsPageContent,
} as const;

type CustomProjectSlug = keyof typeof customContentBySlug;
type PortfolioProjectSlug = keyof typeof portfolioPageContentBySlug;

function isCustomProjectSlug(slug: string): slug is CustomProjectSlug {
  return slug in customContentBySlug;
}

function isPortfolioProjectSlug(slug: string): slug is PortfolioProjectSlug {
  return slug in portfolioPageContentBySlug;
}

type ProjectPageBySlugProps = {
  slug: string;
  project: Project;
};

export function ProjectPageBySlug({ slug, project }: ProjectPageBySlugProps) {
  let content;

  if (isCustomProjectSlug(slug)) {
    const Content = customContentBySlug[slug];
    content = <Content project={project} />;
  } else if (isPortfolioProjectSlug(slug)) {
    const Content = portfolioPageContentBySlug[slug];
    content = <Content project={project} />;
  } else {
    content = <StandardProjectPageContent project={project} />;
  }

  return <ProjectGalleryLightboxProvider>{content}</ProjectGalleryLightboxProvider>;
}
