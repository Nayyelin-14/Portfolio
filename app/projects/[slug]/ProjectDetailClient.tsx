"use client";

import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { useTranslation } from "@/hooks/useTranslation";
import { useLocalizedProject } from "@/hooks/useLocalizedProject";
import type { ProjectDetail } from "@/types/data";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Github,
  ExternalLink,
} from "lucide-react";

const ChangelogComposerVisual = dynamic(() =>
  import("@/components/project-visuals/ChangelogComposerVisual").then(
    (m) => m.ChangelogComposerVisual,
  ),
);
const JTrackVisual = dynamic(() =>
  import("@/components/project-visuals/JTrackVisual").then(
    (m) => m.JTrackVisual,
  ),
);
const EduProVisual = dynamic(() =>
  import("@/components/project-visuals/EduProVisual").then(
    (m) => m.EduProVisual,
  ),
);
const IdocParserVisual = dynamic(() =>
  import("@/components/project-visuals/IdocParserVisual").then(
    (m) => m.IdocParserVisual,
  ),
);
const EdiScrapperVisual = dynamic(() =>
  import("@/components/project-visuals/EdiScrapperVisual").then(
    (m) => m.EdiScrapperVisual,
  ),
);
const WorkflowMcpVisual = dynamic(() =>
  import("@/components/project-visuals/WorkflowMcpVisual").then(
    (m) => m.WorkflowMcpVisual,
  ),
);
const InterviewPrepVisual = dynamic(() =>
  import("@/components/project-visuals/InterviewPrepVisual").then(
    (m) => m.InterviewPrepVisual,
  ),
);
const TaskManagementVisual = dynamic(() =>
  import("@/components/project-visuals/TaskManagementVisual").then(
    (m) => m.TaskManagementVisual,
  ),
);
const NextFurnitureVisual = dynamic(() =>
  import("@/components/project-visuals/NextFurnitureVisual").then(
    (m) => m.NextFurnitureVisual,
  ),
);
const EnergyTrackerVisual = dynamic(() =>
  import("@/components/project-visuals/EnergyTrackerVisual").then(
    (m) => m.EnergyTrackerVisual,
  ),
);
const visualMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "energy-tracker": EnergyTrackerVisual,
  "changelog-composer": ChangelogComposerVisual,
  "j-track": JTrackVisual,
  edupro: EduProVisual,
  "idoc-parser": IdocParserVisual,
  "edi-scrapper": EdiScrapperVisual,
  "workflow-mcp": WorkflowMcpVisual,
  "interview-prep": InterviewPrepVisual,
  "task-management": TaskManagementVisual,
  nextfurniture: NextFurnitureVisual,
};

export const ProjectDetailClient = ({
  project,
}: {
  project: ProjectDetail;
}) => {
  const { isDark } = useTheme();
  const { t } = useTranslation();
  const localizedProject = useLocalizedProject(project);
  const [activeIdx, setActiveIdx] = useState(0);
  const Visual = visualMap[localizedProject.slug];

  const statusLabel =
    localizedProject.status === "completed"
      ? t("common.completed")
      : localizedProject.status === "ongoing"
        ? t("common.inProgress")
        : t("common.planned");
  const privacyLabel =
    localizedProject.privacy === "open-source"
      ? t("common.openSource")
      : localizedProject.privacy === "company"
        ? t("common.companyProject")
        : t("common.practiceProject");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back link */}
      <Link
        href="/"
        className={`inline-flex items-center gap-1.5 text-sm font-medium mb-8 ${
          isDark
            ? "text-gray-400 hover:text-gray-200"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        <ArrowLeft className="w-4 h-4" />
        {t("common.back")}
      </Link>

      {/* Title */}
      <p
        className={`text-sm font-semibold uppercase tracking-widest mb-2 ${
          isDark ? "text-blue-400" : "text-blue-600"
        }`}
      >
        {t("common.projectDetail")}
      </p>
      <h1
        className={`text-3xl sm:text-4xl font-bold tracking-tight ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        {localizedProject.title}
      </h1>
      <p
        className={`mt-3 text-base leading-relaxed max-w-3xl ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {localizedProject.summary}
      </p>

      {/* Badges + links */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full ${
            localizedProject.status === "completed"
              ? "bg-green-500/10 text-green-600 dark:text-green-400"
              : "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
          }`}
        >
          {statusLabel}
        </span>
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full ${
            isDark ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-600"
          }`}
        >
          {privacyLabel}
        </span>
        {localizedProject.githubUrl && (
          <a
            href={localizedProject.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border transition-colors ${
              isDark
                ? "border-gray-700 text-gray-300 hover:bg-gray-800"
                : "border-gray-200 text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Github className="w-3.5 h-3.5" />
            {t("common.source")}
          </a>
        )}
        {localizedProject.liveUrl && (
          <a
            href={localizedProject.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border transition-colors ${
              isDark
                ? "border-gray-700 text-gray-300 hover:bg-gray-800"
                : "border-gray-200 text-gray-700 hover:bg-gray-100"
            }`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            {t("common.liveDemo")}
          </a>
        )}
      </div>

      {/* Tech tags */}
      <div className="mt-6 flex flex-wrap gap-1.5">
        {localizedProject.technologies.map((tech) => (
          <span
            key={tech}
            className={`px-2.5 py-1 text-xs font-medium rounded-full ${
              isDark ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-600"
            }`}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Overview */}
      <section className="mt-12">
        <p
          className={`text-sm font-semibold uppercase tracking-widest mb-2 ${
            isDark ? "text-blue-400" : "text-blue-600"
          }`}
        >
          {t("common.overview")}
        </p>
        <h2
          className={`text-2xl font-bold tracking-tight ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {localizedProject.overview.title}
        </h2>
        <div className="mt-6 space-y-6">
          {localizedProject.overview.steps.map((step) => (
            <div key={step.number} className="flex gap-4">
              <span
                className={`text-sm font-bold shrink-0 ${
                  isDark ? "text-blue-400" : "text-blue-600"
                }`}
              >
                {step.number}
              </span>
              <div>
                <h3
                  className={`text-base font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`mt-1 text-sm leading-relaxed ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots */}
      {localizedProject.screenshots.length > 0 && (
        <section className="mt-12">
          <p
            className={`text-sm font-semibold uppercase tracking-widest mb-2 ${
              isDark ? "text-blue-400" : "text-blue-600"
            }`}
          >
            {t("common.screenshots")}
          </p>
          <h2
            className={`text-2xl font-bold tracking-tight mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {t("common.screenshots")}
          </h2>
          <div
            className={`relative aspect-video rounded-xl border overflow-hidden ${
              isDark ? "border-gray-800" : "border-gray-200"
            }`}
          >
            {localizedProject.screenshots.map((src, idx) => {
              const offset = idx - activeIdx;
              return (
                <Image
                  key={src}
                  src={src}
                  alt={`${localizedProject.title} ${t("common.screenshot")} ${idx + 1}`}
                  fill
                  sizes="(min-width: 1280px) 1216px, 100vw"
                  className={`object-contain transition-all duration-500 ease-out ${
                    offset === 0
                      ? "opacity-100 translate-x-0"
                      : offset < 0
                        ? "opacity-0 -translate-x-4"
                        : "opacity-0 translate-x-4"
                  }`}
                />
              );
            })}
            {localizedProject.screenshots.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setActiveIdx((prev) =>
                      prev === 0 ? localizedProject.screenshots.length - 1 : prev - 1,
                    )
                  }
                  className={`absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg transition-colors ${
                    isDark
                      ? "bg-gray-800/80 text-white hover:bg-gray-700"
                      : "bg-white/80 text-gray-700 hover:bg-white"
                  }`}
                  aria-label={t("common.previousScreenshot")}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    setActiveIdx((prev) =>
                      prev === localizedProject.screenshots.length - 1 ? 0 : prev + 1,
                    )
                  }
                  className={`absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg transition-colors ${
                    isDark
                      ? "bg-gray-800/80 text-white hover:bg-gray-700"
                      : "bg-white/80 text-gray-700 hover:bg-white"
                  }`}
                  aria-label={t("common.nextScreenshot")}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {localizedProject.screenshots.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIdx(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === activeIdx
                          ? "bg-white scale-125"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={t("common.goToScreenshot", { n: idx + 1 })}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {/* Architecture */}
      <section className="mt-12">
        <p
          className={`text-sm font-semibold uppercase tracking-widest mb-2 ${
            isDark ? "text-blue-400" : "text-blue-600"
          }`}
        >
          {t("common.architecture")}
        </p>
        <h2
          className={`text-2xl font-bold tracking-tight ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {localizedProject.architecture.steps.length > 0
            ? t("common.howItWorks")
            : t("common.architecture")}
        </h2>
        <p
          className={`mt-3 text-sm leading-relaxed ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {localizedProject.architecture.description}
        </p>
        {localizedProject.architecture.note && (
          <p
            className={`mt-2 text-xs italic ${
              isDark ? "text-gray-500" : "text-gray-500"
            }`}
          >
            {localizedProject.architecture.note}
          </p>
        )}
        {localizedProject.architecture.steps.length > 0 && (
          <div className="mt-6 space-y-6">
            {localizedProject.architecture.steps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <span
                  className={`text-sm font-bold shrink-0 ${
                    isDark ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  {step.number}
                </span>
                <div>
                  <h3
                    className={`text-base font-semibold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`mt-1 text-sm leading-relaxed ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Engineering Focus */}
      <section className="mt-12">
        <p
          className={`text-sm font-semibold uppercase tracking-widest mb-2 ${
            isDark ? "text-blue-400" : "text-blue-600"
          }`}
        >
          {t("common.engineeringFocus")}
        </p>
        <h2
          className={`text-2xl font-bold tracking-tight ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {localizedProject.engineeringFocus.title}
        </h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {localizedProject.engineeringFocus.items.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border ${
                isDark
                  ? "bg-gray-900/50 border-gray-800"
                  : "bg-white border-gray-200"
              }`}
            >
              <p
                className={`text-sm leading-relaxed ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Actions */}
      <div className="mt-12 flex flex-wrap gap-3">
        {localizedProject.githubUrl && (
          <a
            href={localizedProject.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border transition-colors ${
              isDark
                ? "border-gray-700 text-gray-300 hover:bg-gray-800"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Github className="w-4 h-4" />
            {t("common.viewSource")}
          </a>
        )}
        {localizedProject.liveUrl && (
          <a
            href={localizedProject.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            {t("common.liveDemo")}
          </a>
        )}
      </div>
    </div>
  );
};
