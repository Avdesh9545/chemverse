import { prisma } from "@/lib/prisma";

export async function submitQuizAttempt(
  studentId: string,
  chapterSlug: string,
  score: number,
  correct: number,
  wrong: number,
  timeTaken: number
) {
  const [attempt] = await prisma.$transaction([
    prisma.quizAttempt.create({
      data: {
        studentId,
        chapterSlug,
        score,
        correct,
        wrong,
        timeTaken,
      },
    }),

    prisma.progress.upsert({
      where: {
        studentId_chapterSlug: {
          studentId,
          chapterSlug,
        },
      },
      update: {
        quizCompleted: true,
        score,
      },
      create: {
        studentId,
        chapterSlug,
        notesCompleted: false,
        quizCompleted: true,
        score,
      },
    }),
  ]);

  return attempt;
}