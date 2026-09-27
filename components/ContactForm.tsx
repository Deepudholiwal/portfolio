"use client";

import { useState, type FormEvent } from "react";

const services = [
  "AI Development",
  "Full Stack Development",
  "Business Automation",
  "Technical Consulting"
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    budget: "",
    service: "AI Development",
    message: ""
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Sending lead...");

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (response.ok) {
      setStatus("Lead captured. We will contact you soon.");
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        country: "",
        budget: "",
        service: "AI Development",
        message: ""
      });
    } else {
      setStatus("Unable to send lead. Please try again later.");
    }
  };

  return (
    <section id="contact" className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="section-kicker">Connection Channel</p>
          <h2 className="section-title">Let&apos;s build something intelligent.</h2>
          <p className="mt-4 leading-7 text-slate-400">
            Whether it is an AI-powered application, a SaaS platform, or a full-stack product, I am interested in solving meaningful problems through technology.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a className="button-ghost" href="mailto:deepakchandra4551@gmail.com">
              deepakchandra4551@gmail.com
            </a>
            <a className="button-ghost" href="tel:+919120279300">
              +91 9120279300
            </a>
            <a className="button-ghost" href="https://deepak-yadav-portfolio.dk4796804.chatgpt.site/" target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-[#07131c]/90 p-6 shadow-soft">
          <form className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]" onSubmit={submit}>
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  value={form.name}
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
                onChange={(e) => handleChange("message", e.target.value)}
                rows={10}
                placeholder="Tell me about your project, requirements, or timeline."
                aria-label="Message"
                className="input-field min-h-[320px] resize-none"
              />
              <button type="submit" className="button-primary w-full">
                Submit Inquiry
              </button>
              {status ? <p className="text-sm text-slate-300">{status}</p> : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
