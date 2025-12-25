"use client";

import * as React from "react";
import { Contrast } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useClickSound } from "@/lib/audio";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = React.useState(false);

  const playSound = useClickSound();
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark: Boolean = theme === "dark";

  return (
    <button
      onClick={() => {
        setTheme(isDark ? "light" : "dark");
        playSound();
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "dark" : "light"}
          initial={{ rotate: -90, opacity: 0, scale: 0.9 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          <Contrast
            className="h-5 w-5 text-gray-700 hover:text-gray-900 transition-colors
                         dark:text-neutral-300 dark:hover:text-white cursor-pointer"
          />
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
