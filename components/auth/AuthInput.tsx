"use client";

interface Props {
  label: string;
  type?: string;
  placeholder?: string;
}

export default function AuthInput({
  label,
  type = "text",
  placeholder,
}: Props) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-zinc-300">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-5
          py-4
          text-white
          outline-none
          transition
          placeholder:text-zinc-500
          focus:border-pink-500
          focus:ring-2
          focus:ring-pink-500/20
        "
      />
    </div>
  );
}