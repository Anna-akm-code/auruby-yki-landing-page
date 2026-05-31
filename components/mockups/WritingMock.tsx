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

      <div className="mt-1.5 flex gap-1.5">
        <button className="flex-1 rounded-md border border-sand-deep px-2 py-1 font-sans text-[10px] text-anthracite-muted">
          Show A2/B1 sample
        </button>
        <button className="flex-1 rounded-md border border-sand-deep px-2 py-1 font-sans text-[10px] text-anthracite-muted">
          Show B1/B2 sample
        </button>
      </div>

      <p className="mt-2 font-sans text-[10px] font-semibold uppercase tracking-wider text-anthracite-muted">
        Your text (errors in bold)
      </p>

      <div className="mt-1 flex-1 rounded-xl border border-sand-deep bg-cream p-2">
        <p className="font-sans text-[11.5px] leading-snug text-anthracite-soft">
          Hei, olen kiinnostunut{" "}
          <strong className="font-bold text-incorrect">
            teidän työpaikkailmoituksesta
          </strong>
          . Minulla on kokemusta asiakaspalvelusta.{" "}
          <strong className="font-bold text-incorrect">
            Minun mielestä
          </strong>{" "}
          tämä työpaikka sopii minulle{" "}
          <strong className="font-bold text-incorrect">hyvin koska</strong>{" "}
          pidän ihmisten kanssa työskentelystä. Ystävällisin terveisin, Anna
        </p>
      </div>

      <div className="mt-2 flex items-center justify-between rounded-xl bg-chartreuse-glow px-2 py-1.5">
        <p className="font-sans text-[10px] font-semibold uppercase tracking-wider text-anthracite-muted">
          AI grade
        </p>
        <span className="rounded-full bg-[#E8C84A] px-2 py-0.5 font-sans text-[11px] font-semibold text-anthracite">
          Weak pass
        </span>
      </div>
    </div>
  );
}
