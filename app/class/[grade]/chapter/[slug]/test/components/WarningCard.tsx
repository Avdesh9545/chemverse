import { TriangleAlert } from "lucide-react";

export default function WarningCard() {
  return (
    <section className="mt-10 rounded-3xl border border-amber-300 bg-amber-50 p-8">
      <div className="flex gap-4">
        <TriangleAlert className="mt-1 h-7 w-7 text-amber-600" />

        <div>
          <h2 className="text-xl font-bold text-amber-900">
            Important
          </h2>

          <p className="mt-3 leading-7 text-amber-800">
            Once you start the assessment,
            the timer cannot be paused.
            Your answers will automatically
            be submitted when the time expires.
          </p>
        </div>
      </div>
    </section>
  );
}