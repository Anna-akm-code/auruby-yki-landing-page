export function WritingMock() {
  return (
    <div className="flex h-full flex-col px-4 py-3">
      <div className="flex items-center justify-between">
        <p className="font-sans text-[14px] uppercase tracking-wider text-anthracite-muted">
          7 · Work
        </p>
      </div>
      <p className="mt-0.5 font-sans text-[12px] italic text-anthracite-muted">
        Formal writing
      </p>

      <div className="mt-1.5 rounded-xl bg-sand-warm p-2">
        <p className="font-sans text-[12px] leading-snug text-anthracite-soft">
          Olet nähnyt työpaikkailmoituksen, joka kiinnostaa sinua. Kirjoita
          virallinen sähköposti, jossa kerrot kuka olet ja miksi olet
          kiinnostunut työpaikasta.
        </p>
      </div>

      <button className="mt-1.5 self-start rounded-md border border-sand-deep px-2.5 py-1 font-sans text-[11px] text-anthracite-muted">
        Show sample
      </button>

      <div className="mt-1.5 rounded-xl border border-sand-deep bg-cream p-2">
        <p className="whitespace-pre-line font-sans text-[11.5px] leading-snug text-anthracite-soft">
          {`Hei,
Olen kiinnostunut teidän työpaikkailmoituksesta. Minulla on kokemusta asiakaspalvelusta.
Anna`}
        </p>
      </div>
      <p className="mt-0.5 text-right font-sans text-[11px] text-anthracite-muted">
        95 / 800 merkkiä
      </p>

      <div className="mt-1.5 rounded-xl bg-chartreuse-glow p-2">
        <div className="mb-1 flex items-center justify-between">
          <p className="font-sans text-[11px] uppercase tracking-wider text-anthracite-muted">
            AI assessment
          </p>
          <span className="rounded-full bg-[#E8C84A] px-1.5 py-0.5 font-sans text-[11px] font-semibold text-anthracite">
            Weak pass
          </span>
        </div>
        <p className="font-sans text-[12px] leading-snug text-anthracite-soft">
          Understandable, but reads informally. Use more polite structures and
          explain your qualifications in more detail.
        </p>
      </div>

      <div className="mt-1.5 rounded-xl border border-sand-deep bg-cream p-2">
        <p className="mb-0.5 font-sans text-[11px] uppercase tracking-wider text-anthracite-muted">
          Grammar mistakes
        </p>
        <ul className="space-y-0.5 font-sans text-[11.5px] leading-snug text-anthracite-soft">
          <li>
            <span className="text-incorrect">Olen kiinnostunut</span> →{" "}
            <span className="text-correct">Olisin kiinnostunut</span>{" "}
            <span className="italic text-anthracite-muted">
              (conditional, more polite)
            </span>
          </li>
          <li>
            Missing closing:{" "}
            <span className="text-correct">
              add &quot;Ystävällisin terveisin,&quot; before signature
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-1.5 rounded-xl border border-sand-deep bg-cream p-2">
        <p className="mb-0.5 font-sans text-[11px] uppercase tracking-wider text-anthracite-muted">
          Vocabulary mistakes
        </p>
        <ul className="space-y-0.5 font-sans text-[11.5px] leading-snug text-anthracite-soft">
          <li>
            <span className="text-incorrect">
              &quot;teidän työpaikkailmoituksesta&quot;
            </span>{" "}
            →{" "}
            <span className="text-correct">
              &quot;ilmoittamaanne avoimeen tehtävään&quot;
            </span>{" "}
            <span className="italic text-anthracite-muted">(more formal)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
