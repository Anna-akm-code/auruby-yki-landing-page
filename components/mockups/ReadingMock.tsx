export function ReadingMock() {
  return (
    <div className="flex h-full flex-col px-4 py-3">
      <div className="mb-2 flex items-center justify-between">
        <p className="font-sans text-[8px] uppercase tracking-wider text-anthracite-muted">
          Housing · Text 2 of 7
        </p>
        <p className="font-sans text-[8px] font-semibold text-anthracite-soft">
          B1
        </p>
      </div>

      <div className="mb-3 rounded-xl bg-sand-warm p-2.5">
        <p className="mb-1 font-display text-[11px] font-semibold text-anthracite">
          Kerrostalon säännöt
        </p>
        <p className="font-sans text-[9.5px] leading-relaxed text-anthracite-soft">
          Hiljaisuus alkaa kello 22 ja jatkuu aamulla kello 7 asti. Tänä aikana
          ei saa kuunnella kovaa musiikkia eikä pestä pyykkiä. Pyykinpesutilat
          ovat avoinna kello 7–21. Roskat viedään pihalla oleviin
          jäteastioihin.
        </p>
      </div>

      <div className="mb-2">
        <p className="font-display text-[10px] font-semibold text-anthracite">
          True or false?
        </p>
        <p className="mt-1 font-sans text-[10px] text-anthracite-soft">
          Pyykinpesu on sallittua kello 22 jälkeen.
        </p>
      </div>

      <div className="space-y-1.5">
        <button className="w-full rounded-xl border border-sand-deep bg-cream px-3 py-2 text-left font-sans text-[10px] font-medium text-anthracite-soft">
          True
        </button>
        <button className="w-full rounded-xl border-2 border-correct bg-correct-soft px-3 py-2 text-left font-sans text-[10px] font-semibold text-anthracite">
          False ✓
        </button>
      </div>

      <div className="mt-auto rounded-xl bg-chartreuse-glow p-2">
        <p className="font-sans text-[8px] uppercase tracking-wider text-anthracite-muted">
          Progress
        </p>
        <p className="mt-0.5 font-display text-[10px] font-semibold text-anthracite">
          5 of 6 correct · Strong area
        </p>
      </div>
    </div>
  );
}
