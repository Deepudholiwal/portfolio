import { ArrowUpRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="px-6 pb-16 pt-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <nav
          className="flex flex-wrap items-center justify-between gap-4 py-4"
          aria-label="Primary navigation"
        >
          <a href="#home" className="text-xl font-semibold text-white">
            Deepak<span className="text-mint">.</span>
          </a>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            {["Projects", "Services", "About", "Skills"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="py-2 hover:text-mint"
              >
                {item}
              </a>
            ))}
            <a href="#contact" className="py-2 text-mint">
              Discuss a project
            </a>
          </div>
        </nav>
        <div className="max-w-5xl py-14 sm:py-20">
          <p className="section-kicker">Deepak / B2B SaaS Developer</p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-6xl">
            Software for Indian businesses.
            <br />
            <span className="text-mint">Built around how they work.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            I build B2B SaaS for CA firms, sales teams, and real estate
            businesses, with GST, ITR, TDS, and ROC/MCA workflows at the heart
            of the product.
          </p>
          <p className="mt-4 max-w-3xl leading-7 text-slate-400">
            From PAN validation and Indian currency formats to CRM
            implementation and practical automation. AI-assisted delivery
            supports the engineering; your business requirements lead it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="button-primary inline-flex items-center gap-2"
            >
              Discuss a project <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a
              href="#projects"
              className="button-secondary inline-flex items-center gap-2"
            >
              Explore my work <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a
              href="/resume.pdf"
              className="button-ghost inline-flex items-center gap-2"
              download
            >
              Resume <Download size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <ul className="grid gap-4 border-t border-white/10 pt-6 text-sm text-slate-300 sm:grid-cols-3">
          <li>CA practice &amp; compliance workflows</li>
          <li>CRM &amp; Bitrix24 implementation</li>
          <li>Real estate &amp; business automation</li>
        </ul>
      </div>
    </section>
  );
}
