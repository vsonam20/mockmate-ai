"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/lib/dashboard/navigation";

import SidebarItem from "./SidebarItem";
import LogoutButton from "./LogoutButton";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
        flex
        h-screen
        w-[250px]
        pb-4
        flex-col
        border-r
        border-white/10
        bg-black/30
        backdrop-blur-xl
      "
    >
      {/* Logo */}

      <div className="border-b border-white/10 px-6 py-6">
        <Link href="/dashboard">
          <h1 className="cursor-pointer text-[2rem] font-black tracking-tight text-white">
            Mock<span className="text-pink-500">Mate</span>AI
          </h1>
        </Link>

        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
          Practice.
          <br />
          Improve.
          <br />
          Get Hired.
        </p>
      </div>

      {/* Navigation */}

      <nav
        className="
          flex-1
          px-5
          py-5
        "
      >
        <div className="space-y-1">
          {navigation.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              label={item.title}
              icon={item.icon}
              active={pathname === item.href}
            />
          ))}
        </div>
      </nav>

      {/* Bottom */}

      <div className="mt-auto border-t border-white/10 p-5 space-y-4">

       
    

        <LogoutButton />

      </div>
    </aside>
  );
}