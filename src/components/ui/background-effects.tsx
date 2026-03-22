"use client";

export function BackgroundEffects() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -10,
        pointerEvents: "none",
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      <svg
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100vw",
          height: "100vh",
          maskImage:
            "linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
          overflow: "visible",
        }}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMaxYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>{`
            @keyframes spin-cw  { from { transform: rotate(0deg);   } to { transform: rotate(360deg);  } }
            @keyframes spin-ccw { from { transform: rotate(0deg);   } to { transform: rotate(-360deg); } }
            @keyframes float    { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-7px); } }
            @keyframes pulse    { 0%,100% { opacity: 0.9; r: 5; } 50% { opacity: 0.5; r: 7; } }

            .r1 { animation: spin-ccw 40s  linear infinite; transform-origin: 1080px 450px; }
            .r2 { animation: spin-cw  65s  linear infinite; transform-origin: 1080px 450px; }
            .r3 { animation: spin-ccw 95s  linear infinite; transform-origin: 1080px 450px; }
            .r4 { animation: spin-cw  125s linear infinite; transform-origin: 1080px 450px; }
            .r5 { animation: spin-ccw 155s linear infinite; transform-origin: 1080px 450px; }
            .r6 { animation: spin-cw  190s linear infinite; transform-origin: 1080px 450px; }
            .r7 { animation: spin-ccw 230s linear infinite; transform-origin: 1080px 450px; }
            .pf1 { animation: float 8s  ease-in-out infinite; }
            .pf2 { animation: float 11s ease-in-out infinite 2.5s; }
            .sun-pulse { animation: pulse 4s ease-in-out infinite; }
          `}</style>
        </defs>

        {/* ── SUN ── center at right-center (1080, 450) */}
        <circle
          cx="1080"
          cy="450"
          r="6"
          fill="var(--circle-line-strong)"
          opacity="0.95"
        />
        <circle
          cx="1080"
          cy="450"
          r="14"
          fill="none"
          stroke="var(--circle-line-strong)"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <circle
          cx="1080"
          cy="450"
          r="22"
          fill="none"
          stroke="var(--circle-line-strong)"
          strokeWidth="0.8"
          opacity="0.3"
        />

        {/* ── RING 1 — foreground, r=110 ── */}
        <g className="r1">
          <circle
            cx="1080"
            cy="450"
            r="110"
            fill="none"
            stroke="var(--circle-line-strong)"
            strokeWidth="1.4"
            opacity="0.85"
          />
          <circle
            cx="1080"
            cy="340"
            r="7"
            fill="var(--circle-line-strong)"
            opacity="0.95"
          />
        </g>

        {/* ── RING 2 — r=200 ── */}
        <g className="r2">
          <circle
            cx="1080"
            cy="450"
            r="200"
            fill="none"
            stroke="var(--circle-line-strong)"
            strokeWidth="1.1"
            opacity="0.7"
          />
          <circle
            cx="1080"
            cy="250"
            r="7.5"
            fill="var(--circle-line-strong)"
            opacity="0.9"
          />
          <circle
            cx="900"
            cy="382"
            r="3.5"
            fill="var(--circle-line-strong)"
            opacity="0.65"
          />
        </g>

        {/* ── RING 3 — partial arc ~300°, r=310 ── */}
        <g className="r3">
          <path
            d="M 1080 140 A 310 310 0 1 1 785 710"
            fill="none"
            stroke="var(--circle-line-strong)"
            strokeWidth="1"
            opacity="0.6"
          />
          <circle
            cx="1080"
            cy="140"
            r="8"
            fill="var(--circle-line-strong)"
            opacity="0.85"
          />
          <circle
            cx="792"
            cy="698"
            r="4"
            fill="var(--circle-line-strong)"
            opacity="0.6"
          />
        </g>

        {/* ── RING 4 — tilted dashed ellipse, rx=390 ry=170 ── */}
        <g className="r4">
          <ellipse
            cx="1080"
            cy="450"
            rx="390"
            ry="170"
            fill="none"
            stroke="var(--circle-line-strong)"
            strokeWidth="0.9"
            opacity="0.45"
            transform="rotate(-20 1080 450)"
            strokeDasharray="12 8"
          />
          <circle
            cx="1200"
            cy="348"
            r="4.5"
            fill="var(--circle-line-strong)"
            opacity="0.6"
          />
        </g>

        {/* ── RING 5 — r=490 ── */}
        <g className="r5">
          <circle
            cx="1080"
            cy="450"
            r="490"
            fill="none"
            stroke="var(--circle-line)"
            strokeWidth="0.8"
            opacity="0.38"
          />
          <circle
            cx="1080"
            cy="-40"
            r="5"
            fill="var(--circle-line-strong)"
            opacity="0.45"
          />
        </g>

        {/* ── RING 6 — partial arc, r=610 ── */}
        <g className="r6">
          <path
            d="M 1080 -160 A 610 610 0 0 1 1660 780"
            fill="none"
            stroke="var(--circle-line)"
            strokeWidth="0.7"
            opacity="0.25"
          />
        </g>

        {/* ── RING 7 — ghost outer ring, r=760 ── */}
        <g className="r7">
          <circle
            cx="1080"
            cy="450"
            r="760"
            fill="none"
            stroke="var(--circle-line)"
            strokeWidth="0.6"
            opacity="0.14"
          />
        </g>

        {/* ── FLOATING NODES ── */}
        <g className="pf1">
          <circle
            cx="1300"
            cy="220"
            r="3.5"
            fill="var(--circle-line-strong)"
            opacity="0.5"
          />
        </g>
        <g className="pf2">
          <circle
            cx="1180"
            cy="680"
            r="2.5"
            fill="var(--circle-line-strong)"
            opacity="0.4"
          />
        </g>
      </svg>
    </div>
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
          "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(0,0,0,0.03) 0%, transparent 50%)",
      }}
      aria-hidden="true"
    />
  );
}
