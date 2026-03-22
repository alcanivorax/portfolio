"use client";

import { motion } from "framer-motion";
import { Mail, Github, ArrowUpRight, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-4 h-4 text-muted-foreground" />
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                Contact
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Let&apos;s work together
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              I&apos;m always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              feel free to reach out.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <motion.a
              href="mailto:roshansingh6.022@gmail.com"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background font-medium text-sm hover:opacity-90 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-4 h-4" />
              Send an email
            </motion.a>

            <motion.a
              href="https://github.com/alcanivorax"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border bg-background font-medium text-sm hover:bg-muted transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-4 h-4" />
              GitHub
              <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-8 border-t border-border/50"
          >
            {/*<p className="text-xs text-muted-foreground">
              Prefer email? <a href="mailto:roshansingh6.022@gmail.com" className="text-foreground hover:underline">roshansingh6.022@gmail.com</a>
            </p>*/}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
