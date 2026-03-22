"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { Container } from "@/components/ui/container";

export function AboutSection() {
  return (
    <section className="relative border-t border-border bg-background">
      <Container className="py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-2xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4"
          >
            About
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6"
          >
            Building products that matter
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-4 text-muted-foreground leading-relaxed"
          >
            <p>
              I&apos;m Roshan Singh — a full-stack developer focused on building
              scalable web applications and developer tools.
            </p>
            <p>
              I work primarily with{" "}
              <span className="text-foreground font-medium">
                TypeScript, Next.js, backend APIs, and databases
              </span>
              , and I care about clean architecture, separation of concerns, and
              writing code that&apos;s easy to understand and maintain. I don&apos;t just
              make things work — I understand why they work.
            </p>
            <p>
              Currently, I&apos;m building{" "}
              <span className="text-foreground font-medium">
                DevInsight
              </span>
              , an AI-powered GitHub repository analyzer that helps developers
              understand large codebases through summaries, architecture
              visualization, and intelligent explanations. I&apos;m also developing a
              franchise of minimal CLI tools called Nero, designed to improve
              developer workflows with simplicity and precision.
            </p>
            <p>
              I actively strengthen my fundamentals through Data Structures &amp;
              Algorithms and Low-Level Design, while reading open-source code to
              learn how real systems are structured in production.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <motion.a
              href="/resume.pdf"
              download="roshan-singh-resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-background text-sm font-medium text-foreground hover:bg-muted transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </motion.a>
            <motion.a
              href="mailto:roshansingh6.022@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
