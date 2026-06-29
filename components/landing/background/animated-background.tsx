"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <>
      {/* Base */}

      <div className="fixed inset-0 -z-50 bg-black" />

      {/* Top Glow */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          fixed
          -top-48
          -left-40
          -z-40
          h-[600px]
          w-[600px]
          rounded-full
          bg-pink-500/15
          blur-[170px]
        "
      />

      {/* Right Glow */}

      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          fixed
          top-1/3
          -right-56
          -z-40
          h-[650px]
          w-[650px]
          rounded-full
          bg-rose-500/12
          blur-[180px]
        "
      />

      {/* Bottom Glow */}

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -70, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          fixed
          -bottom-64
          left-1/3
          -z-40
          h-[700px]
          w-[700px]
          rounded-full
          bg-fuchsia-500/10
          blur-[200px]
        "
      />

      {/* Grid */}

      <div
        className="
          fixed
          inset-0
          -z-30
          opacity-[0.03]
          bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />
    </>
  );
}