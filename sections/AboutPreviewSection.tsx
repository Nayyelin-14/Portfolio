"use client";

import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { portfolioData } from "@/lib/data";
import { StatCounter } from "@/components/StatCounter";
import { SectionHeader } from "@/components/SectionHeader";
import { MapPin, GraduationCap, ArrowRight } from "lucide-react";

export const AboutPreviewSection = () => {
  const { isDark } = useTheme();

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: About content */}
          <div>
            <SectionHeader
              eyebrow="About Me"
              title="Passionate about creating impactful products"
              align="left"
            />
            <p
              className={`text-base leading-relaxed mb-6 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {portfolioData.personal.bio} I enjoy turning complex problems into
              simple, beautiful and intuitive solutions.
            </p>

            <div className="space-y-3 mb-8">
              <div
                className={`flex items-center gap-3 text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                {portfolioData.personal.location}
              </div>
              <div
                className={`flex items-center gap-3 text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <GraduationCap className="w-4 h-4 text-blue-500 shrink-0" />
                Mae Fah Luang University · BE in Software Engineering
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
            >
              More About Me
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Stats */}
          <div
            className={`grid grid-cols-2 gap-8 p-8 rounded-xl border ${
              isDark
                ? "bg-gray-900/50 border-gray-800"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            <StatCounter value="8+" label="Months Experience" delay={0} />
            <StatCounter value="9+" label="Projects Built" delay={90} />
            <StatCounter value="25+" label="Technologies" delay={180} />
            <StatCounter value="1" label="Internship" delay={270} />
          </div>
        </div>
      </div>
    </section>
  );
};
