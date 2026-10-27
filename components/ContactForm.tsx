"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";

const services = [
  "Web Development",
  "Website Redesign",
  "Full-Stack Web Application",
  "Bitrix24 Implementation",
  "CRM Automation",
  "Business Process Automation",
  "Custom SaaS Development",
  "Technical Consulting",
  "Other / Let's Discuss",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    country: "", budget: "", service: "Web Development", message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending) return;
    setSending(true);
    setStatus("Sending inquiry...");
    setSuccess(false);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const payload = await response.json().catch(() => null);
      if (response.ok && payload?.success) {
        setStatus("✓ Message sent! I'll be in touch within 24 hours.");
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", company: "", country: "", budget: "", service: "Web Development", message: "" });
      } else {
        setStatus(payload?.error || "Unable to send. Please try again later.");
      }
    } catch {
      setStatus("Connection error. Please email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-shell px-4 py-28 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-gold absolute bottom-[10%] right-[10%] w-[450px] h-[450px] opacity-25" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-kicker">Get In Touch</p>
          <h2 className="section-title mt-4">
            Let&apos;s build something <span className="gradient-text">great.</span>
          </h2>
          <p className="mt-5 max-w-xl text-slate-400 text-lg leading-8">
            Share your project details — what you need to build, your timeline, and
            goals. I&apos;ll come back with a clear technical plan.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">

          {/* LEFT — Contact Info */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {/* Info Card */}
            <div className="glass-gold rounded-2xl p-6">
              <p className="section-kicker text-xs mb-5">Contact Details</p>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "Location",   value: "Gurugram, Haryana 122506", href: null },
                  { icon: Mail,   label: "Email",      value: "dk4796804@gmail.com",    href: "mailto:dk4796804@gmail.com" },
                  { icon: Phone,  label: "Phone",      value: "+91 8307928412",          href: "tel:+918307928412" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold/10 border border-gold/20 flex-shrink-0 mt-0.5">
                      <Icon size={14} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm text-slate-300 hover:text-gold transition-colors">{value}</a>
                      ) : (
                        <p className="text-sm text-slate-300">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="glass-panel rounded-2xl p-6">
              <p className="section-kicker text-xs mb-4">Find Me Online</p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/Deepudholiwal"
                  target="_blank"
                  rel="noreferrer"
                  className="button-ghost text-sm justify-start"
                >
                  <Github size={16} /> github.com/Deepudholiwal
                </a>
                <a
                  href="https://linkedin.com/in/deepak-yadav01"
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary text-sm justify-start"
                >
                  <Linkedin size={16} /> linkedin.com/in/deepak-yadav01
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="glass-panel rounded-2xl p-5 text-center">
              <div className="available-badge justify-center mb-3">
                <span className="available-dot" />
                Open to New Projects
              </div>
              <p className="text-sm text-slate-400">
                Response time: within <span className="text-gold font-semibold">24 hours</span>
              </p>
            </div>
          </motion.aside>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass-panel rounded-2xl p-7 sm:p-8">
              <form onSubmit={submit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Name *</label>
                    <input
                      required minLength={2} maxLength={100}
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Deepak Sharma"
                      aria-label="Name"
                      className="input-field"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email *</label>
                    <input
                      required type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="hello@company.com"
                      aria-label="Email"
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone *</label>
                    <input
                      required type="tel" minLength={6} maxLength={30}
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+91 9876543210"
                      aria-label="Phone"
                      className="input-field"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Company</label>
                    <input
                      value={form.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      placeholder="Your company"
                      aria-label="Company"
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Country</label>
                    <input
                      value={form.country}
                      onChange={(e) => handleChange("country", e.target.value)}
                      placeholder="India"
                      aria-label="Country"
                      className="input-field"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Budget</label>
                    <input
                      value={form.budget}
                      onChange={(e) => handleChange("budget", e.target.value)}
                      placeholder="₹50k — ₹2L"
                      aria-label="Budget"
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Service *</label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => handleChange("service", e.target.value)}
                    aria-label="Service"
                    className="input-field"
                  >
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Your Message *</label>
                  <textarea
                    required maxLength={2000}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={5}
                    placeholder="Tell me about your project, requirements, and timeline..."
                    aria-label="Message"
                    className="input-field min-h-[130px] resize-none"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-2">
                  <button
                    type="submit"
                    id="submit-inquiry-btn"
                    disabled={sending}
                    className="button-primary w-full sm:w-auto disabled:opacity-60"
                  >
                    <Send size={15} />
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                  {status && (
                    <motion.p
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      role="status"
                      aria-live="polite"
                      className={`text-sm ${success ? "text-green-400" : "text-slate-400"}`}
                    >
                      {status}
                    </motion.p>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
