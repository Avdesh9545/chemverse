import { ChapterContent, Grade } from "./types";
import { class9Chapters } from "./class9";

/*
|--------------------------------------------------------------------------
| Chapter Registry
|--------------------------------------------------------------------------
|
| Every chapter in ChemVerse is registered here.
| The app never hardcodes chapter information anywhere else.
|
*/

const chapterRegistry = new Map<string, ChapterContent>();

/*
|--------------------------------------------------------------------------
| Register Chapter
|--------------------------------------------------------------------------
*/

export function registerChapter(chapter: ChapterContent) {
  chapterRegistry.set(chapter.metadata.slug, chapter);
}

/*
|--------------------------------------------------------------------------
| Register All Chapters
|--------------------------------------------------------------------------
*/

class9Chapters.forEach(registerChapter);

/*
|--------------------------------------------------------------------------
| Get Chapter
|--------------------------------------------------------------------------
*/

export function getChapter(
  slug: string
): ChapterContent | undefined {
  return chapterRegistry.get(slug);
}

/*
|--------------------------------------------------------------------------
| Get All Chapters
|--------------------------------------------------------------------------
*/

export function getAllChapters(): ChapterContent[] {
  return [...chapterRegistry.values()].sort(
    (a, b) =>
      a.metadata.grade - b.metadata.grade ||
      a.metadata.chapterNumber - b.metadata.chapterNumber
  );
}

/*
|--------------------------------------------------------------------------
| Get Chapters By Grade
|--------------------------------------------------------------------------
*/

export function getChaptersByGrade(
  grade: Grade
): ChapterContent[] {
  return getAllChapters().filter(
    (chapter) => chapter.metadata.grade === grade
  );
}

/*
|--------------------------------------------------------------------------
| Search Chapters
|--------------------------------------------------------------------------
*/

export function searchChapters(
  keyword: string
): ChapterContent[] {
  const query = keyword.toLowerCase();

  return getAllChapters().filter((chapter) => {
    const m = chapter.metadata;

    return (
      m.title.toLowerCase().includes(query) ||
      m.description.toLowerCase().includes(query) ||
      m.tags.some((tag) =>
        tag.toLowerCase().includes(query)
      )
    );
  });
}

/*
|--------------------------------------------------------------------------
| Statistics
|--------------------------------------------------------------------------
*/

export function getCurriculumStats() {
  const chapters = getAllChapters();

  return {
    totalChapters: chapters.length,

    totalNotes: chapters.filter(
      (c) => c.metadata.hasNotes
    ).length,

    totalMCQs: chapters.filter(
      (c) => c.metadata.hasMCQs
    ).length,

    totalPYQs: chapters.filter(
      (c) => c.metadata.hasPYQs
    ).length,

    totalVideos: chapters.filter(
      (c) => c.metadata.hasVideos
    ).length,

    totalWorksheets: chapters.filter(
      (c) => c.metadata.hasWorksheets
    ).length,
  };
}

/*
|--------------------------------------------------------------------------
| Helpers
|--------------------------------------------------------------------------
*/

export function hasChapter(slug: string) {
  return chapterRegistry.has(slug);
}

export function getChapterTitles() {
  return getAllChapters().map((chapter) => ({
    slug: chapter.metadata.slug,
    title: chapter.metadata.title,
    grade: chapter.metadata.grade,
  }));
}

export function getNextChapter(slug: string) {
  const chapters = getAllChapters();

  const index = chapters.findIndex(
    (c) => c.metadata.slug === slug
  );

  if (index === -1) return null;

  return chapters[index + 1] ?? null;
}

export function getPreviousChapter(slug: string) {
  const chapters = getAllChapters();

  const index = chapters.findIndex(
    (c) => c.metadata.slug === slug
  );

  if (index === -1) return null;

  return chapters[index - 1] ?? null;
}