"use client";

import { useTheme } from "@/components/ThemeProvider";

interface TaskManagementVisualProps {
  className?: string;
}

const KanbanColumn = ({
  isDark,
  title,
  accent,
  dotBg,
  tasks,
}: {
  isDark: boolean;
  title: string;
  accent: string;
  dotBg: string;
  tasks: { label: string; progress?: number; tag?: string; tagColor?: string }[];
}) => (
  <div className="flex w-1/3 flex-col gap-1.5">
    <div className={`flex items-center gap-1 text-[10px] font-semibold ${accent}`}>
      <span className={`h-2 w-2 rounded-full ${dotBg}`} />
      {title}
      <span
        className={`ml-auto rounded-full px-1.5 py-0.5 text-[8px] font-medium ${
          isDark ? "bg-gray-700 text-gray-400" : "bg-gray-100 text-gray-500"
        }`}
      >
        {tasks.length}
      </span>
    </div>
    <div className="flex flex-col gap-1.5">
      {tasks.map((t) => (
        <div
          key={t.label}
          className={`rounded-lg border p-2 shadow-sm transition-transform duration-200 hover:scale-[1.02] ${
            isDark ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-medium leading-tight">{t.label}</p>
            {t.tag && (
              <span
                className={`rounded-full px-1.5 py-0.5 text-[7px] font-semibold ${t.tagColor}`}
              >
                {t.tag}
              </span>
            )}
          </div>
          {typeof t.progress === "number" && (
            <div className="mt-1.5">
              <div className="mb-0.5 flex justify-between text-[7px] text-gray-400">
                <span>Progress</span>
                <span>{t.progress}%</span>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-gray-600/40">
                <div
                  className="h-full rounded-full bg-blue-500 transition-all duration-700"
                  style={{ width: `${t.progress}%` }}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export const TaskManagementVisual = ({
  className = "",
}: TaskManagementVisualProps) => {
  const { isDark } = useTheme();

  return (
    <div className={`relative rounded-xl border p-3 ${className}`}>
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[10px] font-semibold">
          Project Board
        </p>
        <div
          className={`flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[8px] ${
            isDark
              ? "bg-indigo-500/15 text-indigo-400"
              : "bg-indigo-100 text-indigo-600"
          }`}
        >
          <span className="h-1 w-1 rounded-full bg-indigo-500 animate-pulse" />
          synced
        </div>
      </div>
      <div className="flex gap-2">
        <KanbanColumn
          isDark={isDark}
          title="Pending"
          accent="text-orange-500"
          dotBg="bg-orange-500"
          tasks={[
            { label: "Fix navbar bug", tag: "bug", tagColor: "bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400" },
            { label: "Write unit tests", tag: "test", tagColor: "bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400" },
          ]}
        />
        <KanbanColumn
          isDark={isDark}
          title="In Progress"
          accent="text-blue-500"
          dotBg="bg-blue-500"
          tasks={[
            { label: "Design system tokens", progress: 60 },
          ]}
        />
        <KanbanColumn
          isDark={isDark}
          title="Completed"
          accent="text-green-500"
          dotBg="bg-green-500"
          tasks={[
            { label: "Setup CI/CD", progress: 100 },
            { label: "Ship MVP", tag: "done", tagColor: "bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400" },
          ]}
        />
      </div>
    </div>
  );
};
