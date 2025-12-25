import React from "react";
import { ArrowUpRight } from "lucide-react";

type ProjectMeta = {
  icon: React.ReactNode;
  label: string;
  id: string;
};

type ProjectCardProps = {
  title: string;
  description?: string;
  image: string;
  meta: ProjectMeta[];
  cta1?: string;
  cta2?: string;
};

export function ProjectCard({
  title,
  description,
  image,
  meta,
  cta1,
  cta2,
}: ProjectCardProps) {
  return (
    <article className="group relative w-full max-w-2xl">
      {/* Card Container */}
      <div className="relative overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black transition-all duration-200 hover:border-neutral-300 dark:hover:border-neutral-700">
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-1">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {/* Meta Pills */}
          <div className="flex flex-wrap gap-2 mb-5">
            {meta.map((item) => (
              <div
                key={item.id}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-xs text-neutral-700 dark:text-neutral-300"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
            {cta1 && (
              <button className="group/btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-150">
                {cta1}
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>
            )}
            {cta2 && (
              <button className="group/btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-150">
                {cta2}
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
