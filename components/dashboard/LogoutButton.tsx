"use client";

import { signOut } from "@/app/actions/auth";

export default function LogoutButton() {
  return (
    <form action={signOut}>
      <button
        type="submit"
        className="
          rounded-xl
          bg-red-500
          px-6
          py-3
          font-semibold
          text-white
          transition
          hover:bg-red-600
        "
      >
        Logout
      </button>
    </form>
  );
}