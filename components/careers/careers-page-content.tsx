import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/projects/fade-in";
import { ContactDetails } from "@/components/home/contact-details";
import { ContactForm } from "@/components/home/contact-form";

const CAREERS_IMAGE = "/careers/01.png";

export default function CareersPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-misr-950">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 animate-slow-zoom bg-cover bg-center"
            style={{ backgroundImage: `url('${CAREERS_IMAGE}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-misr-950/60 via-misr-950/50 to-misr-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-misr-950/90 via-misr-950/50 to-transparent" />
          <div className="gradient-radial-green absolute inset-0" />
        </div>
        <div className="absolute inset-0 grid-architecture opacity-30" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
          <Link
            href="/"
            className="animate-fade-up group mb-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-misr-gold"
          >
            <span className="flex h-8 w-8 items-center justify-center border border-white/20 transition-all duration-300 group-hover:border-misr-gold">
              ←
            </span>
            Back to Home
          </Link>

          <span className="animate-fade-up animation-delay-200 text-xs font-semibold uppercase tracking-[0.35em] text-misr-gold">
            Join Our Team
          </span>
          <h1 className="animate-fade-up animation-delay-400 mt-4 max-w-3xl font-[family-name:var(--font-cormorant)] text-5xl font-light leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            <span className="font-semibold text-misr-400">Careers</span>
          </h1>
          <p className="animate-fade-up animation-delay-600 mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            Join MisrConsult and help shape the future of engineering, architecture,
            and infrastructure across the region.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-misr-gold/50 to-transparent" />
      </section>

      {/* Intro */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="absolute inset-0 grid-architecture opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-600">
                Our Culture
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-misr-950 md:text-5xl">
                Build Your Career at{" "}
                <span className="font-semibold text-misr-700">MisrConsult</span>
              </h2>
              <div className="mx-auto mt-6 h-px w-16 bg-misr-gold" />
              <p className="mt-8 text-base leading-relaxed text-misr-800/75 md:text-lg">
                For over three decades, MisrConsult has been the engineering partner
                behind landmark developments across Egypt and the wider region. We
                attract professionals who value technical excellence, collaborative
                problem-solving, and the opportunity to work on projects that define
                skylines and communities.
              </p>
              <p className="mt-6 text-base leading-relaxed text-misr-800/75 md:text-lg">
                Whether you are an experienced engineer, architect, or emerging talent,
                MisrConsult offers an environment where your expertise contributes to
                meaningful, large-scale outcomes — from concept through construction
                supervision.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="relative overflow-hidden bg-misr-950 py-24 lg:py-32">
        <div className="absolute inset-0 grid-architecture opacity-15" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-5xl">
              <div className="mb-10 text-center">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-gold">
                  Life at MisrConsult
                </span>
                <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-white md:text-5xl">
                  Engineering{" "}
                  <span className="font-semibold text-misr-400">Excellence</span>
                </h2>
                <div className="mx-auto mt-6 h-px w-16 bg-misr-gold" />
              </div>

              <div className="group relative overflow-hidden border border-white/10">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={CAREERS_IMAGE}
                    alt="MisrConsult team and workplace"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1280px) 100vw, 1024px"
                    priority
                  />
                  <div className="absolute inset-0 bg-misr-950/10 transition-colors duration-500 group-hover:bg-misr-950/20" />
                </div>
                <div className="absolute left-0 top-0 h-1 w-0 bg-misr-gold transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Apply Now */}
      <section className="relative bg-misr-cream py-24 lg:py-32">
        <div className="gradient-radial-green absolute inset-0" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <FadeIn>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-600">
                  Apply Now
                </span>
                <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-misr-950 md:text-5xl lg:text-6xl">
                  Start Your
                  <br />
                  <span className="font-semibold text-misr-700">Application</span>
                </h2>
                <div className="mt-6 h-px w-16 bg-misr-gold" />
                <p className="mt-8 max-w-md text-base leading-relaxed text-misr-800/75">
                  Share your details and tell us about the role you are interested in.
                  Our team reviews every application and will be in touch if there is
                  a suitable opportunity.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={120}>
              <ContactForm variant="application" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="absolute inset-0 grid-architecture opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-600">
                  Contact
                </span>
                <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-misr-950 md:text-5xl">
                  Get in{" "}
                  <span className="font-semibold text-misr-700">Touch</span>
                </h2>
                <div className="mt-6 h-px w-16 bg-misr-gold" />
                <p className="mt-8 max-w-md text-base leading-relaxed text-misr-800/75">
                  For career enquiries, you can also reach our team directly using the
                  contact details below.
                </p>
              </div>

              <ContactDetails />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
