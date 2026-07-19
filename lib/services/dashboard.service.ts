import { prisma } from "@/lib/prisma";

export async function getDashboardData(studentId: string) {
  const [
    progress,
    bookmarks,
    attempts,
  ] = await Promise.all([
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