"use client";

import { Suspense, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";

let initialized = false;

function initPostHog() {
  if (initialized || typeof window === "undefined") return;
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key) {
    if (process.env.NODE_ENV !== "production") {
      console.info(
        "[posthog] NEXT_PUBLIC_POSTHOG_KEY not set — analytics disabled."
      );
    }
    return;
  }
  posthog.init(key, {
    api_host:
      process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.i.posthog.com",
    person_profiles: "always",
    // Pageviews are captured manually below so that client-side Next.js
    // route changes (App Router) are tracked reliably and exactly once —
    // see PostHogPageView. Autocapture (clicks, etc.) is left on its
    // default (enabled).
    capture_pageview: false,
    capture_pageleave: true,
  });
  initialized = true;
}

// Fires a $pageview on the initial load and on every client-side route
// change (App Router navigations don't trigger a full page load, so
// posthog's own history listener isn't relied on here). Wrapped in
// Suspense because useSearchParams() requires it in the App Router.
function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastCapturedUrl = useRef<string | null>(null);

  useEffect(() => {
    initPostHog();
    if (!initialized || !pathname) return;

    let url = window.origin + pathname;
    const search = searchParams.toString();
    if (search) url += `?${search}`;

    if (lastCapturedUrl.current === url) return;
    lastCapturedUrl.current = url;
    posthog.capture("$pageview", { $current_url: url });
  }, [pathname, searchParams]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initPostHog();
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </>
  );
}

export function capture(event: string, properties?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (!initialized) return;
  posthog.capture(event, properties);
}
