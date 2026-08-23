# Adding a new blog post to auruby.io

*Keep this file in the project root. When you want to add a post, open Claude Code in the project and say: "Add a new blog post. Read BLOG_POST_INSTRUCTIONS.md first."*

---

## What Claude Code does for each new post

### Step 1 — Get the content from the user

Ask for:
1. **Topic / working title** — what is this post about?
2. **Key points** — bullet points, a rough draft, voice notes transcript, or just "here's what I want to say"
3. **Type** — is this an informational post (exam facts, registration, prep methods) or a personal/diary post (YKI prep experience, teaching observations)?

If the user provides a rough draft or transcript, use it as the source. Rewrite into blog structure but preserve the user's voice and specific details. Do not invent anecdotes, examples, or claims the user didn't provide.

### Step 2 — Create the file

**Filename:** `content/blog/YYYY-MM-DD_slug.mdx`

- Date is today's date
- Slug is a short, descriptive, lowercase, hyphenated version of the topic
- Example: `content/blog/2026-08-23_why-i-stopped-doing-textbook-exercises.mdx`

**Frontmatter:**
```yaml
---
title: "Question-phrased or direct title"
date: "YYYY-MM-DD"
updated: "YYYY-MM-DD"
description: "1–2 sentences. Answer-first — say what the post delivers. Used in og:description and BlogPosting schema."
tags: ["relevant", "tags"]
---
```

Common tags: `yki`, `prep`, `vocabulary`, `grammar`, `speaking`, `writing`, `reading`, `listening`, `puhekieli`, `kirjakieli`, `diary`, `teaching`, `motivation`, `exam-day`

### Step 3 — Write the post body

Follow ALL of these structural rules:

**Opening (first 150–200 words):**
- Directly answers the question the title asks
- No build-up, no "let me explain why this matters first"
- The reader (and AI retrieval systems) should get the core answer immediately

**Headings:**
- The title in frontmatter is the H1 (rendered by the page template — do NOT add an H1 in the MDX body)
- Use `## Question-phrased heading?` for sections (H2)
- Use `### Sub-point` for sub-sections within an H2 (H3)
- One topic per H2. Each H2 section opens with the direct answer, then supporting detail
- No generic headings like "Background," "Conclusion," "Summary"

**Paragraphs:**
- 2–3 sentences max per paragraph
- Short sections. Don't pad to hit a word count

**First-hand experience:**
- Every post must contain at least one moment where it's clear this is written from direct experience, not compiled
- "I've been teaching English for 8 years" / "I'm sitting the YKI exam this month" / "When I tried this with my students" — stated as fact in the body text, not in a sidebar

**Internal links:**
- Every post links to at least one other page on auruby.io
- Use standard markdown links: `[text](/faq)`, `[text](/about)`, `[text](/blog/other-post-slug)`
- Link where it genuinely helps the reader. Don't force it

**Standalone sections:**
- No "as mentioned above" or "building on what we covered"
- Every section must make sense if read in isolation (AI engines extract sections individually)

**Voice (from about-me.md):**
- First person, "I" — Anna speaking
- Warm base, dry edge. Lower the panic, don't add to it
- Short sentences. Deliberate fragments for emphasis. Short-short-long rhythm
- Minimal hedging. Contractions. Em dashes
- Conclusions over recommendations
- Anna is NOT a Finnish teacher. She is a CELTA-certified English teacher who is learning Finnish and building Auruby. Never imply she teaches Finnish. Finnish content authority belongs to native speakers and S2 teachers who review Auruby's content

### Step 4 — Check before presenting

Run through this checklist:

1. ✅ First paragraph directly answers the title's question?
2. ✅ Exactly zero H1 in the MDX body? (title comes from frontmatter)
3. ✅ All H2s are question-phrased?
4. ✅ Each H2 section opens with the direct answer?
5. ✅ All paragraphs ≤ 3 sentences?
6. ✅ First-hand experience visible in the body text?
7. ✅ At least one internal link to another auruby.io page?
8. ✅ Every section stands alone (no "as mentioned above")?
9. ✅ Description frontmatter is answer-first, not a tease?
10. ✅ Post does one job — inform OR build credibility — not both?
11. ✅ No strawman comparisons (see content process checklist #3)?
12. ✅ No AI-voice patterns: no staccato drama fragments, no punchy isolated closers, no numbered method lists, no inflated stakes?
13. ✅ No sales pitch at the end?
14. ✅ Date in filename matches date in frontmatter?

### Step 5 — Verify locally

After creating the file:
```bash
npm run dev
```

Check:
- `/blog` listing shows the new post with correct title, date, description
- `/blog/[slug]` renders correctly with all headings, links, and styling
- BlogPosting JSON-LD appears in page source with correct title, dates, and author `@id`
- No console errors

If anything breaks, fix it before stopping.

### Step 6 — Stop

Do NOT commit or push. Anna handles git herself:
```
git add -A
git commit -m "blog: add post about [topic]"
git push
```

Then Vercel auto-deploys. After deploy, Anna validates schema at validator.schema.org (Fetch URL tab).

---

## Things Claude Code must NOT do

- Do not modify `lib/seo.ts` or the entity graph
- Do not modify existing pages (homepage, /faq, /about) unless explicitly asked
- Do not invent quotes, statistics, or anecdotes the user didn't provide
- Do not add an H1 inside the MDX body
- Do not write "conclusion" or "summary" sections
- Do not add images unless the user provides them
- Do not commit, push, or deploy
- Do not create new components unless the existing MDX rendering doesn't support what's needed
- Do not add meta-narration openers ("Let me walk you through..."), importance-inflation tags ("this is the key insight"), or false-drama openers ("Before I build anything, one decision drives everything")
