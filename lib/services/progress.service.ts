import { prisma } from "@/lib/prisma";

export async function getProgress(
  studentId: string,
  chapterSlug: string
) {
  return prisma.progress.findUnique({
    where: {
      studentId_chapterSlug: {
        studentId,
        chapterSlug,
      },
    },
  });
}

export async function markNotesCompleted(
  studentId: string,
  chapterSlug: string
) {
  return prisma.progress.upsert({
    where: {
      studentId_chapterSlug: {
        studentId,
        chapterSlug,
      },
    },
    update: {
      notesCompleted: true,
    },
    create: {
      studentId,
      chapterSlug,
      notesCompleted: true,
      quizCompleted: false,
      score: 0,
    },
  });
}

export async function markQuizCompleted(
  studentId: string,
  chapterSlug: string,
  score: number
) {
  return prisma.progress.upsert({
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
  });
}