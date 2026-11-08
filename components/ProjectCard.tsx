"use client";

import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { useTranslation } from "@/hooks/useTranslation";
import { portfolioData } from "@/lib/data";
import type { Project } from "@/types/data";

const visualMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "energy-tracker": () => null,
  "changelog-composer": () => null,
  "j-track": () => null,
  "edupro": () => null,
  "idoc-parser": () => null,
  "edi-scrapper": () => null,
  "workflow-mcp": () => null,
  "interview-prep": () => null,
  "task-management": () => null,
  "nextfurniture": () => null,
};

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { isDark } = useTheme();
  const { t } = useTranslation();
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
      {/* Visual placeholder */}
      <div className={`relative h-48 overflow-hidden ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600 text-sm">
          {project.title.slice(0, 1).toUpperCase()}
        </div>
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