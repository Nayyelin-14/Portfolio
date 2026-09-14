"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import type { ProjectDetail } from "@/types/data";
import { ArrowLeft, ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";

import { ChangelogComposerVisual } from "@/components/project-visuals/ChangelogComposerVisual";
import { JTrackVisual } from "@/components/project-visuals/JTrackVisual";
import { EduProVisual } from "@/components/project-visuals/EduProVisual";
import { IdocParserVisual } from "@/components/project-visuals/IdocParserVisual";
import { EdiScrapperVisual } from "@/components/project-visuals/EdiScrapperVisual";
import { WorkflowMcpVisual } from "@/components/project-visuals/WorkflowMcpVisual";
import { InterviewPrepVisual } from "@/components/project-visuals/InterviewPrepVisual";
import { TaskManagementVisual } from "@/components/project-visuals/TaskManagementVisual";
import { NextFurnitureVisual } from "@/components/project-visuals/NextFurnitureVisual";
import { FastVisual } from "@/components/project-visuals/FastVisual";

const visualMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "changelog-composer": ChangelogComposerVisual,
  "j-track": JTrackVisual,
  edupro: EduProVisual,
  "idoc-parser": IdocParserVisual,
  "edi-scrapper": EdiScrapperVisual,
  "workflow-mcp": WorkflowMcpVisual,
  "interview-prep": InterviewPrepVisual,
  "task-management": TaskManagementVisual,
  nextfurniture: NextFurnitureVisual,
  fast: FastVisual,
};

export const ProjectDetailClient = ({ project }: { project: ProjectDetail }) => {
  const { isDark } = useTheme();
  const [activeIdx, setActiveIdx] = useState(0);
  const Visual = visualMap[project.slug];

  const statusLabel =
    project.status === "completed"
      ? "Completed"
      : project.status === "ongoing"
        ? "Ongoing"
        : "Prototype";
  const privacyLabel =
    project.privacy === "open-source"
      ? "Open source"
      : project.privacy === "company"
        ? "Company project"
        : "Practice project";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back link */}
      <Link
        href="/projects"
        className={`inline-flex items-center gap-1.5 text-sm font-medium mb-8 ${
          isDark ? "text-gray-400 hover:text-gray-200" : "text-gray-600 hover:text-gray-900"
        }`}
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </Link>

      {/* Title */}
      <p
        className={`text-sm font-semibold uppercase tracking-widest mb-2 ${
          isDark ? "text-blue-400" : "text-blue-600"
        }`}
      >
        Project Detail
      </p>
      <h1
        className={`text-3xl sm:text-4xl font-bold tracking-tight ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        {project.title}
      </h1>
      <p
        className={`mt-3 text-base leading-relaxed max-w-3xl ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {project.summary}
      </p>

      {/* Badges + links */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full ${
            project.status === "completed"
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
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border transition-colors ${
              isDark
                ? "border-gray-700 text-gray-300 hover:bg-gray-800"
                : "border-gray-200 text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Github className="w-3.5 h-3.5" />
            Source
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border transition-colors ${
              isDark
                ? "border-gray-700 text-gray-300 hover:bg-gray-800"
                : "border-gray-200 text-gray-700 hover:bg-gray-100"
            }`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Demo
          </a>
        )}
      </div>

      {/* Tech tags */}
      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
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

      {/* CSS/SVG Visual */}
      {Visual && (
        <div
          className={`mt-8 rounded-xl border overflow-hidden p-4 sm:p-6 ${
            isDark ? "border-gray-800 bg-gray-950" : "border-gray-200 bg-gray-50"
          }`}
        >
          <Visual className="w-full max-w-xl mx-auto" />
        </div>
      )}

      {/* Overview */}
      <section className="mt-12">
        <p
          className={`text-sm font-semibold uppercase tracking-widest mb-2 ${
            isDark ? "text-blue-400" : "text-blue-600"
          }`}
        >
          Overview
        </p>
        <h2
          className={`text-2xl font-bold tracking-tight ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {project.overview.title}
        </h2>
        <div className="mt-6 space-y-6">
          {project.overview.steps.map((step) => (
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
      {project.screenshots.length > 0 && (
        <section className="mt-12">
          <p
            className={`text-sm font-semibold uppercase tracking-widest mb-2 ${
              isDark ? "text-blue-400" : "text-blue-600"
            }`}
          >
            Screenshots
          </p>
          <h2
            className={`text-2xl font-bold tracking-tight mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Screenshots
          </h2>
          <div
            className={`relative rounded-xl border overflow-hidden ${
              isDark ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <img
              src={project.screenshots[activeIdx]}
              alt={`${project.title} screenshot ${activeIdx + 1}`}
              className="w-full h-auto"
            />
            {project.screenshots.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setActiveIdx((prev) =>
                      prev === 0 ? project.screenshots.length - 1 : prev - 1
                    )
                  }
                  className={`absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg transition-colors ${
                    isDark
                      ? "bg-gray-800/80 text-white hover:bg-gray-700"
                      : "bg-white/80 text-gray-700 hover:bg-white"
                  }`}
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    setActiveIdx((prev) =>
                      prev === project.screenshots.length - 1 ? 0 : prev + 1
                    )
                  }
                  className={`absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg transition-colors ${
                    isDark
                      ? "bg-gray-800/80 text-white hover:bg-gray-700"
                      : "bg-white/80 text-gray-700 hover:bg-white"
                  }`}
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {project.screenshots.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIdx(idx)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        idx === activeIdx
                          ? "bg-white"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Go to screenshot ${idx + 1}`}
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
          Architecture
        </p>
        <h2
          className={`text-2xl font-bold tracking-tight ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {project.architecture.steps.length > 0 ? "How it works" : "Architecture"}
        </h2>
        <p
          className={`mt-3 text-sm leading-relaxed ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {project.architecture.description}
        </p>
        {project.architecture.note && (
          <p
            className={`mt-2 text-xs italic ${
              isDark ? "text-gray-500" : "text-gray-500"
            }`}
          >
            {project.architecture.note}
          </p>
        )}
        {project.architecture.steps.length > 0 && (
          <div className="mt-6 space-y-6">
            {project.architecture.steps.map((step) => (
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
          Engineering Focus
        </p>
        <h2
          className={`text-2xl font-bold tracking-tight ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {project.engineeringFocus.title}
        </h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.engineeringFocus.items.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border ${
                isDark ? "bg-gray-900/50 border-gray-800" : "bg-white border-gray-200"
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
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border transition-colors ${
              isDark
                ? "border-gray-700 text-gray-300 hover:bg-gray-800"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Github className="w-4 h-4" />
            View Source
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
      </div>

      {/* Back link */}
      <div className="mt-10">
        <Link
          href="/projects"
          className={`inline-flex items-center gap-1.5 text-sm font-medium ${
            isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>
    </div>
  );
};
