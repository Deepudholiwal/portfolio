"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    role: "Web Developer",
    company: "Starmoon Technology Consultant Pvt Ltd",
    date: "November 2024 - Present",
    bullets: ["Frontend Development", "Bitrix24 Customization", "WordPress Development", "Laravel Development", "SEO Optimization", "CRM Integration"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Experience</p>
          <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Interactive career journey.</h2>
        </div>
        <div className="glass-panel rounded-[42px] border border-white/10 bg-black/50 p-8 shadow-soft">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80 p-8">
            <div className="absolute left-0 top-0 h-full w-1 bg-violet-500/60" />
            <div className="relative space-y-10">
              {milestones.map((item) => (
                <motion.div
                  key={item.role}
                  whileHover={{ x: 6 }}
                  className="grid gap-4 sm:grid-cols-[0.8fr_0.2fr]"
                >
                  <div className="rounded-[28px] border border-white/10 bg-[#06070f]/80 p-8">
                    <p className="text-sm uppercase tracking-[0.26em] text-cyan-300/80">{item.date}</p>
                    <h3 className="mt-4 text-3xl font-semibold text-white">{item.role}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-300">
                      Delivering robust digital ecosystems with premium user experiences, efficient CRM workflows and scalable backend architecture.
                    </p>
                    <ul className="mt-6 space-y-3 text-sm text-slate-300">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-1 inline-block h-2 w-2 rounded-full bg-violet-300" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="rounded-3xl border border-violet-500/20 bg-violet-500/10 p-6 text-center text-slate-100 shadow-glow">
                      <p className="text-xs uppercase tracking-[0.26em] text-violet-200/80">Current</p>
                      <p className="mt-4 text-3xl font-semibold">2024</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
