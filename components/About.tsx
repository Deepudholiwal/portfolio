"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Projects Completed", value: "52+" },
  { label: "Clients Served", value: "18+" },
  { label: "Technologies Used", value: "32" },
  { label: "Experience", value: "3+ Years" }
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">About</p>
          <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Cinematic reveal for a technology leader.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Web Developer at Starmoon Technology Consultant Pvt Ltd. I design premium digital ecosystems, build CRM automation, and launch AI-enabled products with modern engineering precision.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-panel rounded-[32px] border border-white/10 bg-black/50 p-8 shadow-soft"
          >
            <h3 className="text-2xl font-semibold text-white">Specialized in</h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Full Stack Development",
                "Bitrix24",
                "CRM Automation",
                "AI Solutions",
                "Website Development"
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-violet-500/10 bg-white/5 p-5 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass-panel rounded-[28px] border border-white/10 bg-slate-950/80 p-6 text-center shadow-soft">
                <p className="text-5xl font-semibold text-white">{stat.value}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
