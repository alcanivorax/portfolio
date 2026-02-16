import { ArrowUpRight } from "lucide-react";

export function AboutSection() {
  return (
    <section className="relative border-t border-neutral-200 dark:border-neutral-800 bg-stone-100 dark:bg-black">
      <div className="relative max-w-6xl mx-auto px-8 py-70">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 mb-4">
            ABOUT
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-6">
            Building products that matter
          </h2>

          <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
            <p>
              I’m Roshan Singh — a full-stack developer focused on building
              scalable web applications and developer tools.
            </p>
            <p>
              I work primarily with{" "}
              <span className="text-neutral-900 dark:text-neutral-100 font-medium">
                TypeScript, Next.js, backend APIs, and databases
              </span>
              , and I care about clean architecture, separation of concerns, and
              writing code that’s easy to understand and maintain. I don’t just
              make things work — I understand why they work.
            </p>
            <p>
              Currently, I’m building{" "}
              <span className="text-neutral-900 dark:text-neutral-100 font-medium">
                DevInsight
              </span>
              , an AI-powered GitHub repository analyzer that helps developers
              understand large codebases through summaries, architecture
              visualization, and intelligent explanations. I’m also developing a
              franchise of minimal CLI tools called Nero, designed to improve
              developer workflows with simplicity and precision.
            </p>
            <p>
              I actively strengthen my fundamentals through Data Structures &
              Algorithms and Low-Level Design, while reading open-source code to
              learn how real systems are structured in production.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              download="roshan-singh-resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-white dark:hover:bg-black transition-colors duration-150"
            >
              <span>Download Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:roshansingh6.022@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-900 dark:bg-neutral-100 text-sm font-medium text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-150"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
