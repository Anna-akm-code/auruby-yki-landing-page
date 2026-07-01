import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { aboutContent, aboutPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Auruby — YKI keskitaso prep by Anna Akimova",
  description:
    "Auruby is a YKI keskitaso Finnish exam prep app — vocabulary, reading, listening, writing, and speaking in one place, built by Anna Akimova, a CELTA-certified language teacher.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Auruby",
    description:
      "The YKI keskitaso prep app built by Anna Akimova, a CELTA-certified language teacher — one place for vocabulary, reading, listening, writing, and speaking.",
    type: "website",
    url: "/about",
    siteName: "Auruby",
  },
};

const EMAIL = "hello@auruby.io";

// Renders a paragraph, turning the contact email into a mailto link.
function Paragraph({ text }: { text: string }) {
  if (text === EMAIL) {
    return (
      <p>
        <a
          href={`mailto:${EMAIL}`}
          className="text-purple underline underline-offset-2 transition hover:text-purple-deep"
        >
          {EMAIL}
        </a>
      </p>
    );
  }
  return <p>{text}</p>;
}

// Server component: the visible copy and the AboutPage JSON-LD are both rendered
// into the initial HTML so AI/search crawlers see them without running JS.
export default function AboutPage() {
  return (
    <main>
      <Nav />

      <section className="px-6 pt-16 pb-20 sm:pt-20">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h1 className="font-display text-[34px] font-semibold text-anthracite sm:text-[42px]">
              {aboutContent.title}
            </h1>
            <div className="mt-6 space-y-4 font-sans text-[17px] leading-relaxed text-anthracite-soft">
              {aboutContent.intro.map((text, i) => (
                <Paragraph key={i} text={text} />
              ))}
            </div>
          </FadeIn>

          {aboutContent.sections.map((section) => (
            <FadeIn as="section" key={section.heading} className="mt-12">
              <h2 className="font-display text-[24px] font-semibold text-anthracite sm:text-[28px]">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4 font-sans text-[17px] leading-relaxed text-anthracite-soft">
                {section.paragraphs.map((text, i) => (
                  <Paragraph key={i} text={text} />
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
    </main>
  );
}
