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

            <div className="mt-12 space-y-8">
              {[
                {
                  label: "Headquarters",
                  value: "Maadi Palace Tower, 4th Floor, Cairo, Egypt",
                },
                { label: "Email", value: "info@misrconsult-eng.com" },
                { label: "Phone", value: "+202 2378-5939" },
              ].map((item) => (
                <div key={item.label} className="group">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-misr-600">
                    {item.label}
                  </p>
                  <p className="mt-2 text-base text-misr-950 transition-colors duration-300 group-hover:text-misr-600">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <form className="relative border border-misr-800/10 bg-white p-8 shadow-xl shadow-misr-950/5 lg:p-12">
            <div className="absolute -right-2 -top-2 h-16 w-16 border-r-2 border-t-2 border-misr-gold/40" />
            <div className="absolute -bottom-2 -left-2 h-16 w-16 border-b-2 border-l-2 border-misr-gold/40" />

            <div className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-misr-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full border-b border-misr-800/20 bg-transparent py-3 text-misr-950 outline-none transition-colors placeholder:text-misr-800/30 focus:border-misr-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-misr-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    className="w-full border-b border-misr-800/20 bg-transparent py-3 text-misr-950 outline-none transition-colors placeholder:text-misr-800/30 focus:border-misr-600"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-misr-700"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Organization name"
                  className="w-full border-b border-misr-800/20 bg-transparent py-3 text-misr-950 outline-none transition-colors placeholder:text-misr-800/30 focus:border-misr-600"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-misr-700"
                >
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full border-b border-misr-800/20 bg-transparent py-3 text-misr-950 outline-none transition-colors focus:border-misr-600"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="structural">Structural Engineering</option>
                  <option value="architectural">Architectural Design</option>
                  <option value="pm">Project Management</option>
                  <option value="infrastructure">Infrastructure Planning</option>
                  <option value="mep">MEP Engineering</option>
                  <option value="advisory">Consultancy & Advisory</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-misr-700"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full resize-none border-b border-misr-800/20 bg-transparent py-3 text-misr-950 outline-none transition-colors placeholder:text-misr-800/30 focus:border-misr-600"
                />
              </div>

              <button
                type="submit"
                className="group w-full bg-misr-800 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-misr-600"
              >
                <span className="inline-flex items-center justify-center gap-3">
                  Send Inquiry
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
