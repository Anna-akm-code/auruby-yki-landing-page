import type { ReactNode } from "react";

type Row = { label: string; value: string } | { text: string };

export function HeroFormatPanel({
  label,
  rows,
  priceLabel,
  priceValue,
  priceUnit,
  children,
  action,
}: {
  label: string;
  rows: Row[];
  priceLabel: string;
  priceValue: string;
  priceUnit: string;
  children?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className={children ? "min-w-0 pt-2" : "pt-2"}>
      <div className={`${children ? "flex h-full flex-col " : ""}rounded-[20px] border border-white/[0.16] bg-white/[0.07] px-[30px] pb-[26px] pt-[30px]`}>
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
                className="flex items-baseline justify-between gap-4 border-b border-white/[0.13] py-[13px]"
              >
                <span className="shrink-0 font-body text-[14.5px] text-white/70">
                  {row.label}
                </span>
                <span className="min-w-0 text-right font-heading text-[17px] font-medium">
                  {row.value}
                </span>
              </div>
            ),
          )}
        </div>
        {children}
        <div className={`${children ? "mt-auto " : ""}flex flex-wrap items-baseline justify-between gap-x-3 pb-1 pt-4`}>
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
        {action}
      </div>
    </div>
  );
}
