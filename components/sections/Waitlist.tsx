"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { capture } from "@/components/PostHogProvider";

const LIME = "#C5E63C";

async function submitWaitlist(email: string): Promise<boolean> {
  try {
    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    return res.ok;
  } catch (err) {
    console.error("[waitlist] submit failed", err);
    return false;
  }
}

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubmitting(true);
    const ok = await submitWaitlist(trimmed);
    setSubmitting(false);
    if (!ok) {
      setError("Something went wrong. Please try again.");
      return;
    }
    capture("waitlist_step_email_submitted", {
      email_domain: trimmed.split("@")[1],
    });
    capture("waitlist_signup", {
      email_domain: trimmed.split("@")[1],
    });
    setDone(true);
  }

  return (
    <section
      id="waitlist"
      className="bg-anthracite px-8 pt-14 pb-12 text-cream sm:px-14 sm:pt-16 sm:pb-14"
    >
      <div className="mx-auto max-w-2xl">
        {/* Early-bird pricing */}
        <div className="text-center">
          <p
            className="font-sans text-[20px] font-semibold uppercase"
            style={{ color: LIME, letterSpacing: "1.5px" }}
          >
            Waitlist exclusive
          </p>
          <h3 className="mt-3 font-display text-[28px] font-bold leading-tight text-white">
            Early-bird pricing
          </h3>

          <div className="mt-5 flex items-baseline justify-center gap-3">
            <span className="font-sans text-[28px] text-[#888] line-through">
              €22.99
            </span>
            <span
              className="font-sans text-[48px] font-bold leading-none"
              style={{ color: LIME }}
            >
              €11.99
              <span className="font-sans text-[18px] font-normal">/mo</span>
            </span>
          </div>

          <p className="mt-4 font-sans text-[20px] text-[#aaa]">
            for your first 6 months · then €22.99/mo
          </p>
        </div>

        {/* Waitlist signup */}
        <AnimatePresence mode="wait">
          {done ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8 rounded-2xl bg-chartreuse-glow p-6"
            >
              <p className="font-display text-xl font-semibold text-cream">
                You&apos;re on the list 🎉
              </p>
              <p className="mt-2 font-sans text-base text-cream/70">
                We&apos;ll email you when the app is ready. Kiitos!
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  aria-label="Email address"
                  className="flex-1 rounded-[10px] border bg-[#3a3a3a] px-4 py-[14px] font-sans text-[18px] text-white placeholder:text-[#888] focus:outline-none"
                  style={{ borderColor: "#555" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = LIME)}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#555")}
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-[10px] px-[22px] py-[14px] font-sans text-[18px] font-medium text-anthracite transition disabled:opacity-60"
                  style={{ backgroundColor: LIME }}
                >
                  {submitting ? "Saving…" : "Join the waitlist"}
                </button>
              </div>

              {error && (
                <p className="mt-3 font-sans text-sm text-incorrect">{error}</p>
              )}

              <p className="mt-5 font-sans text-[16px] text-[#666]">
                No payment now. Your €11.99/mo rate locks when you join the
                waitlist.
              </p>
              <p className="mt-1 font-sans text-[16px] text-[#666]">
                We&apos;ll only write about the launch — nothing else.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
