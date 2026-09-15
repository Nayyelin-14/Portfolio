import type { ProjectDetail } from "@/types/data";

export const edupro: ProjectDetail = {
  slug: "edupro",
  title: "EduPro – E-Learning Platform",
  summary:
    "Multi-tenant e-learning platform with course authoring, Stripe payments, AI roadmaps, and verifiable PDF certificates.",
  status: "completed",
  privacy: "open-source",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS v4",
    "ShadCN UI",
    "Prisma ORM",
    "PostgreSQL",
    "JWT Authentication",
    "TOTP 2FA",
    "Stripe",
    "Cloudinary",
    "Upstash QStash",
    "TanStack Query",
    "Zod",
  ],
  liveUrl: "https://edu-pro-nay1.vercel.app/",
  githubUrl: "https://github.com/Nayyelin-14/Edu-pro",
  screenshots: [
    "/PJimg/edupro/28-student-home.webp",
    "/PJimg/edupro/29-student-catalog.webp",
    "/PJimg/edupro/32-student-dashboard.webp",
    "/PJimg/edupro/42-student-lesson-player.webp",
    "/PJimg/edupro/08-superadmin-course-editor.png",
    "/PJimg/edupro/04-superadmin-courses.png",
    "/PJimg/edupro/09-superadmin-enrollments.png",
    "/PJimg/edupro/13-superadmin-users.png",
  ],
  overview: {
    title: "Complete end-to-end learning loop from enrollment to certification.",
    steps: [
      {
        number: "01",
        title: "Multi-tenant architecture",
        description:
          "Students, instructors, and superadmins each have role-based access. The tenant model supports multiple independent organizations with shared infrastructure.",
      },
      {
        number: "02",
        title: "Course enrollment and payments",
        description:
          "Students browse a public catalog, enroll via free checkout or Stripe payments with signed webhooks for verification.",
      },
      {
        number: "03",
        title: "Learning and certification",
        description:
          "An interactive player delivers lessons, quizzes, and final exams. On passing, students request verifiable PDF certificates generated server-side.",
      },
    ],
  },
  architecture: {
    description:
      "Next.js App Router with server-side API routes. Prisma ORM connects to PostgreSQL on Neon. Stripe handles payments, Cloudinary stores media, Upstash QStash runs background jobs, and NVIDIA NIM powers AI features.",
    steps: [
      {
        number: "01",
        title: "Authorization layers",
        description:
          "Three defense layers: session check, tenant context resolution, and capability verification (read vs author). Resource ownership guards add a fourth layer.",
      },
      {
        number: "02",
        title: "Payment flow",
        description:
          "Stripe checkout creates a session, signed webhooks confirm payment, and the order status transitions atomically in the database.",
      },
      {
        number: "03",
        title: "AI roadmap generation",
        description:
          "The AI generates a staged weekly plan matched to real platform courses, stored with token usage tracking and confidence metadata.",
      },
    ],
  },
  engineeringFocus: {
    title: "Security, payments, and certificate generation.",
    items: [
      "17 cross-tenant vulnerabilities found and fixed during security audit",
      "TOTP 2FA with encrypted secrets and JWT refresh rotation",
      "PDF certificate generation with public verification page",
    ],
  },
};
