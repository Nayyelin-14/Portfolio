"use client";

import { useTheme } from "@/components/ThemeProvider";
import { useTranslation } from "@/hooks/useTranslation";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { Code2, Server, Database, Layers, Wrench, Globe } from "lucide-react";

const skillGroups: {
  labelKey: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
}[] = [
  {
    labelKey: "skills.groups.languages",
    icon: Code2,
    skills: ["Java", "TypeScript", "JavaScript"],
  },
  {
    labelKey: "skills.groups.backend",
    icon: Server,
    skills: ["Java", "Quarkus", "Spring Boot", "Maven", "Node.js", "Express.js", "REST APIs", "GraphQL"],
  },
  {
    labelKey: "skills.groups.frontend",
    icon: Globe,
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    labelKey: "skills.groups.database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Drizzle ORM"],
  },
  {
    labelKey: "skills.groups.cloudDevOps",
    icon: Layers,
    skills: ["Docker", "GitHub Actions", "Azure DevOps", "Azure Pipelines", "Redis", "Apache Kafka"],
  },
  {
    labelKey: "skills.groups.tools",
    icon: Wrench,
    skills: ["Git", "Jest", "Payload CMS"],
  },
];

export const SkillsClient = () => {
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
        {t("skills.title")}
      </p>
      <h1
        className={`text-3xl sm:text-4xl font-bold tracking-tight ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        {t("skills.heading")}
      </h1>
      <p
        className={`mt-4 text-lg max-w-2xl leading-relaxed ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {t("skills.description")}
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.labelKey}
            className={`p-6 rounded-xl border ${
              isDark ? "bg-gray-900/50 border-gray-800" : "bg-white border-gray-200"
            }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  isDark ? "bg-blue-500/10 text-blue-400" : "bg-blue-50 text-blue-600"
                }`}
              >
                <group.icon className="w-4 h-4" />
              </div>
              <h2
                className={`text-base font-semibold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {t(group.labelKey)}
              </h2>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                    isDark ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* All skills */}
      <div className="mt-10">
        <h2
          className={`text-sm font-semibold uppercase tracking-widest mb-4 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {t("skills.allSkills")}
        </h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.allSkills.map((skill) => (
            <span
              key={skill}
              className={`px-3 py-1.5 text-sm font-medium rounded-full border transition-colors ${
                isDark
                  ? "bg-gray-900 border-gray-800 text-gray-300 hover:bg-gray-800"
                  : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
