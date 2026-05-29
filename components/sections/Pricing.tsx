import { FadeIn } from "@/components/FadeIn";

export function Pricing() {
  return (
    <FadeIn as="section" id="pricing" className="px-5 py-10 sm:py-14">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-[14px] bg-purple-light px-6 py-7 text-center sm:px-10 sm:py-9">
          <p
            className="font-sans text-[10px] font-semibold uppercase text-purple-deep"
            style={{ letterSpacing: "1.5px" }}
          >
            Waitlist exclusive
          </p>
          <h3 className="mt-3 font-display text-[20px] font-bold text-anthracite">
            Early-bird pricing
          </h3>

          <div className="mt-4 flex items-baseline justify-center gap-3">
            <span className="font-sans text-[18px] text-[#999] line-through">
              €17.99
            </span>
            <span className="font-sans text-[32px] font-bold leading-none text-purple-deep">
              €11.99
              <span className="font-sans text-[15px] font-normal">/mo</span>
            </span>
          </div>

          <p className="mt-3 font-sans text-[13px] text-purple">
            for your first 6 months · then €17.99/mo
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
