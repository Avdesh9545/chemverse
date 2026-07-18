import { ChapterContent } from "@/data/curriculum";

export interface ChapterCardData {
  id: number;
  grade: number;
  slug: string;
  title: string;
  icon: string;
}

export interface ChapterStatsData {
  mcqs: number;
  pyqs: number;
  videos: number;
  downloads: number;
  duration: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

export function toChapterCard(
  chapter: ChapterContent
): ChapterCardData {
  return {
    id: chapter.metadata.chapterNumber,
    grade: chapter.metadata.grade,
    slug: chapter.metadata.slug,
    title: chapter.metadata.title,

    // Temporary
    icon: "📘",
  };
}

export function getChapterStats(
  chapter: ChapterContent
): ChapterStatsData {
  const difficulties = chapter.mcqs.map((q) => q.difficulty);

  let difficulty: ChapterStatsData["difficulty"] = "Easy";

  if (
    difficulties.includes("Hard") ||
    difficulties.includes("JEE Advanced")
  ) {
    difficulty = "Hard";
  } else if (
    difficulties.includes("Medium") ||
    difficulties.includes("JEE Main") ||
    difficulties.includes("NEET")
  ) {
    difficulty = "Medium";
  }

  return {
    mcqs: chapter.mcqs.length,
    pyqs: chapter.pyqs.length,
    videos: chapter.videos.length,
    downloads: chapter.downloads.length,

    duration: `${Math.ceil(
      chapter.metadata.estimatedStudyTime / 60
    )} hrs`,

    difficulty,
  };
}