"use client";

import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Qwik",
  "Next.js",
  "jQuery",
  "Tailwind",
  "Bootstrap",
  "PHP",
  "Python",
  "Django",
  "Node.js",
  "MySQL",
  "PostgreSQL",
  "WordPress",
  "Bitrix24",
  "Laravel",
  "OpenAI",
  "ChatGPT",
  "Automation"
];

export default function SkillsSphere() {
  return (
    <section id="skills" className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Skills</p>
          <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">A 3D skill sphere built to impress.</h2>
        </div>
        <div className="glass-panel relative overflow-hidden rounded-[40px] border border-white/10 bg-black/50 p-10 shadow-soft">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.10),_transparent_45%)]" />
          <div className="relative flex flex-col items-center justify-center gap-10 lg:flex-row lg:justify-between">
            <div className="space-y-5 max-w-2xl text-slate-300">
              <p className="text-lg leading-8">
                Frontend, backend, CMS and AI engineering in one polished technology stack. Every solution is built like a future-proof product.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-300">Frontend & Frameworks</p>
                  <p className="mt-2 text-white">React, Qwik, Next.js, Tailwind, Bootstrap, jQuery</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-300">Backend & Data</p>
                  <p className="mt-2 text-white">PHP, Python, Django, Node.js, MySQL, PostgreSQL</p>
                </div>
              </div>
            </div>
            <div className="relative h-[420px] w-[420px] overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/70 p-6 shadow-glow">
              <div className="absolute inset-0 animate-spin-slow rounded-full border border-violet-500/10" />
              <svg viewBox="0 0 420 420" className="h-full w-full">
                {skills.map((skill, index) => {
                  const angle = (index / skills.length) * Math.PI * 2;
                  const radius = 150;
                  const x = 210 + Math.cos(angle) * radius;
                  const y = 210 + Math.sin(angle) * radius;
                  return (
                    <motion.g key={skill} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7, delay: index * 0.03 }}>
                      <circle cx={x} cy={y} r="30" fill="rgba(79,70,229,0.14)" stroke="rgba(148,163,184,0.2)" strokeWidth="1" />
                      <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" className="text-[12px] font-semibold fill-slate-100">
                        {skill}
                      </text>
                    </motion.g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
