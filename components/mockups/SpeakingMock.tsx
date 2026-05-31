interface Turn {
  speaker: "ai" | "user";
  heights: number[];
  timestamp: string;
}

const turns: Turn[] = [
  {
    speaker: "ai",
    heights: [8, 12, 16, 14, 10, 8, 14, 12, 8, 6],
    timestamp: "0:04",
  },
  {
    speaker: "user",
    heights: [
      6, 10, 14, 18, 20, 16, 12, 14, 18, 20, 16, 12, 8, 14, 18, 16, 12, 8, 10,
      14,
    ],
    timestamp: "0:12",
  },
  {
    speaker: "ai",
    heights: [10, 14, 16, 12, 10, 8],
    timestamp: "0:16",
  },
  {
    speaker: "user",
    heights: [8, 12, 16, 18, 14, 10, 12, 16, 14, 18, 16, 12, 10, 14],
    timestamp: "0:24",
  },
];

function Waveform({
  heights,
  barClass,
}: {
  heights: number[];
  barClass: string;
}) {
  return (
    <div className="flex flex-1 items-center gap-[2px] overflow-hidden">
      {heights.map((h, i) => (
        <div
          key={i}
          className={`w-[2.5px] shrink-0 rounded-full ${barClass}`}
          style={{ height: `${h}px` }}
        />
      ))}
    </div>
  );
}

export function SpeakingMock() {
  return (
    <div className="flex h-full flex-col px-4 py-3">
      <p className="font-sans text-[15px] font-medium uppercase tracking-wider text-anthracite-muted">
        1 · About me
      </p>

      <div className="mt-2 rounded-xl bg-[#F5F0E6] p-2">
        <p
          className="font-sans text-[11px] font-semibold uppercase text-anthracite-muted"
          style={{ letterSpacing: "1px" }}
        >
          Tilanne / Situation
        </p>
        <p className="mt-0.5 font-sans text-[12px] leading-snug text-anthracite-soft">
          Olet työhaastattelussa. Kerro itsestäsi: mistä olet kotoisin, mitä
          olet opiskellut ja miksi haet tätä työpaikkaa.
        </p>
      </div>

      <div className="mt-1.5 flex gap-1">
        {["0.8×", "1.0×", "1.2×"].map((s, i) => (
          <button
            key={s}
            className={`flex-1 rounded-md py-0.5 font-sans text-[11.5px] font-semibold ${
              i === 0
                ? "bg-[#C5E63C] text-anthracite"
                : "bg-sand-warm text-anthracite-muted"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="mt-2 space-y-1">
        {turns.map((t, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className={`w-[20px] shrink-0 font-sans text-[9px] font-semibold ${
                t.speaker === "ai"
                  ? "text-anthracite-muted"
                  : "text-anthracite"
              }`}
            >
              {t.speaker === "ai" ? "AI" : "You"}
            </span>
            <span
              className={`h-2 w-2 shrink-0 rounded-full ${
                t.speaker === "ai" ? "bg-[#bbb]" : "bg-[#2D2D2D]"
              }`}
            />
            <Waveform
              heights={t.heights}
              barClass={t.speaker === "ai" ? "bg-[#ccc]" : "bg-[#2D2D2D]"}
            />
            <span className="shrink-0 font-sans text-[11.5px] tabular-nums text-anthracite-muted">
              {t.timestamp}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-2 rounded-xl bg-[#EDF5E0] p-2">
        <div className="mb-1 flex items-center justify-between">
          <p
            className="font-sans text-[11px] font-semibold uppercase text-anthracite-muted"
            style={{ letterSpacing: "1px" }}
          >
            YKI score
          </p>
          <span className="rounded-full bg-[#C5E63C] px-1.5 py-0.5 font-sans text-[11px] font-semibold text-anthracite">
            Pass
          </span>
        </div>
        <p className="font-sans text-[10px] font-semibold uppercase text-anthracite-muted">
          Good use of:
        </p>
        <ul className="mt-0.5 space-y-0 font-sans text-[10.5px] leading-snug text-anthracite-soft">
          <li>· Partitive with tykätä (pidän työskentelystä)</li>
          <li>· Past tense narration (opiskelin, asuin)</li>
          <li>· Polite register (Ystävällisin terveisin)</li>
        </ul>
        <p className="mt-1.5 font-sans text-[10px] font-semibold uppercase text-anthracite-muted">
          To reach a strong pass:
        </p>
        <ul className="mt-0.5 space-y-0 font-sans text-[10.5px] leading-snug text-anthracite-soft">
          <li>· Try conditional (haluaisin instead of haluan)</li>
          <li>· Use more connectors (lisäksi, toisaalta)</li>
          <li>· Expand answers — one more detail per turn</li>
        </ul>
      </div>

      <div className="mt-1.5 flex justify-center">
        <button className="rounded-[8px] bg-[#f0f0f0] px-3 py-1 font-sans text-[12.5px] font-medium text-[#555]">
          Show conversation
        </button>
      </div>

      <div className="mt-auto flex items-center justify-center pt-1">
        <div
          aria-label="Record"
          className="grid h-12 w-12 place-items-center rounded-full bg-[#C5E63C]"
        >
          <div className="h-[18px] w-[18px] rounded-full bg-[#1a1a1a]" />
        </div>
      </div>
    </div>
  );
}
