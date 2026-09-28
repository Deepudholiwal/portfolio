"use client";

import { useState, type FormEvent } from "react";

const services = [
  "Web Development",
  "Website Redesign",
  "E-commerce Development",
  "Frontend Development",
  "Backend & API Development",
  "Compliance & CA Software",
  "B2B SaaS & Real Estate",
  "Business Automation",
  "CRM & Bitrix24 Implementation",
  "API & Third-party Integrations",
  "Website Maintenance & Support",
  "Technical Consulting",
  "Other / Let's Discuss",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    budget: "",
    service: "Web Development",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending) return;
    setSending(true);
    setStatus("Sending inquiry...");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("Thanks for your inquiry. I will be in touch.");
        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          country: "",
          budget: "",
          service: "Web Development",
          message: "",
        });
      } else {
        setStatus("Unable to send lead. Please try again later.");
      }
    } catch {
      setStatus("Unable to connect. Please try again or contact me by email.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Discuss a project.</h2>
          <p className="mt-4 leading-7 text-slate-400">
            Tell me about your business, the workflow you want to improve, and
            your timeline.
          </p>
        </div>
        <div className="rounded-lg border border-white/10 bg-[#07131c]/90 p-6 shadow-soft">
          <form
            className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
            onSubmit={submit}
          >
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  value={form.name}
                  minLength={2}
                  maxLength={100}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Name"
                  aria-label="Name"
                  className="input-field"
                />
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="Email"
                  aria-label="Email"
                  className="input-field"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  value={form.phone}
                  type="tel"
                  minLength={6}
                  maxLength={30}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="Phone"
                  aria-label="Phone"
                  className="input-field"
                />
                <input
                  value={form.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  placeholder="Company"
                  aria-label="Company"
                  className="input-field"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  value={form.country}
                  onChange={(e) => handleChange("country", e.target.value)}
                  placeholder="Country"
                  aria-label="Country"
                  className="input-field"
                />
                <input
                  value={form.budget}
                  onChange={(e) => handleChange("budget", e.target.value)}
                  placeholder="Budget"
                  aria-label="Budget"
                  className="input-field"
                />
              </div>
              <select
                required
                value={form.service}
                onChange={(e) => handleChange("service", e.target.value)}
                aria-label="Service"
                className="input-field"
              >
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-4">
              <textarea
                required
                value={form.message}
                maxLength={2000}
                onChange={(e) => handleChange("message", e.target.value)}
                rows={10}
                placeholder="Tell me about your project, requirements, or timeline."
                aria-label="Message"
                className="input-field min-h-[320px] resize-none"
              />
              <button
                type="submit"
                disabled={sending}
                className="button-primary w-full disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send project details"}
              </button>
              <p
                role="status"
                aria-live="polite"
                className="text-sm text-slate-300"
              >
                {status}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
