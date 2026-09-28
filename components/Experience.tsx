"use client";

import { motion } from "framer-motion";

const experience = [
  {
    period: "2024 — Present",
    role: "Web Developer",
    company: "Starmoon Technology Consultant Pvt Ltd",
    description:
      "Focused on frontend implementation, Bitrix24 customization, WordPress, Laravel work, SEO, and CRM integration for client-facing digital products.",
  },
  {
    period: "Bitrix24 & CRM",
    role: "Implementation & Automation",
    company: "Business systems",
    description:
      "Configured CRM workflows, business process automation, and third-party integrations to support lead handling and team operations.",
  },
  {
    period: "Product & SaaS",
    role: "Full-stack development",
    company: "Custom business software",
    description:
      "Built applications for compliance operations, real estate workflows, lead prospecting, and workflow-centric tools with a strong emphasis on usability and business logic.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="section-kicker">Experience</p>
          <h2 className="section-title">Hands-on experience building business systems that need to work in the real world.</h2>
        </div>

        <div className="space-y-5">
          {experience.map((item, index) => (
            <motion.article
              key={item.role}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="grid gap-5 rounded-[2rem] border border-white/10 bg-[#07131c]/90 p-6 md:grid-cols-[180px_1fr]"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-mint">{item.period}</p>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-slate-300">
                    {item.company}
                  </span>
                </div>
                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
