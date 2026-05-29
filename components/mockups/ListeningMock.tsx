export function ListeningMock() {
  return (
    <div className="flex h-full flex-col px-4 py-3">
      <div className="mb-2 flex items-center justify-between">
        <p className="font-sans text-[8px] uppercase tracking-wider text-anthracite-muted">
          Health · At the doctor&apos;s
        </p>
        <p className="font-sans text-[8px] font-semibold text-anthracite-soft">
          B1
        </p>
      </div>

      <div className="mb-3 rounded-xl bg-anthracite p-3 text-cream">
        <div className="mb-2 flex items-center justify-between">
          <p className="font-sans text-[8px] uppercase tracking-wider opacity-60">
            Audio 02:14
          </p>
          <div className="rounded-full bg-cream/15 px-2 py-0.5 font-sans text-[8px] font-semibold">
            0.8×
          </div>
        </div>

        <div className="mb-2 flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-full bg-chartreuse">
            <div className="ml-0.5 h-0 w-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-anthracite" />
          </div>
          <div className="flex-1">
            <div className="h-1 w-full rounded-full bg-cream/20">
              <div
                className="h-full rounded-full bg-chartreuse"
                style={{ width: "42%" }}
              />
            </div>
            <div className="mt-1 flex justify-between font-sans text-[7px] opacity-60">
              <span>00:56</span>
              <span>02:14</span>
            </div>
          </div>
        </div>

        <div className="flex gap-1">
          {["0.8×", "1.0×", "1.2×"].map((s, i) => (
            <button
              key={s}
              className={`flex-1 rounded-md py-1 font-sans text-[8px] font-semibold ${
                i === 0
                  ? "bg-chartreuse text-anthracite"
                  : "bg-cream/10 text-cream/70"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-2 font-display text-[10px] font-semibold text-anthracite">
        Why did the patient visit the doctor?
      </p>

      <div className="space-y-1.5">
        <button className="w-full rounded-xl border border-sand-deep bg-cream px-3 py-2 text-left font-sans text-[9.5px] text-anthracite-soft">
          a) Päänsärky
        </button>
        <button className="w-full rounded-xl border-2 border-electric bg-electric-muted px-3 py-2 text-left font-sans text-[9.5px] font-semibold text-anthracite">
          b) Selkäkipu
        </button>
        <button className="w-full rounded-xl border border-sand-deep bg-cream px-3 py-2 text-left font-sans text-[9.5px] text-anthracite-soft">
          c) Yskä
        </button>
      </div>
    </div>
  );
}
