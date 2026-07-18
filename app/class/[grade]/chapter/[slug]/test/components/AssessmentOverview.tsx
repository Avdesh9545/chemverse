interface Props {
  questions: number;
  duration: number;
  passingScore: string;
  difficulty: string;
}

export default function AssessmentOverview({
  questions,
  duration,
  passingScore,
  difficulty,
}: Props) {
  return (
    <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">
        Assessment Overview
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-4">
        <div>
          <p className="text-sm uppercase tracking-wider text-slate-500">
            Questions
          </p>

          <p className="mt-2 text-3xl font-bold">
            {questions}
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wider text-slate-500">
            Duration
          </p>

          <p className="mt-2 text-3xl font-bold">
            {duration} min
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wider text-slate-500">
            Passing Score
          </p>

          <p className="mt-2 text-3xl font-bold">
            {passingScore}
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wider text-slate-500">
            Difficulty
          </p>

          <p className="mt-2 text-3xl font-bold">
            {difficulty}
          </p>
        </div>
      </div>
    </section>
  );
}