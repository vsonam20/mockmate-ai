import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="
      border-t
      border-white/10
      py-12
      "
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

        <h2 className="text-3xl font-black">
          Mock<span className="text-pink-500">Mate</span>AI
        </h2>

        <div className="flex gap-8 mt-6 md:mt-0">

          <Link href="#features">Features</Link>
          <Link href="#categories">Categories</Link>
          <Link href="#faq">FAQ</Link>

        </div>

        <p className="text-zinc-500 mt-6 md:mt-0">
          © 2026 MockMateAI. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}