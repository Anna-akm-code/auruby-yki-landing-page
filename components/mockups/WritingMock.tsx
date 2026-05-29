export function WritingMock() {
  return (
    <div className="flex h-full flex-col px-4 py-3">
      <div className="flex items-center justify-between">
        <p className="font-sans text-[10px] uppercase tracking-wider text-anthracite-muted">
          7 · Work
        </p>
      </div>
      <p className="mt-0.5 font-sans text-[8.5px] italic text-anthracite-muted">
        Formal writing
      </p>

      <div className="mt-2 rounded-xl bg-sand-warm p-2.5">
        <p className="font-sans text-[8.5px] leading-relaxed text-anthracite-soft">
          Olet nähnyt työpaikkailmoituksen, joka kiinnostaa sinua. Kirjoita
          virallinen sähköposti, jossa kerrot kuka olet, miksi olet
          kiinnostunut työpaikasta ja miksi sinä olisit hyvä valinta. Kirjoita
          500–800 merkkiä.
        </p>
      </div>

      <button className="mt-1.5 self-start rounded-md border border-sand-deep bg-transparent px-2 py-[3px] font-sans text-[8px] text-anthracite-muted">
        Show sample
      </button>

      <div className="mt-1.5 rounded-xl border border-sand-deep bg-cream p-2">
        <p className="whitespace-pre-line font-sans text-[8px] leading-relaxed text-anthracite-soft">
          {`Hei,

Nimeni on Anna ja olen kiinnostunut teidän työpaikkailmoituksesta. Olen asunut Suomessa viisi vuotta ja minulla on kokemusta asiakaspalvelusta. Minun mielestä tämä työpaikka sopii minulle hyvin koska pidän ihmisten kanssa työskentelystä. Odotan vastaustanne.

Ystävällisin terveisin,
Anna`}
        </p>
      </div>
      <p className="mt-0.5 text-right font-sans text-[7px] text-anthracite-muted">
        387 / 800 merkkiä
      </p>

      <div className="mt-1.5 rounded-xl bg-chartreuse-glow p-2">
        <div className="mb-1 flex items-center justify-between">
          <p className="font-sans text-[7px] uppercase tracking-wider text-anthracite-muted">
            AI assessment
          </p>
          <span className="rounded-full bg-[#E8C84A] px-1.5 py-0.5 font-sans text-[7.5px] font-semibold text-anthracite">
            Weak pass
          </span>
        </div>
        <p className="font-sans text-[8px] leading-snug text-anthracite-soft">
          Understandable and covers the main points, but reads more like an
          informal message than a formal email. Use more polite structures
          (&quot;Olisin kiinnostunut&quot; instead of &quot;Olen
          kiinnostunut&quot;) and explain your qualifications in more detail.
          Also below the minimum length.
        </p>
      </div>

      <div className="mt-1.5 rounded-xl border border-sand-deep bg-cream p-2">
        <p className="mb-1 font-sans text-[7px] uppercase tracking-wider text-anthracite-muted">
          Grammar mistakes
        </p>
        <ul className="space-y-0.5 font-sans text-[8px] leading-snug text-anthracite-soft">
          <li>
            <span className="text-incorrect">&quot;Minun mielestä&quot;</span>{" "}
            → <span className="text-correct">Minun mielestäni</span>{" "}
            <span className="italic text-anthracite-muted">
              (possessive suffix)
            </span>
          </li>
          <li>
            Add comma:{" "}
            <span className="text-incorrect">&quot;hyvin koska&quot;</span> →{" "}
            <span className="text-correct">&quot;hyvin, koska&quot;</span>
          </li>
        </ul>
      </div>

      <div className="mt-1.5 rounded-xl border border-sand-deep bg-cream p-2">
        <p className="mb-1 font-sans text-[7px] uppercase tracking-wider text-anthracite-muted">
          Vocabulary mistakes
        </p>
        <ul className="space-y-0.5 font-sans text-[8px] leading-snug text-anthracite-soft">
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
          <li>
            Consider closing:{" "}
            <span className="text-correct">
              &quot;Otan mielelläni yhteyttä lisätietoja varten&quot;
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
