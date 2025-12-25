import type { Metadata } from "next";
import "@/styles/globals.css";
import { sans, mono } from "@/lib/font";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/navbar";
import { SearchCommand } from "@/components/search-command";

export const metadata: Metadata = {
  title: "Roshan Singh | Full-Stack Developer",
  description:
    "Full-stack developer building modern web apps and AI-powered developer tools. Interested in open-source and system design.",
  keywords: [
    "Roshan Singh",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "Open Source",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${mono.variable} antialiased bg-stone-100 dark:bg-black transition-colors`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {/* <SearchCommand ={portfolio} /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
