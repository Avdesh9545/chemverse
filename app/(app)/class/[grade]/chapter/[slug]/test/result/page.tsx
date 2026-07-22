"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import ResultCard from "@/components/mcq/ResultCard";

interface AssessmentResult {
  title: string;
  total: number;
  correct: number;
  wrong: number;
  skipped: number;
  selectedAnswers: Record<number, number>;
  submittedAt: number;
}

export default function AssessmentResultPage() {
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

  if (!result) {
    return null;
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <ResultCard
        total={result.total}
        correct={result.correct}
        wrong={result.wrong}
        skipped={result.skipped}
        examMode
        onRetry={() => {
          sessionStorage.removeItem("assessment-result");
          router.back();
        }}
        onReview={() => {
          router.push("../review");
        }}
      />
    </main>
  );
}