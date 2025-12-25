import { ProjectCard } from "@/components/layout/project-card";
import { projects } from "@/lib/projects";
import Link from "next/link";

export function Project() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-stone-100 dark:bg-black ">
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="relative max-w-6xl mx-auto h-full px-8 ">
          {/* <div className="h-full grid grid-cols-12 gap-4">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="border-l border-neutral-100 dark:border-neutral-900 h-full"
              />
            ))}
          </div> */}
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-8 py-20">
        {/* Page Header */}
        <header className="mb-16 max-w-2xl mx-auto">
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 mb-3">
            SELECTED WORK
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
            Projects I've Built
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed">
            A collection of work spanning design systems, developer tools, and
            interactive experiences.
          </p>
        </header>

        {/* Projects Grid */}
        <div className="flex flex-col items-center gap-16">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

        <div className="mt-20 max-w-2xl mx-auto text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            More projects coming soon. Follow along on{" "}
            <Link
              href="https://github.com/alcanivorax"
              className="underline hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
