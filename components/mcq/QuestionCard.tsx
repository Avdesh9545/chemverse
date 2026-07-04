interface QuestionCardProps {
  question: string;
  options: string[];
}

export default function QuestionCard({
  question,
  options,
}: QuestionCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold">
        {question}
      </h2>

      <div className="mt-8 space-y-4">
        {options.map((option) => (
          <button
            key={option}
            className="w-full rounded-xl border border-slate-300 p-4 text-left transition hover:border-violet-500 hover:bg-violet-50"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}