"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { ProjectShowcase } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { BackgroundEffects } from "@/components/ui/background-effects";

export default function HomePage() {
  return (
    // ⚠️ bg-background removed — it was painting solid white over all background layers.
    // BackgroundEffects handles the base color via its own fixed Layer 1 div.
    <div className="min-h-screen relative">
      <BackgroundEffects />
      <Sidebar />

      <main className="md:ml-72 min-h-screen relative">
        <div className="px-6 pt-16 pb-12 md:px-12 md:py-20 lg:py-24 max-w-5xl">
          <Hero />
          <div className="py-24 md:py-32">
            <ProjectShowcase />
          </div>
          <div className="py-24 md:py-32 border-t border-border/50">
            <About />
          </div>
          <div className="py-24 md:py-32 border-t border-border/50">
            <Contact />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
