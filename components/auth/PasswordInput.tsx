"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function PasswordInput({
  value,
  onChange,
}: Props) {
  const [show, setShow] = useState(false);

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-zinc-300">
        Password
      </label>

      <div className="relative">
        <input
          type={show ? "text" : "password"}
          placeholder="Enter your password"
          value={value}
          onChange={(e) => onChange(e.target.value)}
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