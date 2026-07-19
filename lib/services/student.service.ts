import { prisma } from "@/lib/prisma";

export async function getStudentByUserId(userId: string) {
  return prisma.studentProfile.findUnique({
    where: {
      userId,
    },
  });
}