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
      {/* Layer 2: Outer large circle — right side decorative arc */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          right: "-12vw",
          transform: "translateY(-50%)",
          width: "58vw",
          height: "58vw",
          zIndex: -20,
          borderRadius: "50%",
          border: "1px solid var(--circle-line)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Layer 3: Medium circle */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          right: "-12vw",
          transform: "translateY(-50%)",
          width: "40vw",
          height: "40vw",
          zIndex: -20,
          borderRadius: "50%",
          border: "1px solid var(--circle-line)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Layer 4: Small circle */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          right: "0vw",
          transform: "translateY(-50%)",
          width: "20vw",
          height: "20vw",
          zIndex: -20,
          borderRadius: "50%",
          border: "1px solid var(--circle-line)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Layer 5: Innermost filled accent circle */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          right: "10vw",
          transform: "translateY(-50%)",
          width: "8vw",
          height: "8vw",
          zIndex: -20,
          borderRadius: "50%",
          border: "1px solid var(--circle-line-strong)",
          background: "var(--circle-fill)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
    </>
  );
}

export function HeroBackground() {
  return null;
}

export function SectionBackground() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: -10,
        background:
          "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(0,0,0,0.05) 0%, transparent 50%)",
      }}
      aria-hidden="true"
    />
  );
}
