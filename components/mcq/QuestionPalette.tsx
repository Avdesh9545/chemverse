"use client";

interface QuestionPaletteProps {
  total: number;
  current: number;
  answered: Record<number, number>;
  markedForReview: Record<number, boolean>;
  onSelect: (index: number) => void;
}

export default function QuestionPalette({
  total,
  current,
  answered,
  markedForReview,
  onSelect,
}: QuestionPaletteProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-xl font-bold text-slate-800">
        Question Palette
      </h2>

      <div className="grid grid-cols-5 gap-4">

        {Array.from({ length: total }).map((_, index) => {

          const isCurrent = current === index;
          const isAnswered = answered[index] !== undefined;
          const isMarked = markedForReview[index];

          let color =
            "bg-white border-slate-300 text-slate-700 hover:bg-slate-100";

          if (isAnswered)
            color =
              "bg-green-500 border-green-500 text-white";

          if (isMarked)
            color =
              "bg-amber-500 border-amber-500 text-white";

          if (isCurrent)
            color =
              "bg-violet-600 border-violet-600 text-white ring-4 ring-violet-200";

          return (
            <button
              key={index}
              onClick={() => onSelect(index)}
              className={`flex h-12 w-12 items-center justify-center rounded-xl border font-semibold transition-all duration-200 hover:scale-105 active:scale-95 active:scale-95 ${color}`}
            >
              {index + 1}
            </button>
          );
        })}

      </div>

      <div className="mt-8 space-y-4 border-t border-slate-100 pt-6 text-sm">

        <Legend
          color="ring-4 ring-violet-200 scale-110"
          label="Current Question"
        />

        <Legend
          color="bg-green-500"
          label="Answered"
        />

        <Legend
          color="bg-amber-500"
          label="Marked for Review"
        />

        <Legend
          color="bg-white border"
          label="Not Visited / Unanswered"
        />

      </div>

    </div>
  );
}

interface LegendProps {
  color: string;
  label: string;
}

function Legend({
  color,
  label,
}: LegendProps) {
  return (
    <div className="flex items-center gap-3">

      <div
        className={`h-5 w-5 rounded ${color}`}
      />

      <span>{label}</span>

    </div>
  );
}