"use client";

import { useTheme } from "@/components/ThemeProvider";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) => {
  const { isDark } = useTheme();

  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      <p
        className={`text-sm font-semibold uppercase tracking-widest mb-3 ${
          isDark ? "text-blue-400" : "text-blue-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl sm:text-4xl font-bold tracking-tight ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg max-w-2xl leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${isDark ? "text-gray-400" : "text-gray-600"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
