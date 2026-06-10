import { FadeIn } from "@/components/FadeIn";
import { faqs, faqJsonLd } from "@/lib/seo";

// Server component: the FAQ copy and the FAQPage JSON-LD are both rendered into
// the initial HTML, and both read from the same `faqs` source so they stay in sync.
export function Faq() {
  return (
    <FadeIn as="section" id="faq" className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-[30px] font-semibold text-anthracite sm:text-[36px]">
          Frequently asked questions
        </h2>
        <div className="mt-8 space-y-8">
          {faqs.map((f) => (
            <div key={f.question}>
              <h3 className="font-display text-[20px] font-semibold text-anthracite sm:text-[22px]">
                {f.question}
              </h3>
              <p className="mt-3 font-sans text-[16px] leading-relaxed text-anthracite-soft">
                {f.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </FadeIn>
  );
}
