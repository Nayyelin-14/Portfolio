"use client";

import { Briefcase, Calendar, MapPin, ExternalLink, Check } from "lucide-react";
import { portfolioData } from "@/lib/data";

interface ExperienceSectionProps {
  isDark: boolean;
  visibleElements: Set<string>;
}

export const ExperienceSection = ({
  isDark,
  visibleElements,
}: ExperienceSectionProps) => {
  return (
    <section
      id="experience"
      data-animate
      className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-slate-900 via-gray-900 to-slate-800"
          : "bg-gradient-to-b from-white via-blue-50/30 to-white"
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/4 -left-20 w-80 h-80 rounded-full opacity-10 blur-3xl ${
            isDark ? "bg-blue-500" : "bg-purple-400"
          }`}
        />
        <div
          className={`absolute bottom-1/4 -right-20 w-96 h-96 rounded-full opacity-10 blur-3xl ${
            isDark ? "bg-purple-500" : "bg-blue-400"
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            visibleElements?.has("experience")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p
            className={`text-base sm:text-lg max-w-2xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            My professional journey in software engineering
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div
            className={`absolute left-4 sm:left-1/2 top-0 bottom-0 w-px sm:-translate-x-px ${
              isDark ? "bg-gray-700" : "bg-gray-200"
            }`}
          />

          {portfolioData.experience.map((exp) => (
            <div key={exp.id} className="relative mb-12 last:mb-0">
              {/* Timeline dot */}
              <div
                className={`absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full border-4 z-10 ${
                  isDark
                    ? "bg-blue-500 border-gray-900"
                    : "bg-purple-500 border-white shadow"
                }`}
              />

              <div
                className={`ml-12 sm:ml-0 sm:w-[calc(50%-2.5rem)] rounded-2xl p-6 backdrop-blur-sm border transition-all duration-1000 ${
                  isDark
                    ? "bg-gray-800/60 border-gray-700/50"
                    : "bg-white/80 border-gray-200/60 shadow-lg"
                } ${
                  visibleElements?.has("experience")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {/* Role header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3
                      className={`text-xl font-bold mb-1 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {exp.role}
                    </h3>
                    <div
                      className={`flex items-center gap-2 text-lg font-semibold ${
                        isDark ? "text-blue-400" : "text-blue-600"
                      }`}
                    >
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline inline-flex items-center gap-1"
                        >
                          {exp.company}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        exp.company
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1 text-sm">
                    <div
                      className={`flex items-center gap-1.5 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      {exp.date.start} – {exp.date.end}
                    </div>
                    <div
                      className={`flex items-center gap-1.5 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Type badge */}
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                    isDark
                      ? "bg-purple-500/10 text-purple-300 border border-purple-500/20"
                      : "bg-purple-100 text-purple-700 border border-purple-200"
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  {exp.type}
                </span>

                <p
                  className={`text-sm leading-relaxed mb-5 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2.5 mb-6">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          isDark ? "text-green-400" : "text-green-600"
                        }`}
                      />
                      <span
                        className={`text-sm leading-relaxed ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div>
                  <h5
                    className={`font-semibold mb-2 text-xs uppercase tracking-wide ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Technologies &amp; Tools
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          isDark
                            ? "bg-blue-500/10 text-blue-300 border border-blue-500/20"
                            : "bg-blue-100 text-blue-700 border border-blue-200"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
