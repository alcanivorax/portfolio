"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectCard } from "@/components/layout/project-card";
import { projects } from "@/lib/projects";
import { Container } from "@/components/ui/container";

export function Project() {
  return (
    <section className="relative min-h-screen py-20 md:py-32">
      <div className="absolute inset-0 pointer-events-none bg-grid" />
      
      <Container className="relative">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-16 max-w-2xl mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3"
          >
            Selected Work
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4"
          >
            Projects I&apos;ve Built
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-muted-foreground text-base leading-relaxed"
          >
            A collection of work spanning design systems, developer tools, and
            interactive experiences.
          </motion.p>
        </motion.header>

        <div className="flex flex-col items-center gap-16">
          {projects.map((project, idx) => (
            <ProjectCard key={project.slug} {...project} index={idx} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 max-w-2xl mx-auto text-center"
        >
          <p className="text-sm text-muted-foreground">
            More projects coming soon. Follow along on{" "}
            <Link
              href="https://github.com/alcanivorax"
              className="text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
