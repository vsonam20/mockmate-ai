"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Categories", href: "#categories" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-6 z-50 flex justify-center px-6">
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          w-full
          max-w-7xl
          rounded-[28px]
          border
          border-white/10
          bg-black/35
          backdrop-blur-2xl
          shadow-[0_8px_40px_rgba(255,40,120,0.15)]
        "
      >
        <div className="flex h-20 items-center justify-between px-8">

          {/* Logo */}

          <Link href="/">
            <h1 className="text-4xl font-black tracking-tight text-white">
              Mock<span className="text-pink-500">Mate</span>AI
            </h1>
          </Link>

          {/* Desktop */}

          <div className="hidden items-center gap-12 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
                  relative
                  text-[15px]
                  font-medium
                  text-zinc-300
                  transition-all
                  duration-300
                  hover:text-pink-400
                "
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right */}

          <div className="hidden items-center gap-6 md:flex">

            <Link
            href="/sign-in"
            className="
            text-zinc-300
            transition
            hover:text-white">
              Sign In
            </Link>

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.98,
              }}
              >
              <Link
              href="/sign-up"  
              className="
                inline-block
                rounded-full
                bg-gradient-to-r
                from-pink-500
                via-rose-500
                to-pink-500
                px-8
                py-3
                font-semibold
                text-white
                shadow-[0_0_30px_rgba(255,60,140,0.45)]
              "
              >
                Get Started
              </Link>
            </motion.div>

          </div>

        </div>
      </motion.nav>
    </header>
  );
}