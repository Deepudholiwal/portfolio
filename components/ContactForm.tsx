"use client";

import { useState, type FormEvent } from "react";

const services = [
  "Web Development",
  "Website Redesign",
  "Full-Stack Web Application",
  "Bitrix24 Implementation",
  "CRM Automation",
  "Business Process Automation",
  "Custom SaaS Development",
  "Technical Consulting",
  "Other / Let’s Discuss",
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
    <section id="contact" className="section-shell px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Let’s talk about the system you need to build.</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
            Share the problem, the workflow, and your timeline. I’ll help map the right
            technical approach and next steps.
          </p>
        </div>

        <div className="glass-panel rounded-[2rem] border border-white/10 p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <aside className="rounded-[1.6rem] border border-white/10 bg-[#07131c]/90 p-6">
              <p className="section-kicker">Reach out</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Have a project in mind?</h3>

              <div className="mt-6 space-y-4 text-sm text-slate-300">
                <p>Gurugram, Haryana 122506</p>
                <a href="mailto:dk4796804@gmail.com" className="block hover:text-mint">
                  dk4796804@gmail.com
                </a>
                <a href="tel:+918307928412" className="block hover:text-mint">
                  +91 8307928412
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <a
                  href="https://github.com/Deepudholiwal"
                  target="_blank"
                  rel="noreferrer"
                  className="button-ghost text-sm"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/deepak-yadav01"
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary text-sm"
                >
                  LinkedIn
                </a>
              </div>
            </aside>

            <form className="space-y-4" onSubmit={submit} noValidate>
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

              <textarea
                required
                value={form.message}
                maxLength={2000}
                onChange={(e) => handleChange("message", e.target.value)}
                rows={8}
                placeholder="Tell me about your project, requirements, or timeline."
                aria-label="Message"
                className="input-field min-h-[200px] resize-none"
              />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={sending}
                  className="button-primary w-full sm:w-auto disabled:opacity-60"
                >
                  {sending ? "Sending..." : "Send project details"}
                </button>
                <p role="status" aria-live="polite" className="text-sm text-slate-300">
                  {status}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
