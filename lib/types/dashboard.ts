export interface DashboardData {
  xp: number;
  streak: number;

  progress: number;

  bookmarks: number;

  recentAttempts: {
    chapterSlug: string;
    score: number;
    total: number;
  }[];
}