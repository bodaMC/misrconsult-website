const contactItems = [
   {
    label: "",
    value: ["Egyptian Co. for Engineering Consulting Services (Misrconsult)"],
  },
  {
    label: "Location",
    value: "Maadi Palace Tower, 4th Floor, Cairo, Egypt",
  },
  {
    label: "Email",
    value: "info@misrconsult-eng.com",
    href: "mailto:info@misrconsult-eng.com",
  },
  {
    label: "Phone",
    value: ["+202 2378-5939", "+202 2378-5942", "+202 2378-6379"],
  },
 
] as const;

type ContactDetailsProps = {
  locationLabel?: string;
};

export function ContactDetails({ locationLabel = "Location" }: ContactDetailsProps) {
  return (
    <div className="space-y-8">
      {contactItems.map((item) => {
        const label = item.label === "Location" ? locationLabel : item.label;

        return (
        <div key={item.label} className="group">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-misr-600">
            {label}
          </p>
          <div className="mt-2 text-base text-misr-950 transition-colors duration-300 group-hover:text-misr-600">
            {Array.isArray(item.value) ? (
              item.value.map((phone) => <div key={phone}>{phone}</div>)
            ) : "href" in item && item.href ? (
              <a href={item.href} className="hover:text-misr-600">
                {item.value}
              </a>
            ) : (
              item.value
            )}
          </div>
        </div>
        );
      })}
    </div>
  );
}
