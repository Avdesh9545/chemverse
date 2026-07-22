"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import ReviewCard from "@/components/mcq/ReviewCard";

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

interface AssessmentResult {
  title: string;
  questions: Question[];
  selectedAnswers: Record<number, number>;
}

export default function AssessmentReviewPage() {
  const router = useRouter();

const result = useMemo(() => {
  if (typeof window === "undefined") return null;

  const stored = sessionStorage.getItem("assessment-result");

  return stored
    ? JSON.parse(stored) as AssessmentResult
    : null;
}, []);

useEffect(() => {
  if (!result) {
    router.back();
  }
}, [result, router]);

  if (!result) return null;

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <ReviewCard
        questions={result.questions}
        selectedAnswers={result.selectedAnswers}
        onBack={() => router.back()}
      />
    </main>
  );
}