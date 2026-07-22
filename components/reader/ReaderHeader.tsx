import { BookOpen, Clock3 } from "lucide-react";
import { ChapterContent } from "@/data/curriculum/types";

interface ReaderHeaderProps {
  chapter: ChapterContent;
  currentPage: number;
  totalPages: number;
}

export default function ReaderHeader({
  chapter,
  currentPage,
  totalPages,
}: ReaderHeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-white px-10 py-8">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-600">
        CLASS {chapter.metadata.grade} • CHEMISTRY
      </p>

      <h1 className="mt-3 text-5xl font-bold tracking-tight text-slate-900">
        {chapter.metadata.title}
      </h1>

      <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-violet-600" />
          <span>
            Topic <strong>{currentPage + 1}</strong> of{" "}
            <strong>{totalPages}</strong>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Clock3 className="h-4 w-4 text-violet-600" />
          <span>{chapter.metadata.estimatedStudyTime} min study plan</span>
        </div>
      </div>
    </header>
  );
}