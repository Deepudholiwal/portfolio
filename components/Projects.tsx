"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    number: "01",
    label: "CA Suite Pro",
    description:
      "Comprehensive software for Indian CA firm operations — GST, ITR, TDS, and ROC/MCA workflows unified into one product. Built with PAN formats and Indian financial expressions (lakhs/crores) natively.",
    stack: ["Next.js", "TypeScript", "Prisma", "MySQL", "Compliance"],
    highlight: "SaaS · Fintech",
    color: "#f5b944",
  },
  {
    number: "02",
    label: "GharDirect",
    description:
      "A direct-to-owner rental platform built with the MERN stack. Supports location and rent filters for property discovery, with Socket.IO for real-time owner-tenant conversations.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    highlight: "Real Estate · MERN",
    color: "#ff9f43",
  },
  {
    number: "03",
    label: "Lead Scanner",
    description:
      "B2B prospecting tool that searches businesses by keyword and location using Google Places API, scores their web presence, and exports results to CSV. Built for sales teams.",
    stack: ["Next.js", "Google Places API", "CSV Export", "B2B"],
    highlight: "Sales Tool · API",
    color: "#ffd166",
  },
  {
    number: "04",
    label: "Bitrix24 CRM Workflows",
    description:
      "Custom CRM pipelines, business process automation, and third-party integrations for lead handling, approval flows, and team operations. Configured for multiple client environments.",
    stack: ["Bitrix24", "CRM", "Automation", "REST API", "Webhooks"],
    highlight: "CRM · Enterprise",
    color: "#d4972a",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell px-4 py-28 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-amber absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-kicker">Featured Projects</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mt-4">
            <h2 className="section-title">
              Work that <span className="gradient-text">ships.</span>
            </h2>
            <a
              href="https://github.com/Deepudholiwal"
              target="_blank"
              rel="noreferrer"
              className="button-ghost text-sm flex-shrink-0 self-start sm:self-auto"
            >
              <Github size={15} /> All Projects
            </a>
          </div>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="project-card group cursor-pointer"
            >
              <div className="p-7">
                {/* Card header */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="text-3xl font-black leading-none"
                        style={{ color: `${p.color}30`, WebkitTextStroke: `1px ${p.color}40` }}
                      >
                        {p.number}
                      </span>
                      <span
                        className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border"
                        style={{
                          color: p.color,
                          background: `${p.color}12`,
                          borderColor: `${p.color}30`,
                        }}
                      >
                        {p.highlight}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors duration-300">
                      {p.label}
                    </h3>
                  </div>
                  <div
                    className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 group-hover:scale-110"
                    style={{ borderColor: `${p.color}40`, background: `${p.color}10` }}
                  >
                    <ArrowUpRight size={16} style={{ color: p.color }} className="group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-7 mb-6">{p.description}</p>

                {/* Divider */}
                <div className="h-px mb-5" style={{ background: `linear-gradient(90deg, ${p.color}25, transparent)` }} />

                {/* Stack */}
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg border"
                      style={{
                        color: `${p.color}cc`,
                        background: `${p.color}08`,
                        borderColor: `${p.color}20`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent bar */}
              <div
                className="h-1 w-0 group-hover:w-full transition-all duration-500 ease-out"
                style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm mb-4">Interested in working together on something similar?</p>
          <a href="#contact" className="button-primary">
            Start a Project <ExternalLink size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
