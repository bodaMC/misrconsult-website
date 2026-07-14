import type { Metadata } from "next";
import CareersPageContent from "@/components/careers/careers-page-content";
import { Footer } from "@/components/home/footer";
import { Navbar } from "@/components/home/navbar";

export const metadata: Metadata = {
  title: "Careers | Misrconsult",
  description:
    "Join Misrconsult and help shape the future of engineering, architecture, and infrastructure across the region.",
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        <CareersPageContent />
      </main>
      <Footer />
    </>
  );
}
