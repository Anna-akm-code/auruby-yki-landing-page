import type { Metadata } from "next";
import Image from "next/image";
import { MarqueeStrip } from "@/components/english/MarqueeStrip";
import { TrackedLink } from "@/components/english/TrackedLink";
import { GOOGLE_FORM_URL } from "@/lib/english";

export const metadata: Metadata = {
  alternates: { canonical: "/english" },
  title: "Английский с Анной — THE CLUB и THE PLAN",
  description:
    "Английский, на котором думают, спорят и договариваются. THE CLUB — сообщество для людей 13–17 лет. THE PLAN — индивидуальный английский с личным планом.",
  openGraph: {
    title: "Английский с Анной",
    description:
      "THE CLUB и THE PLAN — английский, на котором думают, спорят и договариваются.",
    type: "website",
    url: "/english",
    siteName: "Auruby",
  },
};

const marqueeTopics = [
  "AI & ethics",
  "Game design",
  "Space",
  "Internet culture",
  "Future jobs",
  "Music",
  "Cinema",
  "Privacy",
];

const subBulletDot = (
  <span className="mt-[6px] block h-[3px] w-[3px] shrink-0 rounded-full bg-english-muted" />
);

type OfferBullet = {
  title: string;
  price: string;
  priceUnit: string;
  format: string;
  details: string[];
};

const youngerLearnerOffers: OfferBullet[] = [
  {
    title: "THE PLAN · Focus",
    price: "€45",
    priceUnit: "/ 60 мин",
    format: "Индивидуально 1:1",
    details: [
      "Готовимся к ближайшему экзамену по английскому, школьному выступлению или собеседованию для поступления.",
      "Изучаю ваш контекст и материалы, разрабатываю задания и сценарии репетиций.",
      "Репетируем, разбираем трудности и отрабатываем ответы на вопросы.",
      "Срок: обычно до 3–4 месяцев, под вашу задачу и дедлайн.",
    ],
  },
  {
    title: "THE PLAN · Regular",
    price: "€30",
    priceUnit: "/ 60 мин",
    format: "Индивидуально 1:1",
    details: [
      "Практикуем английский для учёбы, поездок и общения с ребятами из других стран.",
      "Расширяем словарный запас и разбираем грамматику для этих ситуаций.",
      "Тренируем понимание речи на слух и учимся ясно выражать свои мысли.",
      "Срок: ориентир — около года, в зависимости от ваших целей и уровня.",
    ],
  },
  {
    title: "THE CLUB",
    price: "€80",
    priceUnit: "/ месяц",
    format: "Группа до 6 человек",
    details: ["2 × 60 мин в неделю"],
  },
];

const olderLearnerOffers: OfferBullet[] = [
  {
    title: "THE PLAN · Focus",
    price: "€45",
    priceUnit: "/ 60 мин",
    format: "Индивидуально 1:1",
    details: [
      "Готовимся к конкретной ситуации: собеседованию, презентации, конференции или встрече с клиентом.",
      "Изучаю ваш контекст и материалы, разрабатываю задания и сценарии репетиций.",
      "Репетируем, разбираем трудности и отрабатываем ответы на вопросы.",
      "Срок: обычно до 3–4 месяцев, под вашу задачу и дедлайн.",
    ],
  },
  {
    title: "THE PLAN · Regular",
    price: "€30",
    priceUnit: "/ 60 мин",
    format: "Индивидуально 1:1",
    details: [
      "Последовательно работаем с разными ситуациями: рабочие обсуждения, путешествия и повседневные бытовые задачи.",
      "Расширяем словарный запас и разбираем грамматику для этих ситуаций.",
      "Тренируем понимание речи на слух и учимся ясно выражать свои мысли.",
      "Срок: ориентир — около года, в зависимости от ваших целей и уровня.",
    ],
  },
];

export default function EnglishProductSelectorPage() {
  return (
    <section className="relative flex min-h-[calc(100vh-72px)] flex-col overflow-hidden bg-english-aubergine text-white">
      <div className="pointer-events-none absolute -right-36 -top-[180px] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(214,245,73,0.18),transparent_65%)]" />
      <div className="pointer-events-none absolute -bottom-56 -left-36 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(238,237,254,0.1),transparent_65%)]" />

      <div className="relative mx-auto flex w-full max-w-[1240px] flex-1 flex-col justify-center px-6 py-14 sm:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
          <div>
            <div className="mb-7 font-mono text-[11.5px] uppercase tracking-[0.16em] text-english-chartreuse">
              Английский с Анной
            </div>
            <h1 className="max-w-[760px] font-heading text-[42px] font-semibold leading-[1.06] tracking-[-0.035em] sm:text-[60px]">
              Английский, на котором думают, спорят и договариваются.
            </h1>
          </div>
          <div className="relative flex aspect-[4/5] max-h-[224px] max-w-[179px] flex-col justify-end gap-1.5 overflow-hidden rounded-[24px] border border-white/[0.22] p-5">
            <Image
              src="/anna.jpg"
              alt="Анна"
              fill
              sizes="(min-width: 1024px) 179px, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-english-aubergine/85 via-english-aubergine/15 to-transparent" />
            <span className="relative font-body text-[8.5px] font-bold leading-[1.4] text-white/80">
              CELTA · 8+ лет преподавания · <br />
              разработчик · AI-проекты
            </span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <TrackedLink
              event="english_club_click"
              href="/english/club"
              className="flex flex-1 flex-col rounded-[24px] bg-english-lilac p-9 text-english-aubergine transition hover:bg-white"
            >
              <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.14em] text-english-muted">
                Набор в сентябрьские группы открыт
              </div>
              <h2 className="font-heading text-[32px] leading-[1.04] tracking-[-0.03em] sm:text-[40px]">
                THE SPARK
              </h2>
              <span className="mt-2 block font-body text-[13px] font-semibold text-english-muted">
                Для младших учеников: 13–16 лет
              </span>
              <div className="mt-6 grid gap-4">
                {youngerLearnerOffers.map((offer) => (
                  <div key={offer.title}>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="inline-block rounded-full bg-english-chartreuse px-3 py-1 font-body text-[15.5px] font-semibold text-english-aubergine">
                        {offer.title}
                      </span>
                      <span className="whitespace-nowrap font-body text-[18px] font-bold">
                        {offer.price}
                        <span className="ml-1 font-body text-[13px] font-normal text-english-muted">
                          {offer.priceUnit}
                        </span>
                      </span>
                    </div>
                    <span className="mt-2 block font-body text-[13px] font-semibold text-english-muted">
                      {offer.format}
                    </span>
                    <div className="mt-2 grid gap-1">
                      {offer.details.map((line) => (
                        <div
                          key={line}
                          className="flex items-baseline gap-2 font-body text-[14px] text-english-muted"
                        >
                          {subBulletDot}
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <span className="mt-5 inline-flex items-center gap-[7px] font-body text-[14.5px] font-semibold text-english-muted">
                Подробнее о занятиях <span>→</span>
              </span>
            </TrackedLink>
            <TrackedLink
              event="english_consultation_click"
              properties={{ source: "english_home_club" }}
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-full bg-english-chartreuse px-6 py-[18px] font-body text-[16.5px] font-bold text-english-aubergine transition hover:bg-english-chartreuse-hover"
            >
              Бесплатная консультация
              <span className="text-[18px]">→</span>
            </TrackedLink>
          </div>

          <div className="flex flex-col gap-4">
            <TrackedLink
              event="english_plan_click"
              href="/english/plan"
              className="flex flex-1 flex-col rounded-[24px] bg-english-lilac p-9 text-english-aubergine transition hover:bg-white"
            >
              <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.14em] text-english-muted">
                Запись открыта
              </div>
              <h2 className="font-heading text-[32px] leading-[1.04] tracking-[-0.03em] sm:text-[40px]">
                THE STAKES
              </h2>
              <span className="mt-2 block font-body text-[13px] font-semibold text-english-muted">
                Для старших учеников: 17 – ∞ лет
              </span>
              <div className="mt-6 grid gap-4">
                {olderLearnerOffers.map((offer) => (
                  <div key={offer.title}>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="inline-block rounded-full bg-english-chartreuse px-3 py-1 font-body text-[15.5px] font-semibold text-english-aubergine">
                        {offer.title}
                      </span>
                      <span className="whitespace-nowrap font-body text-[18px] font-bold">
                        {offer.price}
                        <span className="ml-1 font-body text-[13px] font-normal text-english-muted">
                          {offer.priceUnit}
                        </span>
                      </span>
                    </div>
                    <span className="mt-2 block font-body text-[13px] font-semibold text-english-muted">
                      {offer.format}
                    </span>
                    <div className="mt-2 grid gap-1">
                      {offer.details.map((line) => (
                        <div
                          key={line}
                          className="flex items-baseline gap-2 font-body text-[14px] text-english-muted"
                        >
                          {subBulletDot}
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <span className="mt-5 inline-flex items-center gap-[7px] font-body text-[14.5px] font-semibold text-english-muted">
                Подробнее о занятиях <span>→</span>
              </span>
            </TrackedLink>
            <TrackedLink
              event="english_consultation_click"
              properties={{ source: "english_home_plan" }}
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-full bg-english-lilac px-6 py-[18px] font-body text-[16.5px] font-bold text-english-aubergine transition hover:bg-white"
            >
              Бесплатная консультация
              <span className="text-[18px]">→</span>
            </TrackedLink>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/[0.15] px-6 py-5 sm:px-12">
        <MarqueeStrip items={marqueeTopics} />
      </div>
    </section>
  );
}
