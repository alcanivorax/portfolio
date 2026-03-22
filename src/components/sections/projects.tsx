"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, ArrowRight, Layers } from "lucide-react";
import { projects } from "@/lib/projects";

export function ProjectShowcase() {
  return (
    <section id="projects" className="scroll-mt-20">
      <div className="space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <Layers className="w-4 h-4 text-muted-foreground" />
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
              Selected Work
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Things I&apos;ve built
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            A collection of projects showcasing my work in developer tools, AI
            applications, and modern web development.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              id={project.slug}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <div className="grid md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start lg:items-center">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`md:col-span-7 ${index % 2 === 1 ? "md:order-2 lg:order-2" : "md:order-1 lg:order-1"}`}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted border border-border/50 group-hover:border-border transition-all duration-500">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 55vw"
                      className="object-cover transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0  transition-opacity duration-500" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`md:col-span-5 ${index % 2 === 1 ? "md:order-1 lg:order-1" : "md:order-2 lg:order-2"}`}
                >
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {project.meta.map((tag) => (
                          <span
                            key={tag.id}
                            className="px-3 py-1 rounded-full border border-border bg-muted/30 text-[11px] font-medium text-muted-foreground tracking-wide"
                          >
                            {tag.label}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground group-hover:text-foreground/80 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 pt-2">
                      {project.cta1 && (
                        <motion.a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-foreground text-background font-medium text-sm hover:opacity-90 transition-all"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {project.cta1}
                          <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/btn:opacity-100 transition-opacity" />
                        </motion.a>
                      )}
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-background font-medium text-sm hover:bg-muted hover:border-border/80 transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github className="w-3.5 h-3.5" />
                        {project.cta2}
                      </motion.a>
                    </div>

                    <div className="h-px bg-border/50 w-full pt-4">
                      <span className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-widest">
                        {String(index + 1).padStart(2, "0")} /{" "}
                        {String(projects.length).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="absolute -inset-x-4 -inset-y-12 border border-transparent group-hover:border-border/30 rounded-2xl transition-colors duration-500 -z-10" />
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pt-8 border-t border-border/50"
        >
          <a
            href="https://github.com/alcanivorax"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all projects on GitHub
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
