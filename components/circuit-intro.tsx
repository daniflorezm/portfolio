"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Circuit board SVG paths that create the tech aesthetic
function CircuitPattern({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left";

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* Horizontal circuit lines */}
      {[100, 200, 300, 400, 500, 600, 700].map((y, i) => (
        <motion.line
          key={`h-${y}`}
          x1={isLeft ? 400 : 0}
          y1={y}
          x2={isLeft ? 400 - (i % 2 === 0 ? 350 : 250) : i % 2 === 0 ? 350 : 250}
          y2={y}
          stroke="var(--color-intro-circuit)"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.1 * i, ease: "easeOut" }}
        />
      ))}

      {/* Vertical circuit lines */}
      {[50, 120, 200, 280, 350].map((x, i) => (
        <motion.line
          key={`v-${x}`}
          x1={x}
          y1={isLeft ? 0 : 800}
          x2={x}
          y2={isLeft ? 400 + i * 80 : 400 - i * 80}
          stroke="var(--color-intro-circuit)"
          strokeWidth="1"
          strokeOpacity="0.3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 + 0.15 * i, ease: "easeOut" }}
        />
      ))}

      {/* Circuit nodes (dots at intersections) */}
      {[
        { x: 50, y: 200 },
        { x: 120, y: 300 },
        { x: 200, y: 100 },
        { x: 200, y: 400 },
        { x: 280, y: 500 },
        { x: 350, y: 200 },
        { x: 350, y: 600 },
        { x: 120, y: 700 },
        { x: 50, y: 500 },
        { x: 280, y: 100 },
      ].map((node, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={node.x}
          cy={node.y}
          r="4"
          fill="var(--color-intro-node)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0.8] }}
          transition={{ duration: 0.6, delay: 0.8 + 0.08 * i, ease: "easeOut" }}
        />
      ))}

      {/* Glowing pulse nodes */}
      {[
        { x: 200, y: 400 },
        { x: 120, y: 300 },
        { x: 350, y: 600 },
      ].map((node, i) => (
        <motion.circle
          key={`glow-${i}`}
          cx={node.x}
          cy={node.y}
          r="8"
          fill="none"
          stroke="var(--color-intro-node)"
          strokeWidth="1"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 2, 3],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 1.5,
            delay: 1.2 + 0.3 * i,
            repeat: 1,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Traveling dots along paths */}
      {[200, 400, 600].map((y, i) => (
        <motion.circle
          key={`travel-${i}`}
          cy={y}
          r="3"
          fill="var(--color-intro-node)"
          filter="url(#glow)"
          initial={{ cx: isLeft ? 400 : 0, opacity: 0 }}
          animate={{
            cx: isLeft ? [400, 50] : [0, 350],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 1.5,
            delay: 0.5 + 0.4 * i,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* SVG filter for glow effect */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}

// Animated center text
function CenterText() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <motion.div
        className="relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
      >
        {/* Glow behind text */}
        <div
          className="absolute inset-0 blur-2xl opacity-30 rounded-full"
          style={{ background: "var(--color-primary-glow)" }}
        />
        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight relative"
          style={{ color: "var(--color-foreground)" }}
        >
          {"DaniDev".split("").map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.1 + i * 0.08,
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
      </motion.div>

      <motion.p
        className="mt-4 text-sm md:text-base tracking-[0.3em] uppercase"
        style={{ color: "var(--color-primary-light)" }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        Soluciones digitales
      </motion.p>

      {/* Horizontal line decoration */}
      <motion.div
        className="mt-6 h-px w-32 md:w-48"
        style={{ background: "var(--color-primary)" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
      />
    </motion.div>
  );
}

export default function CircuitIntro({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [phase, setPhase] = useState<"animating" | "opening" | "done">(
    "animating"
  );

  const handleSkip = useCallback(() => {
    setPhase("opening");
  }, []);

  useEffect(() => {
    // After circuit animation plays, start the door opening
    const animTimer = setTimeout(() => {
      setPhase("opening");
    }, 3000);

    return () => clearTimeout(animTimer);
  }, []);

  useEffect(() => {
    if (phase === "opening") {
      const doneTimer = setTimeout(() => {
        setPhase("done");
        onComplete();
      }, 800);
      return () => clearTimeout(doneTimer);
    }
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden"
          style={{ background: "var(--color-intro-bg)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Left door */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full overflow-hidden"
            style={{ background: "var(--color-intro-bg)" }}
            animate={
              phase === "opening"
                ? { x: "-100%", opacity: 0 }
                : { x: 0, opacity: 1 }
            }
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <CircuitPattern side="left" />
            {/* Center divider line glow */}
            <div
              className="absolute right-0 top-0 w-px h-full opacity-40"
              style={{ background: "var(--color-primary)" }}
            />
          </motion.div>

          {/* Right door */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full overflow-hidden"
            style={{ background: "var(--color-intro-bg)" }}
            animate={
              phase === "opening"
                ? { x: "100%", opacity: 0 }
                : { x: 0, opacity: 1 }
            }
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <CircuitPattern side="right" />
            {/* Center divider line glow */}
            <div
              className="absolute left-0 top-0 w-px h-full opacity-40"
              style={{ background: "var(--color-primary)" }}
            />
          </motion.div>

          {/* Center content (text) */}
          <motion.div
            animate={
              phase === "opening" ? { scale: 1.1, opacity: 0 } : { scale: 1, opacity: 1 }
            }
            transition={{ duration: 0.6, ease: "easeIn" }}
          >
            <CenterText />
          </motion.div>

          {/* Skip button */}
          {phase === "animating" && (
            <motion.button
              onClick={handleSkip}
              className="absolute bottom-8 right-8 z-20 text-sm px-4 py-2 rounded-full border transition-colors cursor-pointer"
              style={{
                color: "var(--color-foreground-muted)",
                borderColor: "var(--color-border)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              whileHover={{ borderColor: "var(--color-primary)" }}
              aria-label="Saltar animacion de introduccion"
            >
              Saltar
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
