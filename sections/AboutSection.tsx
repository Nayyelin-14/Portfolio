"use client";

import { MapPin, Calendar, Download, Star } from "lucide-react";
import { portfolioData } from "@/lib/data";

interface AboutSectionProps {
  isDark: boolean;
  visibleElements: Set<string>;
}

export const AboutSection = ({
  isDark,
  visibleElements,
}: AboutSectionProps) => {
  const interests = [
    { icon: "🎮", label: "Gaming", description: "Strategy & indie games" },
    { icon: "📚", label: "Learning", description: "Exploring new tech" },
    { icon: "🏃‍♂️", label: "Running", description: "Morning runs & marathons" },
    { icon: "🏋️‍♂️", label: "Gym", description: "Strength training & fitness" },
  ];

  return (
    <section
      id="about"
      data-animate
      className={`py-20 sm:py-20 md:py-25 px-4 sm:px-6 md:px-8 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-slate-900 via-gray-900 to-slate-800"
          : "bg-gradient-to-b from-gray-50 via-white to-blue-50/30"
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl ${
            isDark ? "bg-blue-500" : "bg-purple-400"
          }`}
        />
        <div
          className={`absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 blur-3xl ${
            isDark ? "bg-purple-500" : "bg-blue-400"
          }`}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`mb-10 transition-all duration-1000 ${
            visibleElements?.has("about")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </div>

        {/* About Card */}
        <div
          className={`rounded-2xl p-6 sm:p-8 backdrop-blur-sm border mb-14 ${
            isDark
              ? "bg-gray-800/60 border-gray-700/50"
              : "bg-white/80 border-gray-200/60 shadow-lg"
          } transition-all duration-1000 delay-200 ${
            visibleElements?.has("about")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-1 bg-gradient-to-br from-blue-500 to-purple-600">
                <img
                  src={portfolioData.personal.profileImg}
                  alt="Profile"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <h3
                className={`text-xl sm:text-2xl font-bold mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Nay Ye Lin
              </h3>

              <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-2 font-bold">
                  <MapPin className="w-4 h-4" />
                  {portfolioData.personal.location}
                </div>
                <div className="flex items-center gap-2 font-bold">
                  <Calendar className="w-4 h-4" />
                  Mae Fah Luang University
                </div>
                <div className="flex items-center gap-2 font-bold">
                  <Star className="w-4 h-4" />
                  Current GPAX : 3.77 / 4.0
                </div>
              </div>

              <h1
                className={`text-3xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Hi, I&apos;m{" "}
                <span className="text-indigo-600">Nay Ye Lin</span>, a Software
                Engineering graduate with 8 months of enterprise internship
                experience, passionate about building scalable backends and
                modern full-stack applications.
              </h1>

              <p
                className={`mb-4 leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                I recently completed an{" "}
                <span className="font-semibold">
                  8 month internship at Datasabai Thailand
                </span>
                , where I worked on enterprise integration products — from
                rebuilding a marketing website with{" "}
                <span className="font-bold text-xl">Next.js</span> to building{" "}
                <span className="font-bold text-xl">Java + Quarkus</span>{" "}
                backend services, internal SDK modules, and CI/CD pipelines.
              </p>

              <p
                className={`mb-4 leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                My core stack includes{" "}
                <span className="font-bold text-xl">
                  Java, Quarkus, Node.js, Express, React, Next.js, PostgreSQL,
                  and MongoDB
                </span>
                , with hands-on experience in{" "}
                <span className="font-bold text-xl">
                  Docker, GitHub Actions, Azure DevOps, Redis, and Kafka
                </span>
                . I love working across the stack — from designing clean,
                responsive UIs to building robust APIs and shipping production
                deployments.
              </p>

              <p
                className={`mb-6 leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                In this rapidly evolving era of AI, I&apos;m focused on building
                smart, intuitive applications with{" "}
                <span className="font-semibold">AI integration</span> — from
                SSE streamed AI features to LLM powered developer tools. I love
                turning ideas into impactful, real-world software while
                continuously improving both technically and in soft skills like
                communication and problem-solving.
              </p>

              <p
                className={`mb-6 leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Outside of coding, you&apos;ll often find me playing football or
                hitting the gym — activities that sharpen my focus, build
                discipline, and reinforce teamwork, all of which inspire and
                energize my approach to software engineering.
              </p>

              <p
                className="text-indigo-600 font-semibold cursor-pointer hover:underline mb-6"
                role="button"
                tabIndex={0}
                onClick={() =>
                  (window.location.href = `mailto:${portfolioData.personal.email}`)
                }
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  (window.location.href = `mailto:${portfolioData.personal.email}`)
                }
              >
                I&apos;m always open to collaborating on meaningful projects, so
                feel free to reach out — let&apos;s build something great
                together.
              </p>

              <a
                href={portfolioData.personal.resumeLink}
                download="Nay Ye Lin - Software Engineering Resume.pdf"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  isDark
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
                }`}
                aria-label="Download Resume"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div
          id="skills"
          className={`scroll-mt-28 mb-14 transition-all duration-1000 delay-400 ${
            visibleElements?.has("about")
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

        {/* Interests */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            visibleElements?.has("about")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h3
            className={`text-xl sm:text-2xl font-bold text-center mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            When I&apos;m Not Coding
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {interests.map((interest, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl text-center border backdrop-blur-sm hover:scale-[1.02] transition-all ${
                  isDark
                    ? "bg-gray-800/60 border-gray-700/50"
                    : "bg-white/80 border-gray-200/60 shadow-sm hover:shadow-md"
                }`}
              >
                <div className="text-2xl mb-2">{interest.icon}</div>
                <h4
                  className={`font-semibold mb-1 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {interest.label}
                </h4>
                <p
                  className={`text-xs ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
