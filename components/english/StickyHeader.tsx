"use client";

import { usePathname } from "next/navigation";
import { GOOGLE_FORM_URL } from "@/lib/english";
import { capture } from "@/components/PostHogProvider";

const HEADER_SOURCE_BY_PATH: Record<string, string> = {
  "/english": "english_home_header",
  "/english/plan": "plan_header",
  "/english/club": "club_header",
};

export function StickyHeader() {
  const pathname = usePathname();
  const hasApplySection = pathname !== "/english";
  const headerSource = HEADER_SOURCE_BY_PATH[pathname ?? ""] ?? "english_header";

  return (
    <div className="sticky top-0 z-50 border-b border-english-aubergine/10 bg-english-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between gap-8 px-6 sm:px-12">
        <a
          href="/english"
          className="font-display text-[27px] font-bold leading-none text-english-chartreuse sm:text-[31px]"
        >
          Auruby
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
            onClick={() =>
              capture("english_consultation_click", { source: headerSource })
            }
            className="inline-flex items-center gap-2 rounded-full bg-english-aubergine px-[22px] py-3 font-body text-[14.5px] font-semibold text-white transition hover:bg-english-dark hover:text-english-chartreuse"
          >
            Бесплатная консультация
          </a>
        ) : (
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              capture("english_consultation_click", { source: headerSource })
            }
            className="inline-flex items-center gap-2 rounded-full bg-english-aubergine px-[22px] py-3 font-body text-[14.5px] font-semibold text-white transition hover:bg-english-dark hover:text-english-chartreuse"
          >
            Бесплатная консультация
          </a>
        )}
      </div>
    </div>
  );
}
