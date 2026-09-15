import type { ProjectDetail } from "@/types/data";

export const interviewPrep: ProjectDetail = {
  slug: "interview-prep",
  title: "AI Powered Interview Preparation",
  summary:
    "AI-powered interview prep app that generates personalized questions and answers based on job role and experience level.",
  status: "completed",
  privacy: "open-source",
  technologies: [
    "React",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Gemini AI",
    "Redis (Upstash)",
    "BullMQ",
    "Cloudinary",
  ],
  liveUrl: "https://interview-prep-ai-nine.vercel.app",
  githubUrl: "https://github.com/Nayyelin-14/InterviewPrepAI",
  screenshots: [
    "/PJimg/INT1.webp",
    "/PJimg/INT2.webp",
    "/PJimg/INT3.webp",
    "/PJimg/INT4.webp",
    "/PJimg/INT5.webp",
    "/PJimg/INT6.webp",
  ],
  overview: {
    title: "Personalized interview preparation powered by Gemini AI.",
    steps: [
      {
        number: "01",
        title: "Session creation",
        description:
          "Users create sessions with their target role, years of experience, difficulty level, and focus topics. Gemini generates tailored questions and detailed answers.",
      },
      {
        number: "02",
        title: "Interactive learning",
        description:
          "Questions are presented in an expandable accordion with markdown rendering and syntax-highlighted code blocks. Users can pin important questions and add personal notes.",
      },
      {
        number: "03",
        title: "On-demand explanations",
        description:
          "Clicking Learn More triggers a separate Gemini call to generate in-depth concept explanations for any question, shown in a slide-in drawer.",
      },
    ],
  },
  architecture: {
    description:
      "React (Vite) frontend connects to an Express backend. MongoDB stores users, sessions, and questions. Gemini AI generates questions and explanations. BullMQ + Redis handles background image processing.",
    steps: [
      {
        number: "01",
        title: "Gemini integration",
        description:
          "Level-appropriate prompts generate questions with detailed answers. Basic level keeps it simple, Advanced includes system-level edge cases.",
      },
      {
        number: "02",
        title: "Background image processing",
        description:
          "Profile images go through a BullMQ queue where sharp optimizes them before uploading to Cloudinary.",
      },
      {
        number: "03",
        title: "Session persistence",
        description:
          "Sessions and questions are stored in MongoDB, supporting load-more to append additional questions to existing sessions.",
      },
    ],
  },
  engineeringFocus: {
    title: "AI prompt engineering with background processing.",
    items: [
      "Level-appropriate prompt engineering — Basic, Intermediate, Advanced difficulty tiers",
      "BullMQ background image pipeline — sharp optimization before Cloudinary upload",
      "Load-more pattern — append AI-generated questions to existing sessions",
    ],
  },
};
