import { prisma } from "@/lib/prisma";
import type {
  Progress,
  Bookmark,
  QuizAttempt,
} from "@prisma/client";

export interface DashboardData {
  progress: Progress[];
  bookmarks: Bookmark[];
  attempts: QuizAttempt[];
}

export async function getDashboardData(
  studentId: string
): Promise<DashboardData> {
  const [progress, bookmarks, attempts] = await Promise.all([
    prisma.progress.findMany({
      where: {
        studentId,
      },
    }),

    prisma.bookmark.findMany({
      where: {
        studentId,
      },
    }),

    prisma.quizAttempt.findMany({
      where: {
        studentId,
      },
      orderBy: {
        submittedAt: "desc",
      },
      take: 5,
    }),
  ]);

  return {
    progress,
    bookmarks,
    attempts,
  };
}