"use client";

import { usePathname } from "next/navigation";
import { GOOGLE_FORM_URL } from "@/lib/english";

export function StickyHeader() {
  const pathname = usePathname();
  const hasApplySection = pathname !== "/english";

  return (
    <div className="sticky top-0 z-50 border-b border-english-aubergine/10 bg-english-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between gap-8 px-6 sm:px-12">
        <a
          href="/english"
          className="flex items-baseline gap-[9px] font-heading text-[21px] font-semibold tracking-[-0.02em] text-english-aubergine"
        >
          auruby
          <span className="block h-[7px] w-[7px] rounded-full bg-english-chartreuse" />
        </a>
        <nav className="hidden items-center gap-8 font-body text-[15px] font-medium text-english-aubergine md:flex">
          <a href="/english/club" className="transition hover:text-english-muted">
            THE CLUB
          </a>
          <a href="/english/plan" className="transition hover:text-english-muted">
            THE PLAN
          </a>
        </nav>
        {hasApplySection ? (
          <a
            href="#apply"
            className="inline-flex items-center gap-2 rounded-full bg-english-aubergine px-[22px] py-3 font-body text-[14.5px] font-semibold text-white transition hover:bg-english-dark hover:text-english-chartreuse"
          >
            Записаться
          </a>
        ) : (
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-english-aubergine px-[22px] py-3 font-body text-[14.5px] font-semibold text-white transition hover:bg-english-dark hover:text-english-chartreuse"
          >
            Записаться
          </a>
        )}
      </div>
    </div>
  );
}
