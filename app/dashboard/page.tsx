import { redirect } from "next/navigation";

import LogoutButton from "@/components/dashboard/LogoutButton";

import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          🎉 Welcome, {user.user_metadata.full_name ?? "User"}
        </h1>

        <p className="mt-4 text-zinc-400">
          Authentication is working successfully!
        </p>

        <div className="mt-8 rounded-xl border border-zinc-700 bg-zinc-900 p-6 text-left">
        
          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p className="mt-2">
            <strong>User ID:</strong> {user.id}
          </p>
        </div>

        <div className="mt-8 flex justify-center">
            <LogoutButton />
        </div>
      </div>
    </main>
  );
}