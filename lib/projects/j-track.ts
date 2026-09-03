import type { ProjectDetail } from "@/types/data";

export const jTrack: ProjectDetail = {
  slug: "j-track",
  title: "J Track – Job Tracking Platform",
  summary:
    "Full-stack job marketplace with a Next.js frontend and a microservices backend featuring Kafka event pipelines, AI analysis, and Redis caching.",
  status: "completed",
  privacy: "open-source",
  technologies: [
    "Next.js 16",
    "Node.js",
    "Express 5",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "Redis",
    "Apache Kafka",
    "Groq",
    "Gemini AI",
    "Docker",
    "GitHub Actions",
    "Azure VM",
  ],
  liveUrl: "https://j-track.duckdns.org",
  githubUrl: "https://github.com/Nayyelin-14/j-track-services",
  screenshots: [
    "/PJimg/jtrack/13-recruiter-dashboard.png",
    "/PJimg/jtrack/01-seeker-dashboard.png",
    "/PJimg/jtrack/02-jobs-browse.png",
    "/PJimg/jtrack/03-job-detail.png",
    "/PJimg/jtrack/06-applications-list.png",
    "/PJimg/jtrack/16-post-job-form-filled.png",
    "/PJimg/jtrack/20-applicants-list.png",
    "/PJimg/jtrack/25-status-changed.png",
    "/PJimg/jtrack/08-career-ai.png",
    "/PJimg/jtrack/36-chat-answer-streaming.png",
    "/PJimg/jtrack/09-resume-analysis.png",
    "/PJimg/jtrack/47-match-analysis-result.png",
  ],
  overview: {
    title: "A production-grade job marketplace with event-driven architecture.",
    steps: [
      {
        number: "01",
        title: "Microservices backend",
        description:
          "Four Express services (Auth, User, Job, Utils) share a Prisma schema and communicate via REST and Kafka. Each service is independently scalable and deployed.",
      },
      {
        number: "02",
        title: "Event-driven pipelines",
        description:
          "A transactional outbox pattern publishes events to Kafka for email notifications and analytics. Consumers are idempotent with retry, DLQ, and replay support.",
      },
      {
        number: "03",
        title: "AI-powered analysis",
        description:
          "SSE-streamed AI analysis uses Groq and Gemini to provide job match scoring, resume analysis, and career guidance in real time.",
      },
    ],
  },
  architecture: {
    description:
      "Next.js frontend served through nginx reverse proxy. Four backend services handle auth, user profiles, job operations, and utility functions. PostgreSQL for data, Redis for caching and rate limiting, Apache Kafka for async event processing.",
    steps: [
      {
        number: "01",
        title: "Request routing",
        description:
          "All traffic flows through nginx which routes to the appropriate backend service based on path prefix.",
      },
      {
        number: "02",
        title: "Transactional outbox",
        description:
          "Database writes and event publishing are atomic via an outbox table. A poller publishes events and marks them as sent.",
      },
      {
        number: "03",
        title: "Idempotent consumers",
        description:
          "A consumer dedup table ensures at-least-once delivery is safe. Failed messages retry with exponential backoff before moving to DLQ.",
      },
    ],
  },
  engineeringFocus: {
    title: "Event-driven reliability with production deployment.",
    items: [
      "Transactional outbox pattern — atomic DB writes and Kafka event publishing",
      "Idempotent consumers with DLQ replay — safe at-least-once delivery",
      "SSE streaming for AI — real-time token-by-token response delivery",
    ],
  },
};
