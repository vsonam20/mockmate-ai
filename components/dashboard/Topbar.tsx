

import { createClient } from "@/lib/supabase/server";

export default async function Topbar() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const fullName =
    user.user_metadata?.full_name ??
    user.email?.split("@")[0] ??
    "User";

  const initials = fullName
    .split(" ")
    .filter(Boolean)
    .map((word: string) => word.charAt(0))
    .join("")
    .toUpperCase();

  // Fetch profile
  const { data: profile } = await supabase
    .from("profiles")
    .select("streak")
    .eq("id", user.id)
    .single();

  const streak = profile?.streak ?? 0;

  let streakMessage = "Complete your first interview today!";

  if (streak === 1) {
    streakMessage = "Great start! Keep the momentum going.";
  } else if (streak > 1) {
    streakMessage = "You're on fire! Keep your streak alive.";
  }

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
                ? `${streak} Day${streak > 1 ? "s" : ""} Streak`
                : "No Streak"}
            </p>

            <p className="text-sm text-zinc-400">
              {streakMessage}
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">



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