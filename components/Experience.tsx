"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Sparkles } from "lucide-react";

const experience = [
  {
    period: "2024 — Present",
    role: "Web Developer",
    company: "Starmoon Technology Consultant Pvt Ltd",
    location: "Gurugram, India",
    type: "Full-time",
    description:
      "Focused on frontend implementation, Bitrix24 customization, WordPress, Laravel work, SEO, and CRM integration for client-facing digital products.",
    highlights: ["Bitrix24 CRM", "Frontend Dev", "Laravel", "SEO"],
    color: "#f5b944",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell px-4 py-28 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-gold absolute top-[20%] right-[-8%] w-[350px] h-[350px] opacity-25" />
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
          <p className="section-kicker">Experience</p>
          <h2 className="section-title mt-4">
            Where I&apos;ve <span className="gradient-text">built things.</span>
          </h2>
          <p className="mt-5 text-lg text-slate-400 max-w-xl">
            Professional experience since 2024, focused on CRM, frontend
            development, and business software.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-amber/20 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-5 hidden sm:flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all duration-300"
                  style={{
                    borderColor: exp.color,
                    background: `${exp.color}15`,
                    boxShadow: `0 0 20px ${exp.color}30`,
                  }}
                >
                  <Briefcase size={16} style={{ color: exp.color }} />
                </div>

                {/* Card */}
                <div
                  className="glass-panel rounded-2xl p-6 sm:p-7 animated-border group hover:border-gold/20 transition-all duration-300"
                >
                  {/* Card header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border"
                          style={{ color: exp.color, background: `${exp.color}12`, borderColor: `${exp.color}30` }}
                        >
                          {exp.type}
                        </span>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <MapPin size={10} /> {exp.location}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                      <p className="text-sm font-medium mt-0.5" style={{ color: exp.color }}>{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0 text-xs text-slate-500 bg-white/4 border border-white/8 rounded-full px-3 py-1.5">
                      <Sparkles size={10} className="text-gold" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-7 mb-5">{exp.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg border"
                        style={{ color: `${exp.color}cc`, background: `${exp.color}08`, borderColor: `${exp.color}20` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
