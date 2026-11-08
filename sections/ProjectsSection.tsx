"use client";

import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { useTranslation } from "@/hooks/useTranslation";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowRight } from "lucide-react";

const CATEGORY_CONFIG: Record<
  string,
  { label: string; icon: string; color: string }
> = {
  "java-backend": {
    label: "Java Backend",
    icon: "☕",
    color: "bg-blue-500 text-white",
  },
  "nodejs-express": {
    label: "Node.js + Express",
    icon: "🟢",
    color: "bg-emerald-500 text-white",
  },
  "nextjs-fullstack": {
    label: "Next.js Fullstack",
    icon: "🟣",
    color: "bg-violet-500 text-white",
  },
};

export const ProjectsSection = () => {
  const { isDark } = useTheme();
  const { t } = useTranslation();
  const data = usePortfolioData();

  // Group projects by category
  const groupedProjects = data.projects.reduce(
    (acc, project) => {
      const cat = project.category || "nextjs-fullstack";
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(project);
      return acc;
    },
    {} as Record<string, typeof data.projects>,
  );

  const categoryOrder = ["java-backend", "nodejs-express", "nextjs-fullstack"];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t("projects.eyebrow")}
          title={t("projects.title")}
        />
        <p className="mt-4 text-lg max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
          {t("projects.description")}
        </p>

        {/* Category sections */}
        <div className="mt-10 space-y-16">
          {categoryOrder.map((catKey) => {
            const projects = groupedProjects[catKey];
            if (!projects || projects.length === 0) return null;
            const config = CATEGORY_CONFIG[catKey];

            return (
              <section key={catKey} className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${config.color}`}
                  >
                    <span>{config.icon}</span>
                    {config.label}
                  </div>
                  <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
              isDark
                ? "text-blue-400 hover:text-blue-300"
                : "text-blue-600 hover:text-blue-700"
            }`}
          >
            {t("projects.seeAllProjects")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};