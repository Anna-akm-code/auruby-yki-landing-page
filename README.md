# Auruby — YKI keskitaso prep app landing page

Next.js landing page with seven in-app mockups, a multi-step waitlist form, and PostHog drop-off tracking.

## Quick start

```bash
npm install
cp .env.local.example .env.local   # fill in keys
npm run dev                        # http://localhost:3000
```

The site runs without any env vars — PostHog stays silent and waitlist submissions short-circuit on the server (the form still works end-to-end). Set the env vars before deploying to actually capture data.

## Stack

- Next.js 15 (App Router) + React 19
- Tailwind CSS 3.4 — full Auruby palette in `tailwind.config.ts`
- Josefin Sans + Outfit via `next/font/google`
- framer-motion for fade-in-on-scroll
- PostHog (client) for page views, scroll-depth, and waitlist step events
- Supabase (server-side) for waitlist storage

## Project layout

```
app/
  layout.tsx            # fonts, metadata, FAQ JSON-LD, PostHog provider
  page.tsx              # hero + 6 feature sections + trust + waitlist
  globals.css
  api/waitlist/route.ts # POST endpoint, upserts to Supabase per step
components/
  Nav.tsx, Footer.tsx
  PhoneFrame.tsx
  FadeIn.tsx            # scroll-triggered fade/slide-up wrapper
  PostHogProvider.tsx   # init + capture() helper
  ScrollTracker.tsx     # fires `section_viewed` events
  sections/             # Hero, FeatureSection, Trust, Waitlist
  mockups/              # 7 app screen mockups
lib/
  supabase.ts           # lazy server-side client
```

## Updating content

- **Copy & bullets** — `app/page.tsx`. Each `<FeatureSection>` takes `eyebrow`, `title`, `bullets`, and `mockup` props. Bullets are JSX nodes so you can drop in `<strong>` or `<em>` inline.
- **Hero headline & CTA** — `components/sections/Hero.tsx`.
- **Trust section** — `components/sections/Trust.tsx`.
- **Waitlist questions** — `components/sections/Waitlist.tsx`. The hardest-skill options live in the `HARDEST_OPTIONS` array near the top.
- **SEO title / description / OG** — `app/layout.tsx`.
- **FAQ schema (GEO)** — `faqJsonLd` constant in `app/layout.tsx`. Add Q&A entries to help AI search engines surface the page.
- **Colours & fonts** — `tailwind.config.ts` is the canonical source, mirroring the Auruby style guide.

## App mockups

Each mockup in `components/mockups/` is a plain React component sized to render inside `<PhoneFrame>`. They use realistic Finnish strings (not lorem ipsum). To tweak a screen, edit the component — no asset pipeline.

## Waitlist storage (Supabase setup)

In Supabase SQL Editor:

```sql
create table public.waitlist (
  email text primary key,
  email_at timestamptz,
  hardest_skill text,
  tools_tried text,
  created_at timestamptz default now()
);

-- Lock the table down — only the service role inserts/updates.
alter table public.waitlist enable row level security;
```

Then add these to `.env.local` (and to Vercel project settings):

```
SUPABASE_URL=https://YOUR-PROJECT.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...   # server-only, NEVER expose
```

The waitlist flow asks two questions first, then captures email. Supabase only stores users who reach the email step (so the table is your conversion list). For per-step drop-off, use PostHog (events listed below) — that's where partial completions are tracked.

```sql
-- Conversion list with their answers
select email, hardest_skill, tools_tried, email_at
from public.waitlist
order by email_at desc;
```

## Analytics events (PostHog)

| Event                              | Where it fires                            |
| ---------------------------------- | ----------------------------------------- |
| `$pageview`                        | auto                                      |
| `section_viewed` `{section}`       | 40% of a section in view                  |
| `waitlist_step_hardest_submitted`  | step 1 — hardest-skill choice or skip     |
| `waitlist_step_tried_submitted`    | step 2 — tools-tried submit or skip       |
| `waitlist_step_email_submitted`    | step 3 — email submit (final conversion)  |

Each step event includes a `skipped: boolean` property where relevant. Build a PostHog funnel using the three `waitlist_step_*` events (in that order) to see drop-off between steps.

## Deploy (Vercel)

1. Push to a Git repo (`git init && git add . && git commit -m "init"` then push to GitHub).
2. Import the repo into Vercel.
3. Add the four env vars from `.env.local.example` in Vercel → Project → Settings → Environment Variables.
4. Set `NEXT_PUBLIC_SITE_URL` to your production domain so OG tags resolve correctly.
5. Deploy. No build configuration needed — Vercel auto-detects Next.js.

## Checking waitlist signups

- Supabase dashboard → Table editor → `waitlist`
- Or query directly with the funnel SQL above

## What's intentionally NOT here

- No backend beyond the waitlist route
- No user accounts, payments, or real Finnish content generation
- No dark mode (per spec)
- No tests — landing page is content-only
