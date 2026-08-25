export function StepCard({
  number,
  title,
  description,
  dark = false,
}: {
  number: string;
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-[18px] p-[26px] pt-7 pb-[30px] ${
        dark
          ? "bg-english-aubergine text-white"
          : "border border-english-aubergine/[0.12] bg-white transition hover:border-english-aubergine"
      }`}
    >
      <div
        className={`mb-[22px] flex h-[34px] w-[34px] items-center justify-center rounded-full font-heading text-[15px] font-semibold ${
          dark
            ? "bg-english-chartreuse text-english-aubergine"
            : "bg-english-aubergine text-english-chartreuse"
        }`}
      >
        {number}
      </div>
      <h4 className="mb-2.5 font-heading text-[22px] tracking-[-0.02em]">
        {title}
      </h4>
      <p
        className={`font-body text-[15px] leading-[1.55] ${dark ? "text-white/75" : "text-english-muted"}`}
      >
        {description}
      </p>
    </div>
  );
}
