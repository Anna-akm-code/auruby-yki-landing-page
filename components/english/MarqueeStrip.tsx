export function MarqueeStrip({ items }: { items: string[] }) {
  const track = (key: string) => (
    <div key={key} className="flex shrink-0 gap-11">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-11">
          <span>{item}</span>
          <span className="text-english-chartreuse">·</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden">
      <div className="flex w-max gap-11 font-mono text-[12.5px] uppercase tracking-[0.1em] text-white/40 [animation:marq_34s_linear_infinite]">
        {track("a")}
        {track("b")}
      </div>
    </div>
  );
}
