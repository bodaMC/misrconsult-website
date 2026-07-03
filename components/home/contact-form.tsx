"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const inputClassName =
  "w-full border-b border-misr-800/20 bg-transparent py-3 text-misr-950 outline-none transition-colors placeholder:text-misr-800/30 focus:border-misr-600";

const inputErrorClassName =
  "w-full border-b border-red-500 bg-transparent py-3 text-misr-950 outline-none transition-colors placeholder:text-misr-800/30 focus:border-red-500";

const labelClassName =
  "mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-misr-700";

const errorClassName = "mt-1 text-xs text-red-600";

type ContactFormProps = {
  variant?: "inquiry" | "application";
  defaultPosition?: string;
};

export function ContactForm({
  variant = "inquiry",
  defaultPosition = "",
}: ContactFormProps) {
  const isApplication = variant === "application";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: defaultPosition,
    company: "",
    service: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (isApplication) {
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone Number is required";
      }
      if (!formData.position.trim()) {
        newErrors.position = "Position Applying For is required";
      }
      if (!file) {
        newErrors.file = "Please upload your CV/Resume";
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFileError("");

    if (!selectedFile) {
      setFile(null);
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      setFileError("Please upload a PDF, DOC, or DOCX file");
      setFile(null);
      return;
    }

    const maxSize = 10 * 1024 * 1024; // 10MB
    if (selectedFile.size > maxSize) {
      setFileError("File size must be less than 10MB");
      setFile(null);
      return;
    }

    setFile(selectedFile);
    setErrors((prev) => ({ ...prev, file: "" }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) {
      setSubmitError("Please complete all required fields.");
      return;
    }

    setIsSubmitting(true);

try {
  let cvUrl = "";

  if (isApplication && file) {
    const uploadFormData = new FormData();

uploadFormData.append("file", file);

uploadFormData.append("upload_preset", "misrconsult-cv");

const uploadResponse = await fetch(
  "https://api.cloudinary.com/v1_1/fhqspwzy/raw/upload",
  {
    method: "POST",
    body: uploadFormData,
  }
);

if (!uploadResponse.ok) {
  throw new Error("Failed to upload CV");
}

const uploadData = await uploadResponse.json();
  console.log("CV URL:", uploadData);

const cvUrl = uploadData.secure_url;


  console.log("CV URL:", cvUrl);



await emailjs.send(
  "service_cr32m24",
  "template_wu8xby6",
  {
    title: "New Job Application",

    name: formData.name,

    email: formData.email,

    phone: formData.phone,

    position: formData.position,

    message: formData.message,

    cv: cvUrl,
  },
  "nsR1ceZODglm3-XSz"
);// هنا هيكون EmailJS بعدين

  setSubmitSuccess(true);

  setFormData({
    name: "",
    email: "",
    phone: "",
    position: defaultPosition,
    company: "",
    service: "",
    message: "",
  });

  setFile(null);

  setErrors({});
    }
} catch (err) {
  console.error(err);
  setSubmitError("Something went wrong. Please try again.");
} finally {
  setIsSubmitting(false);
}
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (submitSuccess) {
    return (
      <div className="relative border border-misr-800/10 bg-white p-8 shadow-xl shadow-misr-950/5 lg:p-12">
        <div className="absolute -right-2 -top-2 h-16 w-16 border-r-2 border-t-2 border-misr-gold/40" />
        <div className="absolute -bottom-2 -left-2 h-16 w-16 border-b-2 border-l-2 border-misr-gold/40" />
        <div className="text-center">
          <div className="mb-4 text-5xl">✓</div>
          <h3 className="mb-2 font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-misr-950">
            {isApplication ? "Application Submitted" : "Inquiry Sent"}
          </h3>
          <p className="text-sm text-misr-800/70">
            {isApplication
              ? "Thank you for your interest. We will review your application and get back to you soon."
              : "Thank you for your inquiry. We will get back to you shortly."}
          </p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-misr-600 transition-colors hover:text-misr-700"
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative border border-misr-800/10 bg-white p-8 shadow-xl shadow-misr-950/5 lg:p-12">
      <div className="absolute -right-2 -top-2 h-16 w-16 border-r-2 border-t-2 border-misr-gold/40" />
      <div className="absolute -bottom-2 -left-2 h-16 w-16 border-b-2 border-l-2 border-misr-gold/40" />

      {submitError && (
        <div className="mb-6 rounded border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {submitError}
        </div>
      )}

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
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? inputErrorClassName : inputClassName}
            />
            {errors.name && <p className={errorClassName}>{errors.name}</p>}
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
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? inputErrorClassName : inputClassName}
            />
            {errors.email && <p className={errorClassName}>{errors.email}</p>}
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
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? inputErrorClassName : inputClassName}
              />
              {errors.phone && <p className={errorClassName}>{errors.phone}</p>}
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
                value={formData.position}
                onChange={handleChange}
                className={errors.position ? inputErrorClassName : inputClassName}
              />
              {errors.position && <p className={errorClassName}>{errors.position}</p>}
            </div>
            <div>
              <label htmlFor="resume" className={labelClassName}>
                Upload CV / Resume
              </label>
              <input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="w-full border-b border-misr-800/20 bg-transparent py-3 text-sm text-misr-950 outline-none transition-colors file:mr-4 file:border-0 file:bg-misr-600 file:px-4 file:py-2 file:text-xs file:font-semibold file:text-white file:transition-colors hover:file:bg-misr-700"
              />
              {file && (
                <p className="mt-2 text-xs text-misr-600">
                  Selected: {file.name}
                </p>
              )}
              {fileError && <p className={errorClassName}>{fileError}</p>}
              {errors.file && <p className={errorClassName}>{errors.file}</p>}
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
                value={formData.company}
                onChange={handleChange}
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
                value={formData.service}
                onChange={handleChange}
                className={inputClassName}
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
            value={formData.message}
            onChange={handleChange}
            className={`${errors.message ? inputErrorClassName : inputClassName} resize-none`}
          />
          {errors.message && <p className={errorClassName}>{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group w-full bg-misr-800 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-misr-600 disabled:bg-misr-800/50 disabled:cursor-not-allowed"
        >
          <span className="inline-flex items-center justify-center gap-3">
            {isSubmitting ? (
              <>
                <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Submitting...
              </>
            ) : (
              <>
                {isApplication ? "Submit Application" : "Send Inquiry"}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </>
            )}
          </span>
        </button>
      </div>
    </form>
  );
}
