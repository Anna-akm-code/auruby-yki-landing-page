import type { Metadata } from "next";
import { Fragment } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import {
  faqSections,
  faqPageJsonLd,
  type FaqBlock,
  type FaqInline,
} from "@/lib/seo";

export const metadata: Metadata = {
  title:
    "YKI keskitaso FAQ — levels, citizenship, 2026 dates, cost, and how to prepare",
  description:
    "Answers about the YKI keskitaso Finnish exam: the levels and four skills, what you need for citizenship, 2026 test dates, fees, registration, retakes, and how to prepare for reading, listening, writing, and speaking.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "YKI keskitaso FAQ",
    description:
      "Levels, citizenship requirements, 2026 test dates, fees, registration, and how to prepare for the YKI keskitaso Finnish exam.",
    type: "website",
    url: "/faq",
    siteName: "Auruby",
  },
};

// Renders one inline run: plain text, a bold/italic run, or a link.
function renderInline(nodes: FaqInline[]) {
  return nodes.map((node, i) => {
    if (typeof node === "string") {
      return <Fragment key={i}>{node}</Fragment>;
    }
    if ("href" in node) {
      return (
        <a
          key={i}
          href={node.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple underline underline-offset-2 transition hover:text-purple-deep"
        >
          {node.text}
        </a>
      );
    }
    let content: React.ReactNode = node.text;
    if (node.italic) content = <em>{content}</em>;
    if (node.bold) {
      content = (
        <strong className="font-semibold text-anthracite">{content}</strong>
      );
    }
    return <Fragment key={i}>{content}</Fragment>;
  });
}

// Renders one answer block. The page and the FAQPage JSON-LD both come from the
// same `faqSections` source (see lib/seo.ts), so they can't drift apart.
function AnswerBlock({ block }: { block: FaqBlock }) {
  switch (block.type) {
    case "p":
      return <p>{renderInline(block.content)}</p>;
    case "ul":
      return (
        <ul className="list-disc space-y-2 pl-5 marker:text-anthracite-muted">
          {block.items.map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-decimal space-y-2 pl-5 marker:text-anthracite-muted">
          {block.items.map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-purple/40 pl-4">
          {block.label && (
            <span className="mb-1 block font-display font-semibold text-anthracite">
              {block.label}
            </span>
          )}
          <span className="italic">{renderInline(block.content)}</span>
        </blockquote>
      );
    case "table":
      return (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-[15px]">
            <thead>
              <tr>
                {block.headers.map((header, i) => (
                  <th
                    key={i}
                    className="border-b border-anthracite/20 py-2 pr-4 font-display font-semibold text-anthracite"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="border-b border-anthracite/10 py-2 pr-4 align-top"
                    >
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

// Reuses the homepage feature sections' visual language: the pill label's
// colored dot (accentDot in FeatureSection) and the soft blurred halo/glow
// that sits behind the phone mockups (accentHalo). Same tokens, mapped per
// section — chartreuse (Vocabulary), electric (Reading), orange (Listening),
// neon-pink (Writing).
const sectionAccent: Record<string, { dot: string; halo: string }> = {
  "Exam basics": { dot: "bg-chartreuse", halo: "bg-chartreuse-glow" },
  "Citizenship and other reasons for taking YKI": {
    dot: "bg-electric",
    halo: "bg-electric-muted",
  },
  "Registration, dates, cost, and retakes": {
    dot: "bg-orange",
    halo: "bg-orange-muted",
  },
  "How to prepare for YKI keskitaso": {
    dot: "bg-neon-pink",
    halo: "bg-neon-pink-muted",
  },
};

// Server component: the visible copy and the FAQPage JSON-LD are both rendered
// into the initial HTML so AI/search crawlers see them without running JS.
export default function FaqPage() {
  return (
    <main>
      <Nav />

      <section className="px-6 pt-16 pb-10 sm:pt-20">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h1 className="font-display text-[34px] font-semibold text-anthracite sm:text-[42px]">
              Frequently asked questions
            </h1>
            <p className="mt-4 font-sans text-[16px] leading-relaxed text-anthracite-soft">
              Everything you need to know about the YKI keskitaso Finnish exam —
              the levels and skills it tests, what you need for citizenship,
              2026 dates and fees, and how to prepare for all four sections.
            </p>
          </FadeIn>
        </div>
      </section>

      {faqSections.map((section) => {
        const accent = sectionAccent[section.title];
        return (
          <FadeIn
            as="section"
            key={section.title}
            className="relative overflow-x-clip px-6 py-14 sm:py-16"
          >
            {/* Soft blurred halo — the same glow the homepage places behind its
                phone mockups. Concentrated near the top and heavily blurred so
                it fades out into the sand background rather than filling a band.
                Sits behind the content (-z-10) and stays legible. */}
            {accent && (
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute left-1/2 top-6 -z-10 h-72 w-[min(90%,44rem)] -translate-x-1/2 rounded-[60px] blur-3xl ${accent.halo}`}
              />
            )}
            <div className="mx-auto max-w-3xl">
              {/* Section title rendered as the homepage's pill label: a small
                  rounded chip with the accent dot. */}
              <h2 className="inline-flex items-center gap-2 rounded-full bg-cream px-3.5 py-1 font-sans text-[16px] font-medium text-anthracite-soft">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    accent?.dot ?? "bg-anthracite-muted"
                  }`}
                />
                {section.title}
              </h2>
              {/* Tight inside each pair (mt-3), loose between pairs (space-y-16),
                  so the spacing itself separates one question from the next. */}
              <div className="mt-8 space-y-16">
                {section.items.map((qa) => (
                  <div key={qa.question}>
                    <h3 className="flex gap-2.5 font-display text-[20px] font-semibold text-anthracite sm:text-[22px]">
                      <span
                        aria-hidden="true"
                        className={`mt-[0.5rem] h-1.5 w-1.5 shrink-0 rounded-full ${
                          accent?.dot ?? "bg-anthracite-muted"
                        }`}
                      />
                      <span>{qa.question}</span>
                    </h3>
                    <div className="mt-3 space-y-4 font-sans text-[16px] leading-relaxed text-anthracite-soft">
                      {qa.answer.map((block, i) => (
                        <AnswerBlock key={i} block={block} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        );
      })}

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
      />
    </main>
  );
}
