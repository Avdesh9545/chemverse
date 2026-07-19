import { NextResponse } from "next/server";

import { auth } from "@/auth";

import { getStudentByUserId } from "@/lib/services/student.service";
import { getProgress } from "@/lib/services/progress.service";

export async function GET(request: Request) {
  const session = await auth();
  console.log("SESSION:", session);

  if (!session?.user?.id) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  const { searchParams } = new URL(request.url);

  const chapterSlug = searchParams.get("chapterSlug");

  if (!chapterSlug) {
    return NextResponse.json(
      { message: "chapterSlug is required." },
      { status: 400 }
    );
  }

  const student = await getStudentByUserId(session.user.id);

  if (!student) {
    return NextResponse.json(
      { message: "Student profile not found." },
      { status: 404 }
    );
  }

  const progress = await getProgress(
    student.id,
    chapterSlug
  );

  return NextResponse.json({
    notesCompleted: progress?.notesCompleted ?? false,
    quizCompleted: progress?.quizCompleted ?? false,
    score: progress?.score ?? 0,
  });
}