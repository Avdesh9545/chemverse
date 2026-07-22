interface ReaderGoalProps {
  goals?: string[];
}

export default function ReaderGoal({ goals }: ReaderGoalProps) {
  if (!goals || goals.length === 0) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-violet-200 bg-violet-50/50 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-white">
          🎯
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Learning Goals
          </h3>

          <p className="text-sm text-slate-600">
            After this topic, you should be able to:
          </p>
        </div>
      </div>

      <ul className="mt-5 space-y-3">
        {goals.map((goal, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-slate-700"
          >
            <span className="mt-1 text-violet-600">✓</span>

            <span>{goal}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}