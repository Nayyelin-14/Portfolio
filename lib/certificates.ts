import type { Certificate } from "@/types/data";

/**
 * English source data for the certificates section. Translations live in
 * `lib/content-translations.ts` under the `certificatesData` prefix.
 */
export const certificatesData: Certificate[] = [
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
    techStack: [
      "Java",
      "Quarkus",
      "Maven",
      "React",
      "Next.js",
      "TypeScript",
      "Payload CMS",
      "Azure DevOps",
      "Docker",
      "REST APIs",
    ],
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
    image: "/Certi/image.webp",
    instructorBio:
      "A vibrant community for developers in Myanmar to learn, share, and grow together. We focus on coding tutorials, projects, and tech discussions to empower Myanmar's tech talent.",
    description:
      "Intensive hands-on bootcamp covering modern full stack development. Built multiple real-world projects using React, Next.js, Node.js, and MongoDB, with deployment on Vercel and production-ready configurations.",
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
      "Git",
      "GitHub",
      "Vercel",
      "Nginx",
    ],
    skills: [
      "Component Architecture",
      "React Hooks",
      "Server-Side Rendering",
      "API Development",
      "Authentication & Authorization",
      "Deployment & Hosting",
    ],
  },
  {
    id: 3,
    title: "Full Stack Web Developer class",
    provider: "Phone Nyo MM",
    instructor: "Mr.Phone Nyo",
    instructorBio:
      "Mr.Phone Nyo is a full stack developer and tech lead from Myanmar. He specializes in React, Next.js, Node.js, React Native, and NestJS.",
    date: { start: "2025-06-22" },
    image: "/Certi/Full.webp",
    description:
      "An intensive hands-on bootcamp covering both frontend and backend development with modern technologies. Included multiple real-world projects, such as a full-featured furniture shop application, backend APIs with Express.js and Prisma, and GraphQL services.",
    techStack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "GraphQL",
      "Zustand",
      "Tanstack Query",
      "i18next",
    ],
    skills: [
      "React Hooks",
      "Responsive UI",
      "State Management",
      "REST API Development",
      "Authentication (JWT)",
      "Pagination",
      "Caching Strategies",
      "Cron Jobs",
    ],
  },
];
