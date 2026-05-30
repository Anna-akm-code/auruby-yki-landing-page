const LIME = "#C5E63C";

export function PromoBanner() {
  return (
    <div className="bg-[#3D3B5C] px-4 py-1.5 text-cream">
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-sans text-[19px] leading-tight">
          <span style={{ color: "rgba(255,255,255,0.6)" }}>
            Auruby app launch:
          </span>{" "}
          <span style={{ color: LIME }}>summer 2026</span>
        </p>
        <p className="mt-0.5 font-sans text-[18px] font-medium leading-tight">
          <span style={{ color: "rgba(255,255,255,0.9)" }}>
            Lock in the early-bird price
          </span>{" "}
          <span className="line-through" style={{ opacity: 0.6 }}>
            €22.99
          </span>{" "}
          <span className="text-white">→</span>{" "}
          <span style={{ color: LIME, fontWeight: 700 }}>€11.99/mo</span>{" "}
          <span className="text-white">by joining the</span>{" "}
          <span style={{ color: LIME }}>waitlist</span>
        </p>
      </div>
    </div>
  );
}
