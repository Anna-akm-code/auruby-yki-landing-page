export function WritingMock() {
  return (
    <div className="flex h-full flex-col px-4 py-3">
      <div className="mb-2">
        <p className="font-sans text-[8px] uppercase tracking-wider text-anthracite-muted">
          Writing · Task 1
        </p>
      </div>

      <div className="mb-2 rounded-xl bg-sand-warm p-2.5">
        <p className="font-display text-[10px] font-semibold text-anthracite">
          Write an email
        </p>
        <p className="mt-0.5 font-sans text-[9px] leading-relaxed text-anthracite-soft">
          Your washing machine is broken. Write to your landlord and ask for
          help. 120–150 words.
        </p>
      </div>

      <div className="mb-2 rounded-xl border border-sand-deep bg-cream p-2.5">
        <p className="font-sans text-[8.5px] leading-relaxed text-anthracite-soft">
          Hei,
          <br />
          <br />
          Minun nimi on Anna ja asun teidän talossa. Pesukone ei toimi enää.
          Eilen yritin pestä pyykkiä mutta vesi ei tullut.
        </p>
        <p className="mt-1 font-sans text-[7px] text-anthracite-muted">
          47 / 150 words
        </p>
      </div>

      <div className="space-y-1.5">
        <div className="rounded-xl bg-chartreuse-glow p-2">
          <div className="mb-1 flex items-center justify-between">
            <p className="font-sans text-[7px] uppercase tracking-wider text-anthracite-muted">
              AI assessment
            </p>
            <span className="rounded-full bg-chartreuse px-1.5 py-0.5 font-sans text-[7.5px] font-semibold text-anthracite">
              Weak pass
            </span>
          </div>
          <p className="font-sans text-[8.5px] leading-snug text-anthracite-soft">
            Good structure, but several grammar and vocabulary issues need
            polishing for a clear pass.
          </p>
        </div>

        <div className="rounded-xl border border-sand-deep bg-cream p-2">
          <p className="mb-1 font-sans text-[7px] uppercase tracking-wider text-anthracite-muted">
            Added to your &quot;To fix&quot;
          </p>
          <ul className="space-y-0.5 font-sans text-[8.5px] text-anthracite-soft">
            <li>
              <span className="text-incorrect">Minun nimi</span> →{" "}
              <span className="text-correct">nimeni</span>
            </li>
            <li>
              <span className="text-incorrect">teidän talossa</span> →{" "}
              <span className="text-correct">talossanne</span>
            </li>
            <li>
              Try: <em className="text-anthracite">epäkunnossa</em>,{" "}
              <em className="text-anthracite">korjauttaa</em>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
