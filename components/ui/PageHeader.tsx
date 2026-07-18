import { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: Props) {
  return (
    <header className="mb-10">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">
          {eyebrow}
        </p>
      )}

      <h1 className="mt-2 text-5xl font-bold text-slate-900">
        {title}
      </h1>

      {description && (
        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          {description}
        </p>
      )}

      {actions && (
        <div className="mt-6">
          {actions}
        </div>
      )}
    </header>
  );
}