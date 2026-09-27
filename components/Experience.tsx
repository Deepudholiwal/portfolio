"use client";

import { motion } from "framer-motion";

const workflow = [
  ["01", "Discovery", "Analyze product specs, user journeys, and business goals to outline the right scope."],
  ["02", "Architecture", "Design schema models, API patterns, and component states before implementation."],
  ["03", "Development", "Write clean, typed, modular full-stack code using Next.js, React, and TypeScript."],
  ["04", "AI Integration", "Integrate LLMs, prompt validation, agent flows, and retrieval-ready data paths."],
  ["05", "Testing", "Review layout stability, schemas, API behavior, and production readiness."],
  ["06", "Deployment", "Ship optimized builds to Vercel or Docker and verify performance and SEO."]
];

const advantages = [
  "Production-ready Architecture",
  "Scalable Systems",
  "Modern UI/UX",
  "AI-first Workflow",
  "Rapid MVP Development",
  "Clean Maintainable Code",
  "Business-focused Solutions",
  "Performance Optimization"
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="section-kicker">Product Lifecycle</p>
          <h2 className="section-title">A practical workflow for intelligent software.</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {workflow.map(([step, title, text]) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
            >
              <p className="text-sm font-semibold text-mint">{step}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-white/10 bg-[#07131c]/90 p-6 shadow-soft">
          <p className="section-kicker">Partner Advantage</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => (
              <div key={item} className="rounded-md border border-mint/15 bg-mint/10 px-4 py-3 text-sm text-slate-100">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
