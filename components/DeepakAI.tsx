"use client";

import { useState } from "react";

const knowledge = {
  services: "I help build premium web platforms, Bitrix24 automations, CRM workflows, AI assistants, and mobile applications.",
  pricing:
    "Pricing depends on scope, integration complexity and timeline. For hourly or retainer consultancy, I typically recommend a discovery call to define the exact package.",
  projects:
    "I deliver agency-grade products, such as Starmoon Website, ToolzenIQ, Homez Frontend, A7 Group Properties, Advisors Properties and Konoz Properties.",
  experience:
    "I work as a Web Developer at Starmoon Technology Consultant Pvt Ltd since November 2024, focusing on frontend, Bitrix24 customization, WordPress, Laravel, SEO and CRM integration.",
  availability:
    "I am available for consulting, enterprise engagements and select product builds. Reach out to schedule a consultation.",
  bitrix24:
    "I specialize in Bitrix24 implementation, customization, automation, business process optimization, CRM setup and team training.",
  website: "I build websites that balance design, conversion, SEO, speed, and automation for premium brand experiences."
};

export default function DeepakAI() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);

  const handleAsk = (topic: keyof typeof knowledge) => {
    setAnswer(knowledge[topic]);
  };

  return (
    <section id="assistant" className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Deepak AI</p>
          <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">AI assistant for instant project clarity.</h2>
        </div>
        <div className="glass-panel rounded-[40px] border border-white/10 bg-black/55 p-8 shadow-soft">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_0.35fr]">
            <div className="space-y-6">
              <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Ask Deepak AI</p>
                <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask about services, pricing, projects, Bitrix24 or website development."
                  className="mt-4 min-h-[200px] w-full rounded-3xl border border-white/10 bg-black/60 p-4 text-slate-200 outline-none placeholder:text-slate-500"
                />
                <div className="mt-4 flex flex-wrap gap-3">
                  {Object.keys(knowledge).map((topic) => (
                    <button
                      type="button"
                      key={topic}
                      onClick={() => handleAsk(topic as keyof typeof knowledge)}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-violet-500/15"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Lead Capture</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Deepak AI can help visitors receive answers instantly and guide them into a consultation opportunity.
                </p>
              </div>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-6 text-slate-300">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Response</p>
              <div className="mt-6 min-h-[260px] rounded-[28px] border border-white/10 bg-black/80 p-6 text-sm leading-7 text-slate-200">
                {answer ? <p>{answer}</p> : <p>Choose a topic or type a question, and Deepak AI will deliver a premium answer.</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
