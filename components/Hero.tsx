"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Mail, MapPin, Phone } from "lucide-react";

const signals = ["Available for Freelance", "Open to Remote Projects", "AI-first Workflow", "Production Ready"];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-16 pt-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <nav className="flex flex-wrap items-center justify-between gap-4 py-4" aria-label="Primary navigation">
          <a href="#home" className="text-xl font-semibold text-white">
            Deepak<span className="text-mint">.</span>
          </a>
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
            {["Services", "Projects", "About", "Skills", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white">
                {item}
              </a>
            ))}
          </div>
        </nav>

        <div className="grid min-h-[72vh] gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-mint/25 bg-mint/10 px-4 py-2 text-xs font-semibold uppercase text-mint">
              AI System Online // Exec_Code
            </div>
            <div className="space-y-5">
              <h1 className="max-w-5xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
                I build AI-powered SaaS products, AI agents, and intelligent software.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                Helping startups build production-ready applications using Next.js, TypeScript, Python, Node.js, PostgreSQL, LLMs, AI agents, and generative AI.
              </p>
              <p className="max-w-3xl leading-7 text-slate-400">
                I combine software engineering fundamentals with an AI-first workflow to rapidly design, build, and ship modern applications that turn complex requirements into scalable business solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="button-primary inline-flex items-center gap-2">
                View Case Studies <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a href="#contact" className="button-secondary inline-flex items-center gap-2">
                Hire Me <Mail size={18} aria-hidden="true" />
              </a>
              <a href="https://github.com/Deepudholiwal" target="_blank" rel="noreferrer" className="button-ghost inline-flex items-center gap-2">
                GitHub <Github size={18} aria-hidden="true" />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {signals.map((signal) => (
                <div key={signal} className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200">
                  {signal}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-lg border border-white/10 bg-[#07131c]/95 p-5 shadow-soft">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs uppercase text-slate-400">
                <span>Product Engineer</span>
                <span className="text-mint">Status // Active</span>
              </div>
              <div className="space-y-6 pt-6">
                <div className="rounded-lg border border-mint/20 bg-mint/10 p-5">
                  <p className="text-sm uppercase text-mint">AI-assisted architecture</p>
                  <p className="mt-3 text-2xl font-semibold text-white">Clean systems, fast MVPs, practical AI integrations.</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {["Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker", "OpenAI", "MongoDB"].map((skill) => (
                    <span key={skill} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-3 text-sm text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="rounded-lg border border-white/10 bg-[#051018] p-5 text-sm leading-7 text-slate-300">
                  <p className="text-mint">const dev = future;</p>
                  <p>git commit -m &quot;innovation&quot;</p>
                </div>
                <div className="grid gap-3 text-sm text-slate-300">
                  <a href="mailto:deepakchandra4551@gmail.com" className="flex items-center gap-3 hover:text-mint">
                    <Mail size={17} aria-hidden="true" /> deepakchandra4551@gmail.com
                  </a>
                  <a href="tel:+919120279300" className="flex items-center gap-3 hover:text-mint">
                    <Phone size={17} aria-hidden="true" /> +91 9120279300
                  </a>
                  <span className="flex items-center gap-3">
                    <MapPin size={17} aria-hidden="true" /> Noida, Uttar Pradesh, India
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
