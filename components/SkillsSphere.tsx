"use client";

import { motion } from "framer-motion";

const groups = [
  {
    label: "Business & Compliance",
    skills: [
      "GST / ITR / TDS workflows",
      "ROC / MCA workflows",
      "PAN validation",
      "Indian currency formats",
      "CA practice management",
      "Bitrix24",
    ],
  },
  {
    label: "Frontend",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive UI",
    ],
  },
  {
    label: "Backend",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "Authentication",
      "Socket.IO",
      "Google Places API",
    ],
  },
  {
    label: "Databases & Tools",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "GitHub",
      "Vercel",
      "Clean Architecture",
    ],
  },
];

export default function SkillsSphere() {
  return (
    <section id="skills" className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="section-kicker">Expertise</p>
          <h2 className="section-title">Skills and technologies.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {groups.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-lg border border-white/10 bg-[#07131c]/90 p-5 shadow-soft"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-xl font-semibold text-white">
                  {group.label}
                </h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
