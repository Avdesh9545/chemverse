"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import QuizHeader from "./QuizHeader";
import QuestionCard from "./QuestionCard";
import QuestionPalette from "./QuestionPalette";
import ResultCard from "./ResultCard";
import ReviewCard from "./ReviewCard";
import FinishModal from "./FinishModal";
import QuizNavigation from "./QuizNavigation";
import useQuizStorage from "@/hooks/useQuizStorage";


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
  mode?: "practice" | "exam";
}

export default function Quiz({
  title,
  questions,
  mode = "practice",
}: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  const [quizFinished, setQuizFinished] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showFinishModal, setShowFinishModal] = useState(false);
  const [timerKey, setTimerKey] = useState(0);
  const [timeUp, setTimeUp] = useState(false);
  const [startTime] = useState(() => Date.now());
  const [submittedAt, setSubmittedAt] = useState<number | null>(null);
  useQuizStorage({
  keyName: `quiz-${title}`,
  currentQuestion,
  selectedAnswers,
  markedForReview,
  setCurrentQuestion,
  setSelectedAnswers,
  setMarkedForReview,
});

  const question = questions[currentQuestion];
  const answeredCount = Object.keys(selectedAnswers).length;
  const isExam = mode === "exam";
  const router = useRouter();
  function handleSelect(optionIndex: number) {
    if (timeUp) return;

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

  function handleClearResponse() {
    if (timeUp) return;

    setSelectedAnswers((prev) => {
      const updated = { ...prev };
      delete updated[currentQuestion];
      return updated;
    });
  }

  function handleSaveAndMarkForReview() {
    if (timeUp) return;

    setMarkedForReview((prev) => ({
      ...prev,
      [currentQuestion]: true,
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowFinishModal(true);
    }
  }

  function handleRetry() {
  localStorage.removeItem(`quiz-${title}`);
  localStorage.removeItem(`timer-${title}`);

  setCurrentQuestion(0);
  setSelectedAnswers({});
  setMarkedForReview({});
  setQuizFinished(false);
  setShowReview(false);
  setShowFinishModal(false);
  setTimeUp(false);
  setSubmittedAt(null);
  setTimerKey((k) => k + 1);
}

  function calculateResult() {
    let correct = 0;
    
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) correct++;
    });
   /* const timeTaken =
  submittedAt === null
    ? 0
    : Math.round((submittedAt - startTime) / 1000);*/

const attempted = Object.keys(selectedAnswers).length;

    return {
      correct,
      wrong: attempted - correct,
      skipped: questions.length - attempted,
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

    if (isExam) {
  return (
    <ResultCard
      total={questions.length}
      correct={result.correct}
      wrong={result.wrong}
      skipped={result.skipped}
      onRetry={handleRetry}
      onReview={() => setShowReview(true)}
      examMode
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
  localStorage.removeItem(`quiz-${title}`);
  localStorage.removeItem(`timer-${title}`);

  const submitted = Date.now();

  setSubmittedAt(submitted);
  setShowFinishModal(false);

  if (isExam) {
    let correct = 0;

    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        correct++;
      }
    });

    const attempted = Object.keys(selectedAnswers).length;

    sessionStorage.setItem(
  "assessment-result",
  JSON.stringify({
    title,
    total: questions.length,
    correct,
    wrong: attempted - correct,
    skipped: questions.length - attempted,
    questions,
    selectedAnswers,
    submittedAt: submitted,
  })
);

    router.push("result");
    return;
  }

  setQuizFinished(true);
}}
      />

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0 space-y-8">
          <QuizHeader
  title={title}
  current={currentQuestion + 1}
  total={questions.length}
  timerKey={timerKey}
  mode={mode}
  onTimeUp={() => {
    setTimeUp(true);
    setQuizFinished(true);
  }}
/>


<QuestionCard
            question={question.question}
            options={question.options}
            selected={selectedAnswers[currentQuestion] ?? null}
            onSelect={handleSelect}
          />

          <QuizNavigation
  current={currentQuestion}
  total={questions.length}
  onPrevious={() =>
    setCurrentQuestion((q) => Math.max(0, q - 1))
  }
  onNext={() => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((q) => q + 1);
    } else {
      setShowFinishModal(true);
    }
  }}
  onClear={handleClearResponse}
  onMarkForReview={handleSaveAndMarkForReview}
  onFinish={() => setShowFinishModal(true)}
/>
        </div>

        <div className="sticky top-24 h-fit">
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
