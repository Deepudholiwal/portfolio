"use client";

import { motion } from "framer-motion";

const groups = [
  {
    label: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["PHP", "Node.js", "Python", "Laravel", "Django"],
  },
  {
    label: "CRM & Automation",
    skills: [
      "Bitrix24",
      "REST APIs",
      "Webhooks",
      "CRM workflows",
      "Business process automation",
    ],
  },
  {
    label: "Database & Tools",
    skills: ["MongoDB", "MySQL", "Git", "GitHub", "Vercel", "Prisma"],
  },
];

export default function SkillsSphere() {
  return (
    <section id="skills" className="section-shell px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">The stack I use to build reliable business software.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {groups.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="glass-panel rounded-[2rem] border border-white/10 p-6"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-xl font-semibold text-white">{group.label}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-200"
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
