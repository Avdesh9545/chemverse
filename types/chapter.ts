export interface DownloadItem {
  title: string;
  description: string;
  url: string;
}

export interface VideoItem {
  title: string;
  duration: string;
  thumbnail: string;
  url: string;
}

export interface PracticeItem {
  title: string;
  questions: number;
  difficulty: "Easy" | "Medium" | "Hard";
  url: string;
}

export interface Chapter {
  class: number;
  chapter: number;
  slug: string;

  title: string;
  description: string;

  heroImage?: string;

  downloads: DownloadItem[];
  videos: VideoItem[];
  practice: PracticeItem[];
}