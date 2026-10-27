"use client";

import { motion } from "framer-motion";
import { Check, Code2, Cog, Globe, Zap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    summary:
      "Modern, high-converting websites for service businesses, portfolios, and product brands. Clean positioning, responsive UX, and fast load times.",
    items: ["Landing pages", "Marketing websites", "Portfolio design", "Responsive UX"],
    color: "#f5b944",
    gradient: "from-[#f5b944]/15 to-transparent",
  },
  {
    icon: Code2,
    title: "Full-Stack Web Applications",
    summary:
      "Custom web apps built to support workflows, data collection, dashboards, and team operations — from frontend to data layer.",
    items: ["Custom dashboards", "User portals", "Admin flows", "API-backed apps"],
    color: "#ff9f43",
    gradient: "from-[#ff9f43]/15 to-transparent",
  },
  {
    icon: Cog,
    title: "Bitrix24 CRM Setup",
    summary:
      "Complete CRM configuration built around how your team captures leads, tracks follow-up, and manages deals with automated workflows.",
    items: ["Lead pipelines", "Task automation", "Approval flows", "Integration work"],
    color: "#ffd166",
    gradient: "from-[#ffd166]/15 to-transparent",
    featured: true,
  },
  {
    icon: Zap,
    title: "Business Process Automation",
    summary:
      "Automation for repetitive business tasks, data processing, and internal operations that reduce manual work and improve consistency.",
    items: ["Webhook integration", "API syncs", "Triggers", "Workflow automation"],
    color: "#d4972a",
    gradient: "from-[#d4972a]/15 to-transparent",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-shell px-4 py-28 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-gold absolute top-[5%] left-[30%] w-[400px] h-[400px] opacity-20" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-kicker justify-center">Services</p>
          <h2 className="section-title mx-auto text-center mt-4">
            What I can <span className="gradient-text">do for you.</span>
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-slate-400 text-lg leading-8">
            From first design to deployed product — I cover the full stack of modern
            business software development.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative glass-panel rounded-2xl p-7 animated-border overflow-hidden group hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-400 ${
                  svc.featured ? "ring-1 ring-gold/20" : ""
                }`}
              >
                {svc.featured && (
                  <div className="absolute top-4 right-4 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gold/15 text-gold border border-gold/25">
                    Most Requested
                  </div>
                )}

                {/* BG gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${svc.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl mb-5 border transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${svc.color}12`,
                      borderColor: `${svc.color}25`,
                      boxShadow: `0 0 20px ${svc.color}20`,
                    }}
                  >
                    <Icon size={20} style={{ color: svc.color }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                    {svc.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm leading-7 text-slate-400 mb-5">{svc.summary}</p>

                  {/* Items */}
                  <ul className="space-y-2.5">
                    {svc.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                        <Check size={14} style={{ color: svc.color }} className="flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center glass-gold rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-white mb-2">Need something custom?</h3>
          <p className="text-slate-400 text-sm mb-6">
            Every project is different. Let&apos;s talk about what you need and I&apos;ll map out the best technical approach.
          </p>
          <a href="#contact" className="button-primary">
            Start a Conversation <Zap size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
