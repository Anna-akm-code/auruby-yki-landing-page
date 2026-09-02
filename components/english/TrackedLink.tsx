"use client";

import type { AnchorHTMLAttributes } from "react";
import { capture } from "@/components/PostHogProvider";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: string;
  properties?: Record<string, unknown>;
};

// Thin <a> wrapper that fires a PostHog event on click, then behaves
// exactly like a plain anchor (same props, same DOM output).
export function TrackedLink({
  event,
  properties,
  onClick,
  ...rest
}: TrackedLinkProps) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        capture(event, properties);
        onClick?.(e);
      }}
    />
  );
}
