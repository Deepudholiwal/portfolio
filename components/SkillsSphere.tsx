"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Frontend",
    color: "#f5b944",
    skills: [
      { name: "React / Next.js",  level: 90 },
      { name: "TypeScript",       level: 82 },
      { name: "Tailwind CSS",     level: 88 },
      { name: "HTML5 / CSS3",     level: 95 },
    ],
  },
  {
    category: "Backend",
    color: "#ff9f43",
    skills: [
      { name: "Node.js / Express", level: 80 },
      { name: "Laravel / PHP",     level: 75 },
      { name: "REST APIs",         level: 85 },
      { name: "MongoDB / MySQL",   level: 78 },
    ],
  },
  {
    category: "CRM & Tools",
    color: "#ffd166",
    skills: [
      { name: "Bitrix24",         level: 92 },
      { name: "CRM Automation",   level: 88 },
      { name: "WordPress",        level: 80 },
      { name: "SEO / Analytics",  level: 72 },
    ],
  },
  {
    category: "DevOps / Other",
    color: "#d4972a",
    skills: [
      { name: "Git / GitHub",     level: 85 },
      { name: "Prisma / ORM",     level: 70 },
      { name: "Socket.IO",        level: 75 },
      { name: "Vercel / Deploy",  level: 82 },
    ],
  },
];

const techBadges = [
  "React", "Next.js", "TypeScript", "Tailwind", "Node.js", "Laravel",
  "MongoDB", "MySQL", "Bitrix24", "WordPress", "Prisma", "Socket.IO",
  "Git", "REST API", "GST/ITR", "Framer Motion",
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className="text-xs font-bold" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          style={{ background: `linear-gradient(90deg, ${color}aa, ${color})` }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: level / 100 } : { scaleX: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-shell px-4 py-28 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-kicker justify-center">Technical Skills</p>
          <h2 className="section-title mx-auto text-center mt-4">
            Tools I build with,{" "}
            <span className="gradient-text">daily.</span>
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-slate-400 text-lg leading-8">
            A curated stack developed through real-world projects — from compliance SaaS
            to CRM automation and custom dashboards.
          </p>
        </motion.div>

        {/* Skill Groups */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glass-panel rounded-2xl p-6 animated-border"
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="h-2.5 w-2.5 rounded-full" style={{ background: group.color, boxShadow: `0 0 10px ${group.color}80` }} />
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">{group.category}</h3>
              </div>
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={group.color}
                    delay={gi * 0.1 + si * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Badge Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-sm text-slate-500 uppercase tracking-widest mb-6">Technologies &amp; Tools</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                className="tag"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
