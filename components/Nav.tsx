import { PromoBanner } from "@/components/PromoBanner";

export function Nav() {
  return (
    <div className="sticky top-0 z-30">
      <PromoBanner />
      <header className="bg-sand/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a
            href="#hero"
            className="font-display text-[40px] font-bold leading-none text-anthracite"
          >
            Auruby
          </a>
          <a
            href="#waitlist"
            className="rounded-3xl bg-purple px-8 py-3.5 font-sans text-[20px] font-semibold text-white transition hover:bg-purple/90"
          >
            Join the waitlist
          </a>
        </div>
      </header>
    </div>
  );
}
