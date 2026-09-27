"use client";

import { motion } from "framer-motion";

const focus = ["Product Thinking", "Clean & Scalable Code", "AI Workflow Design", "Business-focused Solutions"];

export default function About() {
  return (
    <section id="about" className="px-6 py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <p className="section-kicker">Profile Telemetry</p>
          <h2 className="section-title">AI-first product engineer.</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-soft"
        >
          <div className="space-y-5 text-base leading-8 text-slate-300">
            <p>
              I build intelligent, production-ready software systems for startups and businesses. By combining software engineering fundamentals with product thinking and AI capabilities, I deliver high-performance applications that drive real business outcomes.
            </p>
            <blockquote className="border-l-2 border-mint pl-5 text-lg text-white">
              AI automates execution. Product engineering guarantees scale, maintainability, and impact.
            </blockquote>
            <p>
              I help SaaS teams, agencies, and small businesses prototype rapidly and scale confidently, with every line of code written for clean architecture, security, and long-term maintainability.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {focus.map((item) => (
              <div key={item} className="rounded-lg border border-mint/15 bg-mint/10 p-4 text-sm text-slate-100">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
