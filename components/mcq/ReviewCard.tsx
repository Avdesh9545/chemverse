"use client";

import { useState } from "react";

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

export default function ReviewCard({
  questions,
  selectedAnswers,
  onBack,
}: ReviewCardProps) {
  const [current, setCurrent] = useState(0);

  const question = questions[current];
  const userAnswer = selectedAnswers[current];

  const status =
    userAnswer === undefined
      ? "skipped"
      : userAnswer === question.answer
      ? "correct"
      : "wrong";

  function badge() {
    switch (status) {
      case "correct":
        return (
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            ✓ Correct
          </span>
        );

      case "wrong":
        return (
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
            ✗ Incorrect
          </span>
        );

      default:
        return (
          <span className="rounded-full bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-600">
            Not Attempted
          </span>
        );
    }
  }

  return (
    <section className="mx-auto max-w-5xl space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold">
            Review Answers
          </h1>

          <p className="mt-2 text-slate-500">
            Question {current + 1} of {questions.length}
          </p>
        </div>

        <div className="flex items-center gap-4">
          {badge()}

          <button
            onClick={onBack}
            className="rounded-xl border border-slate-300 px-5 py-3 transition hover:bg-slate-100"
          >
            ← Back
          </button>
        </div>
      </div>

      {/* Progress */}

      <div className="h-3 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-violet-600 transition-all"
          style={{
            width: `${((current + 1) / questions.length) * 100}%`,
          }}
        />
      </div>

      {/* Question */}

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

        <h2 className="text-2xl font-bold">
          Question {current + 1}
        </h2>

        <p className="mt-5 text-lg leading-8">
          {question.question}
        </p>

        <div className="mt-8 space-y-4">

          {question.options.map((option, index) => {

            let classes =
              "rounded-xl border p-5 transition";

            let label = "";

            if (index === question.answer) {
              classes +=
                " border-green-600 bg-green-50";

              label = "✓ Correct Answer";
            }

            if (
              index === userAnswer &&
              userAnswer !== question.answer
            ) {
              classes =
                "rounded-xl border border-red-600 bg-red-50 p-5";

              label = "Your Answer";
            }

            return (
              <div
                key={index}
                className={classes}
              >
                <div className="flex items-center justify-between">

                  <span>{option}</span>

                  {label && (
                    <span className="text-sm font-semibold">
                      {label}
                    </span>
                  )}

                </div>
              </div>
            );
          })}
        </div>

        {/* Explanation */}

        <div className="mt-10 rounded-2xl border border-violet-200 bg-violet-50 p-6">

          <h3 className="text-lg font-bold">
            Explanation
          </h3>

          <p className="mt-3 leading-7 text-slate-700">
            {question.explanation}
          </p>

        </div>
      </div>

      {/* Navigation */}

      <div className="flex items-center justify-between">

        <button
          disabled={current === 0}
          onClick={() => setCurrent((p) => p - 1)}
          className="rounded-xl border border-slate-300 px-6 py-3 disabled:opacity-40"
        >
          ← Previous
        </button>

        <button
          disabled={current === questions.length - 1}
          onClick={() => setCurrent((p) => p + 1)}
          className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white disabled:opacity-40"
        >
          Next →
        </button>

      </div>

    </section>
  );
}