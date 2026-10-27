"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Shield, Users } from "lucide-react";

const focus = [
  { icon: Shield, label: "Indian compliance workflows" },
  { icon: Globe,  label: "CRM implementation" },
  { icon: Code2,  label: "Full-stack development" },
  { icon: Users,  label: "Business automation" },
];

const timeline = [
  { year: "2024 — Present", event: "Web Developer at Starmoon Technology Consultant" },
  { year: "2023 — 2024", event: "Diploma in Web Development" },
];

export default function About() {
  return (
    <section id="about" className="section-shell px-4 py-28 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-gold absolute top-[10%] right-[-10%] w-[500px] h-[500px] opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 items-center">

          {/* LEFT — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-kicker">About Me</p>
            <h2 className="section-title mt-4">
              I build software around the{" "}
              <span className="gradient-text">real work</span>{" "}
              businesses already do.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-400 max-w-xl">
              Based in Gurugram, India — I&apos;m a web developer focused on bridging
              the gap between business operations and technology. My work ranges from
              compliance-focused SaaS tools to CRM configuration, always with an
              emphasis on usability and real-world business logic.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-400 max-w-xl">
              Currently working at{" "}
              <span className="text-gold font-semibold">Starmoon Technology Consultant Pvt Ltd</span>,
              since 2024, delivering Bitrix24 customizations, WordPress, Laravel solutions, and CRM integrations.
            </p>

            {/* Focus areas */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {focus.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3 hover:border-gold/30 hover:bg-gold/5 transition-all duration-300"
                >
                  <Icon size={16} className="text-gold flex-shrink-0" />
                  <span className="text-sm text-slate-300">{label}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="button-primary">
                Work With Me
              </a>
              <a
                href="https://github.com/Deepudholiwal"
                target="_blank"
                rel="noreferrer"
                className="button-ghost"
              >
                View GitHub
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Timeline + Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Identity card */}
            <div className="glass-gold rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-5">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#f5b944] to-[#ff9f43] flex items-center justify-center text-2xl font-black text-[#080d1a] flex-shrink-0">
                  DY
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Deepak Yadav</h3>
                  <p className="text-gold text-sm font-medium mt-0.5">Web Developer · Bitrix24 Expert</p>
                  <p className="text-slate-500 text-xs mt-1">Gurugram, Haryana 122506</p>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-5" />
              <div className="grid grid-cols-3 text-center gap-3">
                {[
                  { v: "2024", l: "Professional Since" },
                  { v: "15+",  l: "Projects" },
                  { v: "100%", l: "Dedication" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl bg-white/[0.03] border border-white/8 py-3">
                    <div className="text-xl font-black text-gold">{s.v}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini Timeline */}
            <div className="glass-panel rounded-2xl p-6">
              <p className="section-kicker text-xs mb-5">My Journey</p>
              <div className="space-y-0">
                {timeline.map((t, i) => (
                  <motion.div
                    key={t.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="relative flex gap-5 pb-6 last:pb-0"
                  >
                    {i < timeline.length - 1 && (
                      <div className="absolute left-[5px] top-4 bottom-0 w-px bg-gradient-to-b from-gold/30 to-transparent" />
                    )}
                    <div className="timeline-dot mt-1" />
                    <div>
                      <p className="text-xs font-bold text-gold uppercase tracking-wider">{t.year}</p>
                      <p className="text-sm text-slate-300 mt-0.5">{t.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
