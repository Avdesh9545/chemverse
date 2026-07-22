"use client";

import { Dispatch, SetStateAction, useEffect } from "react";

type StorageProps = {
  keyName: string;

  currentQuestion: number;
  selectedAnswers: Record<number, number>;
  markedForReview: Record<number, boolean>;

  setCurrentQuestion: Dispatch<SetStateAction<number>>;
  setSelectedAnswers: Dispatch<
    SetStateAction<Record<number, number>>
  >;
  setMarkedForReview: Dispatch<
    SetStateAction<Record<number, boolean>>
  >;
};

export default function useQuizStorage({
  keyName,

  currentQuestion,
  selectedAnswers,
  markedForReview,

  setCurrentQuestion,
  setSelectedAnswers,
  setMarkedForReview,
}: StorageProps) {
  useEffect(() => {
    const saved = localStorage.getItem(keyName);

    if (!saved) return;

    try {
      const parsed = JSON.parse(saved);

      setCurrentQuestion(parsed.currentQuestion ?? 0);
      setSelectedAnswers(parsed.selectedAnswers ?? {});
      setMarkedForReview(parsed.markedForReview ?? {});
    } catch {
      localStorage.removeItem(keyName);
    }
  }, [
    keyName,
    setCurrentQuestion,
    setSelectedAnswers,
    setMarkedForReview,
  ]);

  useEffect(() => {
    localStorage.setItem(
      keyName,
      JSON.stringify({
        currentQuestion,
        selectedAnswers,
        markedForReview,
      })
    );
  }, [
    keyName,
    currentQuestion,
    selectedAnswers,
    markedForReview,
  ]);
}