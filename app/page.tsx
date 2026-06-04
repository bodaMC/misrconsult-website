import { Navbar } from "@/components/home/navbar";
import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Services } from "@/components/home/services";
import { Projects } from "@/components/home/projects";
import { Stats } from "@/components/home/stats";
import { Clients } from "@/components/home/clients";
import { PortfolioDownload } from "@/components/home/portfolio-download";
import { Contact } from "@/components/home/contact";
import { Footer } from "@/components/home/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Stats />
        <Clients />
        <PortfolioDownload />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
