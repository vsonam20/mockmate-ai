import { ReactNode } from "react";

import DashboardBackground from "@/components/dashboard/DashboardBackground";
import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: Props) {
  return (
    <main className="relative flex h-screen overflow-hidden bg-[#050505] text-white">
      <DashboardBackground />

      <Sidebar />

      <section className="relative z-10 flex flex-1 flex-col">
        <Topbar />

        <div className="flex-1 overflow-y-auto px-10 py-8 xl:px-12">
          {children}
        </div>
      </section>
    </main>
  );
}