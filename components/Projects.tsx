"use client";

import { featuredProjects } from "@/data/projects";
import { fetchGitHubRepos } from "@/lib/github";
import { GitHubRepo, ProjectCard } from "@/types";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Github } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

function normalizeUrl(value: string) {
  try {
    const url = new URL(value);
    return `${url.protocol}//${url.hostname}${url.pathname.replace(/\/$/, "")}`.toLowerCase();
  } catch {
    return value.replace(/\/$/, "").toLowerCase();
  }
}

function repoToProject(repo: GitHubRepo): ProjectCard {
  return {
    slug: repo.name.toLowerCase(),
    label: repo.name.replace(/[-_]/g, " "),
    description:
      repo.description || "Explore the application and its source code.",
    stack: [repo.language || "Web App", "GitHub", "Live Deployment"],
    liveUrl: repo.homepage,
    githubUrl: repo.url,
  };
}

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    let mounted = true;

    fetchGitHubRepos(
      process.env.NEXT_PUBLIC_GITHUB_USERNAME || "Deepudholiwal",
    ).then((data) => {
      if (mounted) setRepos(data);
    });

    return () => {
      mounted = false;
    };
  }, []);

  const projects = useMemo(() => {
    const featuredUrls = new Set(
      featuredProjects.flatMap((project) =>
        project.liveUrl ? [normalizeUrl(project.liveUrl)] : [],
      ),
    );
    const githubProjects = repos
      .filter((repo) => !featuredUrls.has(normalizeUrl(repo.homepage)))
      .map(repoToProject);

    return [...featuredProjects, ...githubProjects];
  }, [repos]);

  return (
    <section id="projects" className="section-shell px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="section-kicker">Selected Work</p>
          <h2 className="section-title">Projects that solve real operational problems.</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
            From compliance and CRM workflows to property platforms and lead tools,
            each project is designed around the way businesses actually operate.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={`${project.slug}-${project.liveUrl || project.githubUrl || index}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.2) }}
              className="group flex min-h-[430px] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#07131c]/90 p-4 shadow-[0_30px_80px_rgba(2,8,18,0.16)] transition hover:-translate-y-1 hover:border-mint/30"
            >
              {project.image ? (
                <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-950/60">
                  <Image
                    src={project.image}
                    alt={`${project.label} application interface`}
                    width={1440}
                    height={960}
                    className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              ) : null}

              <div className="mt-5 flex items-center justify-between gap-3">
                <span className="rounded-full border border-mint/20 bg-mint/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-mint">
                  {index < featuredProjects.length ? "Featured" : "More Work"}
                </span>
                <span className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                  {project.stack[0] || "Web App"}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold capitalize text-white">
                {project.label}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.slice(0, 4).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[11px] tracking-wide text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary inline-flex items-center gap-2 text-sm"
                  >
                    Live <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                ) : null}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button-ghost inline-flex items-center gap-2 text-sm"
                  >
                    <Github size={16} aria-hidden="true" /> Code
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
