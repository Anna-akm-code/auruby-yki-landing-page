import type { Metadata } from "next";
import { Josefin_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "@/components/PostHogProvider";
import {
  SITE_URL,
  organizationJsonLd,
  websiteJsonLd,
  softwareApplicationJsonLd,
} from "@/lib/seo";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-josefin",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title:
    "YKI Keskitaso Prep App — Vocabulary, Reading, Writing, Listening, Speaking in One Place",
  description:
    "Prepare for the YKI keskitaso Finnish language exam with one app. AI-powered vocabulary, reading, listening, writing, and speaking practice structured by exam topics.",
  keywords: [
    "YKI",
    "keskitaso",
    "Finnish language test",
    "YKI prep",
    "YKI practice",
    "Finnish exam",
    "B1 Finnish",
    "B2 Finnish",
    "Finnish vocabulary",
    "Finnish reading comprehension",
    "Finnish listening comprehension",
    "Finnish writing",
    "Finnish speaking practice",
  ],
  openGraph: {
    title: "YKI Keskitaso Prep App — all your Finnish exam prep in one place",
    description:
      "Vocabulary, reading, listening, writing, and speaking — structured by YKI exam topics, tracked by AI, designed by a language teacher.",
    type: "website",
    url: SITE_URL,
    siteName: "Auruby",
  },
  twitter: {
    card: "summary_large_image",
    title: "YKI Keskitaso Prep App",
    description:
      "All your YKI keskitaso prep in one app — vocabulary, reading, listening, writing, speaking.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${josefin.variable} ${outfit.variable}`}>
      <head>
        {/* Server-rendered JSON-LD: present in the initial HTML, not injected
            after hydration, so AI/search crawlers see it without running JS. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationJsonLd),
          }}
        />
      </head>
      <body>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
