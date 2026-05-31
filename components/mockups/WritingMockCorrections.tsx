export function WritingMockCorrections() {
  return (
    <div className="flex h-full flex-col px-4 py-3">
      <p className="font-sans text-[10px] font-semibold uppercase tracking-wider text-anthracite-muted">
        Corrected version
      </p>

      <div className="mt-1 rounded-xl border border-sand-deep bg-cream p-2">
        <p className="font-sans text-[11.5px] leading-snug text-anthracite-soft">
          Hei, olen kiinnostunut{" "}
          <span className="font-semibold text-correct">
            ilmoittamastanne avoimesta tehtävästä
          </span>
          . Minulla on kokemusta asiakaspalvelusta.{" "}
          <span className="font-semibold text-correct">Mielestäni</span> tämä
          tehtävä sopii minulle{" "}
          <span className="font-semibold text-correct">hyvin, koska</span>{" "}
          pidän ihmisten kanssa työskentelystä. Ystävällisin terveisin, Anna
        </p>
      </div>

      <p className="mt-2 font-sans text-[10px] font-semibold uppercase tracking-wider text-anthracite-muted">
        Grammar mistakes
      </p>
      <ul className="mt-0.5 space-y-0.5 font-sans text-[10.5px] leading-snug text-anthracite-soft">
        <li>
          <span className="text-incorrect">Minun mielestä</span> →{" "}
          <span className="text-correct">Mielestäni</span>{" "}
          <span className="italic text-anthracite-muted">
            (possessive suffix replaces genitive pronoun)
          </span>
        </li>
        <li>
          <span className="text-incorrect">hyvin koska</span> →{" "}
          <span className="text-correct">hyvin, koska</span>{" "}
          <span className="italic text-anthracite-muted">
            (comma before koska in formal writing)
          </span>
        </li>
      </ul>

      <p className="mt-2 font-sans text-[10px] font-semibold uppercase tracking-wider text-anthracite-muted">
        Vocabulary mistakes
      </p>
      <ul className="mt-0.5 space-y-0.5 font-sans text-[10.5px] leading-snug text-anthracite-soft">
        <li>
          <span className="text-incorrect">teidän työpaikkailmoituksesta</span>{" "}
          → <span className="text-correct">ilmoittamastanne avoimesta tehtävästä</span>{" "}
          <span className="italic text-anthracite-muted">
            (informal → formal register)
          </span>
        </li>
      </ul>

      <p className="mt-2 font-sans text-[10px] font-semibold uppercase tracking-wider text-anthracite-muted">
        Improved version
      </p>
      <div className="mt-1 rounded-xl bg-chartreuse-glow p-2">
        <p className="font-sans text-[11px] leading-snug text-anthracite-soft">
          Hyvä vastaanottaja, olen kiinnostunut ilmoittamastanne avoimesta
          tehtävästä. Minulla on kokemusta asiakaspalvelusta ja pidän ihmisten
          kanssa työskentelystä. Olisin kiitollinen mahdollisuudesta
          keskustella tehtävästä tarkemmin. Ystävällisin terveisin, Anna
        </p>
      </div>
    </div>
  );
}
