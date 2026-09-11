import type { Metadata } from "next";
import Image from "next/image";
import { englishFontVariables } from "@/lib/fonts";
import { ClubSignupForm } from "@/components/english/ClubSignupForm";

export const metadata: Metadata = {
  alternates: { canonical: "/young-founders" },
  title: "THE CLUB: Young Founders — English club for ages 10–16",
  description:
    "A weekly English discussion group for ages 10–16, built around tech topics: AI, games, apps and robots. First session free.",
  openGraph: {
    title: "THE CLUB: Young Founders",
    description:
      "A weekly English discussion group for ages 10–16, built around tech topics. First session free.",
    type: "website",
    url: "/young-founders",
    siteName: "Auruby",
  },
};

const founderFacts: { text: string; variant?: "chartreuse" }[] = [
  { text: "Online" },
  { text: "1 × 60 min/week" },
  { text: "Max 6 per group" },
  { text: "Two groups: 10–12 and 13–16" },
  { text: "Starts 21 Sept 2026" },
  { text: "€45/month" },
  { text: "First session free", variant: "chartreuse" },
];

export default function YoungFoundersPage() {
  return (
    <div
      className={`${englishFontVariables} bg-english-bg font-body text-english-aubergine`}
    >
      <div className="sticky top-0 z-50 border-b border-english-aubergine/10 bg-english-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between gap-8 px-6 sm:px-12">
          <a
            href="/"
            className="font-display text-[27px] font-bold leading-none text-english-chartreuse sm:text-[31px]"
          >
            Auruby
          </a>
          <a
            href="#signup"
            className="inline-flex items-center gap-2 rounded-full bg-english-aubergine px-[22px] py-3 font-body text-[14.5px] font-semibold text-white transition hover:bg-english-dark hover:text-english-chartreuse"
          >
            Reserve a spot
          </a>
        </div>
      </div>

      <main className="px-6 py-16 sm:px-12 sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="order-1 flex flex-col rounded-[24px] bg-english-aubergine px-7 py-11 text-white sm:px-11">
              <span className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-english-chartreuse">
                THE CLUB · AGES 10–16
              </span>
              <h1 className="mt-4 font-heading text-[32px] leading-[1.06] tracking-[-0.03em] sm:text-[40px]">
                THE CLUB: Young Founders
              </h1>
              <p className="mt-3 font-heading text-[21px] font-normal leading-[1.25] tracking-[-0.015em] text-english-chartreuse sm:text-[25px]">
                Speak. Think. Argue. In English.
              </p>
              <p className="mt-5 max-w-[480px] font-body text-[16.5px] leading-[1.55] text-white/[0.82]">
                Kids and teens aged 10–16 who have opinions about games, apps,
                AI and robots — and want to say them out loud in English.
              </p>
              <p className="mt-4 max-w-[480px] font-body text-[15.5px] leading-[1.55] text-white/[0.68]">
                One real question from the world of tech each week. Should AI
                do homework? Is this game actually good? Would you let an AI
                pick your music? Everyone picks a side and defends it. Along
                the way: how to disagree politely, ask a good question,
                explain an idea so others get it.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {founderFacts.map((fact) => (
                  <span
                    key={fact.text}
                    className={
                      fact.variant === "chartreuse"
                        ? "rounded-full bg-english-chartreuse px-5 py-3 font-body text-[14.5px] font-semibold text-english-aubergine"
                        : "rounded-full border border-white/[0.28] px-5 py-3 font-body text-[14.5px]"
                    }
                  >
                    {fact.text}
                  </span>
                ))}
              </div>
            </div>

            <div id="signup" className="order-3 scroll-mt-24 lg:order-2">
              <ClubSignupForm />
            </div>

            <div className="order-2 lg:order-3 lg:col-span-2">
              <div className="grid grid-cols-1 items-start gap-10 border-t border-english-aubergine/10 pt-14 md:grid-cols-[0.72fr_1.28fr] md:gap-14">
                <div className="relative aspect-[4/5] max-h-[320px] overflow-hidden rounded-[20px] border border-english-aubergine/10">
                  <Image
                    src="/anna.jpg"
                    alt="Anna Akimova"
                    fill
                    sizes="(min-width: 768px) 24vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="mb-5 font-mono text-[11.5px] uppercase tracking-[0.16em] text-english-muted">
                    Who&rsquo;s teaching
                  </div>
                  <h2 className="font-heading text-[34px] leading-[1.05] tracking-[-0.035em] text-english-aubergine sm:text-[42px]">
                    Anna Akimova
                  </h2>
                  <p className="mt-5 max-w-[560px] font-body text-[16.5px] leading-[1.6] text-english-aubergine">
                    CELTA-certified, 8 years teaching English. Product
                    manager and software developer, now building
                    language-learning apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-english-dark px-6 py-11 text-white/60 sm:px-12">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-8 font-body text-[14px]">
          <div className="flex items-baseline gap-[9px]">
            <span className="font-display text-[19px] font-bold leading-none text-english-chartreuse">
              Auruby
            </span>
          </div>
          <div className="flex gap-7">
            <a href="#" className="transition hover:text-english-chartreuse">
              Instagram
            </a>
            <a href="#" className="transition hover:text-english-chartreuse">
              Telegram
            </a>
            <a href="#" className="transition hover:text-english-chartreuse">
              Email
            </a>
          </div>
          <span>© 2026 Anna · English as a tool</span>
        </div>
      </footer>
    </div>
  );
}
