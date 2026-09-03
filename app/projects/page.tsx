import type { Metadata } from "next";
import { ProjectsGridClient } from "./ProjectsGridClient";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of things I've built — from enterprise SDKs to AI-powered tools and full-stack applications.",
};

export default function ProjectsPage() {
  return <ProjectsGridClient />;
}
