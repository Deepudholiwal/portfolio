import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deepak | AI-First Software Engineer",
  description: "Deepak builds AI-powered SaaS products, AI agents, intelligent automations, and production-ready full-stack software.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://deepak-yadav-portfolio.dk4796804.chatgpt.site"),
  openGraph: {
    title: "Deepak | AI-First Software Engineer",
    description: "Production-ready Next.js, TypeScript, Python, Node.js, PostgreSQL, LLM, and AI agent development.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Yadav",
    description: "AI-powered SaaS products, AI agents, intelligent automations, and full-stack software.",
    creator: "@Deepudholiwal"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
