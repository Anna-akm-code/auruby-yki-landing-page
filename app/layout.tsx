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
  title: "Auruby — Finnish YKI prep and English lessons",
  description:
    "Auruby: a YKI keskitaso Finnish exam prep app, and English lessons for teens and adults with Anna Nicolae.",
  keywords: [
    "YKI",
    "keskitaso",
    "Finnish language test",
    "English lessons",
    "English speaking club",
  ],
  openGraph: {
    title: "Auruby — Finnish YKI prep and English lessons",
    description:
      "A YKI keskitaso Finnish exam prep app, and English lessons for teens and adults with Anna Nicolae.",
    type: "website",
    url: SITE_URL,
    siteName: "Auruby",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auruby",
    description:
      "Finnish YKI keskitaso exam prep, and English lessons for teens and adults.",
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
