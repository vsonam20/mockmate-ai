import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export default function EmptyState({
  icon: Icon,
  title,
  description,
  buttonText,
  href,
}: Props) {
  return (
    <div className="flex flex-col items-center rounded-3xl border border-white/10 bg-white/5 px-10 py-20 text-center">

      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-pink-500/10">
        <Icon
          size={40}
          className="text-pink-400"
        />
      </div>

      <h2 className="text-3xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-4 max-w-xl text-zinc-400 leading-7">
        {description}
      </p>

      <Link
        href={href}
        className="mt-8 rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 px-8 py-3 font-semibold text-white transition hover:scale-105"
      >
        {buttonText}
      </Link>

    </div>
  );
}