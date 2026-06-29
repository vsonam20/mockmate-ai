"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Props = {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      overflow-hidden
      "
    >
      <button
        onClick={() => setOpen(!open)}
        className="
        flex
        w-full
        items-center
        justify-between
        p-6
        text-left
        "
      >
        <h3 className="text-lg font-semibold text-white">
          {question}
        </h3>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
        >
          <ChevronDown className="text-pink-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
          >
            <p className="px-6 pb-6 text-zinc-400 leading-7">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}