import Link from "next/link";
import {
  BookOpen,
  FileQuestion,
  Clock3,
  ChevronRight,
} from "lucide-react";

type GradeCardProps = {
  grade: string;
  title: string;
  chapters: number;
  description: string;
  link: string;
};

const colors = [
  "from-violet-500 to-purple-600",
  "from-violet-500 to-purple-600",
  "from-violet-500 to-purple-600",
  "from-violet-500 to-purple-600",
];
const icons = ["🧪", "⚛️", "⚗️", "🔬"];

export default function GradeCard({
  grade,
  title,
  //chapters,
  description,
  link,
}: GradeCardProps) {
  const gradeNumber = Number(grade.replace(/\D/g, "")) || 9;
  const index = Math.min(Math.max(gradeNumber - 9, 0), 3);

  return (
    <Link
      href={link}
      className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-2xl"
    >
      {/* Header */}

      <div
        className={`bg-gradient-to-r ${colors[index]} p-8 text-white`}
      >
        <div className="flex items-center justify-between">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
            {grade}
          </span>

          <span className="text-5xl">
            {icons[index]}
          </span>

        </div>

        <h2 className="mt-8 text-4xl font-extrabold tracking-tight">
  {title}
</h2>

      </div>

      {/* Body */}

      <div className="space-y-6 p-8">

        <p className="min-h-21 leading-7 text-slate-600">
          {description}
        </p>

        {/* Resources */}

        <div className="grid grid-cols-2 gap-3">

          <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-violet-50 hover:text-violet-700">
            <BookOpen size={18} />
            Notes
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-violet-50 hover:text-violet-700">
            <FileQuestion size={18} />
            MCQs
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-violet-50 hover:text-violet-700">
            📄
            PYQs
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-violet-50 hover:text-violet-700">
            🎥
            Videos
          </div>

        </div>

        {/* Footer */}

        <div className="flex items-center justify-between border-t pt-6">

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Clock3 size={16} />
            Self-paced
          </div>

          <div className="flex items-center gap-2 font-semibold text-violet-600 transition-transform duration-300 group-hover:translate-x-2">
            Start Learning
            <ChevronRight size={18} />
          </div>

        </div>

      </div>
    </Link>
  );
}