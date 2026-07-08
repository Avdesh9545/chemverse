interface QuestionCardProps {
  question: string;
  options: string[];
  selected: number | null;
  onSelect: (index: number) => void;
}

export default function QuestionCard({
  question,
  options,
  selected,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      {/* Question */}
      <h2 className="text-2xl font-bold leading-relaxed text-slate-900">
        {question}
      </h2>

      {/* Options */}
      <div className="mt-8 space-y-4">

        {options.map((option, index) => {

          const isSelected = selected === index;

          return (
            <button
              key={index}
              onClick={() => onSelect(index)}
              className={`w-full rounded-xl border p-5 text-left transition-all duration-200

                ${
                  isSelected
                    ? "border-violet-600 bg-violet-100 shadow-sm"
                    : "border-slate-300 hover:border-violet-500 hover:bg-violet-50"
                }
              `}
            >
              <span
                className={`text-lg ${
                  isSelected
                    ? "font-semibold text-slate-900"
                    : "text-slate-800"
                }`}
              >
                {option}
              </span>
            </button>
          );
        })}

      </div>

    </div>
  );
}