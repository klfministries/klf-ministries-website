"use client";

import { motion, useScroll, useReducedMotion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className="
        fixed top-0 left-0 right-0
        h-[2px]
        origin-left
        z-[60]
        pointer-events-none
        bg-gradient-to-r from-blue-900 to-yellow-400
      "
      style={{
        scaleX: prefersReducedMotion ? 1 : scrollYProgress,
      }}
      transition={{
        ease: "easeOut",
        duration: prefersReducedMotion ? 0 : 0.2,
      }}
    />
  );
}
