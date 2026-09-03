import type { ProjectDetail } from "@/types/data";

export const ediScrapper: ProjectDetail = {
  slug: "edi-scrapper",
  title: "EDI Spec Scrapper",
  summary:
    "Quarkus service that scrapes EDI specifications (EDIFACT/X12) from public sites and generates JSON Schemas and BeanIO mappings.",
  status: "completed",
  privacy: "open-source",
  technologies: [
    "Java 25",
    "Quarkus",
    "Maven",
    "jsoup",
    "BeanIO",
    "SSE",
    "Azure DevOps",
  ],
  githubUrl: "https://github.com/Nayyelin-14/edi-scrapper",
  screenshots: [
    "/PJimg/scrapper/scrapper-ui-02-standard-edifact-revisions-loaded.png",
    "/PJimg/scrapper/scrapper-ui-05-scrape-progress-live-sse.png",
    "/PJimg/scrapper/scrapper-ui-06-result-tree-view.png",
    "/PJimg/scrapper/scrapper-ui-07-result-beanio-tab.png",
    "/PJimg/scrapper/scrapper-api-18-result-jsonschema.png",
    "/PJimg/scrapper/scrapper-ui-11-dark-mode.png",
  ],
  overview: {
    title: "Turning public EDI reference sites into machine-readable artifacts.",
    steps: [
      {
        number: "01",
        title: "Specification scraping",
        description:
          "Scrapes EDIFACT specs from edifactory.de and X12 specs from Stedi, extracting segment hierarchies, element definitions, and composite structures.",
      },
      {
        number: "02",
        title: "Artifact generation",
        description:
          "For each message type, generates a canonical JSON model, a JSON Schema (draft-07), and a BeanIO mapping XML for flat-file parsing.",
      },
      {
        number: "03",
        title: "Publishing workflow",
        description:
          "Generated artifacts can be published to an Azure DevOps Git repository for downstream integration pipelines.",
      },
    ],
  },
  architecture: {
    description:
      "Java 25 / Quarkus multi-module project. Core module handles scraping, parsing, and conversion without framework dependencies. App module provides REST API with SSE streaming and a React CDN UI.",
    steps: [
      {
        number: "01",
        title: "Dual-standard scraping",
        description:
          "EdifactScraper and X12Scraper each handle their standard's HTML structure, with envelope caching for service segments fetched once.",
      },
      {
        number: "02",
        title: "Live progress streaming",
        description:
          "SSE endpoints stream scrape progress events (progress, done, error) so the UI can show real-time status for long-running scrapes.",
      },
      {
        number: "03",
        title: "Azure DevOps publisher",
        description:
          "Clones a target Git repo, copies artifact files, cleans stale entries, and commits using Azure CLI access tokens.",
      },
    ],
  },
  engineeringFocus: {
    title: "Web scraping with live feedback and downstream integration.",
    items: [
      "jsoup HTML parsing with Next.js data extraction — handles both scraping targets",
      "Envelope caching — service segments fetched once, reused across messages",
      "Azure DevOps git publisher — automated artifact delivery to downstream systems",
    ],
  },
};
