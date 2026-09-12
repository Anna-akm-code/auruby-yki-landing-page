import type { Metadata } from "next";
import { MarqueeStrip } from "@/components/english/MarqueeStrip";
import { HeroFormatPanel } from "@/components/english/HeroFormatPanel";
import { StepCard } from "@/components/english/StepCard";
import { AnnaSection } from "@/components/english/AnnaSection";
import { FooterCTA } from "@/components/english/FooterCTA";
import { TrackedLink } from "@/components/english/TrackedLink";
import { GOOGLE_FORM_URL } from "@/lib/english";

export const metadata: Metadata = {
  alternates: { canonical: "/english/plan" },
  title: "THE PLAN — индивидуальный английский, 1:1",
  description:
    "От «я всё понимаю» к «я могу это сказать». THE PLAN: индивидуальные занятия английским, уровень A2–C1. Бесплатная диагностика.",
  openGraph: {
    title: "THE PLAN",
    description:
      "Индивидуальные занятия английским с бесплатной диагностикой и личным планом работы.",
    type: "website",
    url: "/english/plan",
    siteName: "Auruby",
  },
};

const marqueeTopics = [
  "Meetings",
  "Interviews",
  "Presentations",
  "Relocation",
  "Small talk",
  "Code review",
  "Negotiation",
  "Everyday life",
];

const planFocusSteps = [
  {
    number: "01",
    title: "Материал",
    description:
      "Видео, статья, отрывок интервью или ситуация, напрямую связанная с твоей целью.",
  },
  {
    number: "02",
    title: "Язык",
    description:
      "Выражения, которые нужны именно для твоей задачи: как объяснить, договориться, выступить.",
  },
  {
    number: "03",
    title: "Практика",
    description:
      "Отрабатываем ситуацию, к которой готовимся, пока она не зазвучит естественно.",
  },
  {
    number: "04",
    title: "Обратная связь",
    description: "Что получилось хорошо, что подправить точнее к следующей встрече.",
    dark: true,
  },
];

const planRegularSteps = [
  {
    number: "01",
    title: "Материал",
    description:
      "То, что ты сам читаешь или смотришь на английском, плюс разбор твоих текущих трудностей.",
  },
  {
    number: "02",
    title: "Язык",
    description: "Конкретные слова и конструкции, которые пока не закрепились.",
  },
  {
    number: "03",
    title: "Практика",
    description: "Используешь их в разговоре, а не просто повторяешь.",
  },
  {
    number: "04",
    title: "Обратная связь",
    description: "Что стало лучше, над чем работаем дальше.",
    dark: true,
  },
];

type ComparisonColumn = {
  name: string;
  format: string;
  frequency: string;
  goal: string;
  level: string;
  age: string;
  price: string;
};

const comparisonRows: { label: string; key: keyof ComparisonColumn }[] = [
  { label: "Формат", key: "format" },
  { label: "Периодичность", key: "frequency" },
  { label: "Цель", key: "goal" },
  { label: "Уровень", key: "level" },
  { label: "Возраст", key: "age" },
  { label: "Стоимость", key: "price" },
];

const comparisonColumns: ComparisonColumn[] = [
  {
    name: "THE PLAN · Focus",
    format: "Индивидуально 1:1",
    frequency: "По согласованию",
    goal: "Конкретная цель, короткий срок (<6 мес)",
    level: "A2–C1",
    age: "17+",
    price: "€45 / 60 мин",
  },
  {
    name: "THE PLAN · Regular",
    format: "Индивидуально 1:1",
    frequency: "60 мин/сессия",
    goal: "Регулярная практика, постоянные трудности",
    level: "A2–C1",
    age: "17+",
    price: "€30 / 60 мин",
  },
];

export default function PlanPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-english-aubergine text-white">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(214,245,73,0.18),transparent_65%)]" />
        <div className="relative mx-auto max-w-[1240px] px-6 pb-0 pt-16 sm:px-12 sm:pt-[88px]">
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-18">
            <div>
              <div className="mb-8">
                <span className="font-mono text-[21px] uppercase tracking-[0.14em] text-english-chartreuse">
                  Для старших учеников (17 – ∞)
                </span>
              </div>
              <h1 className="font-heading text-[48px] font-semibold leading-[0.96] tracking-[-0.035em] sm:text-[76px]">
                <span className="block">Точка A.</span>
                <span className="block text-english-chartreuse">Точка B.</span>
              </h1>
              <p className="mt-6 max-w-[560px] font-heading text-[24px] font-normal leading-[1.22] tracking-[-0.02em] text-english-lilac sm:text-[30px]">
                От «я всё понимаю» к «я могу это сказать».
              </p>
              <p className="mt-6 max-w-[540px] font-body text-[18.5px] leading-[1.55] text-white/80">
                Индивидуальный английский с понятным маршрутом: под
                конкретную цель в сжатый срок или для регулярной практики
                над твоими постоянными трудностями. Понятный маршрут и
                конкретный результат.
              </p>
              <p className="mt-3.5 max-w-[540px] font-body text-[16.5px] leading-[1.5] text-english-chartreuse">
                Разбираюсь в вашем запросе и готовлю индивидуальный план.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3.5">
                <TrackedLink
                  event="english_consultation_click"
                  properties={{ source: "plan_hero" }}
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-english-chartreuse px-8 py-[18px] font-body text-[16.5px] font-bold text-english-aubergine transition hover:bg-english-chartreuse-hover"
                >
                  Бесплатная консультация
                  <span className="text-[18px]">→</span>
                </TrackedLink>
              </div>
            </div>

            <div>
              <HeroFormatPanel
                label="THE PLAN · FOCUS"
                rows={[
                  { label: "Формат", value: "Индивидуально 1:1" },
                  { label: "Цель", value: "Конкретная цель" },
                  { label: "Срок", value: "Короткий, обычно < 6 месяцев" },
                  { label: "Уровень", value: "A2–C1" },
                  { label: "Возраст", value: "17+" },
                ]}
                priceLabel="Стоимость"
                priceValue="€45"
                priceUnit="/ 60 мин"
              />

              <div className="mt-6">
                <HeroFormatPanel
                  label="THE PLAN · REGULAR"
                  rows={[
                    { label: "Формат", value: "Индивидуально 1:1" },
                    { text: "Регулярная практика, разбор постоянных трудностей" },
                    { label: "Уровень", value: "A2–C1" },
                    { label: "Возраст", value: "17+" },
                  ]}
                  priceLabel="Стоимость"
                  priceValue="€30"
                  priceUnit="/ 60 мин"
                />
              </div>
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
              Как проходит — THE PLAN · FOCUS
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {planFocusSteps.map((step) => (
                <StepCard key={step.number} {...step} />
              ))}
            </div>
          </div>

          <div className="mt-14">
            <h3 className="mb-9 font-mono text-[14px] font-normal uppercase tracking-[0.16em] text-english-muted">
              Как проходит — THE PLAN · REGULAR
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {planRegularSteps.map((step) => (
                <StepCard key={step.number} {...step} />
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="flex flex-col rounded-[24px] bg-english-lilac p-9 sm:p-10">
              <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.16em] text-english-muted">
                Формат и стоимость
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[420px] border-collapse">
                  <thead>
                    <tr>
                      <th className="pb-4 pr-6 text-left" />
                      {comparisonColumns.map((col) => (
                        <th
                          key={col.name}
                          className="pb-4 pl-4 text-left font-heading text-[16px] font-semibold leading-[1.2]"
                        >
                          {col.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr
                        key={row.key}
                        className="border-t border-english-aubergine/[0.14]"
                      >
                        <td className="whitespace-nowrap py-3 pr-6 font-body text-[13.5px] text-english-muted">
                          {row.label}
                        </td>
                        {comparisonColumns.map((col) => (
                          <td
                            key={col.name}
                            className={
                              row.key === "price"
                                ? "py-3 pl-4 font-heading text-[20px] font-semibold"
                                : "py-3 pl-4 font-body text-[14.5px]"
                            }
                          >
                            {col[row.key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <TrackedLink
              event="english_consultation_click"
              properties={{ source: "plan_cta" }}
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between rounded-[24px] bg-english-aubergine p-9 text-white transition hover:bg-english-dark sm:p-10"
            >
              <div>
                <h3 className="font-heading text-[30px] leading-[1.08] tracking-[-0.03em] sm:text-[34px]">
                  Начните с бесплатной консультации
                </h3>
                <p className="mt-3.5 font-body text-[16px] leading-[1.55] text-white/[0.78]">
                  За 20 минут разберём, где вы сейчас, чего хотите достичь и
                  подойдёт ли вам этот формат.
                </p>
              </div>
              <span className="mt-8 flex items-center justify-between gap-4 font-body text-[18px] font-bold text-english-chartreuse">
                Бесплатная консультация
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-english-chartreuse text-[20px] text-english-aubergine">
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
