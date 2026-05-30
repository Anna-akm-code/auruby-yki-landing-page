import { ReactNode } from "react";

// Phone shrunk ~20%. Outer widths drop from 300/350 to 240/280; the
// reference content stays at 260 wide, and the transform scale falls to
// fit the smaller cream area — so everything inside the phone shrinks
// proportionally with the frame.
const REFERENCE_WIDTH = 260;
const REFERENCE_HEIGHT = (REFERENCE_WIDTH * 16) / 9;

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
}

export function PhoneFrame({ children, className = "" }: PhoneFrameProps) {
  return (
    <div
      className={`relative mx-auto w-[229px] sm:w-[268px] ${className}`}
      aria-hidden="true"
    >
      <div className="relative rounded-[44px] bg-anthracite p-[10px] shadow-[0_30px_60px_-25px_rgba(45,45,45,0.35)]">
        <div className="relative overflow-hidden rounded-[36px] bg-cream">
          <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-anthracite" />
          <div className="relative aspect-[9/16] w-full">
            <div
              className="absolute left-0 top-0 origin-top-left scale-[0.804] sm:scale-[0.954]"
              style={{
                width: `${REFERENCE_WIDTH}px`,
                height: `${REFERENCE_HEIGHT}px`,
              }}
            >
              <div className="flex h-full flex-col">
                <div className="h-8 shrink-0" />
                <div className="flex-1 overflow-hidden">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
