import { FadeIn } from "@/components/FadeIn";

export function Trust() {
  return (
    <FadeIn as="section" id="trust" className="px-6 py-20 sm:py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center sm:flex-row sm:text-left">
        <div
          aria-label="Photo placeholder — Anna"
          className="grid h-32 w-32 shrink-0 place-items-center rounded-full border-2 border-dashed border-sand-deep bg-sand-warm font-sans text-[10px] font-medium uppercase tracking-wider text-anthracite-muted"
        >
          Photo
          <br />
          placeholder
          <br />— Anna
        </div>

        <div className="space-y-3">
          <p className="font-display text-xl font-semibold leading-snug text-anthracite sm:text-2xl">
            Designed by a CELTA-certified language teacher with 8 years of
            experience.
          </p>
          <p className="font-display text-xl font-semibold leading-snug text-anthracite sm:text-2xl">
            Content tested and reviewed by experienced Finnish language
            teachers.
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
