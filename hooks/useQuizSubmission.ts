export type QuizSubmission = {
  chapterSlug: string;
  score: number;
  correct: number;
  wrong: number;
  timeTaken: number;
};

export async function submitQuiz(data: QuizSubmission) {
  const response = await fetch("/api/quiz/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message ?? "Failed to submit quiz.");
  }

  return result;
}