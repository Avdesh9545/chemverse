"use client";

import {
  ArrowLeft,
  CheckCircle2,
  CircleDashed,
  XCircle,
  Check,
  X,
} from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

interface ReviewCardProps {
  questions: Question[];
  selectedAnswers: Record<number, number>;
  onBack: () => void;
}

const labels = ["A", "B", "C", "D"];

export default function ReviewCard({
  questions,
  selectedAnswers,
  onBack,
}: ReviewCardProps) {
  return (
    <main className="mx-auto max-w-6xl space-y-8">

      {/* Header */}

      <section className="rounded-3xl bg-gradient-to-r from-violet-700 to-blue-700 p-10 text-white shadow-xl">

        <button
          onClick={onBack}
          className="mb-6 inline-flex items-center gap-2 rounded-xl bg-white/20 px-4 py-2 font-medium transition hover:bg-white/30"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Result
        </button>

        <h1 className="text-4xl font-bold">
          Answer Review
        </h1>

        <p className="mt-3 text-lg text-white/90">
          Learn from every question by comparing your answer with the correct solution.
        </p>

      </section>

      {questions.map((q, qIndex) => {

        const selected = selectedAnswers[qIndex];
        const skipped = selected === undefined;

        return (
          <section
            key={q.id}
            className="rounded-3xl border border-slate-200 bg-white shadow-sm"
          >

            {/* Question */}

            <div className="border-b border-slate-100 p-8">

              <div className="flex items-start justify-between gap-6">

                <div>

                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
                    Question {qIndex + 1}
                  </p>

                  <h2 className="mt-3 text-2xl font-bold leading-relaxed text-slate-900">
                    {q.question}
                  </h2>

                </div>

                {skipped ? (
                  <CircleDashed className="h-8 w-8 text-amber-500" />
                ) : selected === q.answer ? (
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                ) : (
                  <XCircle className="h-8 w-8 text-red-600" />
                )}

              </div>

            </div>

            {/* Options */}

            <div className="space-y-4 p-8">

              {q.options.map((option, optionIndex) => {

                const isCorrect =
                  optionIndex === q.answer;

                const isSelected =
                  optionIndex === selected;

                let classes =
                  "border-slate-200 bg-white";

                if (isCorrect) {
                  classes =
                    "border-green-500 bg-green-50";
                }

                if (
                  isSelected &&
                  !isCorrect
                ) {
                  classes =
                    "border-red-500 bg-red-50";
                }

                return (

                  <div
                    key={optionIndex}
                    className={`rounded-2xl border p-5 transition ${classes}`}
                  >

                    <div className="flex items-center justify-between gap-4">

                      <div className="flex items-center gap-4">

                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full font-bold

                          ${
                            isCorrect
                              ? "bg-green-600 text-white"
                              : isSelected
                              ? "bg-red-600 text-white"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >

                          {labels[optionIndex]}

                        </div>

                        <span className="text-lg text-slate-800">
                          {option}
                        </span>

                      </div>

                      <div className="flex gap-2">

                        {isCorrect && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                            <Check className="h-3 w-3" />
                            Correct
                          </span>
                        )}

                        {isSelected && (
                          <span
                            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold text-white

                            ${
                              isCorrect
                                ? "bg-green-600"
                                : "bg-red-600"
                            }`}
                          >
                            {isCorrect ? (
                              <Check className="h-3 w-3" />
                            ) : (
                              <X className="h-3 w-3" />
                            )}

                            Your Answer
                          </span>
                        )}

                      </div>

                    </div>

                  </div>

                );

              })}

            </div>

            {/* Explanation */}

            <div className="border-t border-slate-100 bg-slate-50 p-8">

              <h3 className="text-lg font-bold text-violet-700">
                Explanation
              </h3>

              <p className="mt-4 leading-8 text-slate-700">
                {q.explanation}
              </p>

            </div>

          </section>

        );

      })}

    </main>
  );
}