import type { Metadata } from "next";
import { Footer } from "@/components/home/footer";
import { Navbar } from "@/components/home/navbar";
import NewsPageContent from "@/components/news/NewsPage";

export const metadata: Metadata = {
  title: "News & Insights | MisrConsult",
  description:
    "Latest news, certifications, and insights from MisrConsult — Egypt's premier engineering house of expertise.",
};

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main>
        <NewsPageContent />
      </main>
      <Footer />
    </>
  );
}
