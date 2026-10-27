"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    title: "CA Partner, Sharma & Associates",
    avatar: "RS",
    rating: 5,
    text: "Deepak built a compliance workflow tool that genuinely transformed how we handle GST and ITR filings. Precise understanding of CA operations — rare to find in a developer.",
    color: "#f5b944",
  },
  {
    name: "Priya Nair",
    title: "Founder, Nair Realty",
    avatar: "PN",
    rating: 5,
    text: "GharDirect was delivered ahead of schedule, and the real-time chat feature worked flawlessly from day one. Deepak's attention to UX made a real difference in tenant engagement.",
    color: "#ff9f43",
  },
  {
    name: "Arjun Malhotra",
    title: "Operations Head, TechVentures Pvt Ltd",
    avatar: "AM",
    rating: 5,
    text: "The Bitrix24 CRM setup he did for us cut our lead response time by 60%. He understood our sales process and translated it directly into automation flows.",
    color: "#ffd166",
  },
  {
    name: "Sneha Kapoor",
    title: "Digital Marketing Manager",
    avatar: "SK",
    rating: 5,
    text: "Deepak revamped our website and the results were immediate — 40% improvement in page speed and significantly better conversion rates. Very professional to work with.",
    color: "#d4972a",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-shell px-4 py-28 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-blue absolute top-[15%] left-[-5%] w-[350px] h-[350px] opacity-30" />
        <div className="orb orb-gold absolute bottom-[5%] right-[-5%] w-[350px] h-[350px] opacity-20" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-kicker justify-center">Testimonials</p>
          <h2 className="section-title mx-auto text-center mt-4">
            What clients <span className="gradient-text">say.</span>
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-slate-400 text-lg leading-8">
            Real feedback from real people who trusted me to build software that matters for their business.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="testimonial-card group"
            >
              {/* Quote icon */}
              <div className="flex items-center justify-between mb-5">
                <Quote size={28} style={{ color: t.color, opacity: 0.6 }} />
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} size={13} style={{ color: t.color }} fill={t.color} />
                  ))}
                </div>
              </div>

              {/* Text */}
              <p className="text-slate-300 text-sm leading-7 mb-6 italic">&ldquo;{t.text}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${t.color}, ${t.color}88)`,
                    color: "#080d1a",
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.title}</p>
                </div>
              </div>

              {/* Accent border bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${t.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom tag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-gold" fill="#f5b944" />
            ))}
          </div>
          <p className="text-sm text-slate-500">100% client satisfaction on delivered projects</p>
        </motion.div>
      </div>
    </section>
  );
}
