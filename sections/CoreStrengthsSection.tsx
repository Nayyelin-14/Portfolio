"use client";

import { useTheme } from "@/components/ThemeProvider";
import { SectionHeader } from "@/components/SectionHeader";
import { Code2, Cloud, Shield, Lightbulb } from "lucide-react";

const strengths = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Maintainable backend services and modern full stack applications that stay clear and easy to extend.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Docker containerization, CI/CD pipelines with GitHub Actions and Azure DevOps, deployed to cloud VMs.",
  },
  {
    icon: Shield,
    title: "Quality First",
    description:
      "Reliable delivery with testing, security hardening, and attention to production-ready details.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "Practical solutions for complex technical requirements — from Kafka event pipelines to AI integration.",
  },
];

export const CoreStrengthsSection = () => {
  const { isDark } = useTheme();

  return (
    <section id="strengths" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Core Strengths"
          title="The way I build."
          description="A practical approach shaped by enterprise internship work across backend services, full stack applications, and cloud systems."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((s) => (
            <div
              key={s.title}
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
                {s.title}
              </h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
