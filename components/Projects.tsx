"use client";

import { featuredProjects } from "@/data/projects";
import { fetchGitHubRepos } from "@/lib/github";
import { GitHubRepo, ProjectCard } from "@/types";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

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
    <section id="projects" className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="section-kicker">Selected Work</p>
          <h2 className="section-title">
            Compliance, property, and business operations.
          </h2>
          <p className="mt-4 leading-7 text-slate-400">
            Software built around specific workflows, from running a CA practice
            to finding a rental or qualifying the next sales lead.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={`${project.slug}-${project.liveUrl}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: Math.min(index * 0.04, 0.2),
              }}
              className="flex min-h-[360px] flex-col rounded-lg border border-white/10 bg-[#07131c]/90 p-5 shadow-soft"
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.label} application interface`}
                  width={1440}
                  height={960}
                  className="mb-5 aspect-[3/2] w-full rounded-md border border-white/10 object-contain"
                />
              ) : null}
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="rounded-full border border-mint/20 bg-mint/10 px-3 py-1 text-xs uppercase text-mint">
                  {index < featuredProjects.length ? "Featured" : "More Work"}
                </span>
                <span className="text-xs text-slate-500">
                  {project.stack[0]}
                </span>
              </div>
              <h3 className="text-2xl font-semibold capitalize text-white">
                {project.label}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
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
                    Code <Code2 size={16} aria-hidden="true" />
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
