import { NextResponse } from "next/server";

import { auth } from "@/auth";

import { getStudentByUserId } from "@/lib/services/student.service";
import { markNotesCompleted } from "@/lib/services/progress.service";

export async function POST(req: Request) {
  const session = await auth();
  console.log("SESSION:", session);

  if (!session?.user?.id) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  const { chapterSlug } = await req.json();

  if (!chapterSlug) {
    return NextResponse.json(
      { message: "Chapter slug is required." },
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

  await markNotesCompleted(student.id, chapterSlug);

  return NextResponse.json({
    success: true,
    message: "Notes marked as completed.",
  });
}