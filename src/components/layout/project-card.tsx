"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

type ProjectMeta = {
  label: string;
  id: string;
};

type ProjectCardProps = {
  slug: string;
  title: string;
  description?: string;
  image: string;
  meta: ProjectMeta[];
  cta1?: string;
  cta2?: string;
  liveLink: string;
  githubLink: string;
  index?: number;
};

export function ProjectCard({
  slug,
  title,
  description,
  image,
  meta,
  cta1,
  cta2,
  liveLink,
  githubLink,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.article
      id={slug}
      className="group relative w-full max-w-2xl scroll-mt-32"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      <div className="relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-foreground/20 hover:shadow-lg">
        <div className="relative aspect-video overflow-hidden bg-muted flex items-center justify-center">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-foreground mb-1">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-5">
            {meta.map((item) => (
              <span
                key={item.id}
                className="inline-flex items-center px-2.5 py-1 rounded-md border border-border bg-muted/50 text-xs text-muted-foreground"
              >
                {item.label}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-border">
            {cta1 && (
              <motion.a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {cta1}
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            )}
            {cta2 && (
              <motion.a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-background text-foreground text-sm font-medium hover:bg-muted transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-3.5 h-3.5" />
                {cta2}
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
