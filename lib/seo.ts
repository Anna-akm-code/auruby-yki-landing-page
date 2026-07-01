// Centralised SEO config + structured data.
// The visible /faq page and its FAQPage JSON-LD both read `faqSections` from
// here, so the schema can never drift out of sync with the on-page copy: the
// page renders the structured blocks, and `faqPageJsonLd` flattens the very
// same blocks to plain text.

// Canonical production domain. Override per-environment with NEXT_PUBLIC_SITE_URL
// (e.g. http://localhost:3000 in dev); defaults to the canonical domain otherwise.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://auruby.io"
).replace(/\/$/, "");

export const SITE_NAME = "Auruby";

// --- FAQ content model -----------------------------------------------------
// A single source of truth for the /faq page. Answers are stored as structured
// blocks so they can be rendered to rich HTML AND flattened to plain text for
// the FAQPage schema — one source, two outputs, no drift.

// Inline content: a plain string, a styled run (bold/italic), or a link.
export type FaqInline =
  | string
  | { text: string; bold?: boolean; italic?: boolean }
  | { text: string; href: string };

export type FaqBlock =
  | { type: "p"; content: FaqInline[] }
  | { type: "ul"; items: FaqInline[][] }
  | { type: "ol"; items: FaqInline[][] }
  | { type: "quote"; label?: string; content: FaqInline[] }
  | { type: "table"; headers: string[]; rows: FaqInline[][][] };

export interface FaqQA {
  question: string;
  answer: FaqBlock[];
}

export interface FaqSection {
  title: string;
  items: FaqQA[];
}

// Content from docs/auruby_faq_v4.md (the internal "Notes & sources" appendix
// is intentionally excluded). Finnish spelling (ä, ö) is preserved on the page;
// the schema flattener below strips markup but keeps the same words.
export const faqSections: FaqSection[] = [
  {
    title: "Exam basics",
    items: [
      {
        question: "What levels does the YKI test have?",
        answer: [
          {
            type: "p",
            content: [
              "The YKI test comes in three levels, each mapped to the six-point YKI scale and the European CEFR framework:",
            ],
          },
          {
            type: "table",
            headers: ["Level (Finnish)", "YKI grades", "CEFR"],
            rows: [
              [
                ["Basic — ", { text: "perustaso", italic: true }],
                ["1–2"],
                ["A1–A2"],
              ],
              [
                ["Intermediate — ", { text: "keskitaso", italic: true }],
                ["3–4"],
                ["B1–B2"],
              ],
              [
                ["Advanced — ", { text: "ylin taso", italic: true }],
                ["5–6"],
                ["C1–C2"],
              ],
            ],
          },
          {
            type: "p",
            content: [
              "You choose one level when you register. Keskitaso (intermediate) is the one most people take, because level 3 is what citizenship requires.",
            ],
          },
        ],
      },
      {
        question: "What skills does the YKI test measure?",
        answer: [
          {
            type: "p",
            content: [
              "YKI tests four skills, and you get a separate grade for each one — so your result isn't a single pass/fail, it's four scores:",
            ],
          },
          {
            type: "ul",
            items: [
              ["Speaking"],
              ["Listening comprehension"],
              ["Reading comprehension"],
              ["Writing"],
            ],
          },
          {
            type: "p",
            content: [
              "Each subtest is graded on the 1–6 scale. On the intermediate (keskitaso) test, each one comes back as:",
            ],
          },
          {
            type: "ul",
            items: [
              [{ text: "below 3", bold: true }, " — you didn't reach the level"],
              [{ text: "3", bold: true }, " — B1"],
              [{ text: "4", bold: true }, " — B2"],
            ],
          },
        ],
      },
      {
        question: "What is YKI keskitaso, and what does it actually mean?",
        answer: [
          {
            type: "p",
            content: [
              "Keskitaso is the middle YKI level — intermediate, roughly CEFR B1–B2. In plain terms, it means you can get through normal life in Finnish. You can read a rental ad, a notice in your building's stairwell, a sign in the metro, or a short letter from Kela and understand the point. You can write a message to your landlord or a quick complaint email. You can talk to a doctor, sort something out on the phone, or say why you agree or disagree — making mistakes, but still getting understood. You're not expected to sound native or discuss abstract ideas smoothly.",
            ],
          },
          {
            type: "p",
            content: ["The exam sticks to nine everyday themes:"],
          },
          {
            type: "ol",
            items: [
              ["I and my background"],
              ["Home and housing"],
              ["Shops and services"],
              ["Culture"],
              ["Travelling"],
              ["Health and wellbeing"],
              ["Work"],
              ["The environment"],
              ["Society"],
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Citizenship and other reasons for taking YKI",
    items: [
      {
        question: "Which YKI level do I need for Finnish citizenship?",
        answer: [
          {
            type: "p",
            content: [
              "You need the ",
              { text: "intermediate (keskitaso)", bold: true },
              " test with at least ",
              { text: "grade 3", bold: true },
              " — but only in certain skill combinations. You do ",
              { text: "not", bold: true },
              " need grade 3 in all four subtests. For citizenship, Migri accepts grade 3 in one of these three combinations only:",
            ],
          },
          {
            type: "ul",
            items: [
              [{ text: "Speaking + Writing", bold: true }, ", or"],
              [
                { text: "Writing + Listening comprehension", bold: true },
                ", or",
              ],
              [{ text: "Speaking + Reading comprehension", bold: true }],
            ],
          },
          {
            type: "p",
            content: [
              "Any other pairing — for example Reading + Writing, or Listening + Reading — is ",
              { text: "not", bold: true },
              " accepted, even at grade 3. You need the certificate before you submit your citizenship application, and you attach it to the application.",
            ],
          },
        ],
      },
      {
        question: "Do I have to pass all four sections for citizenship?",
        answer: [
          {
            type: "p",
            content: [
              "No — but you must ",
              { text: "sit", bold: true },
              " all four. On a normal test day you take all four subtests (otherwise you get no certificate at all), and then only the accepted combination above needs to be at grade 3. Two more things worth knowing: ",
              { text: "YKI results never expire", bold: true },
              ", and you can ",
              { text: "combine two separate certificates", bold: true },
              " (both taken after 1 January 2012) that together make up an accepted combination. So you can collect the two skills you need across two different test sittings.",
            ],
          },
        ],
      },
      {
        question: "What else is YKI used for, besides citizenship?",
        answer: [
          {
            type: "p",
            content: [
              "Plenty of people take it for reasons other than citizenship:",
            ],
          },
          {
            type: "ul",
            items: [
              [
                { text: "Permanent residence permit", bold: true },
                " — the language requirement is satisfactory Finnish, i.e. level 3 (B1)",
              ],
              [
                { text: "Work", bold: true },
                " — many public-sector jobs ask for a specific YKI grade; check the job ad",
              ],
              [
                { text: "Study", bold: true },
                " — some programmes accept or require a YKI certificate",
              ],
              [
                { text: "For yourself", bold: true },
                " — anyone can take it, no official reason needed, and the certificate never expires",
              ],
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Registration, dates, cost, and retakes",
    items: [
      {
        question: "When is the YKI keskitaso exam held?",
        answer: [
          {
            type: "p",
            content: ["The 2026 Finnish-language test days are:"],
          },
          {
            type: "table",
            headers: ["Level", "2026 test dates (Finnish)"],
            rows: [
              [
                ["Basic — ", { text: "perustaso", italic: true }],
                ["25 Apr · 19 Sep · 7 Nov"],
              ],
              [
                ["Intermediate — ", { text: "keskitaso", italic: true }],
                ["31 Jan · 28 Mar · 23 May · 29 Aug · 2 Oct · 7 Nov"],
              ],
              [
                ["Advanced — ", { text: "ylin taso", italic: true }],
                ["31 Jan · 28 Mar · 29 Aug · 2 Oct · 7 Nov"],
              ],
            ],
          },
          {
            type: "p",
            content: [
              "Dates, cities, and 2027 test days are on the official site: ",
              {
                text: "oph.fi — YKI test days",
                href: "https://www.oph.fi/en/education-and-qualifications/selecting-right-yki-test-test-days",
              },
              ". Always check there before you plan around a date.",
            ],
          },
        ],
      },
      {
        question:
          "How do I register for the YKI test — and what's the one tip that matters most?",
        answer: [
          {
            type: "p",
            content: [
              "You register online at the official site, ",
              {
                text: "yki.opintopolku.fi",
                href: "https://yki.opintopolku.fi/",
              },
              ", logging in with Suomi.fi e-identification (or your email). The one tip that matters: ",
              {
                text: "register the very moment registration opens.",
                bold: true,
              },
              " Registration for each test day opens about two months ahead, always at ",
              { text: "10:00", bold: true },
              " on the opening date, and Finnish intermediate places in Helsinki and other big cities can be gone within minutes. If a day is full, you can join its waiting list. Note: from 1 January 2026 you can't move a registration to another date, so choose carefully.",
            ],
          },
        ],
      },
      {
        question: "How much does the YKI test cost?",
        answer: [
          {
            type: "table",
            headers: ["Level", "Fee (2026)"],
            rows: [
              [["Basic — ", { text: "perustaso", italic: true }], ["€165"]],
              [
                ["Intermediate — ", { text: "keskitaso", italic: true }],
                ["€190"],
              ],
              [["Advanced — ", { text: "ylin taso", italic: true }], ["€216"]],
            ],
          },
          {
            type: "p",
            content: [
              "You pay online after registering, via a payment link sent by email, and payment is binding once made. Refunds are only granted under strict conditions — essentially documented illness, with cancellation by 8:00 on the test morning.",
            ],
          },
        ],
      },
      {
        question:
          "What if I don't pass — can I retake just the part I failed?",
        answer: [
          {
            type: "p",
            content: [
              "Short answer: on a normal test day, no — you re-sit ",
              { text: "all four", bold: true },
              " subtests. But you don't lose anything you've already earned, and that's the key. Because results never expire and two certificates can be combined, you keep your good grades and only need to newly reach grade 3 in the subtest you were missing.",
            ],
          },
          {
            type: "p",
            content: [
              "Here's how it works in practice. Say in your first test you got Speaking 3 but Writing 2. You register for a later test day and sit all four again. This time you get Writing 3 (if your speaking slips, it doesn't matter — you already have Speaking 3 on the first certificate). Now you hold ",
              { text: "Speaking 3", bold: true },
              " from test one and ",
              { text: "Writing 3", bold: true },
              " from test two, which together make the accepted Speaking + Writing combination.",
            ],
          },
          {
            type: "p",
            content: [
              "One new option: for ",
              { text: "autumn 2026", bold: true },
              ", OPH is piloting \"subtest days\" for Finnish intermediate where you can register for only certain subtests (writing + listening). If that's available and covers what you need, you can re-sit just those parts. Check the official registration page for whether it applies to your case.",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "How to prepare for YKI keskitaso",
    items: [
      {
        question: "How should I prepare for YKI keskitaso?",
        answer: [
          {
            type: "p",
            content: [
              "Practise all four skills in the exact formats the exam uses, on the nine YKI topics. And be deliberate about one thing: there are ",
              { text: "receptive", bold: true },
              " skills (reading, listening) and ",
              { text: "productive", bold: true },
              " skills (speaking, writing), and you have to train both. Passive reading and listening on their own won't do much for your speaking and writing — those only improve when you actually speak and write. So don't let the easy, comfortable input crowd out the harder output practice. All four, regularly.",
            ],
          },
        ],
      },
      {
        question:
          "What's the difference between a level 3 (B1) and a level 4 (B2) answer?",
        answer: [
          {
            type: "p",
            content: [
              "Both get the task done and are understood — the difference is range, accuracy, and how natural it sounds. Here's the same short writing task answered at each level.",
            ],
          },
          {
            type: "p",
            content: [
              { text: "Task:", bold: true },
              " ",
              {
                text: "Write a message to a friend. Tell them you can't come to their birthday party, and suggest another time to meet.",
                italic: true,
              },
            ],
          },
          {
            type: "quote",
            label: "Level 3 (B1):",
            content: [
              "Moi Anna! Kiitos kutsusta. Valitettavasti en pääse syntymäpäiväjuhliisi lauantaina, koska minun täytyy mennä töihin. Olen pahoillani. Voisimmeko nähdä ensi viikolla? Ehkä voisimme mennä keskiviikkona kahvilaan. Kerro, sopiiko se sinulle. Terveisin, Maria",
            ],
          },
          {
            type: "quote",
            label: "Level 4 (B2):",
            content: [
              "Moi Anna! Kiitos paljon juhlakutsusta – oli tosi kiva, että muistit minua. Valitettavasti en kuitenkaan pääse paikalle lauantaina, koska minulla on työvuoro, jota en saa vaihdettua. Olisi silti mukava nähdä pian. Kävisikö sinulle, että menisimme kahville ensi viikolla, vaikkapa keskiviikkoiltana? Ehdota toki muutakin aikaa, jos se sopii paremmin. Pidetään yhteyttä! Terveisin, Maria",
            ],
          },
          {
            type: "p",
            content: [
              "The B1 version does everything asked, in clear, simple sentences with basic connectors (",
              { text: "koska", italic: true },
              ", ",
              { text: "ehkä", italic: true },
              "). The B2 version adds warmth and range — smoother connectors (",
              { text: "kuitenkin", italic: true },
              ", ",
              { text: "silti", italic: true },
              ", ",
              { text: "vaikkapa", italic: true },
              "), a more natural way of saying the shift couldn't be swapped (",
              { text: "jota en saa vaihdettua", italic: true },
              "), and a friendlier close. For citizenship you only need level 3, so aim to communicate clearly and completely before you chase polish.",
            ],
          },
        ],
      },
      {
        question: "How do I prepare for the speaking section?",
        answer: [
          {
            type: "p",
            content: [
              "Practise the actual task types, out loud. In the intermediate test, speaking means:",
            ],
          },
          {
            type: "ul",
            items: [
              [
                { text: "Reacting in everyday situations", bold: true },
                " (short role-plays — booking, complaining, asking for help)",
              ],
              [
                { text: "Semi-structured interview questions", bold: true },
                " about you and familiar topics",
              ],
              [
                { text: "Giving your opinion", bold: true },
                " on a topic and backing it up",
              ],
            ],
          },
          {
            type: "p",
            content: [
              "You have options for practice: there are ",
              { text: "free courses", bold: true },
              " all over Finland (adult education centres, integration courses), ",
              { text: "private tutors", bold: true },
              " you can find online, and ",
              { text: "AI-based apps", bold: true },
              ". A fair worry about AI is that it makes mistakes — especially in Finnish. That's real, so what matters is how the app is built. For example, in Auruby app we train the AI on the specific errors Finnish learners actually make and have it double-check its own assessment before it scores you.",
            ],
          },
        ],
      },
      {
        question: "How do I practise the writing section?",
        answer: [
          {
            type: "p",
            content: [
              "Write the exam's task types and compare against model answers. Intermediate writing covers:",
            ],
          },
          {
            type: "ul",
            items: [
              [
                { text: "An informal message", bold: true },
                " (e.g. a note to a friend)",
              ],
              [
                { text: "A formal message", bold: true },
                " (e.g. an email to a landlord or an employer)",
              ],
              [
                { text: "An opinion piece", bold: true },
                " (state a view and give reasons)",
              ],
            ],
          },
          {
            type: "p",
            content: [
              "As with speaking, you can take a course, work with a tutor, or use an AI app. The honest way to handle the \"AI gets things wrong\" concern here is different: for writing, good AI feedback should be ",
              { text: "checkable, not blind", bold: true },
              ". It should point to the exact error, name the grammar rule behind it, show a corrected version, and put a model answer next to yours — so you can see ",
              { text: "why", italic: true },
              ", not just take its word. That transparency is what we build into Auruby's writing feedback, and it's a reasonable bar to hold any app to.",
            ],
          },
        ],
      },
      {
        question: "How do I improve listening comprehension?",
        answer: [
          {
            type: "p",
            content: [
              "First, know the difference between two kinds of Finnish, because they sound almost like different languages:",
            ],
          },
          {
            type: "ul",
            items: [
              [
                { text: "Standard Finnish", bold: true },
                " (",
                { text: "yleiskieli / kirjakieli", italic: true },
                ") — what's taught in courses and used in news and announcements",
              ],
              [
                { text: "Spoken, colloquial Finnish", bold: true },
                " (",
                { text: "puhekieli", italic: true },
                ") — what people actually say day to day (",
                { text: "mä", italic: true },
                " and ",
                { text: "sä", italic: true },
                " instead of ",
                { text: "minä", italic: true },
                " and ",
                { text: "sinä", italic: true },
                ", dropped endings, and so on)",
              ],
            ],
          },
          {
            type: "p",
            content: [
              "The exam leans on clear everyday standard speech, but real life throws colloquial at you constantly, so train both. A good starting point is ",
              { text: "Yle Selkouutiset", bold: true },
              " (news in simplified, clearly spoken Finnish) — note it's simplified ",
              { text: "standard", italic: true },
              " Finnish, great for building comprehension, not colloquial. From there, step up to normal-speed standard (Yle news, Yle Areena) and get real exposure to ",
              { text: "puhekieli", italic: true },
              " through everyday conversation, podcasts, and video. Practise answering the way the test asks: some clips you hear once, some twice.",
            ],
          },
        ],
      },
      {
        question: "How do I improve reading comprehension?",
        answer: [
          {
            type: "p",
            content: ["First, know the task types you'll face in the exam:"],
          },
          {
            type: "ul",
            items: [
              [
                { text: "True/false", bold: true },
                " (",
                { text: "oikein / väärin", italic: true },
                ")",
              ],
              [{ text: "Multiple choice", bold: true }],
              [{ text: "Open-ended", bold: true }, " questions"],
            ],
          },
          {
            type: "p",
            content: ["Then, to actually get better at reading:"],
          },
          {
            type: "ul",
            items: [
              [
                {
                  text: "Read things that are a little too hard for you",
                  bold: true,
                },
                " — where you understand most of it and can guess the rest from context. That small stretch is exactly where your reading grows. (This is the idea behind Stephen Krashen's \"i+1\": input just one step above your current level.)",
              ],
              [
                { text: "Don't stop to look up every word.", bold: true },
                " Read on, guess from context, and only check the words that keep coming back or block the meaning.",
              ],
              [
                {
                  text: "Read every day, on topics you actually care about",
                  bold: true,
                },
                " — it's the habit, not the intensity, that moves reading.",
              ],
              [
                {
                  text: "Use tools that give you text at the right level.",
                  bold: true,
                },
                " ",
                {
                  text: "plusonelanguage.app",
                  href: "https://plusonelanguage.app/learn?v=1782551942275",
                },
                ", for example, is built around reading slightly above your level.",
              ],
            ],
          },
        ],
      },
      {
        question: "How should I study vocabulary for YKI?",
        answer: [
          {
            type: "p",
            content: [
              "Learn words ",
              { text: "in context", bold: true },
              ", not as isolated lists — a word sticks far better inside a real phrase you read or heard than on a flashcard by itself. The practical version: pick one of the nine YKI topics, read or listen to something on it, and pull your new words from there, so they come attached to a situation.",
            ],
          },
          {
            type: "p",
            content: [
              "Then make sure that for each topic you can call up its ",
              { text: "high-frequency words", bold: true },
              " — the ones that come up again and again, whatever you're talking about. Words like ",
              { text: "jakaa", italic: true },
              " (to share), ",
              { text: "riippua", italic: true },
              " (to depend on), ",
              { text: "vaikuttaa", italic: true },
              " (to affect), ",
              { text: "tarvita", italic: true },
              " (to need), ",
              { text: "mielestäni", italic: true },
              " (in my opinion). Those are the workhorses; you'll reuse them across speaking and writing far more than any rare, topic-specific noun. Topic by topic, in context, workhorses first — that's the whole method.",
            ],
          },
        ],
      },
      {
        question: "What common grammar mistakes should I watch for?",
        answer: [
          {
            type: "p",
            content: [
              "You don't need everything — for grade 3 you need errors that don't block understanding. The highest-value areas to tidy up:",
            ],
          },
          {
            type: "ul",
            items: [
              [
                { text: "Total object vs partitive object", bold: true },
                ", in both singular and plural (",
                { text: "ostan kirjan", italic: true },
                " vs ",
                { text: "ostan kirjaa", italic: true },
                "; ",
                { text: "ostan kirjat", italic: true },
                " vs ",
                { text: "ostan kirjoja", italic: true },
                ")",
              ],
              [
                { text: "Possessive suffixes", bold: true },
                " (",
                { text: "minun nimi", italic: true },
                " → ",
                { text: "nimeni", italic: true },
                ")",
              ],
              [
                {
                  text: "The local cases, and location vs direction",
                  bold: true,
                },
                " — ",
                { text: "-ssa / -lla", italic: true },
                " and ",
                { text: "missä / mihin / mistä", italic: true },
                " (where you are vs where you're going vs where you're coming from)",
              ],
              [
                { text: "The passive voice", bold: true },
                " (",
                { text: "Suomessa syödään paljon ruisleipää", italic: true },
                ")",
              ],
              [
                { text: "The conditional", bold: true },
                " (",
                { text: "-isi-", italic: true },
                ")",
              ],
              [
                { text: "Comparatives", bold: true },
                " (",
                { text: "isompi", italic: true },
                ", ",
                { text: "kauniimpi", italic: true },
                ")",
              ],
            ],
          },
        ],
      },
      {
        question: "What are the best apps to prepare for YKI?",
        answer: [
          {
            type: "p",
            content: [
              "There's no single best app — most people combine a couple, and no app fully replaces exam-format practice with real feedback. Skipping the big generic apps everyone already knows, here are the ones actually built around Finnish and YKI:",
            ],
          },
          {
            type: "ul",
            items: [
              [
                { text: "Finnish It", bold: true },
                " — AI-powered, covers all four skills with YKI-style practice and a full YKI simulation",
              ],
              [
                { text: "YKI Trainer", bold: true },
                " — AI-generated exercises across all four sections, plus a full mock YKI exam",
              ],
              [
                { text: "Opeton", bold: true },
                " — AI speaking and listening practice built on YKI-style tasks (you practise by \"calling\" the AI)",
              ],
              [
                { text: "SuomiSpeak", bold: true },
                " — structured Finnish A1–B2, often used to build up toward YKI level",
              ],
              [
                { text: "WordDive", bold: true },
                " — a Finnish app with a dedicated YKI course",
              ],
              [
                { text: "Kielo", bold: true },
                " — Finnish learning with AI conversation practice",
              ],
            ],
          },
          {
            type: "p",
            content: [
              {
                text: "Full disclosure: we're building one too — ",
                italic: true,
              },
              { text: "Auruby", bold: true, italic: true },
              {
                text: ", a YKI keskitaso app launching summer 2026 — so this isn't a neutral recommendation. Whatever you pick, ours included, judge it on the same three things: does it cover all four skills in exam format, is it structured around the YKI topics, and does its feedback actually hold up in Finnish.",
                italic: true,
              },
            ],
          },
        ],
      },
      {
        question: "Where can I find official YKI practice materials?",
        answer: [
          {
            type: "p",
            content: [
              "The exam is run by the Centre for Applied Language Studies at the University of Jyväskylä, and they publish ",
              { text: "free", bold: true },
              " sample tasks and example tests at ",
              {
                text: "ykitesti.solki.jyu.fi",
                href: "https://ykitesti.solki.jyu.fi/",
              },
              ". These are the closest thing to the real format, straight from the source — start here so you know exactly what you're preparing for. They're copyrighted by the exam authority, so use them to practise; be wary of any site claiming to sell the actual live tests.",
            ],
          },
        ],
      },
      {
        question: "Are there YKI tutoring services and courses?",
        answer: [
          {
            type: "p",
            content: ["Yes — plenty, at a range of prices:"],
          },
          {
            type: "ul",
            items: [
              [
                { text: "Adult education centres", bold: true },
                " (",
                { text: "kansalaisopisto / työväenopisto", italic: true },
                ") — YKI prep courses, often very cheap",
              ],
              [
                { text: "Language schools", bold: true },
                " — more intensive YKI courses",
              ],
              [
                { text: "Private tutors", bold: true },
                " — one-to-one, findable online, at market rates",
              ],
              [
                { text: "Online speaking clubs", bold: true },
                " — group practice aimed specifically at YKI speaking",
              ],
            ],
          },
          {
            type: "p",
            content: [
              "If you focus better with a deadline and a teacher, a structured course alongside your own daily practice can be worth it.",
            ],
          },
        ],
      },
    ],
  },
];

// --- FAQ schema flattening -------------------------------------------------
// Derives plain-text answers from the same `faqSections` blocks the page
// renders, so the FAQPage JSON-LD can never contradict the visible copy.

function inlineToText(nodes: FaqInline[]): string {
  return nodes.map((n) => (typeof n === "string" ? n : n.text)).join("");
}

function blockToText(block: FaqBlock): string {
  switch (block.type) {
    case "p":
      return inlineToText(block.content);
    case "ul":
    case "ol":
      return block.items.map(inlineToText).join("; ");
    case "quote":
      return (block.label ? `${block.label} ` : "") + inlineToText(block.content);
    case "table":
      return block.rows
        .map((row) => row.map(inlineToText).join(", "))
        .join("; ");
  }
}

function answerToText(blocks: FaqBlock[]): string {
  return blocks
    .map(blockToText)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

// --- Structured data (JSON-LD) ---------------------------------------------

export const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqSections
    .flatMap((section) => section.items)
    .map((qa) => ({
      "@type": "Question",
      name: qa.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answerToText(qa.answer),
      },
    })),
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  email: "hello@auruby.io",
  description:
    "Auruby makes an app for preparing for the Finnish YKI keskitaso (intermediate, CEFR B1–B2) language exam, covering vocabulary, reading, listening, writing, and speaking.",
  sameAs: ["https://www.facebook.com/AurubyYKI/"],
  foundingDate: "2026-01",
  founder: {
    "@type": "Person",
    "@id": `${SITE_URL}/#anna`,
    name: "Anna Akimova",
    jobTitle: "CELTA-certified language teacher",
    url: "https://www.linkedin.com/in/anna-akimova-/",
    sameAs: [
      "https://www.linkedin.com/in/anna-akimova-/",
      "https://www.reddit.com/user/Any-Arm-8439/",
    ],
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en",
  description:
    "All your YKI keskitaso Finnish exam prep in one app — vocabulary, reading, listening, writing, and speaking, structured by exam topics.",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#app`,
  name: SITE_NAME,
  url: SITE_URL,
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web, iOS, Android",
  inLanguage: "en",
  description:
    "Auruby is an app for preparing for the Finnish YKI keskitaso exam. It brings vocabulary, reading, listening, writing, and speaking practice into one place, structured by YKI exam topics and assessed by AI, with content designed by a CELTA-certified language teacher.",
  featureList: [
    "Vocabulary by YKI exam topic",
    "Exam-format reading at A2/B1 and B1/B2 levels",
    "Listening practice with exam-style comprehension questions",
    "AI-assessed exam-style writing tasks",
    "AI speaking practice partner",
    "Progress tracking and a personal “To fix” list",
  ],
  offers: {
    "@type": "Offer",
    price: "11.99",
    priceCurrency: "EUR",
    description: "Early-bird waitlist pricing for the first 6 months.",
  },
  publisher: { "@id": `${SITE_URL}/#organization` },
};

// --- About page content ----------------------------------------------------
// Single source for the /about page copy. Headings are preserved as written;
// the page renders these paragraphs directly.

export interface AboutSection {
  heading: string;
  paragraphs: string[];
}

export const aboutContent: {
  title: string;
  intro: string[];
  sections: AboutSection[];
} = {
  title: "About Auruby",
  intro: [
    "Auruby is a YKI keskitaso prep app — vocabulary, reading, listening, writing, and speaking practice in one place, structured around the real exam and assessed by AI. It's launching in summer 2026.",
  ],
  sections: [
    {
      heading: "Who's behind it",
      paragraphs: [
        "Auruby is built by Anna Akimova, a CELTA-certified language teacher with 8 years of tutoring experience. The idea came from a simple gap: people preparing for the YKI keskitaso exam juggle a flashcard app, random Finnish texts, a listening podcast, a document for writing, and a paid tutor for speaking — five tools, none of them built around the actual exam.",
        "Anna is also sitting the YKI keskitaso exam herself in 2026. So the app isn't built from the outside looking in — the topics, the task formats, and the feedback come from teaching the language for years and preparing for this specific exam at the same time.",
      ],
    },
    {
      heading: "What we care about",
      paragraphs: [
        "Content that reflects how the exam actually works, not generic drills. AI feedback that's checkable — it points to the exact error, names the grammar rule, and shows you a corrected version, rather than a vague \"try again.\" And honesty about what an app can and can't do: no app replaces real practice with real feedback, so Auruby is built to be that practice.",
      ],
    },
    {
      heading: "Get in touch",
      paragraphs: ["hello@auruby.io"],
    },
  ],
};

// AboutPage schema. References the existing Organization, WebSite, and founder
// Person by @id (all shipped site-wide via app/layout.tsx) rather than
// duplicating them, so this reinforces the same entity graph.
export const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/about#webpage`,
  url: `${SITE_URL}/about`,
  name: "About Auruby",
  description:
    "About Auruby — a YKI keskitaso Finnish exam prep app built by Anna Akimova, a CELTA-certified language teacher.",
  inLanguage: "en",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  mainEntity: { "@id": `${SITE_URL}/#organization` },
  mentions: { "@id": `${SITE_URL}/#anna` },
};
