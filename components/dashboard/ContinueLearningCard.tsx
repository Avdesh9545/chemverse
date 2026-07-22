import Link from "next/link";
type ContinueLearningCardProps = {
  chapterTitle: string;
  chapterSlug: string;
  notesCompleted: boolean;
  quizCompleted: boolean;
};


export default function ContinueLearningCard({
  chapterTitle,
  chapterSlug,
  notesCompleted,
  quizCompleted,
}: ContinueLearningCardProps) {
  return (
    <section className="min-h-[320px] rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">
        Continue Learning
      </p>

      <h2 className="mt-4 text-2xl font-bold text-slate-900">
        {chapterTitle}
      </h2>

      <div className="mt-6 space-y-2 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-slate-600">Notes</span>

          <span
            className={
              notesCompleted
                ? "font-semibold text-green-600"
                : "font-semibold text-amber-600"
            }
          >
            {notesCompleted ? "Completed" : "Pending"}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-600">Quiz</span>

          <span
            className={
              quizCompleted
                ? "font-semibold text-green-600"
                : "font-semibold text-amber-600"
            }
          >
            {quizCompleted ? "Completed" : "Pending"}
          </span>
        </div>
      </div>

      <Link
  href={`/class/9/chapter/${chapterSlug}`}
  className="mt-8 block w-full rounded-2xl bg-violet-600 py-3 text-center font-semibold text-white transition hover:bg-violet-700"
>
  Continue →
</Link>
    </section>
  );
}