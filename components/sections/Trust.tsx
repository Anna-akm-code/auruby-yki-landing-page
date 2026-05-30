import { FadeIn } from "@/components/FadeIn";

export function Trust() {
  return (
    <FadeIn as="section" id="trust" className="px-6 py-20 sm:py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center sm:flex-row sm:text-left">
        <div className="shrink-0 rounded-full border-[3px] border-[#C5E63C] p-[4px]">
          <div className="rounded-full border-[3px] border-[#9B7FD4] p-[4px]">
            <img
              src="/anna.jpg"
              alt="Anna — Auruby's language teacher"
              className="h-32 w-32 rounded-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-display text-base font-semibold leading-snug text-anthracite sm:text-lg">
            Designed by a CELTA-certified language teacher with 8 years of
            experience.
          </p>
          <p className="font-display text-base font-semibold leading-snug text-anthracite sm:text-lg">
            Content tested and reviewed by experienced Finnish language
            teachers.
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
