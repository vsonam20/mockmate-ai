import { ReactNode } from "react";

interface OptionGridProps {
  children: ReactNode;
}

export default function OptionGrid({
  children,
}: OptionGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {children}
    </div>
  );
}