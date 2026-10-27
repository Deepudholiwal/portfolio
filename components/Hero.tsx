"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Github, Linkedin, Menu, X, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services",   href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact",    href: "#contact" },
];

const ROLES = [
  "Full-Stack Developer",
  "Bitrix24 Implementer",
  "CRM Automation Expert",
  "SaaS Builder",
  "Business Software Dev",
];

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx,   setWordIdx]   = useState(0);
  const [charIdx,   setCharIdx]   = useState(0);
  const [deleting,  setDeleting]  = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    if (!deleting && charIdx < current.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), speed);
      return () => clearTimeout(t);
    }
    if (!deleting && charIdx === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx > 0) {
      const t = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  useEffect(() => {
    setDisplayed(words[wordIdx].slice(0, charIdx));
  }, [charIdx, wordIdx, words]);

  return displayed;
}

const stats = [
  { value: "2+",   label: "Years Experience" },
  { value: "15+",  label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function Hero() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 120]);

  const role = useTypewriter(ROLES);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen overflow-hidden">

      {/* ── PARALLAX BG ORBS ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-0 pointer-events-none">
        <div className="orb orb-gold absolute top-[-8%] left-[10%] w-[500px] h-[500px]" style={{ animationDelay: "0s" }} />
        <div className="orb orb-amber absolute bottom-[5%] right-[5%] w-[400px] h-[400px]" style={{ animationDelay: "3s" }} />
        <div className="orb orb-blue  absolute top-[40%] left-[55%] w-[300px] h-[300px]" style={{ animationDelay: "6s" }} />
      </motion.div>

      {/* ── NAVBAR ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl px-4 sm:px-6 ${
            scrolled ? "glass-panel rounded-2xl mx-4 sm:mx-6 lg:mx-8" : ""
          }`}
        >
          <div className="flex items-center justify-between py-3 px-2">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#f5b944] to-[#ff9f43] text-[#080d1a] text-sm font-black">D</span>
              <span>Deepak<span className="text-gold">.</span></span>
            </motion.a>

            {/* Desktop Nav */}
            <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="nav-link px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                href="https://github.com/Deepudholiwal"
                target="_blank" rel="noreferrer"
                className="button-ghost py-2 px-4 text-sm"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              >
                <Github size={15} /> GitHub
              </motion.a>
              <motion.a
                href="#contact"
                className="button-primary py-2.5 text-sm"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              >
                Hire Me <Zap size={14} />
              </motion.a>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2.5 text-slate-200 lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((p) => !p)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="glass-panel rounded-2xl mb-3 overflow-hidden lg:hidden"
            >
              <div className="flex flex-col p-4 gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-xl px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-gold transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a href="#contact" className="button-primary mt-2 text-sm" onClick={() => setMobileOpen(false)}>
                  Hire Me <Zap size={14} />
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </header>

      {/* ── HERO CONTENT ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid items-center gap-12 w-full lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="available-badge mb-6">
                <span className="available-dot" />
                Available for new projects
              </div>
            </motion.div>

            <motion.p
              className="section-kicker mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Deepak Yadav
            </motion.p>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.0] tracking-[-0.05em] mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-white">Web Dev &amp;</span>
              <br />
              <span className="hero-gradient-text">Digital Builder.</span>
            </motion.h1>

            <motion.div
              className="mt-4 h-10 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-xl sm:text-2xl font-medium text-slate-400">
                {role}
                <span className="typewriter-cursor" />
              </span>
            </motion.div>

            <motion.p
              className="mt-6 max-w-xl text-lg leading-8 text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I design and build full-stack business software, CRM workflows, and automation
              systems that help teams work smarter — faster and with less friction.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a href="#projects" className="button-primary text-base">
                Explore My Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="button-secondary text-base">
                Let&apos;s Connect
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-12 flex flex-wrap gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="stat-number">{s.value}</div>
                  <div className="text-sm text-slate-500 mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Hero Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="float-anim"
          >
            <div className="hero-card p-6 sm:p-8 animated-border">
              {/* Card header */}
              <div className="flex items-center justify-between mb-6 pb-5 border-b border-white/8">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Portfolio Snapshot</p>
                  <h2 className="mt-1.5 text-lg font-bold text-white">Business &amp; Software</h2>
                </div>
                <div className="available-badge text-xs">
                  <span className="available-dot" />
                  Open to Work
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { label: "Focus",  value: "Compliance Workflows" },
                  { label: "Stack",  value: "Next.js · Bitrix24" },
                  { label: "Base",   value: "Gurugram, India" },
                  { label: "Mode",   value: "Remote / On-site" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-white/8 bg-white/[0.02] p-3.5">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                    <p className="mt-2 text-sm font-semibold text-white leading-tight">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Specializations */}
              <div className="rounded-2xl border border-[rgba(245,185,68,0.2)] bg-[rgba(245,185,68,0.04)] p-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-gold">Current Specialisation</p>
                  <span className="text-xs text-slate-500 uppercase tracking-widest">2025</span>
                </div>
                <div className="space-y-2">
                  {["CRM implementation", "Business process automation", "Custom SaaS dashboards"].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-[rgba(8,13,26,0.8)] px-3 py-2.5 text-sm text-slate-300"
                    >
                      <span>{item}</span>
                      <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#f5b944] to-[#ff9f43] pulse-ring flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-5 flex gap-3">
                <a href="https://github.com/Deepudholiwal" target="_blank" rel="noreferrer" className="button-ghost py-2 px-4 text-sm flex-1 justify-center">
                  <Github size={15} /> GitHub
                </a>
                <a href="https://linkedin.com/in/deepak-yadav01" target="_blank" rel="noreferrer" className="button-secondary py-2 px-4 text-sm flex-1 justify-center">
                  <Linkedin size={15} /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs text-slate-600 uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-9 rounded-full border border-white/15 flex items-start justify-center pt-1.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-gold"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
