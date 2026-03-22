"use client";

import { motion } from "framer-motion";
import { Download, Code2, Palette } from "lucide-react";

const skills = [
  { name: "TypeScript", icon: Code2 },
  { name: "Next.js", icon: Code2 },
  { name: "React", icon: Code2 },
  { name: "Node.js", icon: Code2 },
  { name: "PostgreSQL", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "Docker", icon: Box },
  { name: "AWS", icon: Cloud },
];

function Database({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function Box({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </svg>
  );
}

function Cloud({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Palette className="w-4 h-4 text-muted-foreground" />
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                About
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Who I am
            </h2>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a full-stack developer passionate about building products that 
              solve real problems. I specialize in modern web technologies and 
              have a keen interest in developer tools and AI applications.
            </p>
            <p>
              Currently building <span className="text-foreground font-medium">DevInsight</span>, 
              an AI-powered GitHub repository analyzer, and maintaining a suite of 
              minimal CLI tools under the Nero brand.
            </p>
          </div>

          <motion.a
            href="/resume.pdf"
            download="roshan-singh-resume.pdf"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-background text-sm font-medium hover:bg-muted transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="w-4 h-4" />
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7 space-y-6"
        >
          <p className="text-sm font-medium text-foreground">Technologies I work with</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-border bg-muted/20 hover:bg-muted/40 hover:border-border/80 transition-all"
              >
                <skill.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { label: "Years", value: "2+", desc: "Experience" },
              { label: "Projects", value: "4+", desc: "Completed" },
              { label: "Tools", value: "10+", desc: "Built" },
              { label: "Open", value: "100%", desc: "Source" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                className="p-4 rounded-lg bg-muted/20 border border-border/50"
              >
                <p className="text-xl font-semibold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
