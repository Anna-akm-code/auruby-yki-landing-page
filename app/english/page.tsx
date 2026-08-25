import type { Metadata } from "next";
import { MarqueeStrip } from "@/components/english/MarqueeStrip";
import { GOOGLE_FORM_URL } from "@/lib/english";

export const metadata: Metadata = {
  alternates: { canonical: "/english" },
  title: "Английский с Анной Николае — THE CLUB и THE PLAN",
  description:
    "Английский, на котором думают, спорят и договариваются. THE CLUB — сообщество для людей 13–17 лет. THE PLAN — индивидуальный английский с личным планом.",
  openGraph: {
    title: "Английский с Анной Николае",
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

const bulletDot = (
  <span className="mt-[7px] block h-[5px] w-[5px] shrink-0 rounded-full bg-english-aubergine" />
);

export default function EnglishProductSelectorPage() {
  return (
    <section className="relative flex min-h-[calc(100vh-72px)] flex-col overflow-hidden bg-english-aubergine text-white">
      <div className="pointer-events-none absolute -right-36 -top-[180px] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(214,245,73,0.18),transparent_65%)]" />
      <div className="pointer-events-none absolute -bottom-56 -left-36 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(238,237,254,0.1),transparent_65%)]" />

      <div className="relative mx-auto flex w-full max-w-[1240px] flex-1 flex-col justify-center px-6 py-14 sm:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
          <div>
            <div className="mb-7 font-mono text-[11.5px] uppercase tracking-[0.16em] text-english-chartreuse">
              Английский с Анной Николае
            </div>
            <h1 className="max-w-[760px] font-heading text-[42px] font-semibold leading-[1.06] tracking-[-0.035em] sm:text-[64px]">
              Английский, на котором думают, спорят и договариваются.
            </h1>
          </div>
          <div className="flex aspect-[4/5] flex-col justify-end gap-1.5 rounded-[24px] border border-white/[0.22] bg-gradient-to-br from-white/[0.16] to-white/[0.06] p-5">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-white/60">
              Фото Анны
            </span>
            <span className="font-body text-[13.5px] font-bold leading-[1.4] text-white/80">
              CELTA · 8+ лет преподавания · <br />
              разработчик · AI-проекты
            </span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <a
              href="/english/club"
              className="flex flex-1 flex-col rounded-[24px] bg-english-lilac p-9 text-english-aubergine transition hover:bg-white"
            >
              <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.14em] text-english-muted">
                Набор в сентябрьские группы открыт
              </div>
              <h2 className="font-heading text-[32px] leading-[1.04] tracking-[-0.03em] sm:text-[40px]">
                THE CLUB
              </h2>
              <p className="mt-4 font-heading text-[19px] leading-[1.3] tracking-[-0.01em]">
                Говорим. Думаем. Спорим. Вместе.
              </p>
              <p className="mt-2 max-w-[420px] font-body text-[16.5px] leading-[1.55] text-english-mid">
                Англоязычное сообщество для людей 13–17 лет.
              </p>
              <div className="mt-6 grid gap-2.5">
                {[
                  "13–17 лет",
                  "Уровень A2–C1",
                  "Группа 5–6 человек",
                  "2 × 60 мин в неделю",
                ].map((line) => (
                  <div key={line} className="flex items-baseline gap-2.5 font-body text-[15.5px]">
                    {bulletDot}
                    {line}
                  </div>
                ))}
                <div className="flex items-baseline gap-2.5 font-body text-[15.5px] font-semibold">
                  {bulletDot}
                  €80/мес · первое занятие бесплатно
                </div>
              </div>
              <span className="mt-5 inline-flex items-center gap-[7px] font-body text-[14.5px] font-semibold text-english-muted">
                Подробнее о клубе <span>→</span>
              </span>
            </a>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-full bg-english-chartreuse px-6 py-[18px] font-body text-[16.5px] font-bold text-english-aubergine transition hover:bg-english-chartreuse-hover"
            >
              Попробовать бесплатно
              <span className="text-[18px]">→</span>
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="/english/plan"
              className="flex flex-1 flex-col rounded-[24px] bg-english-lilac p-9 text-english-aubergine transition hover:bg-white"
            >
              <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.14em] text-english-muted">
                Запись открыта
              </div>
              <h2 className="font-heading text-[32px] leading-[1.04] tracking-[-0.03em] sm:text-[40px]">
                THE PLAN
              </h2>
              <p className="mt-4 font-heading text-[19px] leading-[1.3] tracking-[-0.01em]">
                Твоя точка А → твоя точка Б.
              </p>
              <p className="mt-2 max-w-[420px] font-body text-[16.5px] leading-[1.55] text-english-mid">
                Индивидуальный английский с понятным маршрутом и конкретным
                результатом.
              </p>
              <div className="mt-6 grid gap-2.5">
                {["13–∞", "Уровень A2–C1", "Индивидуально", "60–90 мин"].map(
                  (line) => (
                    <div key={line} className="flex items-baseline gap-2.5 font-body text-[15.5px]">
                      {bulletDot}
                      {line}
                    </div>
                  ),
                )}
                <div className="flex items-baseline gap-2.5 font-body text-[15.5px] font-semibold">
                  {bulletDot}
                  Бесплатная диагностика
                </div>
                <div className="grid gap-[7px] pl-[15px] font-body text-[14.5px] text-english-mid">
                  {[
                    "Разбираемся, где вы сейчас и что мешает",
                    "Определяем цель и сроки",
                    "Составляем план: от вашей точки А к вашей точке Б",
                  ].map((line) => (
                    <div key={line} className="flex items-baseline gap-2.5">
                      <span className="mt-[3px] block h-[1.5px] w-[5px] shrink-0 bg-english-muted/70" />
                      {line}
                    </div>
                  ))}
                </div>
                <div className="flex items-baseline gap-2.5 font-body text-[15.5px] font-semibold">
                  {bulletDot}
                  €40–60/час
                </div>
              </div>
              <span className="mt-5 inline-flex items-center gap-[7px] font-body text-[14.5px] font-semibold text-english-muted">
                Подробнее о THE PLAN <span>→</span>
              </span>
            </a>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-full bg-english-lilac px-6 py-[18px] font-body text-[16.5px] font-bold text-english-aubergine transition hover:bg-white"
            >
              Записаться на диагностику
              <span className="text-[18px]">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/[0.15] px-6 py-5 sm:px-12">
        <MarqueeStrip items={marqueeTopics} />
      </div>
    </section>
  );
}
