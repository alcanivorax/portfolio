"use client";

import { useEffect } from "react";

export function BackgroundEffects() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty("--mouse-x", `${x}%`);
      document.documentElement.style.setProperty("--mouse-y", `${y}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="fixed inset-0 -z-50" />
      
      <div 
        className="fixed inset-0 -z-40 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-radial-soft" />
        <div className="absolute inset-0 bg-grid-lines" />
        <div className="absolute inset-0 bg-grid-fine" />
        <div className="absolute inset-0 bg-radial-top-left" />
        <div className="absolute inset-0 bg-radial-bottom-right" />
      </div>

      <div 
        className="fixed inset-0 -z-30 pointer-events-none bg-grain"
        aria-hidden="true"
      />

      <div 
        className="fixed inset-0 -z-20 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 mask-vignette">
          <div className="absolute inset-0 bg-background/40" />
        </div>
      </div>

      <div 
        className="fixed inset-0 -z-10 pointer-events-none hidden md:block"
        aria-hidden="true"
      >
        <div 
          className="absolute w-[800px] h-[600px] rounded-full opacity-30 dark:opacity-20"
          style={{
            background: 'radial-gradient(circle, oklch(0.6 0.1 250 / 0.15) 0%, transparent 70%)',
            left: 'var(--mouse-x, 50%)',
            top: 'var(--mouse-y, 30%)',
            transform: 'translate(-50%, -50%)',
            transition: 'left 0.3s ease-out, top 0.3s ease-out',
          }}
        />
      </div>

      <div 
        className="fixed top-0 left-0 right-0 -z-5 h-px pointer-events-none"
        aria-hidden="true"
      >
        <div className="h-full bg-gradient-to-r from-transparent via-foreground/5 to-transparent" />
      </div>
      
      <div 
        className="fixed bottom-0 left-0 right-0 -z-5 h-px pointer-events-none"
        aria-hidden="true"
      >
        <div className="h-full bg-gradient-to-r from-transparent via-foreground/3 to-transparent" />
      </div>
    </>
  );
}
