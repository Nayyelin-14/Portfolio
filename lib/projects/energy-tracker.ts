import type { ProjectDetail } from "@/types/data";

export const energyTracker: ProjectDetail = {
  slug: "energy-tracker",
  title: "Energy Tracker – Home Energy Monitoring",
  summary:
    "A home energy monitoring platform that shows where your electricity goes, warns you the moment a device crosses its limit, and turns your own usage history into practical saving advice. Built for real households: open the dashboard and everything is explained in plain numbers.",
  status: "completed",
  privacy: "open-source",
  technologies: [
    "Java 25",
    "Spring Boot 4",
    "Spring Cloud Gateway",
    "Resilience4j",
    "Spring AI",
    "Kafka",
    "InfluxDB",
    "MySQL",
    "Redis",
    "Next.js 16",
    "TypeScript",
    "Tailwind CSS 4",
    "Recharts",
    "Docker",
  ],
  liveUrl: "https://tracker-chi-swart.vercel.app",
  githubUrl: "https://github.com/Nayyelin-14/energy-tracker",
  screenshots: [
    "/PJimg/energy-tracker/01-onboarding-generate.png",
    "/PJimg/energy-tracker/03-overview-empty.png",
    "/PJimg/energy-tracker/04-devices-empty.png",
    "/PJimg/energy-tracker/07-device-create-filled.png",
    "/PJimg/energy-tracker/08-devices-registry.png",
    "/PJimg/energy-tracker/11-simulation-backfilled.png",
    "/PJimg/energy-tracker/12-devices-usage.png",
    "/PJimg/energy-tracker/13-overview-hourly.png",
    "/PJimg/energy-tracker/14-simulation-normal-dispatch.png",
    "/PJimg/energy-tracker/15-alert-toast.png",
    "/PJimg/energy-tracker/16-alert-email-preview.png",
    "/PJimg/energy-tracker/17-simulation-after-spike.png",
    "/PJimg/energy-tracker/18-overview-daily.png",
    "/PJimg/energy-tracker/19-alerts-ledger.png",
    "/PJimg/energy-tracker/20-alerts-violations.png",
    "/PJimg/energy-tracker/21-insights-empty.png",
    "/PJimg/energy-tracker/22-insights-streamed.png",
    "/PJimg/energy-tracker/23-insights-overview.png",
  ],
  overview: {
    title: "See the usage, catch the problem, cut the bill.",
    steps: [
      {
        number: "01",
        title: "Capture every reading",
        description:
          "Your devices and sensors report power readings to the platform, which validates and stores them straight away. A demo home is seeded with a week of realistic data so you can explore the dashboard the moment you open it.",
      },
      {
        number: "02",
        title: "Watch the limit for you",
        description:
          "Every device gets a limit you choose. The platform compares current usage against it all day long and sends a single email the moment you cross over, instead of repeating itself while the usage stays high.",
      },
      {
        number: "03",
        title: "Turn data into decisions",
        description:
          "The dashboard shows hour by hour and day by day trends for the whole house and for each device, and the AI reads your history to stream saving tips you can act on right away.",
      },
    ],
  },
  architecture: {
    description:
      "The work is split so that heavy jobs never block everyday use: readings, alerting, and AI each run as their own part that can be scaled or restarted on its own, all behind a single front door. Your profile and devices live in a relational database, your readings live in a time series store, and generated answers are cached so the same question is served instantly the second time.",
    steps: [
      {
        number: "01",
        title: "One front door",
        description:
          "Every request enters through the gateway, which keeps an eye on each backend. If one part starts failing, the gateway answers with a clear fallback instead of leaving the app hanging.",
      },
      {
        number: "02",
        title: "A pipeline that never drops your data",
        description:
          "Readings travel from ingestion through a queue into storage and on to alerting, so a burst of traffic is absorbed smoothly and everything is processed in order.",
      },
      {
        number: "03",
        title: "AI that is fast, fair, and affordable",
        description:
          "Answers to the same question come from cache, only a handful of generations run at once, and every user gets a fair allowance so nobody can empty the shared quota.",
      },
    ],
  },
  engineeringFocus: {
    title: "What I wanted to get right.",
    items: [
      "Alerting that respects you: one notification the moment usage crosses the limit, silence while it stays there",
      "Faults kept small: a struggling part answers with a clear fallback while the rest of the app keeps working",
      "AI you can watch: saving tips stream in word by word instead of making you wait for one big response",
      "AI that stays affordable: cached answers, limited concurrency, and a fair allowance for every user",
    ],
  },
};
