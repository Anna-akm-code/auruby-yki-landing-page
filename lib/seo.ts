// Centralised SEO config + structured data.
// The visible FAQ section and the FAQPage JSON-LD both read `faqs` from here,
// so the schema can never drift out of sync with the on-page copy.

// Canonical production domain. Override per-environment with NEXT_PUBLIC_SITE_URL
// (e.g. http://localhost:3000 in dev); defaults to the canonical domain otherwise.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://auruby.io"
).replace(/\/$/, "");

export const SITE_NAME = "Auruby";

export interface Faq {
  question: string;
  answer: string;
}

// Each answer is a self-contained ~120–180 word block that fully answers the
// question on its own, with the direct answer in the first sentence.
export const faqs: Faq[] = [
  {
    question: "What is the YKI keskitaso exam?",
    answer:
      "The YKI keskitaso exam is the intermediate level of the Finnish National Certificate of Language Proficiency (Yleinen kielitutkinto), set at CEFR levels B1–B2. It is an official, government-recognised test that assesses four skills in Finnish: reading comprehension, listening comprehension, writing, and speaking. Each section is scored separately on a scale from 1 to 6, and for most purposes you need to reach level 3 in the skills that matter for your goal. Passing the YKI keskitaso is the most common way to meet the language requirement for Finnish citizenship, and it is also accepted for many study and work applications. The exam is held several times a year at registered test centres across Finland. Auruby is built specifically to prepare you for all four of these sections — vocabulary, reading, listening, writing, and speaking — in one app structured around the real exam.",
  },
  {
    question: "How do I prepare for YKI keskitaso?",
    answer:
      "To prepare for YKI keskitaso, practise all four exam skills — reading, listening, writing, and speaking — in the same formats used on the real test, and build the vocabulary that appears in common exam themes. Effective preparation covers five areas: learning vocabulary grouped by YKI topics such as society, work, and health; reading B1–B2 texts and answering true/false, multiple-choice, and open questions; listening to everyday Finnish audio with comprehension tasks; writing exam-style pieces like emails and complaint letters; and speaking through role-plays and interviews. The most efficient approach is regular, structured practice with honest feedback on your level, rather than passive study. Auruby brings all five areas into one app, organised by YKI themes, with AI that gives a pass, weak pass, or fail assessment on your writing and speaking — so you always know exactly what to fix next.",
  },
  {
    question: "What level is YKI keskitaso?",
    answer:
      "YKI keskitaso is the intermediate level of the Finnish proficiency exam, corresponding to CEFR levels B1 and B2. At this level you can understand the main points of clear standard speech and everyday texts on familiar topics such as work, school, and free time, and you can produce connected writing and speech on subjects that are familiar or of personal interest. You can handle most situations that come up while living in Finland, describe experiences and events, and give brief reasons for your opinions and plans. The wider YKI scale runs from beginner (perustaso, levels 1–2) through intermediate (keskitaso, levels 3–4) to advanced (ylin taso, levels 5–6). For Finnish citizenship you typically need at least level 3 in the relevant skills. Auruby's reading and writing content comes at two bands — A2/B1 and B1/B2 — so you can build steadily up to the keskitaso standard.",
  },
  {
    question: "Who designed the Auruby YKI prep app?",
    answer:
      "Auruby was designed by a CELTA-certified language teacher with eight years of teaching experience, and all of its content is tested and reviewed by experienced Finnish language teachers. This means every text, exercise, and model answer reflects how the YKI keskitaso exam actually works, rather than generic language drills. The vocabulary lists are chosen around real YKI themes, the reading and listening tasks mirror the formats you meet on exam day, and the writing and speaking feedback is based on the same pass, weak pass, or fail judgement a teacher would give. The app combines this teaching expertise with AI so you get instant, specific corrections at any time — for example, your three most common grammar and vocabulary mistakes are collected into a personal “To fix” list. Auruby is built for learners preparing for the Finnish YKI keskitaso exam.",
  },
];

// --- Structured data (JSON-LD) ---------------------------------------------

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
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
  founder: {
    "@type": "Person",
    name: "Anna",
    jobTitle: "CELTA-certified language teacher",
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
