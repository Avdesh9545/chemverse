import type { MetadataRoute } from "next";
import { getAllChapters } from "@/data/curriculum";

const SITE_URL = "https://chemverse.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const chapters = getAllChapters();

  const chapterRoutes = chapters.flatMap((chapter) => {
    const grade = chapter.metadata.grade;
    const slug = chapter.metadata.slug;

    return [
      {
        url: `${SITE_URL}/class/${grade}/chapter/${slug}`,
      },
      {
        url: `${SITE_URL}/class/${grade}/chapter/${slug}/notes`,
      },
      {
        url: `${SITE_URL}/class/${grade}/chapter/${slug}/mcqs`,
      },
      {
        url: `${SITE_URL}/class/${grade}/chapter/${slug}/test`,
      },
    ];
  });

  return [
    {
      url: SITE_URL,
    },
    {
      url: `${SITE_URL}/class`,
    },
    {
      url: `${SITE_URL}/class/9`,
    },
    {
      url: `${SITE_URL}/class/10`,
    },
    {
      url: `${SITE_URL}/class/11`,
    },
    {
      url: `${SITE_URL}/class/12`,
    },
    ...chapterRoutes,
  ];
}