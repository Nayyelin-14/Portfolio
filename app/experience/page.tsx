import type { Metadata } from "next";
import { ExperienceClient } from "./ExperienceClient";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience — Software Engineer Intern at Datasabai Thailand.",
};

export default function ExperiencePage() {
  return <ExperienceClient />;
}
