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

export function ScrollTracker() {
  const seen = useRef<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (!id || seen.current.has(id)) continue;
          if (entry.intersectionRatio >= 0.4) {
            seen.current.add(id);
            capture("section_viewed", { section: id });
          }
        }
      },
      { threshold: [0.4] }
    );

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
