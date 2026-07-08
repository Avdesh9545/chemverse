"use client";

import { useState } from "react";

import QuizHeader from "./QuizHeader";
import QuestionCard from "./QuestionCard";
import QuestionPalette from "./QuestionPalette";
import ResultCard from "./ResultCard";
import ReviewCard from "./ReviewCard";
import FinishModal from "./FinishModal";

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

interface QuizProps {
  title: string;
  questions: Question[];
}

export default function Quiz({
  title,
  questions,
}: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, number>
  >({});

  const [quizFinished, setQuizFinished] =
  useState(false);

const [showReview, setShowReview] =
  useState(false);

const [showFinishModal, setShowFinishModal] =
  useState(false);
  const [timerKey, setTimerKey] =
  useState(0);
  const [markedForReview, setMarkedForReview] =
  useState<Record<number, boolean>>({});
  const question = questions[currentQuestion];
  const answeredCount = Object.keys(selectedAnswers).length;

  function handleSelect(optionIndex: number) {
  setSelectedAnswers((prev) => {
    const updated = { ...prev };

    if (updated[currentQuestion] === optionIndex) {
      delete updated[currentQuestion];
    } else {
      updated[currentQuestion] = optionIndex;
    }

    return updated;
  });
}

  function handleRetry() {
  setCurrentQuestion(0);
  setSelectedAnswers({});
  setQuizFinished(false);
  setShowReview(false);
  setShowFinishModal(false);
  setMarkedForReview({});
  setTimerKey((prev) => prev + 1);
}

  function calculateResult() {
    let correct = 0;

    questions.forEach((question, index) => {
      if (
        selectedAnswers[index] ===
        question.answer
      ) {
        correct++;
      }
    });

    const attempted =
      Object.keys(selectedAnswers).length;

    return {
      correct,
      wrong: attempted - correct,
      skipped:
        questions.length - attempted,
    };
  }

  if (quizFinished) {
  const result = calculateResult();

  if (showReview) {
    return (
      <ReviewCard
        questions={questions}
        selectedAnswers={selectedAnswers}
        onBack={() => setShowReview(false)}
      />
    );
  }

  return (
    <ResultCard
      total={questions.length}
      correct={result.correct}
      wrong={result.wrong}
      skipped={result.skipped}
      onRetry={handleRetry}
      onReview={() => setShowReview(true)}
    />
  );
}

  return (
  <>
    <FinishModal
      open={showFinishModal}
      answered={answeredCount}
      total={questions.length}
      onCancel={() => setShowFinishModal(false)}
      onSubmit={() => {
        setShowFinishModal(false);
        setQuizFinished(true);
      }}
    />

    <div className="grid gap-8 lg:grid-cols-4">

      {/* Left Side */}

      <div className="space-y-8 lg:col-span-3">

        <QuizHeader
        title={title}
        current={currentQuestion + 1}
        total={questions.length}
        timerKey={timerKey}
        />

        <QuestionCard
          question={question.question}
          options={question.options}
          selected={
            selectedAnswers[currentQuestion] ??
            null
          }
          onSelect={handleSelect}
        />

        <div className="flex items-center justify-between">

  <button
    disabled={currentQuestion === 0}
    onClick={() =>
      setCurrentQuestion((prev) => prev - 1)
    }
    className="rounded-xl border-2 border-violet-600 bg-white px-6 py-3 font-semibold text-violet-600 shadow-sm transition-all duration-200 hover:bg-violet-50 hover:shadow-md active:scale-95 disabled:cursor-not-allowed disabled:border-slate-300 disabled:text-slate-400"
  >
    ← Previous
  </button>

  <div className="flex gap-3">

    <button
      onClick={() =>
        setMarkedForReview((prev) => ({
          ...prev,
          [currentQuestion]: !prev[currentQuestion],
        }))
      }
      className={`rounded-xl px-6 py-3 font-semibold shadow-sm transition-all duration-200 ${
        markedForReview[currentQuestion]
          ? "bg-amber-600 text-white hover:bg-amber-700"
          : "border border-amber-500 bg-white text-amber-600 hover:bg-amber-50"
      }`}
    >
      {markedForReview[currentQuestion]
        ? "★ Marked"
        : "☆ Mark for Review"}
    </button>

    {currentQuestion === questions.length - 1 ? (
      <button
        onClick={() =>
          setShowFinishModal(true)
        }
        className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-green-700"
      >
        🏁 Finish Quiz
      </button>
    ) : (
      <button
        onClick={() =>
          setCurrentQuestion((prev) => prev + 1)
        }
        className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-violet-700"
      >
        Save & Next →
      </button>
    )}

  </div>

</div>

      </div>

      {/* Right Side */}

      <div className="h-fit lg:sticky lg:top-24">

        <QuestionPalette
          total={questions.length}
          current={currentQuestion}
          answered={selectedAnswers}
          markedForReview={markedForReview}
          onSelect={setCurrentQuestion}
          />

      </div>

    </div>
          </>
  );
}