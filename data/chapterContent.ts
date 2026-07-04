export interface DownloadResource {
  title: string;
  description: string;
  url: string;
}

export interface VideoResource {
  title: string;
  duration: string;
  thumbnail: string;
  url: string;
}

export interface PracticeResource {
  title: string;
  questions: number;
  difficulty: string;
  url: string;
}

export interface ChapterContent {
  description: string;

  pdf: string;

  tableOfContents: string[];

  downloads: DownloadResource[];

  videos: VideoResource[];

  practice: PracticeResource[];
}

export const chapterContent: Record<string, ChapterContent> = {
  "matter-in-our-surroundings": {
    description:
      "Everything you need to master this chapter, including notes, NCERT solutions, MCQs, PYQs and video lectures.",

    pdf: "/pdf/class9/matter-in-our-surroundings.pdf",

    tableOfContents: [
      "Matter",
      "Physical Nature of Matter",
      "States of Matter",
      "Properties of Matter",
      "Diffusion",
      "Evaporation",
      "Latent Heat",
      "Conversion of States",
    ],

    downloads: [
      {
        title: "Complete Notes",
        description: "Detailed chapter notes in PDF format",
        url: "#",
      },
      {
        title: "NCERT Solutions",
        description: "Step-by-step solutions",
        url: "#",
      },
    ],

    videos: [
      {
        title: "Complete Chapter One Shot",
        duration: "1 hr 45 min",
        thumbnail: "/images/video-placeholder.jpg",
        url: "#",
      },
    ],

    practice: [
      {
        title: "Chapter MCQs",
        questions: 100,
        difficulty: "Medium",
        url: "#",
      },
      {
        title: "Previous Year Questions",
        questions: 50,
        difficulty: "Medium",
        url: "#",
      },
    ],
  },

  "is-matter-around-us-pure": {
    description: "",
    pdf: "",
    tableOfContents: [],
    downloads: [],
    videos: [],
    practice: [],
  },

  "atoms-and-molecules": {
    description: "",
    pdf: "",
    tableOfContents: [],
    downloads: [],
    videos: [],
    practice: [],
  },

  "structure-of-atom": {
    description: "",
    pdf: "",
    tableOfContents: [],
    downloads: [],
    videos: [],
    practice: [],
  },
};

export function getChapter(slug: string) {
  return chapterContent[slug];
}