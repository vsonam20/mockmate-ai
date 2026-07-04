import SageChat from "@/components/dashboard/sage/SageChat";
import { buildSageData } from "@/lib/services/sage.service";

export default async function SagePage() {
  const hero = await buildSageData();

  return (
    <main className="min-h-screen p-6">
      <SageChat />
    </main>
  );
}