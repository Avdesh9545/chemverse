interface ResultCardProps {
  total: number;
  correct: number;
  wrong: number;
  skipped: number;
  onRetry: () => void;
  onReview: () => void;
}

export default function ResultCard({
  total,
  correct,
  wrong,
  skipped,
  onRetry,
  onReview,
}: ResultCardProps) {
  const percentage = Math.round((correct / total) * 100);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">

      <h1 className="text-center text-4xl font-bold text-slate-900">
        🎉 Quiz Completed
      </h1>

      <p className="mt-3 text-center text-lg text-slate-600">
        Here is your performance summary.
      </p>

      <div className="mt-10 text-center">

        <p className="text-slate-500">
          Your Score
        </p>

        <h2 className="mt-2 text-6xl font-bold text-violet-600">
          {correct} / {total}
        </h2>

        <p className="mt-3 text-2xl font-semibold text-slate-700">
          {percentage}%
        </p>

      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">

        <div className="rounded-xl bg-green-50 p-6 text-center">
          <p className="text-sm text-slate-500">
            Correct
          </p>

          <h3 className="mt-2 text-3xl font-bold text-green-600">
            {correct}
          </h3>
        </div>

        <div className="rounded-xl bg-red-50 p-6 text-center">
          <p className="text-sm text-slate-500">
            Wrong
          </p>

          <h3 className="mt-2 text-3xl font-bold text-red-600">
            {wrong}
          </h3>
        </div>

        <div className="rounded-xl bg-yellow-50 p-6 text-center">
          <p className="text-sm text-slate-500">
            Skipped
          </p>

          <h3 className="mt-2 text-3xl font-bold text-yellow-600">
            {skipped}
          </h3>
        </div>

      </div>

      {/* Buttons */}

      <div className="mt-12 flex flex-wrap justify-center gap-4">

        <button
          onClick={onReview}
          className="rounded-xl border-2 border-violet-600 bg-white px-8 py-4 font-semibold text-violet-600 transition-all duration-200 hover:bg-violet-50"
        >
          📖 Review Answers
        </button>

        <button
          onClick={onRetry}
          className="rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white transition-all duration-200 hover:bg-violet-700"
        >
          🔄 Retry Quiz
        </button>

      </div>

    </section>
  );
}