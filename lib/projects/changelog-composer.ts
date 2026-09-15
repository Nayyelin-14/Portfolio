import type { ProjectDetail } from "@/types/data";

export const changelogComposer: ProjectDetail = {
  slug: "changelog-composer",
  title: "Changelog Composer",
  summary:
    "AI-assisted changelog generator that turns raw GitHub release activity into audience-specific changelogs for Developers, QA, and Business stakeholders.",
  status: "completed",
  privacy: "open-source",
  technologies: [
    "Java 25",
    "Quarkus",
    "React 19",
    "TypeScript",
    "PostgreSQL",
    "Flyway",
    "NVIDIA NIM LLM",
    "GitHub REST API",
    "GitHub Actions",
    "Docker",
    "Caddy",
    "Azure VM",
  ],
  liveUrl: "https://changelog-gen.duckdns.org/#",
  githubUrl: "https://github.com/Nayyelin-14/Changelog-gen",
  screenshots: [
    "/PJimg/cc/01-role-select.webp",
    "/PJimg/cc/02-dev-dashboard-repos.webp",
    "/PJimg/cc/05-generation-streaming-mid.webp",
    "/PJimg/cc/06-generation-result.webp",
    "/PJimg/cc/13-push-success.webp",
    "/PJimg/cc/16-qa-version-changelog.webp",
    "/PJimg/cc/17-business-version-changelog.webp",
  ],
  overview: {
    title: "From raw release data to audience-specific changelogs.",
    steps: [
      {
        number: "01",
        title: "Pipeline data intake",
        description:
          "A CI pipeline endpoint collects raw release and pull request facts from GitHub without making any AI calls. The data is stored and indexed for later generation.",
      },
      {
        number: "02",
        title: "Dashboard generation",
        description:
          "A role-based React dashboard lets developers, QA, and business stakeholders generate, edit, and restore tailored changelogs. Generation streams live via SSE.",
      },
      {
        number: "03",
        title: "Push to repository",
        description:
          "The generated developer changelog can be pushed back to the source repository as a pull request against CHANGELOG.md.",
      },
    ],
  },
  architecture: {
    description:
      "Quarkus backend serves the API and bundles the React frontend. PostgreSQL stores changelog versions, revisions, and raw release data. NVIDIA NIM provides AI generation with a fallback model chain.",
    steps: [
      {
        number: "01",
        title: "Dual source connectors",
        description:
          "Azure DevOps and GitHub connectors fetch releases, pull requests, commits, and work items through their respective REST APIs.",
      },
      {
        number: "02",
        title: "AI generation pipeline",
        description:
          "The changelog generation service processes release data through NVIDIA NIM with input-hash caching and a model fallback chain for reliability.",
      },
      {
        number: "03",
        title: "Production deployment",
        description:
          "GitHub Actions builds immutable Docker images, promotes them to an Azure VM over SSH, and serves behind a Caddy TLS proxy with health-check gated deploys.",
      },
    ],
  },
  engineeringFocus: {
    title: "Reliable AI generation with production-grade deployment.",
    items: [
      "AI model fallback chain — up to 4 models tried sequentially on failure",
      "Input-hash caching — avoids redundant AI calls when data hasn't changed",
      "Self-changelog pipeline — the project dogfoods its own changelog generation",
    ],
  },
};
