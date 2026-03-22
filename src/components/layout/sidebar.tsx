"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-full md:w-72 border-r border-border bg-background/80 backdrop-blur-md z-50 flex flex-col">
      <div className="flex-1 p-6 md:p-8 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="space-y-8"
        >
          <div className="space-y-1">
            <h1 className="text-xl font-semibold tracking-tight text-foreground">
              Roshan Singh
            </h1>
            <p className="text-sm text-muted-foreground">
              Full-Stack Developer
            </p>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            Building modern web apps and developer tools. Focused on clean code, 
            intuitive design, and scalable systems.
          </p>

          <nav className="space-y-1">
            {[
              { href: "#about", label: "About" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2">
            <motion.a
              href="https://github.com/alcanivorax"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:roshansingh6.022@gmail.com"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
            <ThemeToggle />
          </div>
        </motion.div>
      </div>
    </aside>
  );
}
