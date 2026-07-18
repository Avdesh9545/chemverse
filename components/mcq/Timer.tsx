"use client";

import { useEffect, useRef, useState } from "react";
import { Clock3 } from "lucide-react";

interface TimerProps {
  duration?: number;
  storageKey?: string;
  onComplete?: () => void;
}

function getInitialTime(duration: number, storageKey: string) {
  if (typeof window === "undefined") {
    return duration;
  }

  const saved = localStorage.getItem(storageKey);

  if (saved) {
    const value = Number(saved);

    if (!Number.isNaN(value) && value > 0) {
      return value;
    }
  }

  return duration;
}

export default function Timer({
  duration = 3600,
  storageKey = "chemverse-timer",
  onComplete,
}: TimerProps) {
  const [secondsLeft, setSecondsLeft] = useState(() =>
    getInitialTime(duration, storageKey)
  );

  const completedRef = useRef(false);

  // Countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Persist timer
  useEffect(() => {
    localStorage.setItem(storageKey, secondsLeft.toString());
  }, [secondsLeft, storageKey]);

  // Completion callback
  useEffect(() => {
    if (secondsLeft === 0 && !completedRef.current) {
      completedRef.current = true;
      localStorage.removeItem(storageKey);
      onComplete?.();
    }
  }, [secondsLeft, storageKey, onComplete]);

  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  const danger = secondsLeft <= 300;

  return (
    <div
      className={`flex items-center gap-3 rounded-2xl px-5 py-3 font-mono text-xl font-bold shadow-sm transition-all ${
        danger
          ? "bg-red-100 text-red-700"
          : "bg-slate-100 text-slate-800"
      }`}
    >
      <Clock3 className="h-6 w-6" />

      <span>
        {String(hours).padStart(2, "0")}:
        {String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </span>
    </div>
  );
}