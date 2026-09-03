"use client";

import { useTheme } from "@/components/ThemeProvider";

interface ChangelogComposerVisualProps {
  className?: string;
}

export const ChangelogComposerVisual = ({
  className = "",
}: ChangelogComposerVisualProps) => {
  const { isDark } = useTheme();

  const diffLine = (type: "add" | "remove", base: string) => {
    if (type === "add") {
      return (
        <div className="flex items-center gap-2 rounded px-2 py-1.5 text-xs bg-green-500/10 text-green-600 dark:text-green-400">
          <span>+</span>
          <span>{base}</span>
          <span className="ml-auto h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
        </div>
      );
    }
    return (
      <div className="flex items-center gap-2 rounded px-2 py-1.5 text-xs bg-red-500/10 text-red-600 dark:text-red-400 line-through opacity-80">
        <span>−</span>
        <span>{base}</span>
      </div>
    );
  };

  return (
    <div className={`relative w-full rounded-xl border ${className}`}>
      <div
        className={`rounded-t-xl border-b px-4 py-2.5 ${
          isDark
            ? "border-gray-700 bg-gray-800"
            : "border-gray-200 bg-gray-100"
        }`}
      >
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
          <span
            className={`ml-3 truncate text-[11px] ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            changelogs/new-feature.mdx
          </span>
        </div>
      </div>

      <div className="flex gap-1 border-b px-4 pt-2">
        {["Dev", "QA", "Business"].map((role, i) => (
          <div
            key={role}
            className={`rounded-t px-3 py-1 text-[11px] font-medium ${
              i === 0
                ? isDark
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-900"
                : isDark
                  ? "text-gray-400"
                  : "text-gray-500"
            }`}
          >
            {role}
          </div>
        ))}
      </div>

      <div
        className={`rounded-b-xl p-3 ${
          isDark ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div className="flex flex-col gap-1.5">
          {diffLine("remove", "Old: Added search feature to homepage")}
          {diffLine("add", "New: added AI-powered search + filter")}
          {diffLine("add", "New: updated copy for business stakehold…")}
        </div>

        <div className="mt-3 flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px]">
          <svg
            className="h-4 w-4 animate-spin text-blue-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
            <path d="M22 12a10 10 0 0 0-10-10" strokeLinecap="round" />
          </svg>
          <span
            className={isDark ? "text-gray-400" : "text-gray-500"}
          >
            Generating summary for QA role…
          </span>
        </div>
      </div>
    </div>
  );
};
