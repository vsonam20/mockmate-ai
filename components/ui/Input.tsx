import { InputHTMLAttributes } from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      {...props}
      className={`
        w-full
        rounded-2xl
        border
        border-white/10
        bg-black/20
        px-4
        py-3
        text-white
        outline-none
        transition
        focus:border-pink-500
        disabled:cursor-not-allowed
        disabled:opacity-70
        ${className}
      `}
    />
  );
}