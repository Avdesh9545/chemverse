import { chapters } from "@/data/chapters";
import { chapterContent } from "@/data/chapterContent";

export function getChapter(slug: string) {
  const chapter = chapters.find((c) => c.slug === slug);

  if (!chapter) return null;

  const content =
    chapterContent[slug as keyof typeof chapterContent];

  return {
    ...chapter,
    ...content,
  };
}