import { Manrope } from "next/font/google";

/** Subset weights used on the public site (display semibold/black, UI medium/semibold). */
export const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
  preload: true,
});
