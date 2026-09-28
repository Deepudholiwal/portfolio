"use client";

import { motion } from "framer-motion";

const focus = [
  "Indian compliance workflows",
  "CA firm operations",
  "CRM implementation",
  "Business automation",
];

export default function About() {
  return (
    <section id="about" className="section-shell px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <p className="section-kicker">About</p>
          <h2 className="section-title">I build software around the real work businesses already do.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-panel rounded-[2rem] border border-white/10 p-6 sm:p-8"
        >
          <div className="space-y-5 text-base leading-8 text-slate-300">
            <p>
              Based in Gurugram, Haryana, I work across full-stack web development,
              CRM implementation, business automation, and custom software built for
              real operational needs.
            </p>
            <p>
              My work covers web applications, Bitrix24 solutions, and workflow
              systems for services businesses, CA practices, real estate teams, and
              operational teams that need a stronger digital layer for their daily
              processes.
            </p>
            <blockquote className="border-l-2 border-mint pl-5 text-lg text-white">
              Good software does not start with a design trend. It starts with a clear
              understanding of the process, the people, and the business rules behind it.
            </blockquote>
            <p>
              From GST, ITR, and TDS workflows to CRM pipelines and lead automation,
              I focus on building systems that are practical, maintainable, and easy
              for teams to adopt in production.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {focus.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-mint/20 bg-mint/5 px-4 py-3 text-sm text-slate-100"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
