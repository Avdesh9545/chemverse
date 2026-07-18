"use client";

import { useMemo, useState } from "react";

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

interface UseQuizProps {
  questions: QuizQuestion[];
}

export default function useQuiz({
  questions,
}: UseQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswers, setSelectedAnswers] =
    useState<Record<number, number>>({});

  const [markedForReview, setMarkedForReview] =
    useState<Record<number, boolean>>({});

  const [quizFinished, setQuizFinished] =
    useState(false);

  const [showReview, setShowReview] =
    useState(false);

  const [showFinishModal, setShowFinishModal] =
    useState(false);

  const [timeUp, setTimeUp] =
    useState(false);

  const [timerKey, setTimerKey] =
    useState(0);

  const [startTime] =
    useState(() => Date.now());

  const [submittedAt, setSubmittedAt] =
    useState<number | null>(null);

  const current = questions[currentQuestion];

  const answeredCount =
    Object.keys(selectedAnswers).length;

  function selectAnswer(option: number) {
    setSelectedAnswers((prev) => {
      const updated = { ...prev };

      if (updated[currentQuestion] === option) {
        delete updated[currentQuestion];
      } else {
        updated[currentQuestion] = option;
      }

      return updated;
    });
  }

  function clearAnswer() {
    setSelectedAnswers((prev) => {
      const updated = { ...prev };
      delete updated[currentQuestion];
      return updated;
    });
  }

  function nextQuestion() {
    setCurrentQuestion((prev) =>
      Math.min(prev + 1, questions.length - 1)
    );
  }

  function previousQuestion() {
    setCurrentQuestion((prev) =>
      Math.max(prev - 1, 0)
    );
  }

  function jumpToQuestion(index: number) {
    setCurrentQuestion(index);
  }

  function toggleMarkForReview() {
    setMarkedForReview((prev) => ({
      ...prev,
      [currentQuestion]:
        !prev[currentQuestion],
    }));
  }

  function markForReviewAndNext() {
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

  function finishQuiz() {
    setSubmittedAt(Date.now());
    setQuizFinished(true);
  }

  function retryQuiz(storageKey?: string) {
    if (storageKey) {
      localStorage.removeItem(storageKey);
      localStorage.removeItem(
        storageKey.replace("quiz-", "timer-")
      );
    }

    setCurrentQuestion(0);
    setSelectedAnswers({});
    setMarkedForReview({});
    setQuizFinished(false);
    setShowReview(false);
    setShowFinishModal(false);
    setTimeUp(false);
    setSubmittedAt(null);
    setTimerKey((prev) => prev + 1);
  }

  const result = useMemo(() => {
    let correct = 0;

    questions.forEach((q, i) => {
      if (selectedAnswers[i] === q.answer)
        correct++;
    });

    const attempted =
      Object.keys(selectedAnswers).length;

    return {
      correct,
      wrong: attempted - correct,
      skipped: questions.length - attempted,
    };
  }, [questions, selectedAnswers]);

  const timeTaken =
    submittedAt === null
      ? 0
      : Math.round((submittedAt - startTime) / 1000);

  return {
    current,
    currentQuestion,
    answeredCount,

    selectedAnswers,
    markedForReview,

    quizFinished,
    showReview,
    showFinishModal,

    timerKey,
    timeUp,

    result,
    timeTaken,

    setCurrentQuestion,
    setSelectedAnswers,
    setMarkedForReview,

    setQuizFinished,
    setShowReview,
    setShowFinishModal,
    setTimeUp,

    selectAnswer,
    clearAnswer,

    nextQuestion,
    previousQuestion,
    jumpToQuestion,

    toggleMarkForReview,
    markForReviewAndNext,

    finishQuiz,
    retryQuiz,
  };
}