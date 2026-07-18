import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  FileQuestion,
  PlayCircle,
  Download,
} from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
}

const iconMap = {
  "📄": BookOpen,
  "📝": ClipboardCheck,
  "📊": FileQuestion,
  "🎥": PlayCircle,
  "⬇️": Download,
};

const colorMap = {
  "📄": {
    bg: "bg-blue-50",
    icon: "text-blue-600",
    border: "hover:border-blue-300",
  },
  "📝": {
    bg: "bg-violet-50",
    icon: "text-violet-600",
    border: "hover:border-violet-300",
  },
  "📊": {
    bg: "bg-indigo-50",
    icon: "text-indigo-600",
    border: "hover:border-indigo-300",
  },
  "🎥": {
    bg: "bg-rose-50",
    icon: "text-rose-600",
    border: "hover:border-rose-300",
  },
  "⬇️": {
    bg: "bg-emerald-50",
    icon: "text-emerald-600",
    border: "hover:border-emerald-300",
  },
};

export default function ResourceCard({
  title,
  description,
  href,
  icon,
}: ResourceCardProps) {
  const Icon = iconMap[icon as keyof typeof iconMap] ?? BookOpen;

  const color =
    colorMap[icon as keyof typeof colorMap] ??
    colorMap["📄"];

  return (
    <Link
      href={href}
      className={`group block rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${color.border}`}
    >
      <div
        className={`mb-6 inline-flex rounded-2xl ${color.bg} p-4`}
      >
        <Icon
          className={`h-8 w-8 ${color.icon}`}
        />
      </div>

      <h3 className="text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-500">
        {description}
      </p>

      <div className="mt-8 flex items-center justify-between">

        <span className="font-semibold text-slate-700">
          Open
        </span>

        <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-violet-600" />

      </div>
    </Link>
  );
}