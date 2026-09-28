"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Website Development",
    summary:
      "Modern websites for service businesses, portfolios, and product brands that need cleaner positioning and better conversion flow.",
    items: ["Landing pages", "Marketing websites", "Portfolio design", "Responsive UX"],
  },
  {
    title: "Full-Stack Web Applications",
    summary:
      "Web apps designed to support workflows, data collection, dashboards, and team operations from the front end to the data layer.",
    items: ["Custom dashboards", "User portals", "Admin flows", "API-backed apps"],
  },
  {
    title: "Bitrix24 CRM Implementation",
    summary:
      "CRM setup, configuration, and workflow design built around how your team captures leads, tracks follow-up, and manages deals.",
    items: ["Lead pipelines", "Task automation", "Approval flows", "Integration work"],
  },
  {
    title: "Business Process Automation",
    summary:
      "Automation for repetitive business tasks, data processing, and internal operations that reduce manual work and improve consistency.",
    items: ["Webhook integration", "API syncs", "Triggers", "Workflow automation"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-shell px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="section-kicker">Services</p>
          <h2 className="section-title">Practical digital systems that support a growing business.</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="glass-panel rounded-[2rem] border border-white/10 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                    {service.summary}
                  </p>
                </div>
                <span className="rounded-full border border-mint/20 bg-mint/10 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-mint">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
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
