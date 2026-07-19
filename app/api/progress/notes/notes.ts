import { NextResponse } from "next/server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { markNotesCompleted } from "@/lib/services/progress.service";

export async function POST(req: Request) {
  const session = await auth();

  if (!session?.user?.email) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  const { chapterSlug } = await req.json();

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
    include: {
      studentProfile: true,
    },
  });

  if (!user?.studentProfile) {
    return NextResponse.json(
      { message: "Student profile not found." },
      { status: 404 }
    );
  }

  await markNotesCompleted(
    user.studentProfile.id,
    chapterSlug
  );

  return NextResponse.json({
    success: true,
  });
}