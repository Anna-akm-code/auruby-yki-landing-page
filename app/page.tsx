import type { Metadata } from "next";
import { englishFontVariables } from "@/lib/fonts";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "auruby.io — Выберите язык",
  description:
    "Финский YKI keskitaso или английский с Анной Николае — выберите направление.",
  robots: { index: true, follow: true },
};

export default function LanguageSelectorPage() {
  return (
    <main
      className={`${englishFontVariables} flex min-h-screen flex-col items-center justify-center bg-english-aubergine px-6 py-16 font-body text-white sm:px-12`}
    >
      <div className="flex items-baseline gap-[9px]">
        <span className="font-heading text-[22px] font-semibold tracking-[-0.02em] text-white">
          auruby
        </span>
        <span className="block h-[7px] w-[7px] rounded-full bg-english-chartreuse" />
      </div>

      <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">
        Выберите язык
      </div>

      <div className="mt-12 grid w-full max-w-[820px] grid-cols-1 gap-6 sm:grid-cols-2">
        <a
          href="/finnish"
          className="flex flex-col justify-between gap-10 rounded-[24px] bg-english-lilac p-9 text-english-aubergine transition hover:bg-white"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-english-muted">
            YKI keskitaso
          </div>
          <div>
            <h2 className="font-heading text-[34px] leading-[1.04] tracking-[-0.03em]">
              Финский
            </h2>
            <span className="mt-3 inline-flex items-center gap-2 font-body text-[14.5px] font-semibold text-english-muted">
              Перейти <span>→</span>
            </span>
          </div>
        </a>
        <a
          href="/english"
          className="flex flex-col justify-between gap-10 rounded-[24px] bg-english-chartreuse p-9 text-english-aubergine transition hover:bg-english-chartreuse-hover"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-english-mid/70">
            С Анной Николае
          </div>
          <div>
            <h2 className="font-heading text-[34px] leading-[1.04] tracking-[-0.03em]">
              Английский
            </h2>
            <span className="mt-3 inline-flex items-center gap-2 font-body text-[14.5px] font-semibold text-english-mid">
              Перейти <span>→</span>
            </span>
          </div>
        </a>
      </div>
    </main>
  );
}
