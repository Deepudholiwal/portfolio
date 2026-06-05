"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Deepak delivered a workflow automation solution that elevated our CRM experience and accelerated sales efficiency.",
    author: "CEO, Starmoon Technology Consultant Pvt Ltd"
  },
  {
    quote: "His AI assistant implementation helped us reduce support load and improved user engagement immediately.",
    author: "Product Head, SaaS Enterprise"
  },
  {
    quote: "The Bitrix24 integration was flawless. Our approvals and lead management are now fully automated.",
    author: "Operations Director, Real Estate Group"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Well Perform Testimonials</p>
          <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Trusted by premium brands and growing teams.</h2>
        </div>
        <div className="glass-panel overflow-hidden rounded-[40px] border border-white/10 bg-black/50 p-6 shadow-soft">
          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto py-6">
            {testimonials.map((item) => (
              <motion.div
                key={item.author}
                whileHover={{ y: -8 }}
                className="snap-start min-w-[320px] max-w-[360px] rounded-[32px] border border-white/10 bg-slate-950/95 p-8 text-slate-200 shadow-soft"
              >
                <p className="text-lg leading-8">“{item.quote}”</p>
                <p className="mt-6 text-sm uppercase tracking-[0.24em] text-cyan-300/80">{item.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
