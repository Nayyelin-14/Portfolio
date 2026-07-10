import {
  Award,
  GraduationCap,
  Calendar,
  MapPin,
  ExternalLink,
  BookOpen,
  Users,
  Clock,
  X,
} from "lucide-react";
import image from "../assets/Certi/image.png";
import full from "../assets/Certi/Full.JPEG";
import { useState } from "react";
export const CertificatesEducationSection = ({ isDark, visibleElements }) => {
  const [selectedCert, setSelectedCert] = useState(null);
  const certificates = [
    {
      id: 2,
      title: "Full-Stack Web Development Bootcamp",
      provider: "Code Hub MM",
      instructor: "Code Hub MM",
      date: {
        start: "2024-05-14",
        end: "2024-08-29",
      },
      duration: "—", // Add actual hours if known
      image: image, // Replace with actual image import
      instructorBio:
        " A vibrant community for developers in Myanmar to learn, share, and grow together. We focus on coding tutorials, projects, and tech discussions to empower Myanmar’s tech talent. Join us to code, collaborate, and connect!",
      description:
        "Intensive hands-on bootcamp covering modern full-stack development. Built multiple real-world projects using React, Next.js, Node.js, and MongoDB, with deployment on Vercel and production-ready configurations.",
      techStack: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "ShadCN",
        "Node.js",
        "Express.js",
        "Fastify",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Clerk",
        "Git",
        "GitHub",
        "Nginx",
        "Vercel",
        "Postman",
        "VS Code",
        "Chrome DevTools",
      ],
      skills: [
        "Component Architecture",
        "React Hooks",
        "React Router",
        "Context API",
        "Server-Side Rendering",
        "Static Site Generation",
        "API Development",
        "Authentication & Authorization",
        "Schema Design & Validation",
        "Reverse Proxy Configuration",
        "Deployment & Hosting",
        "API Testing & Debugging",
        "Performance Optimization",
      ],
    },
    {
      id: 2,
      title: "Full-Stack Web Developer class",
      provider: "Phone Nyo MM",
      instructor: "Mr.Phone Nyo",
      instructorBio:
        "Mr.Phone Nyo is a full-stack developer and tech lead from Myanmar. He specializes in React, Next.js, Node.js, React Native, and NestJS, sharing practical knowledge to help others build modern web and mobile apps",
      date: {
        start: "2025-06-22",
      },

      image: full, // Replace with actual imported certificate image
      description:
        "An intensive hands-on bootcamp covering both frontend and backend development with modern technologies. Included multiple real-world projects, such as a full-featured furniture shop application, backend APIs with Express.js and Prisma, and GraphQL services. Covered performance optimization, security best practices, deployment pipelines, and developer tooling.",
      techStack: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "ShadCN",
        "Node.js",
        "Express.js",
        "Fastify",
        "PostgreSQL",
        "MongoDB",
        "Prisma ORM",
        "Mongoose",
        "JWT",
        "Apollo Client",
        "Apollo Server",
        "GraphQL",
        "Zustand",
        "Tanstack Query",
        "Redux Toolkit",
        "RTK Query",
        "i18next",
      ],
      skills: [
        "React Hooks",
        "React Router",
        "Context API",
        "Responsive UI with Tailwind",

        "React Hook Form & Zod Validation",

        "Internationalization (i18next)",
        "Lazy Loading & Suspense",
        "Apollo Client Query/Mutation",
        "State Management with Zustand & Redux Toolkit",
        "Optimistic UI Updates",
        "Infinite Scrolling",
        "Performance Optimization",

        // Backend
        "REST API Development",

        "Database Schema Design",
        "Entity Relationship Diagrams",
        "Prisma ORM Migrations",
        "Authentication & Authorization (JWT)",
        "Session & Cookie Management",
        "Security Best Practices",

        "Job Queue Workers",
        "Pagination (Offset & Cursor)",
        "Caching Strategies",
        "Cron Jobs",
      ],
    },
  ];

  return (
    <section
      data-animate // ← ADD THIS
      id="certificates-education"
      className={`py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-slate-800 via-gray-900 to-slate-900"
          : "bg-gradient-to-b from-blue-50/30 via-white to-purple-50/20"
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/4 -right-20 w-80 h-80 rounded-full opacity-10 blur-3xl ${
            isDark ? "bg-purple-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-1/4 -left-20 w-96 h-96 rounded-full opacity-10 blur-3xl ${
            isDark ? "bg-blue-500" : "bg-purple-400"
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${
            visibleElements?.has("certificates-education")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Certificates
            </span>
          </h2>
          <p
            className={`text-lg sm:text-xl max-w-3xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            My learning journey through formal education and professional
            certifications
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-400 ${
            visibleElements?.has("certificates-education")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid gap-8 md:gap-10">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className={`group rounded-3xl p-6 sm:p-8 backdrop-blur-sm border hover:scale-[1.02] transition-all duration-500 ${
                  isDark
                    ? "bg-gray-800/60 border-gray-700/50 hover:bg-gray-800/80"
                    : "bg-white/80 border-gray-200/60 shadow-xl hover:shadow-2xl"
                }`}
              >
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                  {/* Certificate Image */}
                  <div className="flex-shrink-0 mx-auto lg:mx-0">
                    <div className="relative rounded-2xl overflow-hidden w-full max-w-sm lg:w-80 h-48 lg:h-56">
                      <img
                        src={cert.image}
                        alt={`${cert.title} Certificate`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <div
                          className={`p-2 rounded-full ${
                            isDark ? "bg-gray-800/80" : "bg-white/80"
                          }`}
                        >
                          <Award className="w-5 h-5 text-yellow-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div>
                        <h4
                          className={`text-xl sm:text-2xl font-bold mb-2 ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {cert.title}
                        </h4>
                        <p
                          className={`text-lg font-semibold mb-1 ${
                            isDark ? "text-blue-400" : "text-blue-600"
                          }`}
                        >
                          {cert.provider}
                        </p>
                        <p
                          className={`text-sm ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          Instructor: {cert.instructor}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row lg:flex-col gap-2 text-sm">
                        <div
                          className={`flex items-center justify-center lg:justify-start gap-1 ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          <Calendar className="w-4 h-4" />
                          {cert.date.start} {cert.date.end && "-"}{" "}
                          {cert.date.end}
                        </div>
                      </div>
                    </div>
                    <p
                      className={`text-sm my-5 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {cert.instructorBio}
                    </p>
                    <p
                      className={`text-sm sm:text-base leading-relaxed mb-6 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {cert.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h5
                        className={`font-semibold mb-3 text-sm ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Technologies Covered:
                      </h5>
                      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        {cert.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              isDark
                                ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                                : "bg-blue-100 text-blue-700 border border-blue-200"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Skills Gained */}
                    <div className="mb-6">
                      <h5
                        className={`font-semibold mb-3 text-sm ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Key Skills Gained:
                      </h5>
                      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        {cert.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className={`px-3 py-1 rounded-lg text-xs font-medium ${
                              isDark
                                ? "bg-gray-700/50 text-gray-300"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Certificate Button */}
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all hover:scale-105 cursor-pointer ${
                        isDark
                          ? "bg-purple-600 hover:bg-purple-700 text-white"
                          : "bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl"
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
        </div>
      </div>
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-3xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500"
              onClick={() => setSelectedCert(null)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <img
              src={selectedCert.image}
              alt={`${selectedCert.title} Certificate`}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
};
