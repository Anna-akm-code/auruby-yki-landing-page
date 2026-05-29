import { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
}

export function PhoneFrame({ children, className = "" }: PhoneFrameProps) {
  return (
    <div
      className={`relative mx-auto w-[280px] sm:w-[300px] ${className}`}
      aria-hidden="true"
    >
      <div className="relative rounded-[44px] bg-anthracite p-[10px] shadow-[0_30px_60px_-25px_rgba(45,45,45,0.35)]">
        <div className="relative overflow-hidden rounded-[36px] bg-cream">
          <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-anthracite" />
          <div className="relative aspect-[9/19.5] w-full">
            <div className="absolute inset-0 flex flex-col">
              <div className="h-8 shrink-0" />
              <div className="flex-1 overflow-hidden">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
