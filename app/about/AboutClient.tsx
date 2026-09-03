"use client";

import { useTheme } from "@/components/ThemeProvider";
import { portfolioData } from "@/lib/data";
import {
  MapPin,
  GraduationCap,
  Star,
  Download,
  Mail,
  Github,
  Linkedin,
  Briefcase,
  Calendar,
  ExternalLink,
  Check,
} from "lucide-react";

export const AboutClient = ({
  hidePortrait = false,
}: {
  hidePortrait?: boolean;
}) => {
  const { isDark } = useTheme();
  const exp = portfolioData.experience[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <p
        className={`text-sm font-semibold uppercase tracking-widest mb-3 ${
          isDark ? "text-blue-400" : "text-blue-600"
        }`}
      >
        About Me
      </p>
      <h1
        className={`text-3xl sm:text-4xl font-bold tracking-tight ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        Building digital experiences
        <br />
        <span className={isDark ? "text-gray-500" : "text-gray-400"}>
          that make a difference.
        </span>
      </h1>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 items-start">
        {/* LEFT — facts + actions (portrait only on standalone page) */}
        <div className="lg:sticky lg:top-24 space-y-6">
          {/* Portrait — hidden on home to avoid duplicating hero photo */}
          {!hidePortrait && (
            <div className="relative mx-auto lg:mx-0 w-[280px]">
              {/* soft glow behind */}
              <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-500/10 blur-2xl" />
              <div
                className={`relative overflow-hidden rounded-[28px] border shadow-xl ${
                  isDark
                    ? "border-white/10 bg-gray-900"
                    : "border-gray-200 bg-white"
                }`}
              >
                <img
                  src={portfolioData.personal.profileImg}
                  alt={portfolioData.personal.name}
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className={`p-4 ${isDark ? "bg-gray-900" : "bg-white"}`}>
                  <p
                    className={`text-sm font-bold ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {portfolioData.personal.name}
                  </p>
                  <p
                    className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}
                  >
                    {portfolioData.personal.title}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Compact stats — only on home where portrait is hidden */}
          {hidePortrait && (
            <div
              className={`grid grid-cols-3 gap-2 rounded-2xl p-3 border ${isDark ? "bg-white/[0.04] border-white/10" : "bg-gray-50 border-gray-200"}`}
            >
              {[
                { v: "8 mo", l: "Enterprise" },
                { v: "9", l: "Projects" },
                { v: "3.79", l: "GPAX" },
              ].map((s) => (
                <div key={s.l} className="text-center py-2">
                  <p
                    className={`text-lg font-bold leading-none ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {s.v}
                  </p>
                  <p
                    className={`text-[11px] mt-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}
                  >
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Fact cards */}
          <div className="space-y-3">
            <div
              className={`flex items-center gap-3 rounded-xl px-4 py-3 border ${
                isDark
                  ? "bg-gray-900/60 border-white/10"
                  : "bg-white border-gray-200 shadow-sm"
              }`}
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                  isDark ? "bg-white/10 text-white" : "bg-gray-900 text-white"
                }`}
              >
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <p
                  className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}
                >
                  Location
                </p>
                <p
                  className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  {portfolioData.personal.location}
                </p>
              </div>
            </div>

            <div
              className={`flex items-center gap-3 rounded-xl px-4 py-3 border ${
                isDark
                  ? "bg-gray-900/60 border-white/10"
                  : "bg-white border-gray-200 shadow-sm"
              }`}
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                  isDark ? "bg-white/10 text-white" : "bg-gray-900 text-white"
                }`}
              >
                <GraduationCap className="h-4 w-4" />
              </span>
              <div>
                <p
                  className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}
                >
                  Education
                </p>
                <p
                  className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  Mae Fah Luang University
                </p>
                <p
                  className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}
                >
                  BE in Software Engineering · GPAX 3.79 / 4.0
                </p>
              </div>
            </div>

            <div
              className={`flex items-center gap-3 rounded-xl px-4 py-3 border ${
                isDark
                  ? "bg-gray-900/60 border-white/10"
                  : "bg-white border-gray-200 shadow-sm"
              }`}
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                  isDark ? "bg-white/10 text-white" : "bg-gray-900 text-white"
                }`}
              >
                <Star className="h-4 w-4" />
              </span>
              <div>
                <p
                  className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}
                >
                  Focus
                </p>
                <p
                  className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  Backend · Full-stack · AI
                </p>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="flex flex-wrap gap-2">
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
                isDark
                  ? "bg-white text-gray-900 hover:bg-gray-100 border-white"
                  : "bg-gray-900 text-white hover:bg-black border-gray-900"
              }`}
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
            <a
              href={portfolioData.personal.resumeLink}
              download
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border ${
                isDark
                  ? "border-white/15 text-white hover:bg-white/10"
                  : "border-gray-200 text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
                isDark
                  ? "border-white/10 hover:bg-white/10 text-gray-300"
                  : "border-gray-200 hover:bg-gray-50 text-gray-600"
              }`}
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
                isDark
                  ? "border-white/10 hover:bg-white/10 text-gray-300"
                  : "border-gray-200 hover:bg-gray-50 text-gray-600"
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* RIGHT — numbered narrative */}
        <div className="space-y-10">
          {/* 01 */}
          <div className="flex gap-4">
            <span
              className={`hidden sm:block text-xs font-mono tracking-widest pt-1 ${
                isDark ? "text-white/30" : "text-gray-300"
              }`}
            >
              01
            </span>
            <div className="flex-1">
              <h2
                className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`}
              >
                Who I am
              </h2>
              <div
                className={`mt-1 h-px w-10 ${isDark ? "bg-white/15" : "bg-gray-200"}`}
              />
              <p
                className={`mt-3 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                Hi, I&apos;m{" "}
                <span
                  className={
                    isDark
                      ? "text-white font-semibold"
                      : "text-gray-900 font-semibold"
                  }
                >
                  Nay Ye Lin
                </span>{" "}
                — a Software Engineering graduate from Mae Fah Luang University
                with 8 months of enterprise experience. I love building scalable
                backend services and modern full-stack applications that solve
                real-world problems.
              </p>
              <p
                className={`mt-3 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                In the era of AI I&apos;m focused on smart, intuitive products —
                from SSE-streamed features to LLM-powered developer tools —
                while improving technically and in soft skills like
                communication and problem-solving.
              </p>
            </div>
          </div>

          {/* 02 — embedded experience */}
          <div className="flex gap-4">
            <span
              className={`hidden sm:block text-xs font-mono tracking-widest pt-1 ${
                isDark ? "text-white/30" : "text-gray-300"
              }`}
            >
              02
            </span>
            <div className="flex-1">
              <h2
                className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`}
              >
                Where I&apos;ve been
              </h2>
              <div
                className={`mt-1 h-px w-10 ${isDark ? "bg-white/15" : "bg-gray-200"}`}
              />

              {/* Embedded experience card — no duplicate timeline, single entry */}
              <div
                className={`mt-4 rounded-2xl p-5 sm:p-6 border ${
                  isDark
                    ? "bg-white/[0.04] border-white/10"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p
                      className={`text-sm font-bold ${isDark ? "text-white" : "text-gray-900"}`}
                    >
                      {exp.role}
                    </p>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 text-sm font-semibold hover:underline ${
                        isDark ? "text-blue-400" : "text-blue-600"
                      }`}
                    >
                      {exp.company}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                  <div
                    className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}
                  >
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.date.start} – {exp.date.end}
                    </span>
                    <span className="mx-2">·</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <span
                  className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold border ${
                    isDark
                      ? "bg-white/5 text-gray-200 border-white/10"
                      : "bg-white text-gray-700 border-gray-200"
                  }`}
                >
                  <Briefcase className="h-3 w-3" />
                  {exp.type}
                </span>

                <p
                  className={`mt-3 text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
                >
                  {exp.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${isDark ? "text-emerald-400" : "text-emerald-600"}`}
                      />
                      <span
                        className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
                      >
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className={`rounded-full px-2.5 py-1 text-xs font-medium border ${
                        isDark
                          ? "bg-white/5 border-white/10 text-gray-300"
                          : "bg-white border-gray-200 text-gray-600"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 03 */}
          <div className="flex gap-4">
            <span
              className={`hidden sm:block text-xs font-mono tracking-widest pt-1 ${
                isDark ? "text-white/30" : "text-gray-300"
              }`}
            >
              03
            </span>
            <div className="flex-1">
              <h2
                className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`}
              >
                What I build with
              </h2>
              <div
                className={`mt-1 h-px w-10 ${isDark ? "bg-white/15" : "bg-gray-200"}`}
              />
              <p
                className={`mt-3 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                Core:{" "}
                <strong className={isDark ? "text-white" : "text-gray-900"}>
                  Java, Quarkus, Node.js, Express, React, Next.js, PostgreSQL,
                  MongoDB
                </strong>{" "}
                — plus{" "}
                <strong className={isDark ? "text-white" : "text-gray-900"}>
                  Docker, GitHub Actions, Azure DevOps, Redis, Kafka, Payload
                  CMS
                </strong>
                . I enjoy the full loop — clean responsive UIs, robust APIs, and
                production deployments.
              </p>
            </div>
          </div>

          {/* 04 */}
          <div className="flex gap-4">
            <span
              className={`hidden sm:block text-xs font-mono tracking-widest pt-1 ${
                isDark ? "text-white/30" : "text-gray-300"
              }`}
            >
              04
            </span>
            <div className="flex-1">
              <h2
                className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`}
              >
                Beyond the code
              </h2>
              <div
                className={`mt-1 h-px w-10 ${isDark ? "bg-white/15" : "bg-gray-200"}`}
              />
              <p
                className={`mt-3 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                Football and the gym — they keep me focused, disciplined, and
                team-minded. That energy carries back into how I build software.
              </p>

              {/* CTA band */}
              <div
                className={`mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl px-5 py-4 border ${
                  isDark
                    ? "bg-white/[0.04] border-white/10"
                    : "bg-gray-900 text-white border-gray-900"
                }`}
              >
                <p
                  className={`text-sm font-medium ${isDark ? "text-white" : "text-white"}`}
                >
                  Let&apos;s build something great together.
                </p>
                <div className="flex gap-2">
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                  >
                    <Mail className="h-4 w-4" />
                    Get in touch
                  </a>
                  <a
                    href={portfolioData.personal.resumeLink}
                    download
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border ${
                      isDark
                        ? "border-white/15 text-white hover:bg-white/10"
                        : "border-white/20 text-white hover:bg-white/10"
                    }`}
                  >
                    <Download className="h-4 w-4" />
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
