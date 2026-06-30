import {
  LayoutDashboard,
  Mic,
  FileSearch,
  ChartColumn,
  History,
  User,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Mock Interview",
    href: "/dashboard/interview/setup",
    icon: Mic,
  },
  {
    title: "Resume Analyzer",
    href: "/dashboard/resume",
    icon: FileSearch,
  },
  {
    title: "Insights",
    href: "/dashboard/performance",
    icon: ChartColumn,
  },
  {
    title: "History",
    href: "/dashboard/history",
    icon: History,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];