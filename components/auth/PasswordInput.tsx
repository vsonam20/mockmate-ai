"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
}

export default function PasswordInput({
  name,
  label = "Password",
  placeholder = "Enter your password",
}: Props) {
  const [show, setShow] = useState(false);

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-zinc-300">
        {label}
      </label>

      <div className="relative">
        <input
          name={name}
          type={show ? "text" : "password"}
          placeholder={placeholder}
          required
          className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-5
            py-4
            pr-14
            text-white
            outline-none
            transition
            placeholder:text-zinc-500
            focus:border-pink-500
            focus:ring-2
            focus:ring-pink-500/20
          "
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
        >
          {show ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    </div>
  );
}