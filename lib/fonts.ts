import { Jost, Manrope, JetBrains_Mono } from "next/font/google";

// Fonts for the English lessons landing pages (/, /english/*).
// Kept out of the root layout so the YKI pages under /finnish don't pay for
// fonts they never render.
export const jost = Jost({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

export const manrope = Manrope({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const englishFontVariables = `${jost.variable} ${manrope.variable} ${jetbrainsMono.variable}`;
