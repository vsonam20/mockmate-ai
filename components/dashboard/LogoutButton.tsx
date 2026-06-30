"use client";

import { LogOut } from "lucide-react";
import { signOut } from "@/app/actions/auth";

export default function LogoutButton() {
  return (
    <form action={signOut}>
      <button
        className="
          group
          flex
          w-full
          items-center
          gap-3
          rounded-2xl
          px-4
          py-3
          text-zinc-400
          transition-all
          duration-300
          hover:bg-red-500/10
          hover:text-red-400
        "
      >
        <LogOut
          size={20}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />

        <span className="font-medium">
          Log Out
        </span>
      </button>
    </form>
  );
}