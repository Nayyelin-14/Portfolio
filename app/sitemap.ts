export default function sitemap() {
  const baseUrl = "https://nayyelin.dev";

  const routes = [
    "",
    "/about",
    "/skills",
    "/experience",
    "/projects",
    "/projects/changelog-composer",
    "/projects/j-track",
    "/projects/edupro",
    "/projects/idoc-parser",
    "/projects/edi-scrapper",
    "/projects/workflow-mcp",
    "/projects/interview-prep",
    "/projects/task-management",
    "/projects/nextfurniture",
    "/certificates",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : route.startsWith("/projects/") ? 0.7 : 0.8,
  }));
}
