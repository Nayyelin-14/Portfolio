import type { ProjectDetail } from "@/types/data";

export const workflowMcp: ProjectDetail = {
  slug: "workflow-mcp",
  title: "Workflow MCP · Flowagent.ai",
  summary:
    "Open-source visual AI workflow builder with drag-and-drop canvas for composing multi-step agent workflows.",
  status: "completed",
  privacy: "open-source",
  technologies: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "React Flow",
    "Vercel AI SDK",
    "Prisma",
    "MongoDB",
    "Upstash QStash",
    "Kinde OAuth",
  ],
  githubUrl: "https://github.com/Nayyelin-14/workflow-mcp",
  screenshots: ["/PJimg/workflow-mcp.svg"],
  overview: {
    title:
      "Composing AI agent workflows visually instead of writing chain code.",
    steps: [
      {
        number: "01",
        title: "Visual canvas",
        description:
          "A React Flow canvas with 6 node types (Start, Agent, If/Else, HTTP, Comment, End) lets users drag, connect, and configure workflow steps visually.",
      },
      {
        number: "02",
        title: "Multi-model agents",
        description:
          "Agent nodes support Gemini, GPT, and Claude via OpenRouter, with JSON structured output schemas and {{variable}} templating between nodes.",
      },
      {
        number: "03",
        title: "Durable execution",
        description:
          "Workflows run asynchronously via Upstash QStash with SSE streaming for real-time progress, and a chat preview panel for live testing.",
      },
    ],
  },
  architecture: {
    description:
      "Next.js 16 App Router with React Flow canvas. Vercel AI SDK handles LLM streaming. MongoDB stores workflows via Prisma. Upstash QStash provides durable async execution with local dev mode.",
    steps: [
      {
        number: "01",
        title: "Topological execution",
        description:
          "The workflow graph is topologically sorted before execution, ensuring nodes run in the correct dependency order.",
      },
      {
        number: "02",
        title: "Variable system",
        description:
          "Downstream nodes reference upstream outputs via {{variable}} syntax with autocomplete from connected upstream nodes only.",
      },
      {
        number: "03",
        title: "QStash integration",
        description:
          "Workflow runs are enqueued on QStash, which asynchronously callbacks to execute the workflow and stream progress via Redis pub/sub.",
      },
    ],
  },
  engineeringFocus: {
    title: "Visual composition with durable async execution.",
    items: [
      "Topological sort execution engine — correct dependency ordering for any graph shape",
      "{{variable}} templating with autocomplete — only shows connected upstream outputs",
      "QStash durable execution — resumable workflow runs with local dev mode",
    ],
  },
};
