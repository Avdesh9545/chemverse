import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  Download,
  FileQuestion,
  PlayCircle,
  Trophy,
  Clock3,
} from "lucide-react";

interface ActivityCardProps {
  title: string;
  description: string;
  href?: string;
  available: boolean;
  icon:
    | "notes"
    | "practice"
    | "test"
    | "videos"
    | "downloads"
    | "pyqs";
}

const config = {
  notes: {
    icon: BookOpen,
    color: "bg-blue-100 text-blue-700",
  },
  practice: {
    icon: ClipboardCheck,
    color: "bg-violet-100 text-violet-700",
  },
  test: {
    icon: Trophy,
    color: "bg-orange-100 text-orange-700",
  },
  videos: {
    icon: PlayCircle,
    color: "bg-rose-100 text-rose-700",
  },
  downloads: {
    icon: Download,
    color: "bg-emerald-100 text-emerald-700",
  },
  pyqs: {
    icon: FileQuestion,
    color: "bg-indigo-100 text-indigo-700",
  },
};

export default function ActivityCard({
  title,
  description,
  href,
  available,
  icon,
}: ActivityCardProps) {
  const item = config[icon];
  const Icon = item.icon;

  const card = (
    <div
      className={`group h-full rounded-3xl border bg-white p-6 transition-all duration-300 ${
        available
          ? "border-slate-200 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl"
          : "border-dashed border-slate-300 bg-slate-50"
      }`}
    >
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}
      >
        <Icon
          className={`h-8 w-8 transition-transform duration-300 ${
            available ? "group-hover:rotate-6" : ""
          }`}
        />
      </div>

      <h3 className="mt-6 text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 min-h-[48px] leading-6 text-slate-500">
        {description}
      </p>

      <div className="mt-8 flex items-center justify-between">
        {available ? (
          <>
            <span className="font-semibold text-violet-600">
              Open
            </span>

            <ArrowRight className="h-5 w-5 text-violet-600 transition-transform group-hover:translate-x-1" />
          </>
        ) : (
          <>
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
              <Clock3 className="h-4 w-4" />
              Coming Soon
            </span>
          </>
        )}
      </div>
    </div>
  );

  if (!available || !href) {
    return card;
  }

  return <Link href={href}>{card}</Link>;
}