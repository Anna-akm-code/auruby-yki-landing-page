"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PhoneFrame } from "@/components/PhoneFrame";
import { DashboardMock } from "@/components/mockups/DashboardMock";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative overflow-hidden px-6 pt-12 pb-20 sm:pt-16 sm:pb-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.45, 0.27, 0.99] }}
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-sand-warm px-3 py-1 font-sans text-xs font-medium text-anthracite-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-chartreuse" />
            For the YKI keskitaso exam
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.05] text-anthracite sm:text-5xl lg:text-[56px]">
            All your YKI keskitaso prep in one app
          </h1>
          <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-anthracite-soft sm:text-xl">
            Vocabulary, reading, listening, writing, and speaking — structured
            by exam topics, tracked by AI, designed by a language teacher.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#waitlist"
              className="rounded-full bg-[#C5E63C] px-8 py-4 font-sans text-base font-semibold text-[#1a1a1a] shadow-[0_14px_36px_-12px_rgba(197,230,60,0.55)] transition hover:bg-[#C5E63C]/90 sm:text-lg"
            >
              Join the waitlist
            </a>
            <a
              href="#feature-vocabulary"
              className="font-sans text-base font-medium text-anthracite-soft underline-offset-4 hover:underline"
            >
              See what&apos;s inside ↓
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 32, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.21, 0.45, 0.27, 0.99],
          }}
          className="relative flex justify-center"
        >
          <div className="absolute -inset-6 -z-10 rounded-[60px] bg-gradient-to-br from-chartreuse-glow via-transparent to-transparent blur-2xl" />
          <PhoneFrame>
            <DashboardMock />
          </PhoneFrame>
        </motion.div>
      </div>
    </section>
  );
}
