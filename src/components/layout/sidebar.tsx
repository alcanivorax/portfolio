"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Github, Mail, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  { href: "https://personal-blog-livid-five.vercel.app/", label: "Blog" },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <aside
        className="hidden md:flex fixed left-0 top-0 h-screen w-72 border-r border-border backdrop-blur-md z-50 flex-col"
        style={{ background: "var(--sidebar-bg)" }}
      >
        <div className="flex-1 p-8 flex flex-col">
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
              {navItems.map((item) => (
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

      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-background/80 backdrop-blur-md border border-border"
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="md:hidden fixed inset-0 bg-black/50 z-50"
            />
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed left-0 top-0 h-screen w-72 border-r border-border backdrop-blur-md z-50 flex flex-col"
              style={{ background: "var(--sidebar-bg)" }}
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-md hover:bg-muted transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 p-6 flex flex-col">
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
                  <nav className="space-y-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
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
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
