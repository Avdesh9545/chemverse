import Link from "next/link";

interface BreadcrumbProps {
  grade: number;
  title: string;
}

export default function Breadcrumb({
  grade,
  title,
}: BreadcrumbProps) {
  return (
    <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500">

      <Link
        href="/"
        className="hover:text-violet-600"
      >
        Home
      </Link>

      <span>/</span>

      <Link
        href={`/class/${grade}`}
        className="hover:text-violet-600"
      >
        Class {grade}
      </Link>

      <span>/</span>

      <span className="font-medium text-slate-900">
        {title}
      </span>

    </nav>
  );
}