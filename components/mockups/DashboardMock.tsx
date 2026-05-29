export function DashboardMock() {
  const skills = [
    { name: "Vocabulary", percent: 30, accent: "chartreuse" },
    { name: "Reading", percent: 43, accent: "neon-pink" },
    { name: "Listening", percent: 41, accent: "chartreuse" },
    { name: "Writing", percent: 33, accent: "neon-pink" },
    { name: "Speaking", percent: 20, accent: "chartreuse" },
  ] as const;

  return (
    <div className="flex h-full flex-col px-4 py-3">
      <div className="mb-4">
        <p className="font-sans text-[9px] uppercase tracking-wider text-anthracite-muted">
          Hi Anna
        </p>
        <h2 className="font-display text-[16px] font-semibold leading-tight text-anthracite">
          Keep practising
        </h2>
      </div>

      <div className="flex-1 space-y-2 overflow-hidden">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="rounded-xl border border-sand-deep bg-cream px-3 py-2.5"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="font-display text-[12px] font-semibold text-anthracite">
                {skill.name}
              </p>
              <p className="shrink-0 font-sans text-[10px] font-semibold text-anthracite-soft">
                {skill.percent}%
              </p>
            </div>
            <div className="mt-2 h-1 w-full rounded-full bg-sand-deep">
              <div
                className={`h-full rounded-full ${
                  skill.accent === "chartreuse" ? "bg-chartreuse" : "bg-neon-pink"
                }`}
                style={{ width: `${skill.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
