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
  const answeredCount =
    Object.keys(answered).length;

  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h3 className="text-2xl font-bold text-slate-900">
        Question Palette
      </h3>

      {/* Legend */}

      <div className="mt-6 space-y-3 text-sm">

        <div className="flex items-center gap-3">
          <div className="h-4 w-4 rounded bg-violet-600" />
          <span>Current Question</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-4 w-4 rounded bg-green-500" />
          <span>Answered</span>
        </div>
        <div className="flex items-center gap-3">
        <div className="h-4 w-4 rounded bg-amber-500" />
        <span>Marked for Review</span>
        </div>
        <div className="flex items-center gap-3">
        <div className="h-4 w-4 rounded bg-yellow-400" />
        <span>Answered & Marked</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-4 w-4 rounded border border-slate-400 bg-white" />
          <span>Not Answered</span>
        </div>

      </div>

      <hr className="my-6" />

      {/* Palette */}

      <div className="grid grid-cols-4 gap-3">

        {Array.from({ length: total }).map((_, index) => {

          const isCurrent =
            current === index;

          const isAnswered =
            answered[index] !== undefined;
          
          const isMarked =
            markedForReview[index] === true;  

          let classes =
            "aspect-square w-full rounded-xl border text-sm font-bold transition-all duration-200 hover:scale-105";

          if (isCurrent) {
  classes +=
    " border-violet-600 bg-violet-600 text-white";
} else if (isAnswered && isMarked) {
  classes +=
    " border-yellow-400 bg-yellow-400 text-black";
} else if (isMarked) {
  classes +=
    " border-amber-500 bg-amber-500 text-white";
} else if (isAnswered) {
  classes +=
    " border-green-500 bg-green-500 text-white";
} else {
  classes +=
    " border-slate-300 bg-white hover:bg-slate-100";
}
         

          return (
            <button
              key={index}
              onClick={() => onSelect(index)}
              className={classes}
            >
              {index + 1}
            </button>
          );
        })}

      </div>

      <hr className="my-6" />

      {/* Statistics */}

      <div className="space-y-3 text-sm">

        <div className="flex justify-between">
          <span>Answered</span>
          <span className="font-bold text-green-600">
            {answeredCount}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Remaining</span>
          <span className="font-bold text-slate-700">
            {total - answeredCount}
          </span>
        </div>

      </div>

    </aside>
  );
}