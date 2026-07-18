import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  value: string | number;
  label: string;
}

export default function StatCard({
  icon,
  value,
  label,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4">
        {icon}
      </div>

      <p className="text-3xl font-bold">
        {value}
      </p>

      <p className="mt-2 text-slate-500">
        {label}
      </p>
    </div>
  );
}