"use client";

import { featuredProjects } from "@/data/projects";
import { fetchGitHubRepos } from "@/lib/github";
import { GitHubRepo } from "@/types";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitHubRepos(process.env.NEXT_PUBLIC_GITHUB_USERNAME || "Deepudholiwal").then((data) => {
      setRepos(data.slice(0, 4));
      setLoading(false);
    });
  }, []);

  return (
    <section id="projects" className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Projects</p>
          <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Live product work, powered by AI and CRM engineering.</h2>
        </div>
        <div className="grid gap-6 xl:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              whileHover={{ scale: 1.01, y: -6 }}
              transition={{ duration: 0.3 }}
              className="glass-panel group relative overflow-hidden rounded-[36px] border border-white/10 bg-[#070a13]/95 p-6 shadow-soft"
            >
              <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle,_rgba(99,102,241,0.12),_transparent_65%)] opacity-80" />
              <div className="relative z-10 flex flex-col gap-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-3xl bg-slate-950/80 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">Featured</span>
                  <div className="text-sm text-slate-400">{project.stack[0]}</div>
                </div>
                <h3 className="text-2xl font-semibold text-white">{project.label}</h3>
                <p className="text-sm leading-7 text-slate-300">{project.description}</p>
                <div className="grid auto-cols-auto grid-flow-col gap-2 overflow-x-auto text-xs text-slate-400">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 bg-violet-500/10 px-5 py-3 text-sm text-violet-100 transition hover:bg-violet-500/20"
                  >
                    Visit live
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-700 bg-white/5 px-5 py-3 text-sm text-slate-200 transition hover:bg-white/10"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-white">GitHub repositories</h3>
            {loading ? <span className="text-sm text-slate-400">Loading...</span> : null}
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {repos.map((repo) => (
              <motion.a
                key={repo.id}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -8 }}
                className="glass-panel rounded-[32px] border border-white/10 bg-[#080a13]/90 p-6 shadow-soft transition"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-white">{repo.name}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{repo.description || "Modern project with premium engineering and automation flows."}</p>
                  </div>
                  <span className="rounded-full bg-violet-500/10 px-3 py-1 text-sm text-violet-100">{repo.language || "Tech"}</span>
                </div>
                <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
                  <span>{repo.stars} stars</span>
                  <span>{repo.homepage ? "Live site" : "GitHub"}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
