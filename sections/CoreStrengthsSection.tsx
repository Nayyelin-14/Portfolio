"use client";

import { useTheme } from "@/components/ThemeProvider";
import { useTranslation } from "@/hooks/useTranslation";
import { SectionHeader } from "@/components/SectionHeader";
import { Code2, Cloud, Shield, Lightbulb } from "lucide-react";

const strengths = [
  {
    icon: Code2,
    titleKey: "strengths.cleanCode.title",
    descKey: "strengths.cleanCode.description",
  },
  {
    icon: Cloud,
    titleKey: "strengths.cloudDevops.title",
    descKey: "strengths.cloudDevops.description",
  },
  {
    icon: Shield,
    titleKey: "strengths.qualityFirst.title",
    descKey: "strengths.qualityFirst.description",
  },
  {
    icon: Lightbulb,
    titleKey: "strengths.problemSolver.title",
    descKey: "strengths.problemSolver.description",
  },
];

export const CoreStrengthsSection = () => {
  const { isDark } = useTheme();
  const { t } = useTranslation();

  return (
    <section id="strengths" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t("strengths.eyebrow")}
          title={t("strengths.title")}
          description={t("strengths.description")}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((s) => (
            <div
              key={s.titleKey}
              className={`p-6 rounded-xl border transition-colors ${
                isDark
                  ? "bg-gray-900/50 border-gray-800 hover:border-gray-700"
                  : "bg-white border-gray-200 hover:border-gray-300"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                  isDark ? "bg-blue-500/10 text-blue-400" : "bg-blue-50 text-blue-600"
                }`}
              >
                <s.icon className="w-5 h-5" />
              </div>
              <h3
                className={`text-lg font-semibold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {t(s.titleKey)}
              </h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {t(s.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
