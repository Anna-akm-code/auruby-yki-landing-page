import type { Metadata } from "next";
import { MarqueeStrip } from "@/components/english/MarqueeStrip";
import { HeroFormatPanel } from "@/components/english/HeroFormatPanel";
import { StepCard } from "@/components/english/StepCard";
import { AnnaSection } from "@/components/english/AnnaSection";
import { FooterCTA } from "@/components/english/FooterCTA";
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

const steps = [
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

const formatStats = [
  { value: "2 × 60 мин", label: "в неделю, онлайн" },
  { value: "5–6 человек", label: "в группе" },
  { value: "A2–C1", label: "уровень" },
  { value: "8 занятий", label: "в месяц" },
];

export default function ClubPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-english-aubergine text-white">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(214,245,73,0.18),transparent_65%)]" />
        <div className="relative mx-auto max-w-[1240px] px-6 pb-0 pt-16 sm:px-12 sm:pt-[88px]">
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-18">
            <div>
              <h1 className="font-heading text-[52px] font-semibold leading-[0.94] tracking-[-0.035em] sm:text-[82px]">
                THE CLUB
              </h1>
              <p className="mt-6 max-w-[560px] font-heading text-[24px] font-normal leading-[1.22] tracking-[-0.02em] text-english-lilac sm:text-[30px]">
                Speak. Think. Connect.{" "}
                <span className="text-english-chartreuse">In English.</span>
              </p>
              <p className="mt-6 max-w-[520px] font-body text-[19.5px] leading-[1.55] text-white/[0.82]">
                Клуб английского для людей 13–17 лет, которым интересно, как
                устроен мир: технологии, ИИ, игры, наука, кино, музыка. Здесь
                английский — не предмет, а способ думать, спорить и
                договариваться.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3.5">
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-english-chartreuse px-8 py-[18px] font-body text-[16.5px] font-bold text-english-aubergine transition hover:bg-english-chartreuse-hover"
                >
                  Попробовать бесплатно
                  <span className="text-[18px]">→</span>
                </a>
              </div>
            </div>

            <div>
              <HeroFormatPanel
                label="Формат"
                rows={[
                  { label: "Занятия", value: "2 × 60 мин в неделю" },
                  { label: "В группе", value: "5–6 человек" },
                  { label: "Уровень", value: "A2–C1" },
                  { label: "Возраст", value: "13–17" },
                ]}
                priceLabel="Стоимость"
                priceValue="€80"
                priceUnit="/мес"
                note="Ведёт Анна — преподаватель с CELTA и 8 годами практики. И разработчик: она из той индустрии, про которую вы говорите на занятиях."
              />
              <p className="mt-3 font-body text-[13.5px] text-white/60">
                Следующий старт — середина сентября.
              </p>
            </div>
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
              Как проходит занятие
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <StepCard key={step.number} {...step} />
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-[24px] bg-english-aubergine px-7 py-11 text-white sm:px-11">
            <div className="mb-7">
              <span className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-english-chartreuse">
                О чём говорим
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

          <div className="mt-8 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="flex flex-col rounded-[24px] bg-english-lilac p-9 sm:p-10">
              <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.16em] text-english-muted">
                Формат и стоимость
              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                {formatStats.map((stat) => (
                  <div key={stat.value}>
                    <div className="font-heading text-[26px] font-semibold tracking-[-0.025em]">
                      {stat.value}
                    </div>
                    <div className="mt-1 font-body text-[14px] text-english-muted">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-auto flex flex-wrap items-end justify-between gap-6 border-t border-english-aubergine/[0.14] pt-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-heading text-[52px] font-semibold leading-none tracking-[-0.03em]">
                    €80
                  </span>
                  <span className="font-body text-[16px] text-english-muted">
                    / месяц · €10 за занятие
                  </span>
                </div>
              </div>
            </div>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between rounded-[24px] bg-english-chartreuse p-9 transition hover:bg-english-chartreuse-hover sm:p-10"
            >
              <div>
                <h3 className="font-heading text-[30px] leading-[1.08] tracking-[-0.03em] text-english-aubergine sm:text-[34px]">
                  Приходи на первое занятие бесплатно
                </h3>
                <p className="mt-3.5 font-body text-[16px] leading-[1.55] text-english-mid">
                  Заполни короткую заявку — я напишу, предложу время и
                  подберу группу по уровню.
                </p>
              </div>
              <span className="mt-8 flex items-center justify-between gap-4 font-body text-[18px] font-bold text-english-aubergine">
                Записаться
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-english-aubergine text-[20px] text-english-chartreuse">
                  →
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <AnnaSection />
      <FooterCTA />
    </>
  );
}
