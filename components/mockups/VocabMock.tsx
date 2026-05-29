export function VocabMock() {
  return (
    <div className="flex h-full flex-col px-4 py-3">
      <div className="mb-2 flex items-start justify-between gap-2">
        <p className="font-sans text-[10px] uppercase tracking-wider text-anthracite-muted">
          9 · Society · Elections
        </p>
        <span className="mt-1.5 shrink-0 rounded-full bg-chartreuse px-2 py-0.5 font-sans text-[10px] font-semibold text-anthracite">
          Listen
        </span>
      </div>

      <div className="mb-3 rounded-xl bg-sand-warm p-2.5">
        <p className="font-display text-[10.5px] leading-relaxed text-anthracite">
          Suomessa järjestetään eduskunta
          <strong className="font-semibold text-anthracite underline decoration-[#C5E63C] decoration-2 underline-offset-2">
            vaalit
          </strong>{" "}
          neljän vuoden välein. Kansalaiset{" "}
          <strong className="font-semibold text-anthracite underline decoration-[#C5E63C] decoration-2 underline-offset-2">
            äänestävät
          </strong>{" "}
          edustajia, jotka{" "}
          <span className="rounded bg-neon-pink-muted px-0.5 font-medium text-anthracite">
            päättävät
          </span>{" "}
          laeista ja valtion budjetista. Äänestäminen on tärkeä{" "}
          <strong className="font-semibold text-anthracite underline decoration-[#C5E63C] decoration-2 underline-offset-2">
            oikeus
          </strong>{" "}
          jokaiselle aikuiselle.
        </p>
      </div>

      <div className="mb-1 flex items-baseline justify-between">
        <p className="font-display text-[9.5px] font-semibold text-anthracite">
          Recommended words
        </p>
        <span className="rounded-full bg-chartreuse px-1.5 py-px font-sans text-[7px] font-semibold uppercase tracking-wider text-anthracite">
          Must know
        </span>
      </div>

      <div className="mb-2 space-y-1">
        <div className="rounded-lg border border-sand-deep bg-cream px-2.5 py-1.5">
          <div className="flex items-baseline justify-between">
            <p className="font-display text-[10px] font-semibold text-anthracite">
              vaalit
            </p>
            <p className="font-sans text-[8px] italic text-anthracite-muted">
              noun, pl.
            </p>
          </div>
          <p className="font-sans text-[8.5px] text-anthracite-soft">election</p>
          <p className="mt-0.5 font-sans text-[8px] italic text-anthracite-muted">
            eduskuntavaalit
          </p>
        </div>
        <div className="rounded-lg border border-sand-deep bg-cream px-2.5 py-1.5">
          <div className="flex items-baseline justify-between">
            <p className="font-display text-[10px] font-semibold text-anthracite">
              äänestää
            </p>
            <p className="font-sans text-[8px] italic text-anthracite-muted">
              verb
            </p>
          </div>
          <p className="font-sans text-[8.5px] text-anthracite-soft">to vote</p>
          <p className="mt-0.5 font-sans text-[8px] italic text-anthracite-muted">
            äänestävät edustajia
          </p>
        </div>
        <div className="rounded-lg border border-sand-deep bg-cream px-2.5 py-1.5">
          <div className="flex items-baseline justify-between">
            <p className="font-display text-[10px] font-semibold text-anthracite">
              oikeus
            </p>
            <p className="font-sans text-[8px] italic text-anthracite-muted">
              noun
            </p>
          </div>
          <p className="font-sans text-[8.5px] text-anthracite-soft">right</p>
          <p className="mt-0.5 font-sans text-[8px] italic text-anthracite-muted">
            tärkeä oikeus
          </p>
        </div>
      </div>

      <div className="mb-1 flex items-baseline justify-between">
        <p className="font-display text-[9.5px] font-semibold text-anthracite">
          Your words
        </p>
        <span className="rounded-full bg-neon-pink-muted px-1.5 py-px font-sans text-[7px] font-semibold uppercase tracking-wider text-anthracite">
          Highlighted
        </span>
      </div>

      <div className="rounded-lg border border-sand-deep bg-cream px-2.5 py-1.5">
        <div className="flex items-baseline justify-between">
          <p className="font-display text-[10px] font-semibold text-anthracite">
            päättää
          </p>
          <p className="font-sans text-[8px] italic text-anthracite-muted">
            verb
          </p>
        </div>
        <p className="font-sans text-[8.5px] text-anthracite-soft">to decide</p>
        <p className="mt-0.5 font-sans text-[8px] italic text-anthracite-muted">
          päättävät laeista
        </p>
      </div>
    </div>
  );
}
