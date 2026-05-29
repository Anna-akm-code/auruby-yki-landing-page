export function SpeakingMock() {
  return (
    <div className="flex h-full flex-col px-4 py-3">
      <div className="mb-2 flex items-center justify-between">
        <p className="font-sans text-[8px] uppercase tracking-wider text-anthracite-muted">
          Opinion · Remote work
        </p>
        <div className="rounded-full bg-sand-warm px-2 py-0.5 font-sans text-[8px] font-semibold text-anthracite-soft">
          0.9×
        </div>
      </div>

      <div className="flex-1 space-y-2 overflow-hidden">
        <div className="flex justify-start">
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-sand-warm px-2.5 py-1.5">
            <p className="font-sans text-[9.5px] leading-snug text-anthracite">
              Mitä mieltä olet etätyöstä?
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-anthracite px-2.5 py-1.5">
            <p className="font-sans text-[9.5px] leading-snug text-cream">
              Mielestäni etätyö on hyvä asia, koska saan keskittyä paremmin
              kotona.
            </p>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-sand-warm px-2.5 py-1.5">
            <p className="font-sans text-[9.5px] leading-snug text-anthracite">
              Onko etätyössä myös huonoja puolia?
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-anthracite px-2.5 py-1.5">
            <p className="font-sans text-[9.5px] leading-snug text-cream">
              Joo, joskus tuntuu yksinäiseltä eikä näe kollegoita.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-2 rounded-xl bg-chartreuse-glow p-2">
        <div className="flex items-center justify-between">
          <p className="font-sans text-[8px] uppercase tracking-wider text-anthracite-muted">
            YKI score
          </p>
          <span className="rounded-full bg-chartreuse px-1.5 py-0.5 font-sans text-[7.5px] font-semibold text-anthracite">
            Weak pass
          </span>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-center">
        <div className="grid h-11 w-11 place-items-center rounded-full bg-chartreuse shadow-[0_8px_20px_-8px_rgba(214,245,73,0.8)]">
          <div className="h-4 w-3 rounded-t-full rounded-b-md bg-anthracite" />
        </div>
      </div>
    </div>
  );
}
