import type { Metadata } from "next";
import { englishFontVariables } from "@/lib/fonts";
import { StickyHeader } from "@/components/english/StickyHeader";
import { SiteFooter } from "@/components/english/SiteFooter";

export const metadata: Metadata = {
  title: "Английский с Анной",
  description:
    "Английский, на котором думают, спорят и договариваются. THE CLUB — сообщество для людей 13–17 лет. THE PLAN — индивидуальный английский с планом.",
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${englishFontVariables} bg-english-bg font-body text-english-aubergine`}
    >
      <StickyHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
