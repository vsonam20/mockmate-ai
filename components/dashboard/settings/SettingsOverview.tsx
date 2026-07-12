import { createClient } from "@/lib/supabase/server";

import PageHeader from "@/components/dashboard/PageHeader";

import AccountSection from "./AccountSection";
import SecuritySection from "./SecuritySection";
import NotificationSection from "./NotificationSection";
import PreferenceSection from "./PreferenceSection";
import DangerZone from "./DangerZone";

export default async function SettingsOverview() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const fullName =
    user.user_metadata?.full_name ??
    user.email?.split("@")[0] ??
    "User";

  return (
    <main className="space-y-10">

      <PageHeader
        title="Settings"
        description="Manage your MockMate AI account preferences."
      />

      <AccountSection
        fullName={fullName}
        email={user.email ?? ""}
      />

      <SecuritySection />

      <NotificationSection />

      <PreferenceSection />

      <DangerZone />

    </main>
  );
}