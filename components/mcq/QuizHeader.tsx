import Timer from "./Timer";
interface QuizHeaderProps {
  title: string;
  current: number;
  total: number;
  timerKey: number;
}

export default function QuizHeader({
  title,
  current,
  total,
  timerKey,
}: QuizHeaderProps)
 {
  const progress = (current / total) * 100;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h1 className="text-3xl font-bold text-slate-900">
        {title}
      </h1>

      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <p className="font-semibold text-violet-600">
            Question {current} of {total}
          </p>

          <p className="mt-1 text-slate-500">
            Practice Mode
          </p>
        </div>

        <div className="flex flex-col items-end gap-3">

  <Timer key={timerKey} />

  <div className="text-right">
    <p className="text-sm text-slate-500">
      Progress
    </p>

    <p className="text-2xl font-bold text-violet-600">
      {Math.round(progress)}%
    </p>
  </div>

</div>
      </div>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200">

        <div
          className="h-full rounded-full bg-violet-600 transition-all duration-300"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </section>
  );
}