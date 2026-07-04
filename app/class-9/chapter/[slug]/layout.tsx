import type { ReactNode } from "react";

interface ChapterLayoutProps {
  children: ReactNode;
}

export default function ChapterLayout({
  children,
}: ChapterLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {children}
      </div>
    </main>
  );
}