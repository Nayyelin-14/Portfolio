"use client";

import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { Award, Calendar, Download, ExternalLink, X } from "lucide-react";
import type { Certificate } from "@/types/data";

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Internship Completion Certificate",
    provider: "Datasabai Thailand",
    instructor: "gilbert COURTOT",
    instructorBio:
      "Senior Integration Architect specializing in cloud-native B2B platforms, API & data integration, and webMethods & SAP solutions. Mentored me throughout my 8-month internship at Datasabai Thailand.",
    date: { start: "Dec 2025", end: "Jul 2026" },
    image: "/Certi/internship-certificate.pdf",
    description:
      "Completed an 8-month Software Engineer Internship at Datasabai Thailand, where my software engineering journey began. Worked with the R&D team on enterprise integration products — EDI data transformation tools (EDIFACT/X12), a SAP IDoc parser, an internal VS Code extension, the company marketing website with Next.js and Payload CMS, and an AI-powered changelog platform built with Java, Quarkus, and React.",
    techStack: ["Java", "Quarkus", "Maven", "React", "Next.js", "TypeScript", "Payload CMS", "Azure DevOps", "Docker", "REST APIs"],
    skills: [
      "Enterprise Integration (EDIFACT / X12)",
      "SAP IDoc Parsing",
      "Backend Development with Java & Quarkus",
      "Full-Stack Web Development",
      "VS Code Extension Development",
      "CI/CD with Azure Pipelines",
      "Docker & Azure VM Deployment",
      "Agile Team Collaboration",
    ],
  },
  {
    id: 2,
    title: "Full Stack Web Development Bootcamp",
    provider: "Code Hub MM",
    instructor: "Code Hub MM",
    date: { start: "2024-05-14", end: "2024-08-29" },
    image: "/Certi/image.png",
    instructorBio:
      "A vibrant community for developers in Myanmar to learn, share, and grow together. We focus on coding tutorials, projects, and tech discussions to empower Myanmar's tech talent.",
    description:
      "Intensive hands-on bootcamp covering modern full stack development. Built multiple real-world projects using React, Next.js, Node.js, and MongoDB, with deployment on Vercel and production-ready configurations.",
    techStack: ["React", "Next.js", "Tailwind CSS", "ShadCN", "Node.js", "Express.js", "Fastify", "MongoDB", "Mongoose", "JWT", "Git", "GitHub", "Vercel", "Nginx"],
    skills: ["Component Architecture", "React Hooks", "Server-Side Rendering", "API Development", "Authentication & Authorization", "Deployment & Hosting"],
  },
  {
    id: 3,
    title: "Full Stack Web Developer class",
    provider: "Phone Nyo MM",
    instructor: "Mr.Phone Nyo",
    instructorBio:
      "Mr.Phone Nyo is a full stack developer and tech lead from Myanmar. He specializes in React, Next.js, Node.js, React Native, and NestJS.",
    date: { start: "2025-06-22" },
    image: "/Certi/Full.JPEG",
    description:
      "An intensive hands-on bootcamp covering both frontend and backend development with modern technologies. Included multiple real-world projects, such as a full-featured furniture shop application, backend APIs with Express.js and Prisma, and GraphQL services.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma ORM", "GraphQL", "Zustand", "Tanstack Query", "i18next"],
    skills: ["React Hooks", "Responsive UI", "State Management", "REST API Development", "Authentication (JWT)", "Pagination", "Caching Strategies", "Cron Jobs"],
  },
];

export const CertificatesClient = () => {
  const { isDark } = useTheme();
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <p
        className={`text-sm font-semibold uppercase tracking-widest mb-3 ${
          isDark ? "text-blue-400" : "text-blue-600"
        }`}
      >
        Certificates
      </p>
      <h1
        className={`text-3xl sm:text-4xl font-bold tracking-tight ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        My learning journey
      </h1>
      <p
        className={`mt-4 text-lg leading-relaxed ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        Formal education and professional certifications.
      </p>

      <div className="mt-10 space-y-8">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className={`rounded-2xl p-6 sm:p-8 border ${
              isDark ? "bg-gray-900/50 border-gray-800" : "bg-white border-gray-200"
            }`}
          >
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Image */}
              <div className="shrink-0 mx-auto lg:mx-0">
                <div className="relative rounded-xl overflow-hidden w-full max-w-sm lg:w-72 h-48 lg:h-52">
                  <img
                    src={
                      cert.image.endsWith(".pdf")
                        ? cert.image.replace(".pdf", "-preview.png")
                        : cert.image
                    }
                    alt={`${cert.title} Certificate`}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 dark:bg-gray-800/80">
                    <Award className="w-4 h-4 text-yellow-500" />
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="flex-1">
                <h2
                  className={`text-lg font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {cert.title}
                </h2>
                <p
                  className={`text-sm font-semibold ${
                    isDark ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  {cert.provider}
                </p>
                <p
                  className={`text-xs mt-1 ${
                    isDark ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  Instructor: {cert.instructor}
                </p>
                <p
                  className={`text-xs mt-1 flex items-center gap-1 ${
                    isDark ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  <Calendar className="w-3 h-3" />
                  {cert.date.start} {cert.date.end && `- ${cert.date.end}`}
                </p>
                <p
                  className={`text-sm mt-4 leading-relaxed ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {cert.description}
                </p>

                <div className="mt-4">
                  <p
                    className={`text-xs font-semibold mb-2 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          isDark ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <p
                    className={`text-xs font-semibold mb-2 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Key Skills
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          isDark ? "bg-blue-500/10 text-blue-400" : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className={`mt-5 inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isDark
                      ? "bg-gray-800 text-white hover:bg-gray-700"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Certificate
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-white/80 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-red-500"
              onClick={() => setSelectedCert(null)}
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={
                selectedCert.image.endsWith(".pdf")
                  ? selectedCert.image.replace(".pdf", "-preview.png")
                  : selectedCert.image
              }
              alt={`${selectedCert.title} Certificate`}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            {selectedCert.image.endsWith(".pdf") && (
              <div className="flex justify-center py-4">
                <a
                  href={selectedCert.image}
                  download
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
