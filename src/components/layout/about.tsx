import { ArrowUpRight } from "lucide-react";

export function AboutSection() {
  return (
    <section className="relative border-t border-neutral-200 dark:border-neutral-800 bg-stone-100 dark:bg-neutral-950">
      <div className="relative max-w-6xl mx-auto px-8 py-20">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 mb-4">
            ABOUT
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-6">
            Building products that matter
          </h2>

          <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              odit, quas accusantium ut aliquid nam quisquam quasi culpa optio,
              eaque neque reprehenderit dolores inventore quo? Voluptate,
              incidunt! Recusandae, nesciunt reiciendis.
            </p>
            <p>
              Currently working at{" "}
              <span className="text-neutral-900 dark:text-neutral-100 font-medium">
                @Alcanivorax
              </span>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              aliquam.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              accusamus doloremque harum. Illum architecto eaque, nulla
              asperiores dolorem harum dignissimos.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-white dark:hover:bg-black transition-colors duration-150"
            >
              <span>Download Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#"
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
