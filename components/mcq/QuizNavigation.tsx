interface QuizNavigationProps {
  current: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
  onClear: () => void;
  onMarkForReview: () => void;
  onFinish: () => void;
}

export default function QuizNavigation({
  current,
  total,
  onPrevious,
  onNext,
  onClear,
  onMarkForReview,
  onFinish,
}: QuizNavigationProps) {
  const isLast = current === total - 1;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex flex-wrap items-center justify-between gap-4">

        {/* Left */}

        <div className="flex flex-wrap gap-3">

          <button
            onClick={onPrevious}
            disabled={current === 0}
            className="h-12 rounded-2xl border border-slate-300 px-6 py-3 font-medium transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ← Previous
          </button>

          <button
            onClick={onClear}
            className="h-12 rounded-2xl border border-red-200 bg-red-50 px-6 py-3 font-medium text-red-700 transition hover:bg-red-100"
          >
            Clear Response
          </button>

        </div>

        {/* Right */}

        <div className="flex flex-wrap gap-3">

          <button
            onClick={onMarkForReview}
            className="h-12 rounded-2xl bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600"
          >
            Mark for Review
          </button>

          {isLast ? (
            <button
              onClick={onFinish}
              className="h-12 rounded-2xl bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Finish Test
            </button>
          ) : (
            <button
              onClick={onNext}
              className="h-12 rounded-2xl bg-violet-600 px-8 py-3 font-semibold text-white transition hover:bg-violet-700"
            >
              Next →
            </button>
          )}

        </div>

      </div>

    </div>
  );
}