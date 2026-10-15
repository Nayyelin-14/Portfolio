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
    "NVIDIA NIM",
    "OpenRouter",
    "Groq",
    "Z.AI",
    "GitHub REST API",
    "GitHub OAuth",
    "GitHub Actions",
    "SSE",
    "Docker",
    "Caddy",
    "Azure VM",
  ],
  liveUrl: "https://changelog-gen.duckdns.org/#",
  githubUrl: "https://github.com/Nayyelin-14/Changelog-gen",
  screenshots: [
    "/PJimg/cc/01-role-select.webp",
    "/PJimg/cc/02-login.webp",
    "/PJimg/cc/03-login-error.webp",
    "/PJimg/cc/06-dev-repo-dashboard.webp",
    "/PJimg/cc/07-generate-source-data.webp",
    "/PJimg/cc/08-generation-streaming.webp",
    "/PJimg/cc/09-generation-result.webp",
    "/PJimg/cc/10-edit-mode.webp",
    "/PJimg/cc/11-save-confirm-dialog.webp",
    "/PJimg/cc/12-save-success.webp",
    "/PJimg/cc/13-push-confirm-dialog.webp",
    "/PJimg/cc/14-history-list.webp",
    "/PJimg/cc/15-generation-error.webp",
    "/PJimg/cc/16-models-unavailable.webp",
    "/PJimg/cc/17-account-menu.webp",
    "/PJimg/cc/18-qa-browse.webp",
    "/PJimg/cc/19-qa-version-changelog.webp",
    "/PJimg/cc/20-business-browse.webp",
    "/PJimg/cc/21-business-version-changelog.webp",
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
        title: "Multi-provider generation",
        description:
          "A role-based React dashboard generates, edits, and restores tailored changelogs per audience. Pick from NVIDIA NIM, OpenRouter, Groq, or Z.AI — the model catalog is probed live so only healthy models are offered. Generation streams over SSE.",
      },
      {
        number: "03",
        title: "Push to repository",
        description:
          "The generated developer changelog is pushed directly to CHANGELOG.md on the source repository, with a confirmation step and version tracking.",
      },
    ],
  },
  architecture: {
    description:
      "Quarkus backend serves the API and bundles the React frontend. PostgreSQL stores changelog versions, revisions, and raw release data. Multi-provider AI generation with catalog health probing and a fallback model chain.",
    steps: [
      {
        number: "01",
        title: "GitHub source connector",
        description:
          "GitHub connector fetches releases, pull requests, and commits through the REST API, with per-user OAuth sessions and default-deny access guards on every route.",
      },
      {
        number: "02",
        title: "AI generation pipeline",
        description:
          "The changelog generation service processes release data through the selected provider (NVIDIA NIM, OpenRouter, Groq, Z.AI) with input-hash caching, live catalog probing, and a model fallback chain.",
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
    title: "Multi-provider AI with production-grade deployment.",
    items: [
      "Multi-provider AI — NVIDIA NIM, OpenRouter, Groq, Z.AI with live catalog health probing and fallback chain",
      "SSE streaming — generation streams token-by-token into the dashboard",
      "Per-user isolation — GitHub OAuth sessions, default-deny API guards, role-scoped views (Developer / QA / Business)",
      "Revision history — every text change is a new revision; restore any previous version atomically",
    ],
  },
};
