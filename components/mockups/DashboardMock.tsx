const LIME = "#C5E63C";

const skills = [
  { name: "Vocabulary", percent: 45 },
  { name: "Reading", percent: 50 },
  { name: "Listening", percent: 42 },
  { name: "Writing", percent: 33 },
  { name: "Speaking", percent: 18 },
];

export function DashboardMock() {
  return (
    <div className="flex h-full flex-col px-4 py-3">
      <p className="font-display text-[18px] font-medium text-anthracite">
        Hi Anna
      </p>

      <p
        className="mt-3 mb-2 font-sans text-[8px] font-semibold uppercase text-anthracite-muted"
        style={{ letterSpacing: "1.2px" }}
      >
        Your YKI progress
      </p>

      <div className="space-y-2">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-baseline justify-between">
              <p className="font-sans text-[11px] font-medium text-anthracite">
                {skill.name}
              </p>
              <p className="font-sans text-[10px] font-medium text-anthracite-soft">
                {skill.percent}%
              </p>
            </div>
            <div className="mt-1 h-[4px] w-full overflow-hidden rounded-full bg-sand-deep">
              <div
                className="h-full rounded-full"
                style={{ width: `${skill.percent}%`, backgroundColor: LIME }}
              />
            </div>
          </div>
        ))}
      </div>

      <hr className="my-4 h-px border-0 bg-sand-deep" />

      <button
        className="w-full rounded-[12px] py-2.5 text-center font-sans text-[13px] font-medium text-[#1a1a1a]"
        style={{ backgroundColor: LIME }}
      >
        Go to practice!
      </button>
    </div>
  );
}
