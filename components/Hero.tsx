"use client";

import { motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const highlights = [
  "Full-stack web development",
  "Bitrix24 implementation",
  "CRM & automation",
];

export default function Hero() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-16 pt-5 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(105,240,191,0.18),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.12),_transparent_22%)]" />

      <div className="mx-auto max-w-7xl">
        <header className="sticky top-3 z-50">
          <div className="glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 px-4 py-3 sm:px-6">
            <a href="#home" className="text-xl font-semibold tracking-tight text-white">
              Deepak<span className="text-mint">.</span>
            </a>

            <nav
              aria-label="Primary navigation"
              className="hidden items-center gap-6 text-sm text-slate-300 md:flex"
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <a href="#contact" className="button-secondary py-2.5 text-sm">
                Let&apos;s Connect
              </a>
            </div>

            <button
              type="button"
              className="inline-flex rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 md:hidden"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {mobileOpen ? (
            <div className="glass-panel mt-3 rounded-2xl border border-white/10 p-4 md:hidden">
              <div className="flex flex-col gap-2 text-sm text-slate-200">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-xl px-3 py-2 transition hover:bg-white/5"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </header>

        <div className="grid items-center gap-10 pb-8 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="section-kicker">Deepak Yadav</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
              Web developer &amp;
              <span className="block text-mint">Bitrix24 implementer.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I design and build full-stack business software, CRM workflows, and
              automation systems that help teams work better, faster, and with less
              friction.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="button-primary">
                Explore My Work <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a href="#contact" className="button-ghost">
                Let&apos;s Connect
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="hero-visual glass-panel relative rounded-[2rem] border border-white/10 p-5 sm:p-7"
          >
            <div className="rounded-[1.6rem] border border-white/10 bg-[#061117] p-5 shadow-[0_30px_80px_rgba(2,8,18,0.5)]">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                    Portfolio Snapshot
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white">
                    Business operations + software
                  </h2>
                </div>
                <span className="rounded-full border border-mint/30 bg-mint/10 px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-mint">
                  Available
                </span>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Focus
                  </p>
                  <p className="mt-3 text-lg font-medium text-white">
                    Compliance workflows
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Stack
                  </p>
                  <p className="mt-3 text-lg font-medium text-white">
                    Next.js + Bitrix24
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-mint/20 bg-mint/5 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm text-slate-300">Current specialisation</p>
                  <span className="text-xs uppercase tracking-[0.2em] text-mint">
                    2025
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    "CRM implementation",
                    "Business process automation",
                    "Custom SaaS and dashboards",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#07131c] px-3 py-2 text-sm text-slate-200"
                    >
                      <span>{item}</span>
                      <span className="h-2.5 w-2.5 rounded-full bg-mint" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
