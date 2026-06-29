"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="cta"
      className="py-40"
    >
      <div
        className="
        max-w-5xl
        mx-auto
        rounded-[40px]
        border
        border-pink-500/20
        bg-gradient-to-r
        from-pink-500/10
        via-rose-500/10
        to-pink-500/10
        backdrop-blur-xl
        p-16
        text-center
        "
      >
        <h2 className="text-6xl font-black">
          Ready to Crack Your
          <span className="text-pink-500">
            {" "}Dream Interview?
          </span>
        </h2>

        <p className="mt-6 text-zinc-400 text-lg">
          Start practicing with AI-powered mock interviews today.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: .98 }}
          className="
          mt-10
          rounded-full
          bg-gradient-to-r
          from-pink-500
          to-rose-500
          px-10
          py-4
          font-semibold
          "
        >
          Get Started Free
        </motion.button>

      </div>
    </section>
  );
}