import type { Metadata } from "next";
import { MarqueeStrip } from "@/components/english/MarqueeStrip";
import { HeroFormatPanel } from "@/components/english/HeroFormatPanel";
import { AnnaSection } from "@/components/english/AnnaSection";
import { FooterCTA } from "@/components/english/FooterCTA";
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

const pointA = [
  "Сначала выстраиваю фразу, потом говорю",
  "Нужное слово всплывает уже после разговора",
  "Сложная мысль упрощается до школьной фразы",
  "На созвонах молчу, потом дописываю в чат",
];

const pointB = [
  "Начинаю говорить, не репетируя фразу",
  "Нужные слова приходят по ходу разговора",
  "Объясняю сложное понятно",
  "Веду встречу и отвечаю на вопросы вживую",
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
                <span className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-english-chartreuse">
                  THE PLAN
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
                Вы понимаете сериалы и созвоны, но собрать мысль в речь —
                тяжело.
              </p>
              <p className="mt-3.5 max-w-[540px] font-body text-[16.5px] leading-[1.5] text-english-chartreuse">
                Разбираюсь в вашем запросе и готовлю индивидуальный план.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3.5">
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-english-chartreuse px-8 py-[18px] font-body text-[16.5px] font-bold text-english-aubergine transition hover:bg-english-chartreuse-hover"
                >
                  Бесплатная диагностика
                  <span className="text-[18px]">→</span>
                </a>
              </div>
            </div>

            <HeroFormatPanel
              label="Программа"
              rows={[
                { label: "Занятия", value: "60–90 мин, 1:1" },
                { label: "Уровень", value: "A2–C1" },
                { label: "Возраст", value: "13–∞" },
                { text: "Диагностика → план → работа по плану" },
              ]}
              priceLabel="Стоимость"
              priceValue="€40–60"
              priceUnit="/час"
              note="Сначала диагностика, потом план, потом отработка на ваших реальных ситуациях."
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
              Как проходит
            </h3>
            <div className="rounded-[24px] bg-english-aubergine px-7 py-11 text-white sm:px-11">
              <div className="mb-9 flex flex-wrap items-baseline gap-4">
                <span className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-english-chartreuse">
                  Метод
                </span>
                <h3 className="font-heading text-[28px] tracking-[-0.03em] sm:text-[34px]">
                  Точка A → Точка B
                </h3>
              </div>

              <div className="grid grid-cols-1 items-stretch gap-9 lg:grid-cols-[1fr_auto_1fr]">
                <div className="rounded-[18px] border border-white/[0.18] bg-white/[0.08] p-7">
                  <div className="font-heading text-[64px] font-semibold leading-none tracking-[-0.04em] text-white/35">
                    A
                  </div>
                  <h4 className="my-3.5 font-heading text-[22px]">
                    Где вы сейчас
                  </h4>
                  <div className="grid gap-2.5 font-body text-[15px] leading-[1.5] text-white/[0.78]">
                    {pointA.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-row items-center justify-center gap-3 py-2 lg:flex-col lg:px-1">
                  <div className="h-px w-full flex-1 bg-gradient-to-r from-english-aubergine to-english-chartreuse/50 lg:h-full lg:w-px lg:bg-gradient-to-b" />
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-english-chartreuse text-[26px] font-bold text-english-aubergine">
                    →
                  </div>
                  <div className="max-w-[110px] text-center font-mono text-[10.5px] uppercase leading-[1.5] tracking-[0.14em] text-english-chartreuse">
                    шаг
                    <br />
                    за шагом
                  </div>
                  <div className="h-px w-full flex-1 bg-gradient-to-r from-english-chartreuse/50 to-english-aubergine lg:h-full lg:w-px lg:bg-gradient-to-b" />
                </div>

                <div className="rounded-[18px] bg-english-chartreuse p-7 text-english-aubergine">
                  <div className="font-heading text-[64px] font-semibold leading-none tracking-[-0.04em] text-english-aubergine/35">
                    B
                  </div>
                  <h4 className="my-3.5 font-heading text-[22px]">
                    Куда приходите
                  </h4>
                  <div className="grid gap-2.5 font-body text-[15px] leading-[1.5] text-english-mid">
                    {pointB.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="flex flex-col rounded-[24px] bg-english-lilac p-9 sm:p-10">
              <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.16em] text-english-muted">
                Формат и стоимость
              </div>
              <div className="grid">
                <div className="flex flex-col gap-2 border-b border-english-aubergine/[0.14] pb-[18px] sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <span className="font-heading text-[20px] font-semibold">
                    Разговорный английский
                  </span>
                  <span className="flex items-baseline gap-2 whitespace-nowrap">
                    <span className="font-heading text-[30px] font-semibold tracking-[-0.03em]">
                      €40
                    </span>
                    <span className="font-body text-[14px] text-english-muted">
                      /час
                    </span>
                  </span>
                </div>
                <div className="flex flex-col gap-2 pt-[18px] sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <span className="font-heading text-[20px] font-semibold">
                    Интенсивная подготовка к интервью и презентациям
                  </span>
                  <span className="flex items-baseline gap-2 whitespace-nowrap">
                    <span className="font-heading text-[30px] font-semibold tracking-[-0.03em]">
                      €60
                    </span>
                    <span className="font-body text-[14px] text-english-muted">
                      /час
                    </span>
                  </span>
                </div>
                <div className="mt-5 border-t border-english-aubergine/[0.14] pt-4 font-body text-[15px] text-english-muted">
                  Первая диагностика — бесплатно.
                </div>
              </div>
            </div>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between rounded-[24px] bg-english-aubergine p-9 text-white transition hover:bg-english-dark sm:p-10"
            >
              <div>
                <h3 className="font-heading text-[30px] leading-[1.08] tracking-[-0.03em] sm:text-[34px]">
                  Начните с бесплатной диагностики
                </h3>
                <p className="mt-3.5 font-body text-[16px] leading-[1.55] text-white/[0.78]">
                  Полчаса разговора — и вы поймёте, подходит ли вам этот
                  формат. Если да — составляем план и начинаем.
                </p>
              </div>
              <span className="mt-8 flex items-center justify-between gap-4 font-body text-[18px] font-bold text-english-chartreuse">
                Записаться
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-english-chartreuse text-[20px] text-english-aubergine">
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
