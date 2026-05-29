type Segment = "pass" | "weak" | "empty";

const segmentClass: Record<Segment, string> = {
  pass: "bg-correct",
  weak: "bg-[#E8C547]",
  empty: "bg-sand-deep",
};

interface SkillRow {
  name: string;
  segments: Segment[];
}

const skills: SkillRow[] = [
  {
    name: "Vocabulary",
    segments: ["pass", "pass", "pass", "weak", "empty", "empty"],
  },
  {
    name: "Reading",
    segments: ["pass", "weak", "pass", "empty", "empty", "empty", "empty"],
  },
  {
    name: "Listening",
    segments: ["pass", "empty", "empty", "empty", "empty"],
  },
  {
    name: "Writing",
    segments: ["pass", "pass", "weak", "empty", "empty", "empty"],
  },
  {
    name: "Speaking",
    segments: ["empty", "empty", "empty", "empty", "empty"],
  },
];

export function ProgressMock() {
  return (
    <div className="flex h-full flex-col px-4 py-3">
      <div className="mb-3">
        <p className="font-sans text-[8px] uppercase tracking-wider text-anthracite-muted">
          Readiness
        </p>
        <h2 className="font-display text-[14px] font-semibold text-anthracite">
          Your YKI status
        </h2>
      </div>

      <div className="mb-4 space-y-2">
        {skills.map((skill) => (
          <div key={skill.name}>
            <p className="mb-1 font-sans text-[9.5px] font-medium text-anthracite-soft">
              {skill.name}
            </p>
            <div className="flex gap-1">
              {skill.segments.map((seg, i) => (
                <div
                  key={i}
                  className={`h-2.5 flex-1 rounded-sm ${segmentClass[seg]}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-2 flex items-center gap-3 font-sans text-[7.5px] text-anthracite-muted">
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-sm bg-correct" /> Pass
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-sm bg-[#E8C547]" /> Weak pass
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-sm bg-sand-deep" /> To do
        </span>
      </div>

      <div className="mt-auto rounded-xl bg-sand-warm p-2.5">
        <p className="mb-1 font-sans text-[7.5px] uppercase tracking-wider text-anthracite-muted">
          To fix
        </p>
        <ul className="space-y-0.5 font-sans text-[8.5px] text-anthracite-soft">
          <li>
            <span className="text-incorrect">minun nimi</span> →{" "}
            <span className="text-correct">nimeni on</span>
          </li>
          <li>partitive after ei</li>
          <li>
            <span className="text-incorrect">teidän talossa</span> →{" "}
            <span className="text-correct">talossanne</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
