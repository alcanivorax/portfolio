"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground"
      >
        <p>© {new Date().getFullYear()} Roshan Singh. Built with Next.js.</p>
        <p>Designed & Developed by me</p>
      </motion.div>
    </footer>
  );
}
