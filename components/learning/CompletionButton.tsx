"use client";

import { useEffect, useState } from "react";

interface CompletionButtonProps {
  chapterSlug: string;
}

export default function CompletionButton({
  chapterSlug,
}: CompletionButtonProps) {
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function loadProgress() {
      try {
        const response = await fetch(
          `/api/progress?chapterSlug=${chapterSlug}`
        );

        if (!response.ok) {
          return;
        }

        const data = await response.json();

        setCompleted(data.notesCompleted);
      } finally {
        setLoading(false);
      }
    }

    loadProgress();
  }, [chapterSlug]);

  async function handleComplete() {
    setSaving(true);

    try {
      const response = await fetch("/api/progress/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chapterSlug,
        }),
      });

      if (!response.ok) {
        return;
      }

      setCompleted(true);
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <button
        disabled
        className="rounded-lg bg-gray-300 px-5 py-3 text-white"
      >
        Loading...
      </button>
    );
  }

  if (completed) {
    return (
      <button
        disabled
        className="rounded-lg bg-green-600 px-5 py-3 font-medium text-white"
      >
        ✓ Notes Completed
      </button>
    );
  }

  return (
    <button
      onClick={handleComplete}
      disabled={saving}
      className="rounded-lg bg-violet-600 px-5 py-3 font-medium text-white transition hover:bg-violet-700 disabled:opacity-50"
    >
      {saving ? "Saving..." : "✓ Mark Notes as Completed"}
    </button>
  );
}