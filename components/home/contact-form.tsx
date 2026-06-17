const inputClassName =
  "w-full border-b border-misr-800/20 bg-transparent py-3 text-misr-950 outline-none transition-colors placeholder:text-misr-800/30 focus:border-misr-600";

const labelClassName =
  "mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-misr-700";

type ContactFormProps = {
  variant?: "inquiry" | "application";
  defaultPosition?: string;
};

export function ContactForm({
  variant = "inquiry",
  defaultPosition = "",
}: ContactFormProps) {
  const isApplication = variant === "application";

  return (
    <form className="relative border border-misr-800/10 bg-white p-8 shadow-xl shadow-misr-950/5 lg:p-12">
      <div className="absolute -right-2 -top-2 h-16 w-16 border-r-2 border-t-2 border-misr-gold/40" />
      <div className="absolute -bottom-2 -left-2 h-16 w-16 border-b-2 border-l-2 border-misr-gold/40" />

      <div className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClassName}>
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              className={inputClassName}
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClassName}>
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              className={inputClassName}
            />
          </div>
        </div>

          {isApplication ? (
          <>
            <div>
              <label htmlFor="phone" className={labelClassName}>
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+20 ..."
                className={inputClassName}
              />
            </div>
            <div>
              <label htmlFor="position" className={labelClassName}>
                Position Applying For
              </label>
              <input
                id="position"
                name="position"
                type="text"
                placeholder="e.g. Structural Engineer"
                defaultValue={defaultPosition}
                key={defaultPosition}
                className={inputClassName}
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <label htmlFor="company" className={labelClassName}>
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Organization name"
                className={inputClassName}
              />
            </div>
            <div>
              <label htmlFor="service" className={labelClassName}>
                Service Interest
              </label>
              <select
                id="service"
                name="service"
                className={inputClassName}
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
          </>
        )}

        <div>
          <label htmlFor="message" className={labelClassName}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder={
              isApplication
                ? "Tell us about your experience and motivation..."
                : "Tell us about your project..."
            }
            className={`${inputClassName} resize-none`}
          />
        </div>

        <button
          type="submit"
          className="group w-full bg-misr-800 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-misr-600"
        >
          <span className="inline-flex items-center justify-center gap-3">
            {isApplication ? "Submit Application" : "Send Inquiry"}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </button>
      </div>
    </form>
  );
}
