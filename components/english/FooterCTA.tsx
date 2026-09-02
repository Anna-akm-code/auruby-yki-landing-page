import { GOOGLE_FORM_URL } from "@/lib/english";
import { TrackedLink } from "@/components/english/TrackedLink";

export function FooterCTA() {
  return (
    <section
      id="apply"
      className="relative overflow-hidden bg-english-aubergine px-6 py-24 text-white sm:px-12"
    >
      <div className="pointer-events-none absolute -bottom-52 -left-24 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(214,245,73,0.14),transparent_65%)]" />
      <div className="relative mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[760px] text-center">
          <div className="mb-6 font-mono text-[11.5px] uppercase tracking-[0.16em] text-english-chartreuse">
            Набор открыт
          </div>
          <h2 className="font-heading text-[38px] leading-[1.03] tracking-[-0.035em] sm:text-[58px]">
            Две программы. Выберите свою.
          </h2>
        </div>

        <div className="mx-auto mt-11 grid max-w-[900px] grid-cols-1 gap-6 sm:grid-cols-2">
          <TrackedLink
            event="english_consultation_click"
            properties={{ source: "club_footer" }}
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2.5 rounded-[20px] bg-english-chartreuse p-8 text-english-aubergine transition hover:bg-english-chartreuse-hover"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] opacity-65">
              THE CLUB
            </span>
            <span className="font-heading text-[28px] font-semibold tracking-[-0.025em]">
              THE CLUB
            </span>
            <span className="font-body text-[15px] text-english-mid">
              €80/мес
            </span>
            <span className="mt-2.5 flex items-center gap-2 font-body text-[16px] font-bold">
              Заполнить заявку <span>→</span>
            </span>
          </TrackedLink>
          <TrackedLink
            event="english_consultation_click"
            properties={{ source: "plan_footer" }}
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2.5 rounded-[20px] border border-white/25 bg-white/[0.08] p-8 text-white transition hover:border-english-chartreuse"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-english-chartreuse">
              THE PLAN
            </span>
            <span className="font-heading text-[28px] font-semibold tracking-[-0.025em]">
              THE PLAN
            </span>
            <span className="font-body text-[15px] text-white/70">
              8 × 60 мин / 4 недели · €320
            </span>
            <span className="mt-2.5 flex items-center gap-2 font-body text-[16px] font-semibold text-english-chartreuse">
              Заполнить заявку <span>→</span>
            </span>
          </TrackedLink>
        </div>

        <p className="mt-7 text-center font-body text-[13.5px] text-white/50">
          Заявка занимает пару минут. Обе кнопки ведут на форму заявки.
        </p>
      </div>
    </section>
  );
}
