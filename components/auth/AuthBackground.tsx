"use client";

import { motion } from "framer-motion";

export default function AuthBackground() {
  return (
    <>
      <div className="absolute inset-0 -z-20 bg-black" />

      <motion.div
        animate={{
          x: [0, 80, -50, 0],
          y: [0, -60, 50, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-32
          left-20
          h-80
          w-80
          rounded-full
          bg-pink-500/20
          blur-[140px]
          -z-10
        "
      />

      <motion.div
        animate={{
          x: [0, -90, 50, 0],
          y: [0, 70, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-24
          right-16
          h-96
          w-96
          rounded-full
          bg-fuchsia-500/20
          blur-[170px]
          -z-10
        "
      />

      <div
        className="
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_center,rgba(255,0,120,0.05),transparent_65%)]
        "
      />
    </>
  );
}