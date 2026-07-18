import { ChapterContent } from "@/data/curriculum";

export interface ChapterCardViewModel {
  id: number;
  grade: number;
  slug: string;

  title: string;
  description: string;

  icon: string;

  mcqs: number;
  pyqs: number;
  videos: number;
  downloads: number;

  duration: string;

  difficulty: "Easy" | "Medium" | "Hard";
}

export function toChapterCardViewModel(
  chapter: ChapterContent
): ChapterCardViewModel {

  const levels = chapter.mcqs.map(
    q => q.difficulty
  );

  let difficulty: "Easy" | "Medium" | "Hard" = "Easy";

  if (
    levels.includes("Hard") ||
    levels.includes("JEE Advanced")
  ) {
    difficulty = "Hard";
  } else if (
    levels.includes("Medium") ||
    levels.includes("JEE Main") ||
    levels.includes("NEET")
  ) {
    difficulty = "Medium";
  }

  return {

    id: chapter.metadata.chapterNumber,

    grade: chapter.metadata.grade,

    slug: chapter.metadata.slug,

    title: chapter.metadata.title,

    description: chapter.metadata.description,

    icon: "📘",

    mcqs: chapter.mcqs.length,

    pyqs: chapter.pyqs.length,

    videos: chapter.videos.length,

    downloads: chapter.downloads.length,

    duration:
      `${Math.ceil(
        chapter.metadata.estimatedStudyTime / 60
      )} hrs`,

    difficulty,
  };
}