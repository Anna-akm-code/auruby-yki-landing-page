"use client";

import { capture } from "@/components/PostHogProvider";

const LIME = "#C5E63C";

export function PromoBanner() {
  return (
    <div className="bg-[#3D3B5C] px-4 py-1.5 text-cream">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div />
        <div className="text-center">
          <p className="font-sans text-[14px] leading-tight">
            <span style={{ color: "rgba(255,255,255,0.6)" }}>
              Auruby app launch:
            </span>{" "}
            <span style={{ color: LIME }}>summer 2026</span>
          </p>
          <p className="mt-0.5 font-sans text-[13px] font-medium leading-tight">
            <span style={{ color: "rgba(255,255,255,0.9)" }}>
              Lock in the early-bird price
            </span>{" "}
            <span className="line-through" style={{ opacity: 0.6 }}>
              €22.99
            </span>{" "}
            <span className="text-white">→</span>{" "}
            <span style={{ color: LIME, fontWeight: 700 }}>€11.99/mo</span>{" "}
            <span className="text-white">by joining the</span>{" "}
            <span style={{ color: LIME }}>waitlist</span>
          </p>
        </div>
        <a
          href="/#waitlist"
          onClick={() => capture("cta_clicked", { location: "banner" })}
          className="justify-self-end rounded-3xl bg-[#C5E63C] px-[20px] py-[7px] font-sans text-[15px] font-semibold text-[#1a1a1a] transition hover:bg-[#C5E63C]/90"
        >
          Join the waitlist
        </a>
      </div>
    </div>
  );
}
