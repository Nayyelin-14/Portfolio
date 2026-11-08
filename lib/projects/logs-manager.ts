import type { ProjectDetail } from "@/types/data";

export const logsManager: ProjectDetail = {
  slug: "logs-manager",
  title: "Logs Manager – Mini SIEM",
  summary:
    "A complete log management appliance with multi-source ingestion, normalization, search, dashboard, alerting, and 7-day retention. Built for a Full-Stack Developer internship practical assignment. Ingests from syslog (UDP/TCP 514), HTTP POST /ingest, file batch uploads, and a bruteforce simulator; normalizes 7 source types into a common schema stored in PostgreSQL JSONB + GIN; and serves search, dashboard (Top IP/User/Event Type, timeline), alerting with dedupe + webhook notification, and admin/viewer RBAC with tenant isolation.",
  status: "completed",
  privacy: "open-source",
  technologies: [
    "FastAPI",
    "React 19",
    "TypeScript",
    "Tailwind CSS v4",
    "PostgreSQL 16",
    "JSONB + GIN indexes",
    "Redis",
    "Docker Compose",
    "syslog UDP/TCP",
    "Caddy",
    "asyncpg",
    "Alembic",
    "slowapi",
  ],
  liveUrl: "https://github.com/Nayyelin-14/Logs-Manager",
  githubUrl: "https://github.com/Nayyelin-14/Logs-Manager",
  screenshots: [],
  overview: {
    title: "Complete log management appliance with multi-source ingestion and alerting",
    steps: [
      {
        number: "01",
        title: "Multi-source ingestion",
        description:
          "Syslog UDP/TCP on port 514, HTTP POST /ingest, file batch upload (JSON/NDJSON/CSV/CloudTrail), and a bruteforce simulator for demo traffic.",
      },
      {
        number: "02",
        title: "Common schema normalization",
        description:
          "7 source types (firewall, network, api, crowdstrike, aws, m365, ad) normalized into a common schema with @timestamp, tenant, source, severity 0-10, action, raw, _tags stored in PostgreSQL JSONB + GIN.",
      },
      {
        number: "03",
        title: "Search, dashboard, and alerting",
        description:
          "FastAPI search endpoint with filters (tenant, source, severity, IP, user, time range), dashboard KPIs and charts, alert rules with idempotent deduplication, and webhook notifications.",
      },
    ],
  },
  architecture: {
    description:
      "Single-node appliance deployable via Docker Compose or as SaaS on Render + Vercel + Neon + Upstash. Caddy serves the React SPA and reverse-proxies the FastAPI backend. PostgreSQL stores events with JSONB raw column and GIN indexes for full-text search. Redis is used for rate limiting and cache invalidation.",
    steps: [
      {
        number: "01",
        title: "Ingest pipeline",
        description:
          "Syslog listener (UDP/TCP 514) and FastAPI HTTP API parse and normalize events via 7 source-specific parsers, then validate through Pydantic NormalizedEvent before inserting into PostgreSQL with deterministic SHA256 deduplication IDs.",
      },
      {
        number: "02",
        title: "Search and stats API",
        description:
          "FastAPI serves GET /api/events with tenant-scoped, parameterized SQL queries, cursor pagination, and filters for tenant/source/event_type/severity/IP/user/date. GET /api/stats/* serves dashboard KPIs, top lists, and timeline buckets.",
      },
      {
        number: "03",
        title: "Alert worker and retention",
        description:
          "A background worker evaluates alert rules every 30 seconds using GROUP BY ... HAVING queries, creating idempotent alerts with dedupe keys and cooldowns. A separate retention job purges events older than 7 days based on ingested_at.",
      },
    ],
  },
  engineeringFocus: {
    title: "Tenant isolation, deterministic dedupe, and retention",
    items: [
      "Server-side tenant isolation: VIEWER role forced to user.tenant on every query; ADMIN can opt into cross-tenant views",
      "Deterministic SHA256 event IDs for idempotent inserts and deduplication",
      "Alert dedupe keys (rule_id:tenant:group_value) with cooldown windows to prevent notification storms",
      "Deletion-based retention: DELETE FROM events WHERE ingested_at < cutoff, run hourly by the worker",
    ],
  },
};