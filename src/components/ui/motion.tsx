"use client";

import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimationVariant = "fade-in" | "fade-up" | "fade-down" | "slide-in-left" | "scale-in";

interface MotionWrapperProps extends MotionProps {
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  children: React.ReactNode;
}

const animationVariants = {
  "fade-in": {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  "fade-up": {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  "fade-down": {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  },
  "slide-in-left": {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  },
  "scale-in": {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
  },
} as const;

export function MotionWrapper({
  variant = "fade-up",
  delay = 0,
  duration = 0.5,
  className,
  children,
  ...props
}: MotionWrapperProps) {
  const variantConfig = animationVariants[variant];

  return (
    <motion.div
      initial={variantConfig.initial}
      animate={variantConfig.animate}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <MotionWrapper variant="fade-in" delay={delay} className={className}>
      {children}
    </MotionWrapper>
  );
}

export function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <MotionWrapper variant="fade-up" delay={delay} className={className}>
      {children}
    </MotionWrapper>
  );
}

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  );
}
