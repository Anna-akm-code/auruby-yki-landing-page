export function Nav() {
  return (
    <header className="sticky top-0 z-30 bg-sand/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="font-display text-[22px] font-bold text-anthracite"
        >
          Auruby
        </a>
        <a
          href="#waitlist"
          className="rounded-full bg-anthracite px-4 py-2 font-sans text-xs font-semibold text-cream transition hover:bg-anthracite/90 sm:text-sm"
        >
          Join the waitlist
        </a>
      </div>
    </header>
  );
}
