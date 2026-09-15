import type { ProjectDetail } from "@/types/data";

export const idocParser: ProjectDetail = {
  slug: "idoc-parser",
  title: "SAP IDoc Parser",
  summary:
    "Java parser that converts SAP IDoc definitions (WE60 exports) into structured JSON Schema documents.",
  status: "completed",
  privacy: "open-source",
  technologies: ["Java 25", "Quarkus", "Maven", "SAP IDoc", "JSON Schema"],
  githubUrl: "https://github.com/Nayyelin-14/idoc-parser",
  screenshots: [
    "/PJimg/idoc/idoc-ui-01-input.webp",
    "/PJimg/idoc/idoc-ui-02-before-after.webp",
  ],
  overview: {
    title: "Converting SAP WE60 exports into machine-readable JSON Schema.",
    steps: [
      {
        number: "01",
        title: "State-machine parser",
        description:
          "A 700-line IDocParser engine processes WE60 text exports line by line, handling segments, fields, groups, and hierarchy levels through a state machine.",
      },
      {
        number: "02",
        title: "Multi-module architecture",
        description:
          "The core module is framework-free pure Java for SDK reuse. The quarkus-app module adds a REST API and interactive web UI.",
      },
      {
        number: "03",
        title: "Schema generation",
        description:
          "Parsed IDoc definitions are converted to JSON Schema draft-07 with segment hierarchy, field types, required arrays, and auto-injected EDI_DC40 control records.",
      },
    ],
  },
  architecture: {
    description:
      "Two-module Maven project. Core module provides pure Java parsing logic with no framework dependencies. Quarkus-app module exposes REST endpoints and serves a React UI built via CDN (no Node build step).",
    steps: [
      {
        number: "01",
        title: "Core parsing engine",
        description:
          "IDocParser.java uses a ThreadLocal state machine to process BEGIN_IDOC, BEGIN_SEGMENT, BEGIN_FIELDS markers and extract segment hierarchy and field definitions.",
      },
      {
        number: "02",
        title: "Schema conversion",
        description:
          "Parsed segments map to JSON Schema $defs with $ref references. LOOPMAX > 1 creates array types, MANDATORY status adds required fields.",
      },
      {
        number: "03",
        title: "Web UI",
        description:
          "React 18 served via CDN at the Quarkus root. Supports paste, upload, and sample loading with side-by-side before/after comparison.",
      },
    ],
  },
  engineeringFocus: {
    title: "Framework-free core with enterprise integration patterns.",
    items: [
      "Framework-free core module — reusable as a standalone Java SDK",
      "Thread-safe parsing via ThreadLocal — safe for concurrent requests",
      "Auto-injected EDI_DC40 control record — always present in output schema",
    ],
  },
};
