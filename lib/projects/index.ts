import type { ProjectDetail } from "@/types/data";
import { changelogComposer } from "./changelog-composer";
import { jTrack } from "./j-track";
import { edupro } from "./edupro";
import { idocParser } from "./idoc-parser";
import { ediScrapper } from "./edi-scrapper";
import { workflowMcp } from "./workflow-mcp";
import { interviewPrep } from "./interview-prep";
import { taskManagement } from "./task-management";
import { nextFurniture } from "./nextfurniture";

export const allProjects: ProjectDetail[] = [
  changelogComposer,
  jTrack,
  edupro,
  idocParser,
  ediScrapper,
  workflowMcp,
  interviewPrep,
  taskManagement,
  nextFurniture,
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return allProjects.find((p) => p.slug === slug);
}
