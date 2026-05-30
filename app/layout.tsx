import type { Metadata } from "next";
import { Josefin_Sans, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { PostHogProvider } from "@/components/PostHogProvider";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://auruby.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    url: siteUrl,
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the YKI keskitaso exam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "YKI keskitaso (intermediate level) is the Finnish National Certificate of Language Proficiency at CEFR levels B1–B2. It tests reading comprehension, listening comprehension, writing, and speaking in Finnish. Passing it is a common requirement for Finnish citizenship.",
      },
    },
    {
      "@type": "Question",
      name: "How do I prepare for YKI keskitaso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Effective YKI keskitaso preparation covers five areas: vocabulary by exam topics (society, work, health, etc.), reading B1–B2 texts in exam format, listening with comprehension questions, writing exam-style tasks like complaint letters and emails, and practising spoken everyday situations. Auruby brings all five into one app structured by YKI themes.",
      },
    },
    {
      "@type": "Question",
      name: "What level is YKI keskitaso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "YKI keskitaso corresponds to CEFR levels B1 and B2 — intermediate Finnish. You can understand the main ideas of clear standard speech and texts on familiar matters, and produce connected text on topics that are familiar or of personal interest.",
      },
    },
    {
      "@type": "Question",
      name: "Who designed the Auruby YKI prep app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Auruby is designed by a CELTA-certified language teacher with 8 years of teaching experience. All content is tested and reviewed by experienced Finnish language teachers.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${josefin.variable} ${outfit.variable}`}>
      <body>
        <PostHogProvider>{children}</PostHogProvider>
        <Script
          id="faq-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </body>
    </html>
  );
}
