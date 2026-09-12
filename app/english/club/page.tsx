import type { Metadata } from "next";
import { MarqueeStrip } from "@/components/english/MarqueeStrip";
import { HeroFormatPanel } from "@/components/english/HeroFormatPanel";
import { StepCard } from "@/components/english/StepCard";
import { AnnaSection } from "@/components/english/AnnaSection";
import { FooterCTA } from "@/components/english/FooterCTA";
import { TrackedLink } from "@/components/english/TrackedLink";
import { GOOGLE_FORM_URL } from "@/lib/english";

export const metadata: Metadata = {
  alternates: { canonical: "/english/club" },
  title: "THE CLUB — английский для людей 13–17 лет",
  description:
    "THE CLUB — сообщество английского для людей 13–17 лет, уровень A2–C1. Говорим о технологиях, ИИ, играх, науке и кино. Первое занятие бесплатно.",
  openGraph: {
    title: "THE CLUB",
    description:
      "Сообщество английского для людей 13–17 лет, которым интересно, как устроен мир. Первое занятие бесплатно, €80/мес.",
    type: "website",
    url: "/english/club",
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

const clubSteps = [
  {
    number: "01",
    title: "Материал",
    description:
      "Видео, статья, отрывок интервью или геймплей. То, что ты и так смотришь — но теперь понимаешь на 100% и можешь это обсудить.",
  },
  {
    number: "02",
    title: "Язык",
    description:
      "Выражения, которые нужны именно для этой темы: как возразить, уточнить, согласиться наполовину.",
  },
  {
    number: "03",
    title: "Дискуссия",
    description:
      "Основная часть. Мнения, аргументы, несогласие. Каждый говорит — в маленькой группе слышно всех.",
  },
  {
    number: "04",
    title: "Обратная связь",
    description: "Что прозвучало хорошо, что можно сказать точнее.",
    dark: true,
  },
];

const planSteps = [
  {
    number: "01",
    title: "Консультация",
    description:
      "Короткая встреча: разбираем, что уже получается, а что мешает, и определяем цель — конкретный результат (Focus) или регулярную практику (Regular).",
  },
  {
    number: "02",
    title: "План",
    description:
      "Собираю маршрут под твою цель: что тренируем, в каком порядке, на каком материале.",
  },
  {
    number: "03",
    title: "Практика",
    description:
      "На каждой встрече — реальная ситуация или задача, а не абстрактные упражнения: используешь язык, а не повторяешь его.",
  },
  {
    number: "04",
    title: "Обратная связь",
    description:
      "Что получилось, что подправить, что тренировать дальше — до следующей встречи и до конца маршрута.",
    dark: true,
  },
];

const topicTags: { text: string; variant?: "chartreuse" | "lilac" }[] = [
  { text: "Может ли ИИ быть автором?" },
  {
    text: "Почему одни игры затягивают, а другие — нет",
    variant: "chartreuse",
  },
  { text: "Стоит ли колонизировать Марс" },
  { text: "Приватность против удобства" },
  { text: "Профессии, которых ещё нет" },
  { text: "Как алгоритмы решают, что ты посмотришь", variant: "lilac" },
  { text: "Мемы как язык" },
  { text: "Что делает трек хитом" },
  { text: "Нужны ли школе оценки" },
];

export default function ClubPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-english-aubergine text-white">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(214,245,73,0.18),transparent_65%)]" />
        <div className="relative mx-auto max-w-[1240px] px-6 pb-0 pt-16 sm:px-12 sm:pt-[88px]">
          <div>
            <h1 className="font-heading text-[52px] font-semibold leading-[0.94] tracking-[-0.035em] sm:text-[82px]">
              Для младших учеников (13–16 лет)
            </h1>
            <div className="mt-6 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[560px] font-heading text-[24px] font-normal leading-[1.22] tracking-[-0.02em] text-english-lilac sm:text-[30px]">
                Speak. Think. Connect.{" "}
                <span className="text-english-chartreuse">In English.</span>
              </p>
              <TrackedLink
                event="english_consultation_click"
                properties={{ source: "club_hero" }}
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-english-chartreuse px-8 py-[18px] font-body text-[16.5px] font-bold text-english-aubergine transition hover:bg-english-chartreuse-hover"
              >
                Бесплатная консультация
                <span className="text-[18px]">→</span>
              </TrackedLink>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div>
              <HeroFormatPanel
                label="THE CLUB"
                rows={[
                  { label: "Занятия", value: "2 × 60 мин в неделю" },
                  { label: "В группе", value: "5–6 человек" },
                  { label: "Уровень", value: "A2–C1" },
                  { label: "Возраст", value: "13–16" },
                ]}
                priceLabel="Стоимость"
                priceValue="€80"
                priceUnit="/мес"
              />
              <p className="mt-3 font-body text-[13.5px] text-white/60">
                Следующий старт — середина сентября.
              </p>
            </div>

            <HeroFormatPanel
              label="THE PLAN · FOCUS"
              rows={[
                { label: "Формат", value: "Индивидуально 1:1" },
                { label: "Цель", value: "Конкретная цель" },
                { label: "Срок", value: "Короткий, обычно < 6 месяцев" },
                { label: "Уровень", value: "A2–C1" },
                { label: "Возраст", value: "13–16" },
              ]}
              priceLabel="Стоимость"
              priceValue="€45"
              priceUnit="/ 60 мин"
            />

            <HeroFormatPanel
              label="THE PLAN · REGULAR"
              rows={[
                { label: "Формат", value: "Индивидуально 1:1" },
                { text: "Регулярная практика, разбор постоянных трудностей" },
                { label: "Уровень", value: "A2–C1" },
                { label: "Возраст", value: "13–16" },
              ]}
              priceLabel="Стоимость"
              priceValue="€30"
              priceUnit="/ 60 мин"
            />
          </div>

          <div className="mt-14 border-t border-white/[0.15] py-5 sm:mt-[76px]">
            <MarqueeStrip items={marqueeTopics} />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-12 sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div>
            <h3 className="mb-9 font-mono text-[14px] font-normal uppercase tracking-[0.16em] text-english-muted">
              Как проходит — THE CLUB
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {clubSteps.map((step) => (
                <StepCard key={step.number} {...step} />
              ))}
            </div>
          </div>

          <div className="mt-14">
            <h3 className="mb-9 font-mono text-[14px] font-normal uppercase tracking-[0.16em] text-english-muted">
              Как проходит — THE PLAN
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {planSteps.map((step) => (
                <StepCard key={step.number} {...step} />
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-[24px] bg-english-aubergine px-7 py-11 text-white sm:px-11">
            <div className="mb-7">
              <span className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-english-chartreuse">
                О чём говорим в THE CLUB
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {topicTags.map((tag) => (
                <span
                  key={tag.text}
                  className={
                    tag.variant === "chartreuse"
                      ? "rounded-full bg-english-chartreuse px-5 py-3 font-body text-[15.5px] font-semibold text-english-aubergine"
                      : tag.variant === "lilac"
                        ? "rounded-full bg-english-lilac px-5 py-3 font-body text-[15.5px] font-semibold text-english-aubergine"
                        : "rounded-full border border-white/[0.28] px-5 py-3 font-body text-[15.5px]"
                  }
                >
                  {tag.text}
                </span>
              ))}
            </div>
            <p className="mt-6 font-body text-[15.5px] leading-[1.55] text-white/[0.68]">
              Темы предлагает и группа. Если тебе интересно — это подходящий
              материал.
            </p>
          </div>

          <div className="mt-8">
            <TrackedLink
              event="english_consultation_click"
              properties={{ source: "club_cta" }}
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between rounded-[24px] bg-english-chartreuse p-9 transition hover:bg-english-chartreuse-hover sm:p-10"
            >
              <div>
                <h3 className="font-heading text-[30px] leading-[1.08] tracking-[-0.03em] text-english-aubergine sm:text-[34px]">
                  Начни с бесплатной консультации
                </h3>
                <p className="mt-3.5 font-body text-[16px] leading-[1.55] text-english-mid">
                  За 20 минут разберём, какой формат тебе подходит — клуб,
                  конкретная цель или регулярная практика — и отвечу на
                  вопросы.
                </p>
              </div>
              <span className="mt-8 flex items-center justify-between gap-4 font-body text-[18px] font-bold text-english-aubergine">
                Бесплатная консультация
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-english-aubergine text-[20px] text-english-chartreuse">
                  →
                </span>
              </span>
            </TrackedLink>
          </div>
        </div>
      </section>

      <AnnaSection />
      <FooterCTA />
    </>
  );
}
