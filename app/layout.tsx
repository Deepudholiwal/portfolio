import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deepak Yadav | Web Developer & Bitrix24 Implementer",
  description:
    "Deepak Yadav builds full-stack web applications, CRM workflows, Bitrix24 automation, and business software for Indian companies.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://deepak-yadav-portfolio.dk4796804.chatgpt.site",
  ),
  keywords: [
    "Deepak Yadav",
    "Web Developer",
    "Bitrix24 Implementer",
    "Full Stack Developer",
    "CRM Automation",
    "Business Software",
  ],
  openGraph: {
    title: "Deepak Yadav | Web Developer & Bitrix24 Implementer",
    description:
      "Full-stack web development, Bitrix24 CRM implementation, business automation, and custom software for modern operations.",
    type: "website",
    siteName: "Deepak Yadav Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Yadav | Web Developer & Bitrix24 Implementer",
    description:
      "Full-stack web development, Bitrix24 workflows, and automation for growing businesses.",
    creator: "@Deepudholiwal",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
