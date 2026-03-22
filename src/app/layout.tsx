import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/navbar";
import { SearchCommand } from "@/components/search-command";
import { projects } from "@/lib/projects";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <SearchCommand project={projects} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
