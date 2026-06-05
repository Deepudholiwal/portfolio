"use client";

import { useState, type FormEvent } from "react";

const services = [
  "Website Development",
  "Bitrix24 Services",
  "CRM Automation",
  "AI Solutions",
  "Mobile App Development"
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    budget: "",
    service: "Website Development",
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
        service: "Website Development",
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
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Contact</p>
          <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Book your consultation or launch your next project.</h2>
        </div>
        <div className="glass-panel rounded-[40px] border border-white/10 bg-black/55 p-8 shadow-soft">
          <form className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]" onSubmit={submit}>
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Name"
                  className="input-field"
                />
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="Email"
                  className="input-field"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="Phone"
                  className="input-field"
                />
                <input
                  value={form.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  placeholder="Company"
                  className="input-field"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  value={form.country}
                  onChange={(e) => handleChange("country", e.target.value)}
                  placeholder="Country"
                  className="input-field"
                />
                <input
                  value={form.budget}
                  onChange={(e) => handleChange("budget", e.target.value)}
                  placeholder="Budget"
                  className="input-field"
                />
              </div>
              <select
                required
                value={form.service}
                onChange={(e) => handleChange("service", e.target.value)}
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
