interface QA {
  text: string;
  answer: "totta" | "epatotta" | null;
}

const questions: QA[] = [
  {
    text: "Pyykinpesu on sallittua kello 22 jälkeen.",
    answer: "epatotta",
  },
  {
    text: "Roskat viedään jäteastioihin pihalla.",
    answer: "totta",
  },
  {
    text: "Koirat saavat olla rappukäytävässä.",
    answer: null,
  },
  {
    text: "Hiljaisuus alkaa kello 21.",
    answer: null,
  },
];

function Choice({
  label,
  selected,
}: {
  label: string;
  selected: boolean;
}) {
  return (
    <button
      className={`rounded-md py-[3px] text-center font-sans text-[12px] ${
        selected
          ? "border-2 border-correct bg-correct-soft font-semibold text-anthracite"
          : "border border-sand-deep bg-cream text-anthracite-muted"
      }`}
    >
      {label}
      {selected ? " ✓" : ""}
    </button>
  );
}

export function ReadingMock() {
  return (
    <div className="flex h-full flex-col px-4 py-3">
      <div className="flex items-center justify-between">
        <p className="font-sans text-[14px] uppercase tracking-wider text-anthracite-muted">
          Home and housing
        </p>
        <p className="font-sans text-[11.5px] font-semibold text-anthracite-soft">
          B1
        </p>
      </div>
      <p className="mt-0.5 font-sans text-[12px] italic text-anthracite-muted">
        Task type: True or false
      </p>

      <div className="mt-2 rounded-xl bg-sand-warm p-2.5">
        <p className="mb-1 font-display text-[15px] font-semibold text-anthracite">
          Kerrostalon säännöt
        </p>
        <p className="font-sans text-[12.5px] leading-snug text-anthracite-soft">
          Hiljaisuus alkaa kello 22 ja jatkuu aamulla kello 7 asti. Tänä aikana
          ei saa kuunnella kovaa musiikkia eikä pestä pyykkiä. Pyykinpesutilat
          ovat avoinna kello 7–21. Roskat viedään pihalla oleviin
          jäteastioihin.
        </p>
      </div>

      <p className="mt-2 font-display text-[13px] font-semibold text-anthracite">
        Oikein vai väärin?
      </p>

      <div className="mt-1 space-y-1">
        {questions.map((q, i) => (
          <div key={i}>
            <p className="font-sans text-[12.5px] leading-snug text-anthracite-soft">
              {i + 1}. {q.text}
            </p>
            <div className="mt-0.5 grid grid-cols-2 gap-1">
              <Choice label="Oikein" selected={q.answer === "totta"} />
              <Choice label="Väärin" selected={q.answer === "epatotta"} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
