"use client";

interface Props {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
}

export default function AuthInput({
  name,
  label,
  type = "text",
  placeholder,
  defaultValue,
}: Props) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-zinc-300">
        {label}
      </label>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required
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