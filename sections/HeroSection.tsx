"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";
import { portfolioData } from "@/lib/data";
import { ArrowRight, ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const HeroSection = () => {
  const { isDark } = useTheme();

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl ${
            isDark ? "bg-blue-600/10" : "bg-blue-500/10"
          }`}
        />
        <div
          className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl ${
            isDark ? "bg-purple-600/10" : "bg-purple-500/10"
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <p
              className={`text-sm font-medium mb-4 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <span className="animate-wave">👋</span> Hello, I&apos;m
            </p>
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {portfolioData.personal.name}
            </h1>
            <p
              className={`mt-3 text-xl sm:text-2xl font-medium ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`}
            >
              {portfolioData.personal.title}
            </p>
            <p
              className={`mt-6 text-lg leading-relaxed max-w-lg ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {portfolioData.personal.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 px-6 py-3 font-medium rounded-lg border transition-colors ${
                  isDark
                    ? "border-gray-700 text-gray-300 hover:bg-gray-800"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                Contact Me
                <Mail className="w-4 h-4" />
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-lg transition-colors ${
                  isDark
                    ? "text-gray-400 hover:bg-gray-800 hover:text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-lg transition-colors ${
                  isDark
                    ? "text-gray-400 hover:bg-gray-800 hover:text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className={`p-2.5 rounded-lg transition-colors ${
                  isDark
                    ? "text-gray-400 hover:bg-gray-800 hover:text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right: Profile Visual */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              {/* Decorative ring */}
              <div
                className={`absolute inset-0 rounded-full animate-pulse-ring ${
                  isDark ? "bg-blue-500/20" : "bg-blue-500/10"
                }`}
                style={{ margin: "-20px" }}
              />
              <div
                className={`relative w-72 h-72 rounded-full overflow-hidden border-4 ${
                  isDark ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <Image
                  src={portfolioData.personal.profileImg}
                  alt={portfolioData.personal.name}
                  fill
                  priority
                  sizes="288px"
                  className="object-cover"
                />
              </div>
              {/* Floating badge */}
              <div
                className={`absolute -bottom-2 -right-2 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 ${
                  isDark
                    ? "bg-gray-900 border border-gray-700 text-green-400"
                    : "bg-white border border-gray-200 text-green-600"
                }`}
              >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                AVAILABLE
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#strengths"
          className={`p-2 rounded-full ${
            isDark ? "text-gray-500 hover:text-gray-300" : "text-gray-400 hover:text-gray-600"
          }`}
        >
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
