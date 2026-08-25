import { PromoBanner } from "@/components/PromoBanner";

export function Nav() {
  return (
    <div className="sticky top-0 z-30">
      <PromoBanner />
      <header className="border-b border-[#444] bg-anthracite">
        <div className="mx-auto flex max-w-6xl items-center gap-5 px-6 pt-2 pb-0.5">
          <a
            href="/finnish#hero"
            className="font-display text-[22px] font-bold leading-none text-[#C5E63C]"
          >
            Auruby
          </a>
          <a
            href="/finnish/faq"
            className="font-sans text-[15px] leading-none text-cream/70 transition hover:text-chartreuse"
          >
            FAQ
          </a>
          <a
            href="/finnish/about"
            className="font-sans text-[15px] leading-none text-cream/70 transition hover:text-chartreuse"
          >
            About
          </a>
          <a
            href="/finnish/blog"
            className="font-sans text-[15px] leading-none text-cream/70 transition hover:text-chartreuse"
          >
            Blog
          </a>
        </div>
      </header>
    </div>
  );
}
