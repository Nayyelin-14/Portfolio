"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { portfolioData } from "@/lib/data";
import type { Project } from "@/types/data";

const ChangelogVisual = dynamic(
  () =>
    import("./project-visuals/ChangelogComposerVisual").then(
      (m) => m.ChangelogComposerVisual,
    ),
  { ssr: true },
);
const JTrackVisual = dynamic(() =>
  import("./project-visuals/JTrackVisual").then((m) => m.JTrackVisual),
);
const EduProVisual = dynamic(() =>
  import("./project-visuals/EduProVisual").then((m) => m.EduProVisual),
);
const IdocParserVisual = dynamic(() =>
  import("./project-visuals/IdocParserVisual").then((m) => m.IdocParserVisual),
);
const EdiScrapperVisual = dynamic(() =>
  import("./project-visuals/EdiScrapperVisual").then((m) => m.EdiScrapperVisual),
);
const WorkflowMcpVisual = dynamic(() =>
  import("./project-visuals/WorkflowMcpVisual").then((m) => m.WorkflowMcpVisual),
);
const InterviewPrepVisual = dynamic(() =>
  import("./project-visuals/InterviewPrepVisual").then(
    (m) => m.InterviewPrepVisual,
  ),
);
const TaskManagementVisual = dynamic(() =>
  import("./project-visuals/TaskManagementVisual").then(
    (m) => m.TaskManagementVisual,
  ),
);
const NextFurnitureVisual = dynamic(() =>
  import("./project-visuals/NextFurnitureVisual").then(
    (m) => m.NextFurnitureVisual,
  ),
);
const SkyfareVisual = dynamic(() =>
  import("./project-visuals/SkyfareVisual").then((m) => m.SkyfareVisual),
);

const visualMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Changelog Composer": ChangelogVisual,
  "J Track – Job Tracking Platform": JTrackVisual,
  "EduPro – E-Learning Platform": EduProVisual,
  "SAP IDoc Parser": IdocParserVisual,
  "EDI Spec Scrapper": EdiScrapperVisual,
  "Workflow MCP · Flowagent.ai": WorkflowMcpVisual,
  "AI Powered Interview Preparation": InterviewPrepVisual,
  "Task Management": TaskManagementVisual,
  "NextFurniture – Shopping & Blog Platform": NextFurnitureVisual,
  "Skyfare – Flight Booking Platform": SkyfareVisual,
};

const slugMap: Record<string, string> = {
  "Changelog Composer": "changelog-composer",
  "J Track – Job Tracking Platform": "j-track",
  "EduPro – E-Learning Platform": "edupro",
  "SAP IDoc Parser": "idoc-parser",
  "EDI Spec Scrapper": "edi-scrapper",
  "Workflow MCP · Flowagent.ai": "workflow-mcp",
  "AI Powered Interview Preparation": "interview-prep",
  "Task Management": "task-management",
  "NextFurniture – Shopping & Blog Platform": "nextfurniture",
  "Skyfare – Flight Booking Platform": "skyfare",
};

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { isDark } = useTheme();
  const Visual = visualMap[project.title];
  const slug = slugMap[project.title];

  const tag = project.technologies.slice(0, 3).join(" · ");
  const moreCount = project.technologies.length - 3;

  return (
    <article
      className={`group rounded-xl border overflow-hidden transition-all duration-300 ${
        isDark
          ? "bg-gray-900/50 border-gray-800 hover:border-gray-700"
          : "bg-white border-gray-200 hover:border-gray-300"
      } hover:shadow-lg`}
    >
      {/* Visual */}
      <div
        className={`relative h-52 overflow-hidden ${
          isDark ? "bg-gray-950" : "bg-gray-50"
        }`}
      >
        {Visual &&
          (() => {
            const ActiveVisual = Visual;
            return (
              <Suspense
                fallback={
                  <div className="h-full w-full bg-zinc-100 animate-pulse dark:bg-zinc-900" />
                }
              >
                <ActiveVisual className="w-full h-full" />
              </Suspense>
            );
          })()}
      </div>

      {/* Content */}
      <div className="p-5">
        <p
          className={`text-xs font-medium mb-2 ${
            isDark ? "text-gray-500" : "text-gray-500"
          }`}
        >
          {tag}
          {moreCount > 0 && (
            <span className={isDark ? "text-gray-600" : "text-gray-400"}>
              {" "}
              +{moreCount} more
            </span>
          )}
        </p>
        <div className="flex items-start justify-between gap-2">
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
                ? "In Progress"
                : project.status === "completed"
                  ? "Completed"
                  : "Planned"}
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
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className={`px-2 py-0.5 text-xs rounded-full ${
                isDark
                  ? "bg-gray-800 text-gray-400"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {tech}
            </span>
          ))}
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
              View Project →
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};
