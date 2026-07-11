import { Bell, Search } from "lucide-react";

import { createClient } from "@/lib/supabase/server";

export default async function Topbar() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("TOPBAR USER:", user);

  const fullName =
    user?.user_metadata?.full_name ??
    user?.email?.split("@")[0] ??
    "User";

  const initials = fullName
    .split(" ")
    .map((word: string) => word[0])
    .join("")
    .toUpperCase();

  const { count } = await supabase
    .from("interviews")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("user_id", user?.id);

  const streak = count ? Math.max(1, Math.floor(count / 5)) : 0;

  const streakMessage =
    streak > 0
      ? "Keep it alive today!"
      : "Start your first interview today!";

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="flex h-24 items-center justify-between px-10">

        {/* Left */}

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/20 to-pink-500/20">
            <span className="text-2xl">🔥</span>
          </div>

          <div>

            <p className="text-3xl font-bold text-white">
              {streak > 0
                ? `${streak} Day Streak`
                : "No Streak"}
            </p>

            <p className="text-sm text-zinc-400">
              {streakMessage}
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              type="text"
              placeholder="Search interviews, resumes..."
              className="
                w-[320px]
                rounded-2xl
                border
                border-white/10
                bg-white/5
                py-3
                pl-12
                pr-4
                text-sm
                text-white
                placeholder:text-zinc-500
                outline-none
                transition
                focus:border-pink-500/40
              "
            />

          </div>

          <button
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/5
              text-zinc-400
              transition
              hover:border-pink-500/40
              hover:text-pink-400
            "
          >
            <Bell size={19} />
          </button>

          <button
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-r
              from-pink-500
              to-rose-500
              text-sm
              font-bold
              text-white
              transition
              hover:scale-105
            "
          >
            {initials}
          </button>

        </div>

      </div>
    </header>
  );
}