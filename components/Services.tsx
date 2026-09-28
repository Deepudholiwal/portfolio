"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Compliance & CA Software",
    summary:
      "Business software shaped around the daily work of Indian accounting and tax practices.",
    items: [
      "GST, ITR & TDS workflows",
      "ROC / MCA task management",
      "Client workspaces",
      "Indian data formats",
    ],
  },
  {
    title: "B2B SaaS & Real Estate",
    summary:
      "Full-stack products for property discovery, rental operations, and business teams.",
    items: [
      "Property search & listings",
      "Owner / tenant workflows",
      "Real-time messaging",
      "Operational dashboards",
    ],
  },
  {
    title: "Business Automation",
    summary:
      "Connected systems and internal tools that replace repetitive manual work with reliable pipelines.",
    items: [
      "Custom internal tools",
      "Workflow automation",
      "API and SaaS integrations",
      "Event orchestration",
    ],
  },
  {
    title: "CRM & Bitrix24 Implementation",
    summary:
      "CRM configuration and integrations built around how your team handles leads and follow-ups.",
    items: [
      "Sales pipelines",
      "Bitrix24 implementation",
      "Lead capture integrations",
      "Follow-up workflows",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="section-kicker">Service Catalog</p>
          <h2 className="section-title">What I can build for you.</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-lg border border-white/10 bg-[#07131c]/90 p-6 shadow-soft"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                    {service.summary}
                  </p>
                </div>
                <span className="rounded-md border border-mint/20 bg-mint/10 px-3 py-2 text-sm font-semibold text-mint">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
