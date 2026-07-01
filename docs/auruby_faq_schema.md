# Auruby FAQ — FAQPage JSON-LD

Generated from FAQ copy v4. Tables flattened into sentences so every answer is self-contained and citable. Answers mirror the visible page text (schema must match what's on the page).

---

## 1. The ready-to-paste script block

Drop this into the served HTML of `auruby.io/faq`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What levels does the YKI test have?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The YKI test has three levels. The basic level (perustaso) covers YKI grades 1 to 2, equal to CEFR A1 to A2. The intermediate level (keskitaso) covers grades 3 to 4, equal to CEFR B1 to B2. The advanced level (ylin taso) covers grades 5 to 6, equal to CEFR C1 to C2. You choose one level when you register. Keskitaso is the one most people take, because level 3 is what Finnish citizenship requires."
      }
    },
    {
      "@type": "Question",
      "name": "What skills does the YKI test measure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every YKI test has four subtests, each graded separately: speaking, listening comprehension, reading comprehension, and writing. Your result is not a single pass or fail; you get four individual scores on the 1 to 6 scale. On the intermediate (keskitaso) test, each subtest comes back as below 3, 3 (B1), or 4 (B2)."
      }
    },
    {
      "@type": "Question",
      "name": "What is YKI keskitaso, and what does it mean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Keskitaso is the intermediate YKI level, roughly CEFR B1 to B2. In plain terms, it means you can handle normal life in Finnish: read a rental ad, a notice in your building, a metro sign, or a short letter and get the point; write a message to your landlord or a short complaint email; talk to a doctor, sort something out on the phone, or say why you agree or disagree, with mistakes, but understood. You are not expected to sound native or discuss abstract ideas smoothly. The exam covers nine everyday themes: I and my background; home and housing; shops and services; culture; travelling; health and wellbeing; work; the environment; and society."
      }
    },
    {
      "@type": "Question",
      "name": "Which YKI level do I need for Finnish citizenship?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For citizenship you need the intermediate (keskitaso) test with at least grade 3, but only in certain skill combinations. You do not need grade 3 in all four subtests. Migri accepts grade 3 in one of these three combinations only: Speaking and Writing; or Writing and Listening comprehension; or Speaking and Reading comprehension. Any other pairing, for example Reading and Writing, or Listening and Reading, is not accepted even at grade 3. You need the certificate before you submit your citizenship application."
      }
    },
    {
      "@type": "Question",
      "name": "Do I have to pass all four sections for citizenship?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, but you must sit all four. On a normal test day you take all four subtests, otherwise you get no certificate at all, and then only the accepted combination needs to be at grade 3. Two more things: YKI results never expire, and you can combine two separate certificates, both taken after 1 January 2012, that together make up an accepted combination. So you can collect the two skills you need across two different sittings."
      }
    },
    {
      "@type": "Question",
      "name": "What else is YKI used for, besides citizenship?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Besides citizenship, people take YKI for a permanent residence permit, where the requirement is satisfactory Finnish at level 3 (B1); for work, since many public-sector jobs ask for a specific YKI grade; and for study. You do not need an official reason to take it. Anyone can, and the certificate never expires."
      }
    },
    {
      "@type": "Question",
      "name": "When is the YKI keskitaso exam held?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In 2026 the Finnish-language intermediate (keskitaso) test days are 31 January, 28 March, 23 May, 29 August, 2 October, and 7 November. Basic level runs on 25 April, 19 September, and 7 November, and advanced level on 31 January, 28 March, 29 August, 2 October, and 7 November. Dates, cities, and 2027 test days are on the official Finnish National Agency for Education site at oph.fi. Always check there before planning around a date."
      }
    },
    {
      "@type": "Question",
      "name": "How do I register for the YKI test, and what is the one tip that matters most?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You register online at the official site, yki.opintopolku.fi, logging in with Suomi.fi e-identification or your email. The one tip that matters most: register the moment registration opens. Registration for each test day opens about two months ahead, always at 10:00 on the opening date, and Finnish intermediate places in Helsinki and other big cities can be gone within minutes. If a day is full, you can join its waiting list. From 1 January 2026 you cannot move a registration to another date, so choose carefully."
      }
    },
    {
      "@type": "Question",
      "name": "How much does the YKI test cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In 2026 the fees are: basic level (perustaso) 165 euros, intermediate level (keskitaso) 190 euros, and advanced level (ylin taso) 216 euros. You pay online after registering, via a payment link sent by email, and payment is binding once made. Refunds are only granted under strict conditions, essentially documented illness with cancellation by 8:00 on the test morning."
      }
    },
    {
      "@type": "Question",
      "name": "What if I do not pass, can I retake just the part I failed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On a normal test day, no; you re-sit all four subtests. But you do not lose anything you have already earned. Because YKI results never expire and two certificates can be combined, you keep your good grades and only need to newly reach grade 3 in the subtest you were missing. For example, if you got Speaking 3 but Writing 2, you register for a later test day, sit all four again, and this time aim for Writing 3; you then combine Speaking 3 from the first certificate with Writing 3 from the second to form the accepted Speaking and Writing combination. For autumn 2026, OPH is also piloting subtest days for Finnish intermediate where you can register for only certain subtests (writing and listening); check the official registration page for whether it applies to you."
      }
    },
    {
      "@type": "Question",
      "name": "How should I prepare for YKI keskitaso?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Practise all four skills in the exact formats the exam uses, on the nine YKI topics. Be deliberate about one thing: there are receptive skills (reading and listening) and productive skills (speaking and writing), and you have to train both. Passive reading and listening on their own will not do much for your speaking and writing; those only improve when you actually speak and write. So do not let comfortable input crowd out harder output practice."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a level 3 (B1) and a level 4 (B2) answer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both a B1 and a B2 answer get the task done and are understood; the difference is range, accuracy, and how natural it sounds. A B1 answer does everything asked in clear, simple sentences with basic connectors like koska and ehka. A B2 answer adds warmth and range: smoother connectors like kuitenkin, silti, and vaikkapa, more natural phrasing, and fewer errors that slow the reader. For citizenship you only need level 3, so aim to communicate clearly and completely before chasing polish."
      }
    },
    {
      "@type": "Question",
      "name": "How do I prepare for the speaking section?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Practise the actual task types out loud: reacting in everyday situations (short role-plays like booking, complaining, or asking for help), answering semi-structured interview questions about yourself and familiar topics, and giving your opinion on a topic with reasons. You can practise through free courses across Finland (adult education centres and integration courses), private tutors online, or AI-based apps. A fair worry about AI is that it makes mistakes, especially in Finnish, so what matters is how the app is built; for example, in the Auruby app we train the AI on the specific errors Finnish learners actually make and have it double-check its own assessment before it scores you."
      }
    },
    {
      "@type": "Question",
      "name": "How do I practise the writing section?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Write the exam's task types and compare against model answers. Intermediate writing covers an informal message, such as a note to a friend; a formal message, such as an email to a landlord or employer; and an opinion piece, where you state a view and give reasons. You can take a course, work with a tutor, or use an AI app. For writing, good AI feedback should be checkable, not blind: it should point to the exact error, name the grammar rule behind it, show a corrected version, and put a model answer next to yours, so you can see why. That transparency is what we build into Auruby's writing feedback, and it is a reasonable bar to hold any app to."
      }
    },
    {
      "@type": "Question",
      "name": "How do I improve listening comprehension?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Know the difference between two kinds of Finnish. Standard Finnish (yleiskieli or kirjakieli) is what is taught in courses and used in news and announcements. Spoken colloquial Finnish (puhekieli) is what people actually say day to day, using ma and sa instead of mina and sina, and dropping endings. The exam leans on clear everyday standard speech, but real life is full of colloquial, so train both. A good starting point is Yle Selkouutiset, which is simplified, clearly spoken standard Finnish, not colloquial. From there, step up to normal-speed standard Finnish such as Yle news and Yle Areena, and get real exposure to puhekieli through conversation, podcasts, and video. Practise the way the test asks: some clips you hear once, some twice."
      }
    },
    {
      "@type": "Question",
      "name": "How do I improve reading comprehension?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The exam uses three reading task types: true or false (oikein or vaarin), multiple choice, and open-ended questions. To get better at reading: read things that are a little too hard for you, where you understand most and can guess the rest from context; this is the idea behind Stephen Krashen's i plus 1, input one step above your current level. Do not stop to look up every word; read on and only check the words that keep coming back or block the meaning. Read every day on topics you actually care about. And use tools that give you text at the right level, such as plusonelanguage.app."
      }
    },
    {
      "@type": "Question",
      "name": "How should I study vocabulary for YKI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learn words in context, not as isolated lists; a word sticks far better inside a real phrase you read or heard than on a flashcard by itself. In practice: pick one of the nine YKI topics, read or listen to something on it, and pull your new words from there so they come attached to a situation. Then make sure that for each topic you can recall its high-frequency words, the workhorses that come up no matter what you are discussing, like jakaa (to share), riippua (to depend on), vaikuttaa (to affect), tarvita (to need), and mielestani (in my opinion). Topic by topic, in context, workhorses first."
      }
    },
    {
      "@type": "Question",
      "name": "What common grammar mistakes should I watch for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For grade 3 you need errors that do not block understanding. The highest-value areas to tidy up are: the total object versus the partitive object, in both singular and plural (ostan kirjan vs ostan kirjaa; ostan kirjat vs ostan kirjoja); possessive suffixes (minun nimi becomes nimeni); the local cases and location versus direction (the endings ssa and lla, and missa, mihin, mista); the passive voice (Suomessa syodaan paljon ruisleipaa); the conditional (the isi form); and comparatives (isompi, kauniimpi)."
      }
    },
    {
      "@type": "Question",
      "name": "What are the best apps to prepare for YKI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no single best app; most people combine a couple, and no app fully replaces exam-format practice with real feedback. Apps built around Finnish and YKI include: Finnish It (AI, all four skills plus a YKI simulation); YKI Trainer (AI exercises across all four sections plus a mock exam); Opeton (AI speaking and listening built on YKI tasks); SuomiSpeak (structured Finnish A1 to B2 toward YKI); WordDive (a Finnish app with a dedicated YKI course); and Kielo (Finnish learning with AI conversation). Full disclosure: we are building one too, Auruby, a YKI keskitaso app launching summer 2026, so this is not a neutral recommendation. Judge any app on whether it covers all four skills in exam format, is structured around the YKI topics, and gives feedback that holds up in Finnish."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find official YKI practice materials?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The exam is run by the Centre for Applied Language Studies at the University of Jyvaskyla, which publishes free sample tasks and example tests at ykitesti.solki.jyu.fi. These are the closest thing to the real format, straight from the source, so start there. They are copyrighted by the exam authority, so use them to practise, and be wary of any site claiming to sell the actual live tests."
      }
    },
    {
      "@type": "Question",
      "name": "Are there YKI tutoring services and courses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, at a range of prices. Adult education centres (kansalaisopisto or tyovaenopisto) run YKI prep courses, often very cheaply. Language schools offer more intensive courses. Private tutors are available one-to-one online at market rates. And online speaking clubs offer group practice aimed at YKI speaking. If you focus better with a deadline and a teacher, a structured course alongside your own daily practice can be worth it."
      }
    }
  ]
}
</script>
```

---

## 2. Next.js (App Router) integration

Put this in `app/faq/page.tsx`. Keep it a **server component** (no `'use client'`) so the JSON-LD ships in the initial HTML.

```tsx
// app/faq/page.tsx
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    // ...paste the mainEntity array from the script block above...
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* your visible FAQ content — the same questions and answers, in real h2/h3 + p */}
    </>
  );
}
```

`dangerouslySetInnerHTML` looks alarming but is the correct, standard way to emit a JSON-LD script in React — the name is about raw HTML injection generally, not a security problem here since the content is your own static object.

---

## Notes

- **Answers were flattened from the tables** (levels, dates, cost) into sentences, and Finnish special characters (a-umlaut, o-umlaut) were written as plain letters inside the JSON to keep it clean and portable. On the **visible page**, keep the proper Finnish spelling (ä, ö) and the tables — the schema is the machine copy, the page is the human copy. They should say the same things.
- **Two Auruby mentions** (speaking, writing) and the disclosure in "best apps" are included as-is, in the "we" voice.
- **Validation:** as of June 2026 Google's Rich Results Test no longer covers FAQ, so validate at **validator.schema.org** instead.
- **Keep it in sync:** whenever you change a dated fact (test days, fees) on the visible page, change it here too, and bump the page's `dateModified`. Schema that contradicts the visible page is worse than no schema.
