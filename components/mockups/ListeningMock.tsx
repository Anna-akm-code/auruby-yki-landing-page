interface Question {
  stem: string;
  options: string[];
  selected: number | null;
}

const questions: Question[] = [
  {
    stem: "Miksi potilas tuli lääkäriin?",
    options: ["Päänsärky", "Selkäkipu", "Yskä"],
    selected: 1,
  },
  {
    stem: "Kuinka kauan oireet ovat kestäneet?",
    options: ["Kaksi päivää", "Viikon", "Kuukauden"],
    selected: 1,
  },
  {
    stem: "Mitä lääkäri suositteli?",
    options: ["Leikkausta", "Lepoa ja särkylääkettä", "Lisätutkimuksia"],
    selected: null,
  },
];

const LETTERS = ["a", "b", "c"];

export function ListeningMock() {
  return (
    <div className="flex h-full flex-col px-4 py-3">
      <div className="mb-2 flex items-center justify-between">
        <p className="font-sans text-[14px] uppercase tracking-wider text-anthracite-muted">
          6 · Health and wellbeing
        </p>
        <p className="font-sans text-[11.5px] font-semibold text-anthracite-soft">
          B1
        </p>
      </div>

      <div className="mb-2 rounded-xl bg-anthracite p-2 text-cream">
        <div className="mb-1.5 flex items-center justify-between">
          <p className="font-sans text-[11.5px] uppercase tracking-wider opacity-60">
            Audio 02:14
          </p>
          <div className="rounded-full bg-cream/15 px-2 py-0.5 font-sans text-[11.5px] font-semibold">
            0.8×
          </div>
        </div>

        <div className="mb-1.5 flex items-center gap-2">
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
            <div className="mt-0.5 flex justify-between font-sans text-[10.5px] opacity-60">
              <span>00:56</span>
              <span>02:14</span>
            </div>
          </div>
        </div>

        <div className="flex gap-1">
          {["0.8×", "1.0×", "1.2×"].map((s, i) => (
            <button
              key={s}
              className={`flex-1 rounded-md py-0.5 font-sans text-[11.5px] font-semibold ${
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

      <div className="space-y-1.5">
        {questions.map((q, qi) => (
          <div key={qi}>
            <p className="mb-0.5 font-display text-[13.5px] font-semibold text-anthracite">
              {qi + 1}. {q.stem}
            </p>
            <div className="space-y-0.5">
              {q.options.map((opt, oi) => {
                const isSelected = q.selected === oi;
                return (
                  <button
                    key={oi}
                    className={`w-full rounded-md px-2 py-0.5 text-left font-sans text-[12.5px] ${
                      isSelected
                        ? "border-2 border-electric bg-electric-muted font-semibold text-anthracite"
                        : "border border-sand-deep bg-cream text-anthracite-muted"
                    }`}
                  >
                    {LETTERS[oi]}) {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
