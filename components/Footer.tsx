import { Github, Linkedin, Mail, Phone, ArrowUp } from "lucide-react";

const navLinks = [
  { label: "About",        href: "#about" },
  { label: "Skills",       href: "#skills" },
  { label: "Projects",     href: "#projects" },
  { label: "Experience",   href: "#experience" },
  { label: "Services",     href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact",      href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/6 bg-[#050810]/98 px-4 pt-16 pb-8 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gold line top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] mb-12">

          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5 mb-4">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#f5b944] to-[#ff9f43] flex items-center justify-center text-sm font-black text-[#080d1a]">D</div>
              <span className="text-xl font-bold text-white">Deepak<span className="text-gold">.</span></span>
            </a>
            <p className="text-sm font-semibold text-gold mb-2">Web Developer · Bitrix24 Implementer</p>
            <p className="text-sm leading-7 text-slate-500 max-w-xs">
              Full-stack development, CRM implementation, and business automation built around how real teams operate.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="https://github.com/Deepudholiwal" target="_blank" rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-slate-400 hover:text-gold hover:border-gold/30 hover:bg-gold/5 transition-all">
                <Github size={15} />
              </a>
              <a href="https://linkedin.com/in/deepak-yadav01" target="_blank" rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-slate-400 hover:text-gold hover:border-gold/30 hover:bg-gold/5 transition-all">
                <Linkedin size={15} />
              </a>
              <a href="mailto:dk4796804@gmail.com"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-slate-400 hover:text-gold hover:border-gold/30 hover:bg-gold/5 transition-all">
                <Mail size={15} />
              </a>
              <a href="tel:+918307928412"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-slate-400 hover:text-gold hover:border-gold/30 hover:bg-gold/5 transition-all">
                <Phone size={15} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-5">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-500 hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-5">Contact</h3>
            <address className="not-italic space-y-3 text-sm text-slate-500">
              <p>Gurugram, Haryana 122506</p>
              <a href="mailto:dk4796804@gmail.com" className="block hover:text-gold transition-colors break-words">
                dk4796804@gmail.com
              </a>
              <a href="tel:+918307928412" className="block hover:text-gold transition-colors">
                +91 8307928412
              </a>
            </address>
            <div className="mt-6">
              <a href="#contact" className="button-primary text-sm py-2.5 px-5">
                Hire Me
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/6 pt-6">
          <p className="text-sm text-slate-600">
            &copy; {new Date().getFullYear()} Deepak Yadav. All rights reserved.
          </p>
          <a
            href="#home"
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-gold transition-colors"
          >
            Back to top <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
