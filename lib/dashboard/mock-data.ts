import {
  Trophy,
  FileCheck,
  Sparkles,
  Target,
  Mic,
  FileSearch,
  ChartColumn,
  History,
} from "lucide-react";

export const dashboardStats = [
  {
    title: "Mock Interviews",
    value: "12",
    subtitle: "+3 this week",
    icon: Trophy,
  },
  {
    title: "Resume Score",
    value: "87%",
    subtitle: "Excellent ATS score",
    icon: FileCheck,
  },
  {
    title: "XP Earned",
    value: "1,250",
    subtitle: "Level 6",
    icon: Sparkles,
  },
  {
    title: "Success Rate",
    value: "91%",
    subtitle: "Across all interviews",
    icon: Target,
  },
];

export const quickActions = [
  {
    title: "Start Mock Interview",
    description: "Practice with AI-powered interview questions.",
    href: "/dashboard/interview",
    icon: Mic,
  },
  {
    title: "Interview History",
    description:
      "View all your completed interviews and AI feedback.",
    href: "/dashboard/interview/history",
    icon: History,
  },
  {
    title: "Analyze Resume",
    description: "Get ATS score and AI suggestions.",
    href: "/dashboard/resume",
    icon: FileSearch,
  },
  {
    title: "View Insights",
    description: "Track your interview performance.",
    href: "/dashboard/insights",
    icon: ChartColumn,
  },
];

export const todaysFocus = {
  title: "Behavioral Interview",
  difficulty: "Intermediate",
  duration: "20 min",
  xp: "+120 XP",
  description:
    "Based on your recent activity, practicing behavioral interviews today will help improve your communication and confidence.",
};