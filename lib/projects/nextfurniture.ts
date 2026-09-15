import type { ProjectDetail } from "@/types/data";

export const nextFurniture: ProjectDetail = {
  slug: "nextfurniture",
  title: "NextFurniture – Shopping & Blog Platform",
  summary:
    "Furniture e-commerce platform with a blog section, Redis caching, background job processing, and multi-language support.",
  status: "completed",
  privacy: "practice",
  technologies: [
    "React",
    "TanStack Query",
    "Node.js",
    "Express.js",
    "Prisma",
    "MongoDB",
    "Redis",
    "BullMQ",
    "Node Cron",
    "Sharp",
    "ShadCN UI",
    "Tailwind CSS",
    "i18next",
  ],
  githubUrl: "https://github.com/Nayyelin-14/Furniture-Shop",
  screenshots: [
    "/furniture/n1.webp",
    "/furniture/n2.webp",
    "/furniture/n3.webp",
    "/furniture/n4.webp",
    "/furniture/n5.webp",
    "/furniture/n6.webp",
    "/furniture/n7.webp",
    "/furniture/n8.webp",
    "/furniture/n9.webp",
    "/furniture/n10.webp",
    "/furniture/n11.webp",
  ],
  overview: {
    title:
      "Exploring modern full-stack patterns with a furniture e-commerce platform.",
    steps: [
      {
        number: "01",
        title: "Product browsing and cart",
        description:
          "Users browse furniture products with advanced category filtering, view detailed descriptions, and manage a persistent shopping cart.",
      },
      {
        number: "02",
        title: "Blog and content",
        description:
          "A blog section with articles about furniture and home design, supporting both offset and cursor pagination.",
      },
      {
        number: "03",
        title: "Background processing",
        description:
          "Redis caching speeds up product queries, BullMQ handles queue work, and Node Cron schedules background tasks. Sharp optimizes product images.",
      },
    ],
  },
  architecture: {
    description:
      "React frontend with TanStack Query connects to an Express backend. Prisma ORM manages MongoDB. Redis provides caching, BullMQ handles job queues, and i18next supports multi-language content.",
    steps: [
      {
        number: "01",
        title: "Caching strategy",
        description:
          "Redis caches product queries to reduce database load. Cache invalidation happens on product updates.",
      },
      {
        number: "02",
        title: "Background jobs",
        description:
          "BullMQ queues handle image processing and other async tasks. Node Cron schedules periodic maintenance jobs.",
      },
      {
        number: "03",
        title: "Internationalization",
        description:
          "i18next provides multi-language support on both frontend and backend for product names, descriptions, and UI text.",
      },
    ],
  },
  engineeringFocus: {
    title: "Caching, queues, and multi-language support.",
    items: [
      "Redis caching — product query caching with invalidation on updates",
      "BullMQ + Node Cron — background job processing and scheduled tasks",
      "i18next internationalization — multi-language support across the stack",
    ],
  },
};
