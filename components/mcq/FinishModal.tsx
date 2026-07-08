interface FinishModalProps {
  open: boolean;
  answered: number;
  total: number;
  onCancel: () => void;
  onSubmit: () => void;
}

export default function FinishModal({
  open,
  answered,
  total,
  onCancel,
  onSubmit,
}: FinishModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">

        <h2 className="text-2xl font-bold text-slate-900">
          Finish Quiz?
        </h2>

        <p className="mt-3 text-slate-600">
        Once submitted, you cannot change your answers.
        </p>

        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">

  <div className="flex items-center justify-between">
    <span className="font-medium text-slate-700">
      Answered
    </span>

    <span className="rounded-full bg-green-100 px-3 py-1 font-semibold text-green-700">
      {answered}
    </span>
  </div>
  {total - answered > 0 ? (
  <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800">
    ⚠ You still have{" "}
    <strong>{total - answered}</strong>{" "}
    unanswered question
    {total - answered > 1 ? "s" : ""}.
  </div>
) : (
  <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">
    ✅ All questions have been answered.
  </div>
)}

  <div className="mt-4 flex items-center justify-between">
    <span className="font-medium text-slate-700">
      Not Answered
    </span>

    <span className="rounded-full bg-red-100 px-3 py-1 font-semibold text-red-700">
      {total - answered}
    </span>
  </div>

</div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="rounded-xl border border-slate-300 px-5 py-3 hover:bg-slate-100"
          >
            Continue Test
          </button>

          <button
            onClick={onSubmit}
            className="rounded-xl bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700"
          >
            Submit Quiz
          </button>
        </div>

      </div>
    </div>
  );
}