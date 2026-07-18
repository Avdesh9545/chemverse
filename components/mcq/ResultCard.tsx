"use client";

import {
  Trophy,
  CircleCheckBig,
  CircleX,
 CircleDashed,
  RotateCcw,
  BookOpen,
  ArrowRight,
  Target,
} from "lucide-react";

interface ResultCardProps {
  total: number;
  correct: number;
  wrong: number;
  skipped: number;
  onRetry: () => void;
  onReview: () => void;
  examMode?: boolean;
}

export default function ResultCard({
  total,
  correct,
  wrong,
  skipped,
  onRetry,
  onReview,
  examMode = false,
}: ResultCardProps) {
  const percentage =
  total === 0
    ? 0
    : Math.round((correct / total) * 100);

const attempted = correct + wrong;

const accuracy =
  attempted === 0
    ? 0
    : Math.round((correct / attempted) * 100);
  let message = "Keep Practicing";
  let color = "text-red-600";

  if (percentage >= 90) {
    message = "Outstanding!";
    color = "text-green-600";
  } else if (percentage >= 75) {
    message = "Excellent!";
    color = "text-emerald-600";
  } else if (percentage >= 60) {
    message = "Good Job!";
    color = "text-blue-600";
  } else if (percentage >= 40) {
    message = "Keep Practising!";
    color = "text-amber-600";
  }

  return (
    <main className="mx-auto max-w-6xl space-y-8">

      {/* Hero */}

      <section className="rounded-3xl bg-gradient-to-r from-violet-700 to-blue-700 p-12 text-center text-white shadow-xl">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/20">

          <Trophy className="h-12 w-12" />

        </div>

        <h1 className="mt-6 text-4xl font-bold">

          {examMode ? "Assessment Completed" : "Quiz Completed"}

        </h1>

        <p className="mt-2 text-lg text-white/90">

          {examMode
  ? "Your assessment has been submitted successfully."
  : "You have completed this quiz."}

        </p>

      </section>

      {/* Score */}
      <Stat
  icon={<Target className="h-6 w-6 text-indigo-600" />}
  label="Attempted"
  value={`${attempted}/${total}`}
/>

      <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">

        <div className="flex flex-col items-center">

          <div className="flex h-44 w-44 items-center justify-center rounded-full border-[10px] border-violet-100">

            <span className="text-5xl font-extrabold text-violet-700">

              {percentage}%

            </span>

          </div>

          <h2 className={`mt-6 text-2xl font-bold ${color}`}>

            {message}

          </h2>

        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-6">

          <Stat
            icon={<Target className="h-6 w-6 text-violet-600" />}
            label="Score"
            value={`${correct}/${total}`}
          />

          <Stat
            icon={<CircleCheckBig className="h-6 w-6 text-green-600" />}
            label="Correct"
            value={correct.toString()}
          />

          <Stat
            icon={<CircleX className="h-6 w-6 text-red-600" />}
            label="Wrong"
            value={wrong.toString()}
          />

          <Stat
            icon={<CircleDashed className="h-6 w-6 text-amber-600" />}
            label="Skipped"
            value={skipped.toString()}
          />

          <Stat
            icon={<Target className="h-6 w-6 text-blue-600" />}
            label="Accuracy"
            value={`${accuracy}%`}
          />

        </div>

      </section>

      {/* Actions */}

      <section className="flex flex-wrap justify-center gap-4">

  {examMode ? (
    <>
      <button
        onClick={onReview}
        className="flex items-center gap-2 rounded-2xl bg-violet-600 px-8 py-4 font-semibold text-white hover:bg-violet-700"
      >
        <BookOpen className="h-5 w-5" />
        Review Answers
      </button>

      <button
        className="flex items-center gap-2 rounded-2xl border border-violet-300 px-8 py-4 font-semibold text-violet-700 hover:bg-violet-50"
      >
        Back to Chapter
        <ArrowRight className="h-5 w-5" />
      </button>
    </>
  ) : (
    <>
      <button
        onClick={onRetry}
        className="flex items-center gap-2 rounded-2xl bg-violet-600 px-8 py-4 font-semibold text-white hover:bg-violet-700"
      >
        <RotateCcw className="h-5 w-5" />
        Retry Quiz
      </button>

      <button
        onClick={onReview}
        className="flex items-center gap-2 rounded-2xl border border-slate-300 px-8 py-4 font-semibold hover:bg-slate-50"
      >
        <BookOpen className="h-5 w-5" />
        Review Answers
      </button>

      <button
        className="flex items-center gap-2 rounded-2xl border border-violet-300 px-8 py-4 font-semibold text-violet-700 hover:bg-violet-50"
      >
        Next Chapter
        <ArrowRight className="h-5 w-5" />
      </button>
    </>
  )}

</section>
    </main>
  );
}

interface StatProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function Stat({
  icon,
  label,
  value,
}: StatProps) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6 text-center">

      <div className="mb-4 flex justify-center">

        {icon}

      </div>

      <p className="text-sm text-slate-500">

        {label}

      </p>

      <p className="mt-2 text-3xl font-bold">

        {value}

      </p>

    </div>
  );
}