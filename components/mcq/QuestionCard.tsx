interface QuestionCardProps {
  question: string;
  options: string[];
  selected: number | null;
  onSelect: (index: number) => void;
}

const labels = ["A", "B", "C", "D"];

export default function QuestionCard({
  question,
  options,
  selected,
  onSelect,
}: QuestionCardProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div className="border-b border-slate-100 px-8 py-6">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
          Question
        </p>

        <h2 className="mt-2 text-xl font-bold leading-relaxed text-slate-900">
          {question}
        </h2>

      </div>

      {/* Options */}

      <div className="space-y-4 p-6">

        {options.map((option, index) => {

          const active = selected === index;

          return (
            <button
              key={index}
              onClick={() => onSelect(index)}
              className={`group flex w-full items-center gap-5 rounded-2xl border p-5 text-left transition-all duration-200

              ${
                active
                  ? "border-violet-600 bg-violet-50 shadow-md"
                  : "border-slate-200 hover:border-violet-300 hover:bg-violet-50"
              }`}
            >

              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-bold transition

                ${
                  active
                    ? "bg-violet-600 text-white"
                    : "bg-slate-100 text-slate-700 group-hover:bg-violet-100"
                }`}
              >

                {labels[index]}

              </div>

              <span
                className={`text-lg leading-7

                ${
                  active
                    ? "font-semibold text-slate-900"
                    : "text-slate-700"
                }`}
              >

                {option}

              </span>

            </button>
          );

        })}

      </div>

    </section>
  );
}