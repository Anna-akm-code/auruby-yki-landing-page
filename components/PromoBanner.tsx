export function PromoBanner() {
  return (
    <div className="bg-purple px-4 py-2.5 text-cream sm:py-3">
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-sans text-[24px] leading-tight text-white/80">
          Auruby app launch: summer 2026
        </p>
        <p className="mt-1 font-sans text-[22px] font-medium leading-tight text-white">
          Lock in the early-bird price{" "}
          <span className="text-white/60 line-through">€17.99</span>{" "}
          → €11.99/mo by joining the waitlist
        </p>
      </div>
    </div>
  );
}
