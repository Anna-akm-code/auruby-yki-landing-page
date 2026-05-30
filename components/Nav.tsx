import { PromoBanner } from "@/components/PromoBanner";

export function Nav() {
  return (
    <div className="sticky top-0 z-30">
      <PromoBanner />
      <header className="border-b border-[#444] bg-anthracite">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1">
          <a
            href="#hero"
            className="font-display text-[22px] font-bold leading-none text-[#C5E63C]"
          >
            Auruby
          </a>
          <a
            href="#waitlist"
            className="rounded-3xl bg-[#C5E63C] px-[20px] py-[7px] font-sans text-[15px] font-semibold text-[#1a1a1a] transition hover:bg-[#C5E63C]/90"
          >
            Join the waitlist
          </a>
        </div>
      </header>
    </div>
  );
}
