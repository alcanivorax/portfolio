import { AboutSection } from "@/components/layout/about";
import { Project } from "@/components/layout/project";
import { Footer } from "@/components/layout/footer";

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-stone-100 dark:bg-black">
      <Project />

      <AboutSection />

      <Footer />
    </div>
  );
}
