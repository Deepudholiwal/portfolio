"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Website Development",
    items: ["Business websites", "Corporate websites", "Landing pages", "Portals", "Real Estate Websites"]
  },
  {
    title: "Bitrix24 Services",
    items: ["Implementation", "Customization", "Automation", "Business Processes", "CRM Setup", "Training"]
  },
  {
    title: "CRM Automation",
    items: ["Lead Management", "Sales Automation", "Workflow Automation", "Approval Systems"]
  },
  {
    title: "AI Solutions",
    items: ["AI Chatbots", "AI Website Assistants", "AI Customer Support", "Business Automation"]
  },
  {
    title: "Mobile App Development",
    items: ["React Native", "Android", "iOS", "Cross Platform"]
  }
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Services</p>
          <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Premium services tailored for growth.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ ease: "easeOut", duration: 0.3 }}
              className="glass-panel rounded-[32px] border border-white/10 bg-[#070911]/85 p-7 shadow-soft"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">Luxury motion-led interaction and modern business engineering.</p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-200">{index + 1}</div>
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-300" />
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
