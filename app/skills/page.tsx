import type { Metadata } from "next";
import { SkillsClient } from "./SkillsClient";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technologies and skills — Java, Quarkus, React, Next.js, Node.js, PostgreSQL, MongoDB, Docker, and more.",
};

export default function SkillsPage() {
  return <SkillsClient />;
}
