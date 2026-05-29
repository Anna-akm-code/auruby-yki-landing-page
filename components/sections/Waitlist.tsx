"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { capture } from "@/components/PostHogProvider";

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
      className="bg-anthracite px-9 py-9 text-cream sm:px-12 sm:py-12"
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="font-display text-[24px] font-bold text-white">
          Join the waitlist
        </h2>
        <p className="mt-3 font-sans text-[14px] text-[#aaa]">
          Be first to know when Auruby opens. We&apos;ll only email about the
          launch — no marketing spam.
        </p>

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
              <p className="mb-4 font-sans text-[16px] font-medium text-white">
                Get notified when Auruby launches
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  aria-label="Email address"
                  className="flex-1 rounded-[10px] border border-[#555] bg-[#3a3a3a] px-4 py-[13px] font-sans text-base text-white placeholder:text-[#888] focus:border-chartreuse focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-[10px] bg-chartreuse px-[22px] py-[13px] font-sans text-base font-semibold text-anthracite transition hover:bg-chartreuse/90 disabled:opacity-60"
                >
                  {submitting ? "Saving…" : "Join the waitlist"}
                </button>
              </div>

              {error && (
                <p className="mt-3 font-sans text-sm text-incorrect">{error}</p>
              )}

              <p className="mt-4 font-sans text-[12px] text-[#777]">
                No payment now. Your €11.99/mo rate locks when you sign up.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
