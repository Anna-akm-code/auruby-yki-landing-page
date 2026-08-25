type Row = { label: string; value: string } | { text: string };

export function HeroFormatPanel({
  label,
  rows,
  priceLabel,
  priceValue,
  priceUnit,
  note,
}: {
  label: string;
  rows: Row[];
  priceLabel: string;
  priceValue: string;
  priceUnit: string;
  note: string;
}) {
  return (
    <div className="pt-2">
      <div className="rounded-[20px] border border-white/[0.16] bg-white/[0.07] px-[30px] pb-[26px] pt-[30px]">
        <div className="mb-[22px] font-mono text-[11px] uppercase tracking-[0.16em] text-english-chartreuse">
          {label}
        </div>
        <div className="grid">
          {rows.map((row, i) =>
            "text" in row ? (
              <div
                key={i}
                className="border-b border-white/[0.13] py-[13px] font-heading text-[17px] font-medium"
              >
                {row.text}
              </div>
            ) : (
              <div
                key={i}
                className="flex items-baseline justify-between border-b border-white/[0.13] py-[13px]"
              >
                <span className="font-body text-[14.5px] text-white/70">
                  {row.label}
                </span>
                <span className="font-heading text-[17px] font-medium">
                  {row.value}
                </span>
              </div>
            ),
          )}
          <div className="flex items-baseline justify-between pb-1 pt-4">
            <span className="font-body text-[14.5px] text-white/70">
              {priceLabel}
            </span>
            <span className="font-heading text-[30px] font-semibold tracking-[-0.02em] text-english-chartreuse">
              {priceValue}
              <span className="font-body text-[15px] font-normal text-white/60">
                {priceUnit}
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-[18px] flex items-center gap-[14px] rounded-2xl bg-[rgba(214,245,73,0.1)] px-[18px] py-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/[0.16] font-heading text-[15px] font-semibold text-english-lilac">
          AR
        </div>
        <p className="font-body text-[13.5px] leading-[1.45] text-white/85">
          {note}
        </p>
      </div>
    </div>
  );
}
