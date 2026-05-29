export function VocabMock() {
  return (
    <div className="flex h-full flex-col px-4 py-3">
      <div className="mb-2 flex items-center justify-between">
        <p className="font-sans text-[8px] uppercase tracking-wider text-anthracite-muted">
          Society · Elections
        </p>
        <span className="rounded-full bg-chartreuse px-1.5 py-0.5 font-sans text-[8px] font-semibold text-anthracite">
          Listen
        </span>
      </div>

      <div className="mb-3 rounded-xl bg-sand-warm p-2.5">
        <p className="font-display text-[10.5px] leading-relaxed text-anthracite">
          Suomessa{" "}
          <strong className="font-semibold text-anthracite underline decoration-chartreuse decoration-2 underline-offset-2">
            järjestetään vaalit
          </strong>{" "}
          neljän vuoden välein. Äänestäminen on{" "}
          <strong className="font-semibold text-anthracite underline decoration-chartreuse decoration-2 underline-offset-2">
            tärkeä oikeus
          </strong>{" "}
          jokaiselle aikuiselle.{" "}
          <span className="rounded bg-neon-pink-muted px-0.5 font-medium text-anthracite">
            Muutin Suomeen
          </span>{" "}
          vuonna 2019.
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
            järjestetään vaalit
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
            muuttaa
          </p>
          <p className="font-sans text-[8px] italic text-anthracite-muted">
            verb
          </p>
        </div>
        <p className="font-sans text-[8.5px] text-anthracite-soft">to move</p>
        <p className="mt-0.5 font-sans text-[8px] italic text-anthracite-muted">
          Muutin Suomeen
        </p>
      </div>
    </div>
  );
}
