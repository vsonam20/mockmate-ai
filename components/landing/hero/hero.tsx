"use client";

import { motion } from "framer-motion";
import HeroVisual from "./hero-visual";
import GradientText from "@/components/ui/gradient-text";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 px-6 pt-28 lg:grid-cols-2 lg:px-10">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="flex flex-col justify-center"
        >

          <div className="mb-6 inline-flex w-fit rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-sm text-pink-300 backdrop-blur-xl">
            ✨ AI Powered Interview Preparation
          </div>

          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
            Master Every
            <br />

            <GradientText>
              Interview
            </GradientText>

            <br />

            with SAGE AI
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            Practice realistic interviews with AI.
            Receive instant feedback, improve confidence,
            enhance communication skills and land your dream job.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <button
              className="
              rounded-2xl
              bg-gradient-to-r
              from-pink-500
              to-rose-500
              px-8
              py-4
              font-semibold
              text-white
              transition
              hover:scale-105
              "
            >
              Start Free
            </button>

            <button
              className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-8
              py-4
              text-white
              backdrop-blur-xl
              transition
              hover:bg-white/10
              "
            >
              Watch Demo
            </button>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <HeroVisual />

      </div>
    </section>
  );
}