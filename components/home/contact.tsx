import { ContactDetails } from "./contact-details";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section id="contact" className="relative bg-misr-cream py-24 lg:py-32">
      <div className="gradient-radial-green absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-600">
              Get in Touch
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-misr-950 md:text-5xl lg:text-6xl">
              Let&apos;s Build
              <br />
              <span className="font-semibold text-misr-700">Something Remarkable</span>
            </h2>
            <div className="mt-6 h-px w-16 bg-misr-gold" />
            <p className="mt-8 max-w-md text-base leading-relaxed text-misr-800/75">
              Whether you&apos;re planning a landmark tower, infrastructure masterplan, or
              specialized engineering challenge — our team is ready to partner with you
              from day one.
            </p>

            <div className="mt-12">
              <ContactDetails locationLabel="Headquarters" />
            </div>
          </div>

          <ContactForm variant="inquiry" />
        </div>
      </div>
    </section>
  );
}
