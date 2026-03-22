"use client";


import { AboutSection } from "@/components/layout/about";
import { Project } from "@/components/layout/project";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background">
      <Project />
      <AboutSection />
      <Footer />
    </div>
  );
}
