import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/home/footer";
import { ProjectPageBySlug } from "@/components/projects/project-page-by-slug";
import { allProjects, getProjectBySlug } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project | MisrConsult" };
  }

  return {
    title: `${project.title} | MisrConsult`,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
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
