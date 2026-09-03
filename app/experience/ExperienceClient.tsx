"use client";

import { useTheme } from "@/components/ThemeProvider";
import { portfolioData } from "@/lib/data";
import { Briefcase, Calendar, MapPin, ExternalLink, Check } from "lucide-react";

export const ExperienceClient = () => {
  const { isDark } = useTheme();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <p
        className={`text-sm font-semibold uppercase tracking-widest mb-3 ${
          isDark ? "text-blue-400" : "text-blue-600"
        }`}
      >
        Experience
      </p>
      <h1
        className={`text-3xl sm:text-4xl font-bold tracking-tight ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        My professional journey
      </h1>
      <p
        className={`mt-4 text-lg max-w-2xl leading-relaxed ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        My professional journey in software engineering.
      </p>

      {/* Timeline */}
      <div className="relative mt-10">
        <div
          className={`absolute left-4 sm:left-1/2 top-0 bottom-0 w-px sm:-translate-x-px ${
            isDark ? "bg-gray-800" : "bg-gray-200"
          }`}
        />

        {portfolioData.experience.map((exp) => (
          <div key={exp.id} className="relative mb-12 last:mb-0">
            {/* Dot */}
            <div
              className={`absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full border-4 ${
                isDark ? "bg-blue-500 border-gray-950" : "bg-blue-500 border-white"
              }`}
            />

            <div
              className={`ml-12 sm:ml-0 sm:w-[calc(50%-2.5rem)] rounded-2xl p-6 border ${
                isDark
                  ? "bg-gray-900/50 border-gray-800"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h2
                    className={`text-lg font-bold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {exp.role}
                  </h2>
                  <div
                    className={`flex items-center gap-2 text-base font-semibold ${
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
                  <span
                    className={`flex items-center gap-1.5 ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    {exp.date.start} – {exp.date.end}
                  </span>
                  <span
                    className={`flex items-center gap-1.5 ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>
              </div>

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
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {exp.description}
              </p>

              <ul className="space-y-2.5 mb-6">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        isDark ? "text-green-400" : "text-green-600"
                      }`}
                    />
                    <span
                      className={`text-sm leading-relaxed ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>

              <div>
                <h5
                  className={`font-semibold mb-2 text-xs uppercase tracking-wide ${
                    isDark ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  Technologies &amp; Tools
                </h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
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
  );
};
