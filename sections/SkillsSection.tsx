"use client";

import { portfolioData } from "@/lib/data";

interface SkillsSectionProps {
  isDark: boolean;
  visibleElements: Set<string>;
}

export const SkillsSection = ({
  isDark,
  visibleElements,
}: SkillsSectionProps) => {
  return (
    <section
      id="skills"
      data-animate
      className={`py-16 sm:py-20 md:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden scroll-mt-28 ${
        isDark
          ? "bg-gradient-to-b from-slate-800 via-gray-900 to-slate-900"
          : "bg-gradient-to-b from-blue-50/30 via-white to-gray-50"
      }`}
    >
      <div
        className={`transition-all duration-1000 delay-400 max-w-6xl mx-auto relative z-10 ${
          visibleElements?.has("skills")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <h3
          className={`text-xl sm:text-2xl font-bold text-center mb-6 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
          {portfolioData.skills.allSkills.map((skill, idx) => (
            <span
              key={idx}
              className={`px-4 py-1.5 text-sm font-medium rounded-full shadow-sm transition-all ${
                isDark
                  ? "bg-gray-800 text-gray-200 border border-gray-700 hover:bg-blue-600 hover:text-white"
                  : "bg-gray-100 text-gray-800 border border-gray-300 hover:bg-blue-500 hover:text-white"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
