"use client";

import { useState, FormEvent } from "react";
import { capture } from "@/components/PostHogProvider";

const CHILD_AGES = ["10", "11", "12", "13", "14", "15", "16", "Other"];

async function submitSignup(payload: {
  parentName: string;
  email: string;
  childAge: string;
  notes: string;
}): Promise<boolean> {
  try {
    const res = await fetch("/api/club-signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch (err) {
    console.error("[club-signup] submit failed", err);
    return false;
  }
}

export function ClubSignupForm() {
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [childAge, setChildAge] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setFormError(null);

    const trimmedName = parentName.trim();
    const trimmedEmail = email.trim();

    const hasNameError = trimmedName.length === 0;
    const hasEmailError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);

    setNameError(hasNameError ? "Please enter your name." : null);
    setEmailError(hasEmailError ? "Please enter a valid email address." : null);

    if (hasNameError || hasEmailError || !childAge) return;

    setSubmitting(true);
    const ok = await submitSignup({
      parentName: trimmedName,
      email: trimmedEmail,
      childAge,
      notes: notes.trim(),
    });
    setSubmitting(false);

    if (!ok) {
      setFormError("Something went wrong. Please try again.");
      return;
    }

    capture("young_founders_signup", {
      child_age: childAge,
      email_domain: trimmedEmail.split("@")[1],
    });
    setDone(true);
  }

  if (done) {
    return (
      <div className="flex flex-col rounded-[24px] bg-english-lilac p-9 sm:p-10">
        <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-english-muted">
          Confirmed
        </div>
        <h3 className="font-heading text-[26px] leading-[1.1] tracking-[-0.02em] text-english-aubergine sm:text-[30px]">
          You&rsquo;re on the list
        </h3>
        <p className="mt-3.5 font-body text-[15.5px] leading-[1.55] text-english-mid">
          Thanks, {parentName.trim()}! Spots are filled in order of sign-up
          &mdash; I&rsquo;ll reply within a day to confirm the group, day and
          time.
        </p>
        <p className="mt-3 font-body text-[13.5px] text-english-muted">
          Check {email.trim()} for a confirmation email.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="flex flex-col rounded-[24px] bg-english-lilac p-9 sm:p-10"
    >
      <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-english-muted">
        Young Founders
      </div>
      <h3 className="font-heading text-[26px] leading-[1.1] tracking-[-0.02em] text-english-aubergine sm:text-[30px]">
        Reserve a spot
      </h3>
      <p className="mt-2.5 font-body text-[15px] leading-[1.5] text-english-muted">
        Spots filled in order of sign-up. I&rsquo;ll reply within a day.
      </p>

      <div className="mt-7 grid gap-5">
        <div>
          <label
            htmlFor="parentName"
            className="mb-1.5 block font-body text-[13.5px] font-semibold text-english-mid"
          >
            Parent&rsquo;s name
          </label>
          <input
            id="parentName"
            type="text"
            required
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
            autoComplete="name"
            aria-invalid={nameError ? true : undefined}
            className="w-full rounded-[12px] border border-english-aubergine/[0.18] bg-white px-4 py-3 font-body text-[15px] text-english-aubergine placeholder:text-english-muted/70 focus:border-english-aubergine focus:outline-none"
            placeholder="Your name"
          />
          {nameError && (
            <p className="mt-1.5 font-body text-[13px] text-incorrect">
              {nameError}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="parentEmail"
            className="mb-1.5 block font-body text-[13.5px] font-semibold text-english-mid"
          >
            Email
          </label>
          <input
            id="parentEmail"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            aria-invalid={emailError ? true : undefined}
            className="w-full rounded-[12px] border border-english-aubergine/[0.18] bg-white px-4 py-3 font-body text-[15px] text-english-aubergine placeholder:text-english-muted/70 focus:border-english-aubergine focus:outline-none"
            placeholder="you@example.com"
          />
          {emailError && (
            <p className="mt-1.5 font-body text-[13px] text-incorrect">
              {emailError}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="childAge"
            className="mb-1.5 block font-body text-[13.5px] font-semibold text-english-mid"
          >
            Child&rsquo;s age
          </label>
          <select
            id="childAge"
            required
            value={childAge}
            onChange={(e) => setChildAge(e.target.value)}
            className="w-full rounded-[12px] border border-english-aubergine/[0.18] bg-white px-4 py-3 font-body text-[15px] text-english-aubergine focus:border-english-aubergine focus:outline-none"
          >
            <option value="" disabled>
              Select age
            </option>
            {CHILD_AGES.map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="notes"
            className="mb-1.5 block font-body text-[13.5px] font-semibold text-english-mid"
          >
            Anything I should know?{" "}
            <span className="font-normal text-english-muted">(optional)</span>
          </label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="w-full resize-none rounded-[12px] border border-english-aubergine/[0.18] bg-white px-4 py-3 font-body text-[15px] text-english-aubergine placeholder:text-english-muted/70 focus:border-english-aubergine focus:outline-none"
            placeholder="Level, interests, scheduling constraints…"
          />
        </div>
      </div>

      {formError && (
        <p className="mt-4 font-body text-[13.5px] text-incorrect">
          {formError}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-7 inline-flex items-center justify-center gap-2.5 rounded-full bg-english-chartreuse px-8 py-[18px] font-body text-[16.5px] font-bold text-english-aubergine transition hover:bg-english-chartreuse-hover disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Reserve a free first session"}
        <span className="text-[18px]">→</span>
      </button>
      <p className="mt-3.5 font-body text-[13px] leading-[1.5] text-english-muted">
        No payment now. We&rsquo;ll confirm the group, day and time by email.
      </p>
    </form>
  );
}
