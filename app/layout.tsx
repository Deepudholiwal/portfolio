import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deepak Yadav | Premium Software Consultant",
  description: "Deepak Yadav is a Full Stack Developer, Bitrix24 Consultant, CRM Automation Expert and AI Solutions Developer.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  openGraph: {
    title: "Deepak Yadav | Premium Technology Consulting",
    description: "Premium website and CRM automation consultancy built for enterprise growth.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Yadav",
    description: "Premium software consulting, Bitrix24 solutions, CRM automation, and AI product development.",
    creator: "@deepak_yadav"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
