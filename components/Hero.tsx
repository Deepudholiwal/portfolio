"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const heroTags = ["AI Automation", "CRM Flows", "Bitrix24", "Digital Transformation", "Full Stack", "Premium UX"];
const typePhrases = [
  "Agency-grade products with AI precision.",
  "CRM workflows designed to convert.",
  "Bitrix24 automation built for scale.",
  "Full-stack solutions with luxury motion."
];

export default function Hero() {
  const [cursorStyle, setCursorStyle] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorStyle({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const currentPhrase = typePhrases[phraseIndex];
    const speed = deleting ? 40 : 80;
    const timeout = window.setTimeout(() => {
      if (!deleting) {
        if (charIndex < currentPhrase.length) {
          setCharIndex(charIndex + 1);
        } else {
          window.setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex(charIndex - 1);
        } else {
          setDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % typePhrases.length);
        }
      }
    }, speed);

    setTypedText(currentPhrase.slice(0, charIndex));
    return () => window.clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <section id="home" className="relative overflow-hidden px-6 pt-24 pb-16 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -left-28 top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-violet-500/5 blur-3xl" />
      </motion.div>

      <div className="glass-panel relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-black/40 p-6 shadow-soft backdrop-blur-xl lg:p-14">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-violet-200/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-100 backdrop-blur-sm">
              Premium software consulting for enterprise growth
            </div>
            <div className="space-y-5">
              <div className="text-4xl font-semibold uppercase tracking-[0.3em] text-violet-200 sm:text-5xl lg:text-6xl">
                Deepak Yadav
              </div>
              <div className="max-w-xl space-y-4 text-xl leading-9 text-slate-200/90 sm:text-2xl">
                Full Stack Developer · Bitrix24 Consultant · CRM Automation Expert · AI Solutions Developer
              </div>
              <div className="mt-3 flex items-center gap-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                <span className="typewriter">{typedText}</span>
                <span className="typing-cursor">|</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="glass-panel inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-500/20">
                Hire Me
              </a>
              <a href="#about" className="inline-flex items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10 px-6 py-3 font-semibold text-violet-100 transition hover:-translate-y-0.5 hover:bg-violet-500/20">
                Book Consultation
              </a>
              <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white transition hover:bg-white/10">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white transition hover:bg-white/10">
                Download Resume
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {heroTags.map((tag) => (
                <motion.div
                  key={tag}
                  whileHover={{ y: -8 }}
                  className="glass-panel rounded-3xl border border-white/10 bg-white/5 p-5 text-sm uppercase tracking-[0.18em] text-slate-100/80 shadow-glow"
                >
                  {tag}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative isolate mx-auto flex max-w-2xl items-center justify-center">
            <div className="absolute -inset-2 rounded-[40px] bg-gradient-to-br from-violet-500/25 via-cyan-400/10 to-sky-400/10 blur-3xl" />
            <div className="relative z-10 flex max-w-[520px] flex-col gap-6 rounded-[40px] border border-white/10 bg-[#090b16]/90 p-6 shadow-soft backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.24),_transparent_35%)]" />
              <div className="relative space-y-6">
                <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-4 shadow-glow">
                  <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.22em] text-sky-300/80">
                    <span>3D Earth • CRM Flow • AI Neural Map</span>
                    <span>Live</span>
                  </div>
                  <div className="mt-6 h-[340px] overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(63,94,255,0.2),_transparent_45%)]">
                    <div className="relative h-full w-full">
                      <div className="absolute inset-0 animate-[floaty_9s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,_rgba(123,75,255,0.18),transparent_55%)]" />
                      <div className="absolute left-6 top-8 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-slate-100">
                        AI
                      </div>
                      <div className="absolute right-6 top-10 space-y-3 rounded-3xl border border-white/10 bg-slate-950/80 p-4 text-xs text-slate-200">
                        <div>Bitrix24 Workflow</div>
                        <div className="h-2 rounded-full bg-violet-500/90" />
                        <div className="h-2 rounded-full bg-cyan-500/90 w-5/6" />
                      </div>
                      <div className="absolute bottom-8 left-8 grid gap-3">
                        <div className="h-3 w-24 rounded-full bg-slate-900/80 shadow-soft" />
                        <div className="h-3 w-32 rounded-full bg-slate-900/80 shadow-soft" />
                        <div className="h-3 w-20 rounded-full bg-slate-900/80 shadow-soft" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="glass-panel rounded-[28px] border border-white/10 bg-slate-950/80 p-4 text-sm text-slate-200 shadow-soft">
                    <p className="uppercase tracking-[0.22em] text-violet-200/80">Live CRM data flow</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">A premium consultancy foundation for automated customer journeys and AI-led intelligence.</p>
                  </div>
                  <div className="glass-panel rounded-[28px] border border-white/10 bg-slate-950/80 p-4 text-sm text-slate-200 shadow-soft">
                    <p className="uppercase tracking-[0.22em] text-cyan-200/80">Interactive strategy</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">Futuristic interface design, motion-led storytelling, and polished digital experiences.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="cursor-ring"
              style={{ left: cursorStyle.x, top: cursorStyle.y, opacity: 0.9 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
