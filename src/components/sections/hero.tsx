"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroBackground } from "@/components/ui/background-effects";

export function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center relative overflow-hidden">
      <HeroBackground />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="space-y-8 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-muted/30 text-xs font-medium text-muted-foreground"
        >
          <Sparkles className="w-3 h-3" />
          <span>Available for work</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-sm font-mono text-muted-foreground tracking-wide"
        >
          Hi, I&apos;m Roshan
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]"
        >
          I build
          <span className="block text-gradient">digital products</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
        >
          Full-stack developer crafting intuitive experiences with modern technologies. 
          Focused on AI-powered developer tools and scalable systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-4 pt-2"
        >
          <motion.a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background font-medium text-sm hover:opacity-90 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </motion.a>
          <motion.a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border font-medium text-sm hover:bg-muted transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center gap-8 pt-8 border-t border-border/30"
        >
          <div>
            <p className="text-2xl font-semibold text-foreground">4+</p>
            <p className="text-xs text-muted-foreground">Projects Built</p>
          </div>
          <div className="h-8 w-px bg-border/50" />
          <div>
            <p className="text-2xl font-semibold text-foreground">Open</p>
            <p className="text-xs text-muted-foreground">Source Focus</p>
          </div>
          <div className="h-8 w-px bg-border/50 hidden md:block" />
          <div className="hidden md:block">
            <p className="text-2xl font-semibold text-foreground">AI</p>
            <p className="text-xs text-muted-foreground">Powered Tools</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
