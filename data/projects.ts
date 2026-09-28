import type { ProjectCard } from "@/types";

export const featuredProjects: ProjectCard[] = [
  {
    slug: "ca-suite-pro",
    label: "CA Suite Pro",
    description:
      "Software for Indian CA firm operations, bringing GST, ITR, TDS, and ROC/MCA workflows into one product. Domain-specific details include PAN formats and amounts expressed in lakhs and crores.",
    stack: ["CA Practice", "Compliance Workflows", "Indian Business"],
  },
  {
    slug: "ghardirect",
    label: "GharDirect",
    description:
      "A direct-to-owner rental platform built with the MERN stack. Location and rent filters support property discovery, while Socket.IO connects owners and tenants through in-app conversations.",
    stack: ["React", "Express", "MongoDB", "Socket.IO"],
  },
  {
    slug: "lead-scanner",
    label: "Lead Scanner",
    description:
      "A B2B prospecting tool that searches businesses by keyword and location using Google Places, scores their website presence, and exports results to CSV for follow-up.",
    stack: ["Node.js", "Google Places API", "Lead Scoring", "CSV Export"],
  },
  {
    slug: "real-estate-showcase",
    label: "Luxury Real Estate Website",
    description:
      "A polished property discovery experience with premium visual hierarchy, responsive listing sections, and conversion-focused real estate flows.",
    stack: ["Next.js", "React", "Responsive UI", "Real Estate"],
    liveUrl: "https://v0-real-estate-website-dusky.vercel.app/",
    image: "/projects/real-estate-showcase.png",
  },
  {
    slug: "real-estate-crm",
    label: "Real Estate CRM",
    description:
      "A CRM workspace for real estate operations, lead handling, customer tracking, and structured sales follow-up workflows.",
    stack: ["Next.js", "TypeScript", "CRM", "Dashboard"],
    liveUrl: "https://real-estate-crm-psi-nine.vercel.app/",
    githubUrl: "https://github.com/Deepudholiwal/Real-Estate-CRM",
  },
  {
    slug: "palm-astro",
    label: "Palmly",
    description:
      "A live astrology and palm-reading product with a focused user journey and production deployment on Vercel.",
    stack: ["Vite", "React", "Astrology Product", "Vercel"],
    liveUrl: "https://palm-astro.vercel.app/",
    githubUrl: "https://github.com/Deepudholiwal/PalmAstro",
  },
];
