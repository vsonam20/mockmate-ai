import { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost";
}

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white hover:opacity-90",

    secondary:
      "border border-white/10 bg-white/5 text-white hover:bg-white/10",

    danger:
      "border border-red-500/40 bg-red-500/10 text-red-400 hover:bg-red-500/20",

    ghost:
      "bg-transparent text-zinc-400 hover:text-white",
  };

  return (
    <button
      {...props}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        px-5
        py-2.5
        text-sm
        font-medium
        transition-all
        duration-200
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}