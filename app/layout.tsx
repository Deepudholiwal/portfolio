import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deepak | B2B SaaS & Compliance Software",
  description:
    "B2B SaaS for Indian businesses: CA practice workflows, GST, TDS, CRM, Bitrix24 implementation, and real estate platforms.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://deepak-yadav-portfolio.dk4796804.chatgpt.site",
  ),
  openGraph: {
    title: "Deepak | B2B SaaS & Compliance Software",
    description:
      "Software for Indian CA firms, sales teams, and real estate businesses.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak | B2B SaaS Developer",
    description:
      "Compliance workflows, CRM implementation, and full-stack business software.",
    creator: "@Deepudholiwal",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
