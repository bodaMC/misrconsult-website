import { ContactDetails } from "./contact-details";

export function Contact() {
  return (
    <section id="contact" className="relative bg-misr-cream py-24 lg:py-32">
      <div className="gradient-radial-green absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-600">
            Get in Touch
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-misr-950 md:text-5xl lg:text-6xl">
            Let&apos;s Build
            <br />
            <span className="font-semibold text-misr-700">Something Remarkable</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-misr-gold" />
          <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-misr-800/75">
            Whether you&apos;re planning a landmark tower, infrastructure masterplan, or
            specialized engineering challenge — our team is ready to partner with you
            from day one.
          </p>

          <div className="mx-auto mt-12 max-w-md">
            <ContactDetails locationLabel="Headquarters" />
          </div>
        </div>
      </div>
    </section>
  );
}
