import { ReactNode } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { FadeIn } from "@/components/FadeIn";

interface FeatureSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  bullets: ReactNode[];
  mockup: ReactNode;
  reverse?: boolean;
  accent?: "chartreuse" | "neon-pink" | "purple" | "electric";
  background?: "sand" | "warm";
}

const accentDot = {
  chartreuse: "bg-chartreuse",
  "neon-pink": "bg-neon-pink",
  purple: "bg-purple",
  electric: "bg-electric",
} as const;

export function FeatureSection({
  id,
  eyebrow,
  title,
  bullets,
  mockup,
  reverse = false,
  accent = "chartreuse",
  background = "sand",
}: FeatureSectionProps) {
  return (
    <FadeIn
      as="section"
      id={id}
      className={`px-6 py-20 sm:py-28 ${
        background === "warm" ? "bg-sand-warm" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-cream px-3 py-1 font-sans text-xs font-medium text-anthracite-soft">
              <span
                className={`h-1.5 w-1.5 rounded-full ${accentDot[accent]}`}
              />
              {eyebrow}
            </p>
            <h2 className="font-display text-3xl font-semibold text-anthracite sm:text-4xl">
              {title}
            </h2>
            <ul className="mt-6 space-y-4">
              {bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex gap-3 font-sans text-lg leading-relaxed text-anthracite-soft"
                >
                  <span
                    className={`mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full ${accentDot[accent]}`}
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex justify-center">
            <div
              className={`absolute -inset-6 -z-10 rounded-[60px] blur-2xl ${
                accent === "chartreuse"
                  ? "bg-chartreuse-glow"
                  : "bg-neon-pink-muted"
              }`}
            />
            <PhoneFrame>{mockup}</PhoneFrame>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
