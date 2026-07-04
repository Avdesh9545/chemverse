import Link from "next/link";

interface ResourceCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export default function ResourceCard({
  title,
  description,
  href,
  icon,
}: ResourceCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl"
    >
      <div className="text-5xl">{icon}</div>

      <h3 className="mt-5 text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-slate-600">
        {description}
      </p>

      <div className="mt-6 font-semibold text-violet-600">
        Explore →
      </div>
    </Link>
  );
}