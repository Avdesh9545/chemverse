import { ReactNode } from "react";

type DashboardGridProps = {
  children: ReactNode;
};

export default function DashboardGrid({
  children,
}: DashboardGridProps) {
  return (
    <section className="grid gap-8 lg:grid-cols-2">
      {children}
    </section>
  );
}