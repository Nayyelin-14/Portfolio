"use client";

import { useTheme } from "@/components/ThemeProvider";

interface EduProVisualProps {
  className?: string;
}

export const EduProVisual = ({ className = "" }: EduProVisualProps) => {
  const { isDark } = useTheme();

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <span
        className={`absolute left-2 top-3 h-2 w-2 animate-pulse rounded-full ${
          isDark ? "bg-amber-500/60" : "bg-amber-400/60"
        }`}
      />
      <span
        className={`absolute right-4 top-8 h-1.5 w-1.5 animate-pulse rounded-full ${
          isDark ? "bg-blue-500/60" : "bg-blue-400/60"
        }`}
      />
      <span
        className={`absolute bottom-4 left-4 h-2 w-2 animate-pulse rounded-full ${
          isDark ? "bg-rose-500/60" : "bg-rose-400/60"
        }`}
      />

      <div
        className={`relative flex flex-col gap-3 rounded-[20px] border-4 p-3 shadow-lg ${
          isDark ? "border-gray-700 bg-gray-800" : "border-gray-300 bg-white"
        }`}
      >
        <div
          className="h-16 w-16 self-start rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"
        >
          <svg viewBox="0 0 32 32" className="flex h-full w-full items-center justify-center" fill="white">
            <path
              d="M12 9l10 7-10 7z"
              fill="currentColor"
              opacity="0.9"
            />
          </svg>
        </div>
        <div className="w-28">
          <div className={`h-2 rounded ${isDark ? "bg-gray-600" : "bg-gray-300"}`} />
          <div
            className={`mt-1.5 h-2 w-3/4 rounded ${
              isDark ? "bg-gray-700" : "bg-gray-200"
            }`}
          />
        </div>
        <div className="w-24">
          <div className={`h-1.5 rounded ${isDark ? "bg-gray-600" : "bg-gray-300"}`} />
          <div
            className={`mt-1 h-1.5 w-1/2 rounded ${
              isDark ? "bg-gray-700" : "bg-gray-200"
            }`}
          />
        </div>
      </div>

      <div
        className={`absolute -right-2 -top-3 flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 shadow-md ${
          isDark
            ? "border-green-700 bg-green-900/80"
            : "border-green-300 bg-green-50"
        }`}
      >
        <svg viewBox="0 0 16 16" className="h-4 w-4 text-green-500" fill="currentColor">
          <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5 8.5l2 2 4-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span className="text-[9px] font-bold text-green-600 dark:text-green-400">
          Certified
        </span>
      </div>

      <div
        className={`absolute -bottom-2 right-0 flex items-center gap-1 rounded-md px-2 py-1 text-[8px] shadow ${
          isDark ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"
        }`}
      >
        <svg viewBox="0 0 16 16" className="h-2.5 w-2.5 text-amber-500" fill="currentColor">
          <path d="M8 1l2 4 4.5.5-3.3 3.1.8 4.4L8 11.2 3.9 13l.8-4.4L1.5 5.5 6 5z" />
        </svg>
        <span>4.9</span>
      </div>

      <div className="absolute -left-4 top-1">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-purple-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3v2M12 19v2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M3 12h2M19 12h2" />
          <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
        </svg>
      </div>
    </div>
  );
};
