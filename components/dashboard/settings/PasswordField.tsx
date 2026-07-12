"use client";

import { Eye, EyeOff } from "lucide-react";

import Input from "@/components/ui/Input";

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  visible: boolean;
  toggleVisible: () => void;
  placeholder?: string;
}

export default function PasswordField({
  label,
  value,
  onChange,
  visible,
  toggleVisible,
  placeholder = "",
}: Props) {
  return (
    <div>

      <label className="mb-2 block text-sm text-zinc-400">
        {label}
      </label>

      <div className="relative">

        <input
          type={visible ? "text" : "password"}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="
           pr-12"
        />

        <button
          type="button"
          onClick={toggleVisible}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-zinc-500
            transition
            hover:text-white
          "
        >
          {visible ? (
            <EyeOff size={18} />
          ) : (
            <Eye size={18} />
          )}
        </button>

      </div>

    </div>
  );
}