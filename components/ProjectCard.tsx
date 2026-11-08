"use client";

import Link from "next/link";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@/components/ThemeProvider";
import { useTranslation } from "@/hooks/useTranslation";
import { portfolioData } from "@/lib/data";
import type { Project } from "@/types/data";

const EnergyTrackerVisual = dynamic(
  () => import("./project-visuals/EnergyTrackerVisual").then((m) => m.EnergyTrackerVisual),
  { ssr: true },
);
const ChangelogVisual = dynamic(
  () =>
    import("./project-visuals/ChangelogComposerVisual").then(
      (m) => m.ChangelogComposerVisual
    ),
  { ssr: true },
);
const JTrackVisual = dynamic(
  () => import("./project-visuals/JTrackVisual").then((m) => m.JTrackVisual),
);
const EduProVisual = dynamic(
  () => import("./project-visuals/EduProVisual").then((m) => m.EduProVisual),
);
const IdocParserVisual = dynamic(
  () =>
    import("./project-visuals/IdocParserVisual").then(
      (m) => m.IdocParserVisual
    ),
);
const EdiScrapperVisual = dynamic(
  () =>
    import("./project-visuals/EdiScrapperVisual").then(
      (m) => m.EdiScrapperVisual
    ),
);
const WorkflowMcpVisual = dynamic(
  () =>
    import("./project-visuals/WorkflowMcpVisual").then(
      (m) => m.WorkflowMcpVisual
    ),
);
const InterviewPrepVisual = dynamic(
  () =>
    import("./project-visuals/InterviewPrepVisual").then(
      (m) => m.InterviewPrepVisual
    ),
);
const TaskManagementVisual = dynamic(
  () =>
    import("./project-visuals/TaskManagementVisual").then(
      (m) => m.TaskManagementVisual
    ),
);
const NextFurnitureVisual = dynamic(
  () =>
    import("./project-visuals/NextFurnitureVisual").then(
      (m) => m.NextFurnitureVisual
    ),
);
const LogsManagerVisual = dynamic(
  () =>
    import("./project-visuals/LogsManagerVisual").then(
      (m) => m.LogsManagerVisual
    ),
);

const visualMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "energy-tracker": EnergyTrackerVisual,
  "changelog-composer": ChangelogVisual,
  "j-track": JTrackVisual,
  "edupro": EduProVisual,
  "idoc-parser": IdocParserVisual,
  "edi-scrapper": EdiScrapperVisual,
  "workflow-mcp": WorkflowMcpVisual,
  "interview-prep": InterviewPrepVisual,
  "task-management": TaskManagementVisual,
  "nextfurniture": NextFurnitureVisual,
  "logs-manager": LogsManagerVisual,
};

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { isDark } = useTheme();
  const { t } = useTranslation();
  const Visual = visualMap[project.slug];
  const slug = project.slug;

  const tag = project.technologies.slice(0, 3).join(" · ");
  const moreCount = project.technologies.length - 3;

  return (
    <article
      className={`group relative rounded-xl border overflow-hidden transition-all duration-300 ${
        isDark
          ? "bg-gray-900/50 border-gray-800 hover:border-gray-700 shadow-sm hover:shadow-lg"
          : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg"
      }`}
    >
      {/* Visual */}
      <div className={`relative h-52 overflow-hidden ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}>
        {Visual && (
          <Suspense
            fallback={
              <div className="h-full w-full bg-zinc-100 animate-pulse dark:bg-zinc-900" />
            }
          >
            <Visual className="w-full h-full" />
          </Suspense>
        )}
        {/* Project status badge */}
        {project.status && (
          <div
            className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
              project.status === "completed"
                ? "bg-green-500/15 text-green-600 dark:text-green-400"
                : project.status === "in-progress"
                  ? "bg-yellow-500/15 text-yellow-600 dark:text-yellow-400"
                  : "bg-blue-500/15 text-blue-600 dark:text-blue-400"
            }`}
          >
            {project.status === "in-progress"
              ? t("common.inProgress")
              : project.status === "completed"
                ? t("common.completed")
                : t("common.planned")}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3
            className={`text-lg font-semibold leading-snug ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {project.title}
          </h3>
          {project.status && (
            <span
              className={`mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                project.status === "completed"
                  ? "bg-green-500/15 text-green-600 dark:text-green-400"
                  : project.status === "in-progress"
                    ? "bg-yellow-500/15 text-yellow-600 dark:text-yellow-400"
                    : "bg-blue-500/15 text-blue-600 dark:text-blue-400"
              }`}
            >
              {project.status === "in-progress"
                ? t("common.inProgress")
                : project.status === "completed"
                  ? t("common.completed")
                  : t("common.planned")}
            </span>
          )}
        </div>

        <p
          className={`mt-2 text-sm leading-relaxed line-clamp-3 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className={`px-2.5 py-0.5 text-xs rounded-full ${
                isDark
                  ? "bg-gray-800 text-gray-300"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span
              className={`px-2.5 py-0.5 text-xs rounded-full ${
                isDark ? "bg-blue-900/50 text-blue-300" : "bg-blue-100 text-blue-600"
              }`}
            >
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        <div className="mt-4">
          {slug && (
            <Link
              href={`/projects/${slug}`}
              className={`text-sm font-medium transition-colors ${
                isDark
                  ? "text-blue-400 hover:text-blue-300"
                  : "text-blue-600 hover:text-blue-700"
              }`}
            >
              {t("common.viewProject")}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};