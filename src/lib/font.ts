import { Inter, JetBrains_Mono } from "next/font/google";

export const mono = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const sans = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
});
