"use client";

export default function GoogleButton() {
  return (
    <button
      className="
        flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-2xl
        border
        border-white/10
        bg-white/5
        py-4
        font-medium
        text-white
        transition
        hover:bg-white/10
      "
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google"
        className="h-5 w-5"
      />

      Continue with Google
    </button>
  );
}