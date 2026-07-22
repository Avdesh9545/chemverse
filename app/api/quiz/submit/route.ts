import { NextResponse } from "next/server";

import { auth } from "@/auth";

import { getStudentByUserId } from "@/lib/services/student.service";
import { submitQuizAttempt } from "@/lib/services/quiz.service";

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

    const student = await getStudentByUserId(
      session.user.id
    );

    if (!student) {
      return NextResponse.json(
        {
          success: false,
          message: "Student profile not found.",
        },
        { status: 404 }
      );
    }

    const {
      chapterSlug,
      score,
      correct,
      wrong,
      timeTaken,
    } = await req.json();

    const attempt = await submitQuizAttempt(
  student.id,
  chapterSlug,
  score,
  correct,
  wrong,
  timeTaken
);

return NextResponse.json({
  success: true,
  attempt,
});
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}