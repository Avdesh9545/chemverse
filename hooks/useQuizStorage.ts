"use client";

import { useEffect } from "react";

interface QuizStorageProps {
  keyName: string;
  currentQuestion: number;
  selectedAnswers: Record<number, number>;
  markedForReview: Record<number, boolean>;
  setCurrentQuestion: (value: number) => void;
  setSelectedAnswers: (value: Record<number, number>) => void;
  setMarkedForReview: (value: Record<number, boolean>) => void;
}

export default function useQuizStorage({
  keyName,
  currentQuestion,
  selectedAnswers,
  markedForReview,
  setCurrentQuestion,
  setSelectedAnswers,
  setMarkedForReview,
}: QuizStorageProps) {
  // Restore once on mount
  useEffect(() => {
    const saved = localStorage.getItem(keyName);

    if (!saved) return;

    try {
      const data = JSON.parse(saved);

      setCurrentQuestion(data.currentQuestion ?? 0);
      setSelectedAnswers(data.selectedAnswers ?? {});
      setMarkedForReview(data.markedForReview ?? {});
    } catch {
      console.warn("Failed to restore quiz state");
    }
  }, []);

  // Save whenever state changes
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