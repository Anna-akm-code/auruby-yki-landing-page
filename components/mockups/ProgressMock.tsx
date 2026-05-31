type Segment = "pass" | "weak" | "fail" | "todo";

const segColor: Record<Segment, string> = {
  pass: "bg-[#5B9A6B]",
  weak: "bg-[#E8C84A]",
  fail: "bg-[#D4735A]",
  todo: "bg-[#DDD8CC]",
};

interface SubRow {
  name: string;
  segments: Segment[];
}

interface SkillRow {
  name: string;
  segments: Segment[];
  expanded?: boolean;
  subRows?: SubRow[];
}

const skills: SkillRow[] = [
  {
    name: "Vocabulary",
    segments: [
      "pass", "pass", "pass", "pass", "weak",
      "todo", "todo", "todo", "todo",
    ],
  },
  {
    name: "Reading",
    segments: [
      "pass", "pass", "weak",
      "todo", "todo", "todo", "todo", "todo", "todo",
    ],
    expanded: true,
    subRows: [
      {
        name: "True / false",
        segments: [
          "pass", "pass", "pass",
          "todo", "todo", "todo", "todo", "todo", "todo",
        ],
      },
      {
        name: "Multiple choice",
        segments: [
          "pass", "weak",
          "todo", "todo", "todo", "todo", "todo", "todo", "todo",
        ],
      },
      {
        name: "Open-ended",
        segments: Array(9).fill("todo") as Segment[],
      },
    ],
  },
  {
    name: "Listening",
    segments: [
      "pass", "fail",
      "todo", "todo", "todo", "todo", "todo", "todo", "todo",
    ],
  },
  {
    name: "Writing",
    segments: [
      "pass", "pass", "weak",
      "todo", "todo", "todo", "todo", "todo", "todo",
    ],
  },
  {
    name: "Speaking",
    segments: Array(9).fill("todo") as Segment[],
  },
];

export function ProgressMock() {
  return (
    <div className="flex h-full flex-col px-4 py-3">
      <p
        className="font-sans text-[12px] font-semibold uppercase text-[#999]"
        style={{ letterSpacing: "1.2px" }}
      >
        Readiness
      </p>
      <h2 className="mt-0.5 font-display text-[19px] font-medium text-anthracite">
        Your YKI status
      </h2>
      <p className="mt-1 font-sans text-[10px] leading-snug text-anthracite-muted">
        Each block = one YKI topic. Tap any skill to see your results by task
        type.
      </p>

      <p className="mt-2 font-sans text-[10px] text-anthracite-muted">
        5 skills · 9 topics each · 3–4 tasks per topic
      </p>

      <div className="mt-1.5 space-y-1">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center gap-2">
              <p className="w-[64px] shrink-0 font-sans text-[13px] font-medium text-anthracite-soft">
                {skill.name}
              </p>
              <div className="flex flex-1 gap-[3px]">
                {skill.segments.map((seg, i) => (
                  <div
                    key={i}
                    className={`h-[10px] flex-1 rounded-[2px] ${segColor[seg]}`}
                  />
                ))}
              </div>
              <span className="w-[8px] shrink-0 text-center font-sans text-[10.5px] text-anthracite-muted">
                {skill.expanded ? "▼" : "▶"}
              </span>
            </div>

            {skill.expanded && skill.subRows && (
              <div className="mt-0.5 ml-3 space-y-0.5 border-l border-sand-deep pl-2">
                {skill.subRows.map((sub) => (
                  <div
                    key={sub.name}
                    className="flex items-center gap-2"
                  >
                    <p className="w-[76px] shrink-0 font-sans text-[11px] text-anthracite-muted">
                      {sub.name}
                    </p>
                    <div className="flex flex-1 gap-[2px]">
                      {sub.segments.map((seg, i) => (
                        <div
                          key={i}
                          className={`h-[7px] flex-1 rounded-[2px] ${segColor[seg]}`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-0.5 font-sans text-[11.5px] text-anthracite-muted">
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-[2px] bg-[#5B9A6B]" /> Pass
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-[2px] bg-[#E8C84A]" /> Weak pass
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-[2px] bg-[#D4735A]" /> Fail
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-[2px] bg-[#DDD8CC]" /> To do
        </span>
      </div>
      <p className="mt-1 font-sans text-[10px] italic text-anthracite-muted">
        A topic turns green when all tasks in it are passed
      </p>

      <hr className="my-2.5 h-px border-0 bg-sand-deep" />

      <div className="rounded-xl bg-[#F5F0E6] p-2">
        <p
          className="font-sans text-[11px] font-semibold uppercase text-anthracite-muted"
          style={{ letterSpacing: "1px" }}
        >
          Grammar mistakes
        </p>
        <ul className="mt-0.5 space-y-0.5 font-sans text-[11.5px] leading-snug text-anthracite-soft">
          <li>
            <span className="text-incorrect">minun nimi</span> →{" "}
            <span className="text-correct">nimeni on</span>{" "}
            <span className="italic text-anthracite-muted">
              (possessive suffix)
            </span>
          </li>
          <li>
            <span className="text-incorrect">teidän talossa</span> →{" "}
            <span className="text-correct">talossanne</span>{" "}
            <span className="italic text-anthracite-muted">
              (possessive suffix)
            </span>
          </li>
        </ul>

        <p
          className="mt-2 font-sans text-[11px] font-semibold uppercase text-anthracite-muted"
          style={{ letterSpacing: "1px" }}
        >
          Vocabulary mistakes
        </p>
        <ul className="mt-0.5 space-y-0.5 font-sans text-[11.5px] leading-snug text-anthracite-soft">
          <li>
            <span className="text-incorrect">ilmoittaa</span> →{" "}
            <span className="text-correct">ilmoittautua</span>{" "}
            <span className="italic text-anthracite-muted">
              (to announce vs to register)
            </span>
          </li>
          <li>
            <span className="text-incorrect">
              teidän työpaikkailmoituksesta
            </span>{" "}
            →{" "}
            <span className="text-correct">avoimesta tehtävästä</span>{" "}
            <span className="italic text-anthracite-muted">
              (informal → formal)
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
