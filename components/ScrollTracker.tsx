"use client";

import { useEffect, useRef } from "react";
import { capture } from "./PostHogProvider";

const SECTION_IDS = [
  "hero",
  "feature-vocabulary",
  "feature-reading",
  "feature-listening",
  "feature-writing",
  "feature-speaking",
  "feature-progress",
  "trust",
  "waitlist",
];

// "feature-vocabulary" → "vocabulary"; "hero" → "hero"; etc.
function shortName(id: string): string {
  return id.replace(/^feature-/, "");
}

export function ScrollTracker() {
  const seen = useRef<Set<string>>(new Set());
  const currentHash = useRef<string>("");

  useEffect(() => {
    // Observer A: fire `section_viewed` once per section per page load
    // when ≥ 40% of the section is in view.
    const viewedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (!id || seen.current.has(id)) continue;
          if (entry.intersectionRatio >= 0.4) {
            seen.current.add(id);
            capture("section_viewed", { section: shortName(id) });
          }
        }
      },
      { threshold: [0.4] },
    );

    // Observer B: maintain a live map of intersection ratios for every
    // tracked section, then pick the one most visible and reflect it in
    // the URL hash via replaceState (no history pollution).
    const ratios = new Map<string, number>();
    const hashObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.intersectionRatio);
        }
        let best: { id: string; ratio: number } | null = null;
        for (const [id, r] of ratios.entries()) {
          if (!best || r > best.ratio) best = { id, ratio: r };
        }
        if (best && best.ratio > 0.3) {
          const newHash = `#${best.id}`;
          if (
            currentHash.current !== newHash &&
            window.location.hash !== newHash
          ) {
            currentHash.current = newHash;
            window.history.replaceState(null, "", newHash);
          }
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) {
        viewedObserver.observe(el);
        hashObserver.observe(el);
      }
    }

    return () => {
      viewedObserver.disconnect();
      hashObserver.disconnect();
    };
  }, []);

  return null;
}
