import type { ProjectDetail } from "@/types/data";

export const skyfare: ProjectDetail = {
  slug: "skyfare",
  title: "Skyfare – Flight Booking Platform",
  summary:
    "In-progress full-stack flight booking platform with a thoroughly documented system design — a FastAPI backend with transactional outbox, claim-based async worker, JWT auth, Redis caching, Kafka event pipelines, and a Next.js frontend. User registration and welcome emails are live; the full booking journey (flight search, seat locking, payments, ticketing) is being implemented.",
  status: "ongoing",
  privacy: "practice",
  technologies: [
    "FastAPI",
    "Python 3.14",
    "SQLModel",
    "SQLAlchemy",
    "PostgreSQL",
    "Alembic",
    "Redis",
    "Apache Kafka",
    "JWT Auth",
    "Outbox Pattern",
    "asyncio",
    "Amadeus API",
    "Chimoney",
    "WebSockets",
    "SMTP",
    "pytest",
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Docker",
    "Prometheus",
  ],
  githubUrl: "https://github.com/Nayyelin-14/Flight-ticketing-system",
  screenshots: [],
  overview: {
    title:
      "A flight booking system designed for reliability at every failure point.",
    steps: [
      {
        number: "01",
        title: "Flight search & Redis caching",
        description:
          "Route, date, and passenger queries hit indexed PostgreSQL queries, with search results cached in Redis (read-through, TTL-based invalidation on writes) to keep p99 latency low under repeated queries.",
      },
      {
        number: "02",
        title: "Seat locking & booking engine",
        description:
          "Seat selection uses DB-level atomic conditional UPDATEs so the last-seat race is solved at the database, not in application code. The booking engine is idempotent (UUID keys) and commits atomically across the booking, seat, and payment tables.",
      },
      {
        number: "03",
        title: "Payments, tickets & notifications",
        description:
        "Chimoney handles payments with signed HMAC webhooks and an hourly reconciliation job for dropped payments. Confirmed bookings generate a unique PNR-linked ticket, and email/SMS/push notifications are delivered via Kafka consumers with retries, DLQ, and multi-channel fallback.",
      },
    ],
  },
  architecture: {
    description:
      "FastAPI + SQLModel over PostgreSQL with Alembic migrations. A transactional outbox (outbox table) ensures events are never lost — booking and payment writes publish to Kafka topics for downstream notification, analytics, and logging consumers. Redis handles caching (search results, seat availability, flight details) and distributed rate limiting. The Next.js frontend consumes the REST API; real-time seat updates use WebSocket. A comprehensive design suite (ARCHITECTURE.md, COMPONENT_DESIGN.md, database-design.md, scalability-performance.md, scenarios.md, security-monitoring.md) documents the full target architecture including K8s scaling, DB sharding, and monitoring.",
    steps: [
      {
        number: "01",
        title: "Transactional outbox → Kafka",
        description:
          "Critical events (booking created, payment completed) are written to an outbox table in the same transaction as the business data, then polled and published to Kafka with acks=all — so events are never lost even under Kafka downtime.",
      },
      {
        number: "02",
        title: "Redis caching & rate limiting",
        description:
          "Read-through caching on flight details, seat maps, and search results; cache invalidation on writes. Distributed rate limiting via Redis INCR/EXPIRE on per-endpoint sliding windows to prevent brute force and abuse.",
      },
      {
        number: "03",
        title: "Payment & webhook security",
        description:
          "Server recomputes all amounts (client values are never trusted). Signed webhooks are verified with constant-time HMAC comparison and idempotency replay guards, with an hourly reconciliation job catching any payments that never completed.",
      },
      {
        number: "04",
        title: "Scalability design",
        description:
          "Documented strategies for Kubernetes HPA (3–10 pods), DB sharding (hash-based for users/bookings, range-based for flights by region), PostgreSQL read replicas, Kafka partitioning, and disaster recovery (RTO 15 min, RPO 5 min).",
      },
    ],
  },
  engineeringFocus: {
    title:
      "Reliability by design — every failure path documented before it's implemented.",
    items: [
      "Transactional outbox guarantees events are never lost, even if the API or Kafka is down",
      "Atomic DB-level seat locking solves the double-booking race at the data layer, not in code",
      "Permanent vs transient error model drives retries/backoff vs immediate failure across all services",
      "Scenarios.md documents the happy path, seat contention, gateway timeouts, Kafka down, and flash-sale flows end to end",
    ],
  },
};