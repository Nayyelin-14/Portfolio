"use client";

import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { useTranslation } from "@/hooks/useTranslation";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { ProjectCard } from "@/components/ProjectCard";

export const ProjectsGridClient = () => {
  const { isDark } = useTheme();
  const { t } = useTranslation();
  const data = usePortfolioData();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <p
        className={`text-sm font-semibold uppercase tracking-widest mb-3 ${
          isDark ? "text-blue-400" : "text-blue-600"
        }`}
      >
        {t("projects.projectsHeading")}
      </p>
      <h1
        className={`text-3xl sm:text-4xl font-bold tracking-tight ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        {t("projects.projectsTitle")}
      </h1>
      <p
        className={`mt-4 text-lg max-w-2xl leading-relaxed ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {t("projects.description")}
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
