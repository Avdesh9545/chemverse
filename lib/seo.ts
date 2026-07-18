import type { Metadata } from "next";
import { ChapterContent } from "@/data/curriculum";

const SITE_URL = "https://chemverse.in";

export function buildChapterMetadata(
  chapter: ChapterContent,
  page?: string
): Metadata {
  const { metadata } = chapter;

  const pageSuffix = page ? ` ${page}` : "";

  const title = `${metadata.title}${pageSuffix} | Class ${metadata.grade} Chemistry`;

  const description =
    metadata.description ||
    `${metadata.title}${pageSuffix} for CBSE Class ${metadata.grade}. Notes, MCQs, PYQs, Worksheets and Chapter Tests on ChemVerse.`;

  const url =
    page === "Notes"
      ? `/class/${metadata.grade}/chapter/${metadata.slug}/notes`
      : page === "MCQs"
      ? `/class/${metadata.grade}/chapter/${metadata.slug}/mcqs`
      : page === "Chapter Test"
      ? `/class/${metadata.grade}/chapter/${metadata.slug}/test`
      : `/class/${metadata.grade}/chapter/${metadata.slug}`;

  return {
    title,
    description,

    keywords: [
      ...metadata.tags,
      `Class ${metadata.grade} Chemistry`,
      metadata.title,
      "CBSE",
      "NCERT",
      "ChemVerse",
    ],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url: SITE_URL + url,
      siteName: "ChemVerse",
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}