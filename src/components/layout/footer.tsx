"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between gap-8"
        >
          <div className="space-y-1">
            <p className="text-sm font-semibold text-foreground">
              Roshan Singh
            </p>
            <p className="text-xs text-muted-foreground">
              Developer · Web & Tools
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/alcanivorax"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </Link>
            <Link
              href="mailto:roshansingh6.022@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </Link>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-xs text-muted-foreground/60"
        >
          © {new Date().getFullYear()} Roshan Singh. All rights reserved.
        </motion.p>
      </Container>
    </footer>
  );
}
