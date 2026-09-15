import type { ProjectDetail } from "@/types/data";

export const taskManagement: ProjectDetail = {
  slug: "task-management",
  title: "Task Management",
  summary:
    "Role-based team task management platform with AI-powered planning, smart checklists, and analytics dashboards.",
  status: "completed",
  privacy: "open-source",
  technologies: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS v4",
    "MongoDB",
    "Mongoose",
    "JWT Authentication",
    "Gemini AI",
    "Cloudinary",
    "Recharts",
    "ExcelJS",
  ],
  liveUrl: "https://task-management-brown-three.vercel.app",
  githubUrl: "https://github.com/Nayyelin-14/Task-management",
  screenshots: [
    "/TaskImg/one.webp",
    "/TaskImg/two.webp",
    "/TaskImg/three.webp",
    "/TaskImg/four.webp",
    "/TaskImg/five.webp",
    "/TaskImg/six.webp",
    "/TaskImg/seven.webp",
    "/TaskImg/eight.webp",
    "/TaskImg/nine.webp",
  ],
  overview: {
    title: "Smart task management with AI-powered execution planning.",
    steps: [
      {
        number: "01",
        title: "Role-based access",
        description:
          "Admins manage the entire team's workload with CRUD, assignment, and analytics. Members view assigned tasks and update status through interactive checklists.",
      },
      {
        number: "02",
        title: "Smart checklists",
        description:
          "Todo items auto-calculate completion percentage and transition task status to In Progress or Completed without manual intervention.",
      },
      {
        number: "03",
        title: "AI task planner",
        description:
          "Gemini generates structured execution plans from assigned tasks, including per-task guidance, next steps, and effort estimates.",
      },
    ],
  },
  architecture: {
    description:
      "Next.js App Router with API Routes. MongoDB via Mongoose stores users and tasks. Gemini AI generates plans. Cloudinary handles image uploads. Recharts powers analytics charts.",
    steps: [
      {
        number: "01",
        title: "Auto-calculated progress",
        description:
          "The checklist endpoint recomputes progress percentage and status on every toggle, keeping the task state always consistent.",
      },
      {
        number: "02",
        title: "AI plan generation",
        description:
          "Gemini receives task data and returns structured plans that are validated server-side and merged with authoritative DB data to prevent hallucination.",
      },
      {
        number: "03",
        title: "Excel report exports",
        description:
          "Admins can export task and user workload reports as Excel files via ExcelJS for offline analysis.",
      },
    ],
  },
  engineeringFocus: {
    title: "Automated task state management with AI assistance.",
    items: [
      "Auto-calculated task progress — checklist toggles recompute percentage and status",
      "AI plan validation — server-side merge with DB data prevents hallucination",
      "Deterministic task ordering — overdue first, then priority, then due date",
    ],
  },
};
