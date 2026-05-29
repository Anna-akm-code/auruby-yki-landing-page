"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { capture } from "@/components/PostHogProvider";

type Step = "hardest" | "tried" | "email" | "done";

const STEP_ORDER: Step[] = ["hardest", "tried", "email", "done"];

const HARDEST_OPTIONS = [
  "Vocabulary",
  "Reading",
  "Listening",
  "Writing",
  "Speaking",
] as const;

async function submitWaitlist(payload: {
  email: string;
  hardest: string | null;
  tried: string | null;
}) {
  try {
    await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error("[waitlist] submit failed", err);
  }
}

export function Waitlist() {
  const [step, setStep] = useState<Step>("hardest");
  const [hardest, setHardest] = useState<string | null>(null);
  const [tried, setTried] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function pickHardest(choice: string) {
    setHardest(choice);
    capture("waitlist_step_hardest_submitted", { hardest: choice, skipped: false });
    setStep("tried");
  }

  function skipHardest() {
    setHardest(null);
    capture("waitlist_step_hardest_submitted", { hardest: null, skipped: true });
    setStep("tried");
  }

  function submitTried(e?: FormEvent) {
    e?.preventDefault();
    const value = tried.trim();
    capture("waitlist_step_tried_submitted", {
      length: value.length,
      skipped: false,
    });
    setStep("email");
  }

  function skipTried() {
    setTried("");
    capture("waitlist_step_tried_submitted", { length: 0, skipped: true });
    setStep("email");
  }

  async function onEmailSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubmitting(true);
    capture("waitlist_step_email_submitted", {
      email_domain: trimmed.split("@")[1],
      hardest,
      provided_tried: tried.trim().length > 0,
    });
    await submitWaitlist({
      email: trimmed,
      hardest,
      tried: tried.trim() || null,
    });
    setSubmitting(false);
    setStep("done");
  }

  return (
    <section
      id="waitlist"
      className="bg-anthracite px-6 py-20 text-cream sm:py-28"
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Join the waitlist
        </h2>
        <p className="mt-3 max-w-lg font-sans text-base text-cream/70">
          Be first to know when Auruby opens. Two quick questions, then your
          email — no marketing spam.
        </p>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            {step === "hardest" && (
              <motion.div
                key="hardest"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mb-2 font-sans text-xs uppercase tracking-wider text-cream/50">
                  Question 1 of 2
                </p>
                <p className="mb-5 font-display text-xl font-semibold sm:text-2xl">
                  Which part of YKI prep do you find hardest?
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {HARDEST_OPTIONS.map((option) => (
                    <button
                      key={option}
                      onClick={() => pickHardest(option)}
                      className="rounded-2xl border border-cream/15 bg-cream/5 px-5 py-3 text-left font-sans text-base font-medium text-cream transition hover:border-chartreuse hover:bg-chartreuse/10"
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <button
                  onClick={skipHardest}
                  className="mt-4 font-sans text-xs text-cream/50 underline-offset-4 hover:underline"
                >
                  Skip
                </button>
              </motion.div>
            )}

            {step === "tried" && (
              <motion.form
                key="tried"
                onSubmit={submitTried}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mb-2 font-sans text-xs uppercase tracking-wider text-cream/50">
                  Question 2 of 2
                </p>
                <label
                  htmlFor="tried-input"
                  className="mb-3 block font-display text-xl font-semibold sm:text-2xl"
                >
                  What tools or resources have you already tried?
                </label>
                <textarea
                  id="tried-input"
                  value={tried}
                  onChange={(e) => setTried(e.target.value)}
                  rows={3}
                  placeholder="Books, YouTube channels, courses, tutors…"
                  className="w-full rounded-2xl bg-cream/10 px-5 py-3 font-sans text-base text-cream placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-chartreuse"
                />
                <div className="mt-3 flex items-center gap-3">
                  <button
                    type="submit"
                    className="rounded-full bg-chartreuse px-6 py-3 font-sans text-sm font-semibold text-anthracite transition hover:bg-chartreuse/90"
                  >
                    Next
                  </button>
                  <button
                    type="button"
                    onClick={skipTried}
                    className="font-sans text-xs text-cream/50 underline-offset-4 hover:underline"
                  >
                    Skip
                  </button>
                </div>
              </motion.form>
            )}

            {step === "email" && (
              <motion.form
                key="email"
                onSubmit={onEmailSubmit}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mb-2 font-sans text-xs uppercase tracking-wider text-cream/50">
                  Last step
                </p>
                <label
                  htmlFor="email-input"
                  className="mb-3 block font-display text-xl font-semibold sm:text-2xl"
                >
                  Get notified when Auruby launches
                </label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    id="email-input"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="flex-1 rounded-full bg-cream/10 px-5 py-3 font-sans text-base text-cream placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-chartreuse"
                    aria-label="Email address"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="rounded-full bg-chartreuse px-6 py-3 font-sans text-sm font-semibold text-anthracite transition hover:bg-chartreuse/90 disabled:opacity-60"
                  >
                    {submitting ? "Saving…" : "Join the waitlist"}
                  </button>
                </div>
              </motion.form>
            )}

            {step === "done" && (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl bg-chartreuse-glow p-6"
              >
                <p className="font-display text-xl font-semibold text-cream">
                  You&apos;re on the list 🎉
                </p>
                <p className="mt-2 font-sans text-base text-cream/70">
                  We&apos;ll email you when the app is ready. Kiitos!
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {error && (
            <p className="mt-3 font-sans text-sm text-incorrect">{error}</p>
          )}

          <div className="mt-8 flex items-center gap-3">
            {STEP_ORDER.slice(0, 3).map((s, i) => {
              const current = STEP_ORDER.indexOf(step);
              const done = i < current;
              const active = i === current;
              return (
                <div
                  key={s}
                  className={`h-1 flex-1 rounded-full transition ${
                    done
                      ? "bg-chartreuse"
                      : active
                        ? "bg-cream/40"
                        : "bg-cream/10"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
