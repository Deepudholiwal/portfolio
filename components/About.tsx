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
    <section id="about" className="px-6 py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <p className="section-kicker">About Deepak</p>
          <h2 className="section-title">
            The business rules are part of the product.
          </h2>
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
              I build software for Indian businesses from Gurugram, Haryana.
              My work spans CA practice management, rental platforms, lead
              research, and CRM implementation, including Bitrix24.
            </p>
            <blockquote className="border-l-2 border-mint pl-5 text-lg text-white">
              Useful software starts with understanding the work people need to
              complete.
            </blockquote>
            <p>
              GST, ITR, TDS, and ROC/MCA workflows bring specific requirements
              to a product. I focus on translating those requirements into
              usable screens, clear data models, and validation that fits local
              formats, including PAN and amounts in lakhs and crores.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {focus.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-mint/15 bg-mint/10 p-4 text-sm text-slate-100"
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
