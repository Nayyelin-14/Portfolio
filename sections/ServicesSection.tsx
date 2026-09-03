"use client";

import { useTheme } from "@/components/ThemeProvider";
import { SectionHeader } from "@/components/SectionHeader";
import { Server, Monitor, Globe, Database, Layers } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Building scalable APIs and backend services with Java, Quarkus, Node.js, and Express.",
  },
  {
    icon: Monitor,
    title: "Frontend Development",
    description:
      "Creating responsive and performant web applications using React and Next.js.",
  },
  {
    icon: Globe,
    title: "API Design",
    description:
      "Designing RESTful APIs with clear contracts, authentication, and proper error handling.",
  },
  {
    icon: Layers,
    title: "Cloud & DevOps",
    description:
      "Deploying and managing applications with Docker, GitHub Actions, and Azure DevOps.",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Designing efficient schemas with PostgreSQL and MongoDB, optimizing queries and data flow.",
  },
];

export const ServicesSection = () => {
  const { isDark } = useTheme();

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What I Do"
          title="Building solutions with clean code and modern technologies."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`p-6 rounded-xl border transition-colors ${
                isDark
                  ? "bg-gray-900/50 border-gray-800 hover:border-gray-700"
                  : "bg-white border-gray-200 hover:border-gray-300"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                  isDark ? "bg-blue-500/10 text-blue-400" : "bg-blue-50 text-blue-600"
                }`}
              >
                <s.icon className="w-5 h-5" />
              </div>
              <h3
                className={`text-lg font-semibold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {s.title}
              </h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
