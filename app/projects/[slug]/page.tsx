import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/home/footer";
import { CategoryPageContent } from "@/components/projects/category-page-content";
import { ProjectPageBySlug } from "@/components/projects/project-page-by-slug";
import {
  PROJECT_CATEGORIES,
  allProjects,
  getCategoryBySlug,
  getProjectBySlug,
} from "@/lib/projects";

type SegmentPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [
    ...allProjects.map((project) => ({ slug: project.slug })),
    ...PROJECT_CATEGORIES.map((category) => ({ slug: category.slug })),
  ];
}

export async function generateMetadata({ params }: SegmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (category) {
    return {
      title: `${category.label} | MisrConsult`,
      description: category.description,
    };
  }

  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Projects | MisrConsult" };
  }

  return {
    title: `${project.title} | MisrConsult`,
    description: project.tagline,
  };
}

export default async function ProjectSegmentPage({ params }: SegmentPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (category) {
    return <CategoryPageContent category={category} />;
  }

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectPageBySlug slug={slug} project={project} />
      <Footer />
    </>
  );
}
