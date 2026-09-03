import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description: "Junior Software Engineer with 8 months of enterprise internship experience at Datasabai Thailand.",
};

export default function AboutPage() {
  return <AboutClient />;
}
