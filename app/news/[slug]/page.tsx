import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/home/footer";
import NewsDetailPage from "@/components/news/NewsDetailPage";
import { getNewsItemBySlug, newsItems } from "@/lib/news";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsItemBySlug(slug);
  if (!item) return { title: "Not Found | MisrConsult" };
  return {
    title: `${item.title} | MisrConsult`,
    description: item.excerpt,
    openGraph: {
      title: item.title,
      description: item.excerpt,
      images: [item.imageUrl],
      type: "article",
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const item = getNewsItemBySlug(slug);
  if (!item) notFound();

  return (
    <>
      <main>
        <NewsDetailPage item={item} />
      </main>
      <Footer />
    </>
  );
}
