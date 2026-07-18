import Timer from "./Timer";
import {
  ClipboardCheck,
  CircleDot,
  BookOpen,
} from "lucide-react";

interface QuizHeaderProps {
  title: string;
  current: number;
  total: number;
  timerKey: number;
  mode?: "practice" | "exam";
  onTimeUp?: () => void;
}

export default function QuizHeader({
  title,
  current,
  total,
  timerKey,
  mode = "practice",
  onTimeUp,
}: QuizHeaderProps) {
  const progress = (current / total) * 100;

  const isExam = mode === "exam";

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div
  className={`px-8 py-5 text-white ${
          isExam
            ? "bg-gradient-to-r from-violet-700 via-violet-600 to-blue-700"
            : "bg-gradient-to-r from-violet-600 to-blue-600"
        }`}
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
              {isExam ? "CBT Exam Mode" : "Practice Mode"}
            </span>

            <h1 className="mt-4 text-2xl font-bold lg:text-3xl">
              {title}
            </h1>

            <p className="mt-2 text-white/80">
              Question {current} of {total}
            </p>

          </div>

          <Timer
  duration={isExam ? 60 * 60 : 30 * 60}
  storageKey={`timer-${title}`}
  onComplete={isExam ? onTimeUp : undefined}
/>

        </div>
      </div>

      {/* Stats */}

      <div className="grid gap-4 border-b border-slate-200 px-8 py-5 md:grid-cols-3">

        <div className="flex items-center gap-3">

          <ClipboardCheck className="h-6 w-6 text-violet-600" />

          <div>

            <p className="text-sm text-slate-500">
              Total Questions
            </p>

            <p className="text-3xl font-bold tracking-wide">
              {total}
            </p>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <CircleDot className="h-6 w-6 text-blue-600" />

          <div>

            <p className="text-sm text-slate-500">
              Current
            </p>

            <p className="text-2xl font-bold tracking-wide">
              {current}
            </p>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <BookOpen className="h-6 w-6 text-emerald-600" />

          <div>

            <p className="text-sm text-slate-500">
              Remaining
            </p>

            <p className="text-2xl font-bold tracking-wide">
              {total - current}
            </p>

          </div>

        </div>

      </div>

      {/* Progress */}

      <div className="px-8 py-5">

        <div className="mb-3 flex items-center justify-between">

          <span className="font-medium text-slate-700">
            Progress
          </span>

          <span className="text-lg font-bold text-violet-700">
            {Math.round(progress)}%
          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-200">

          <div
            className={`h-full rounded-full transition-all duration-500 ${
              isExam
                ? "bg-gradient-to-r from-violet-700 via-violet-600 to-blue-700"
                : "bg-gradient-to-r from-violet-600 to-blue-600"
            }`}
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

    </section>
  );
}