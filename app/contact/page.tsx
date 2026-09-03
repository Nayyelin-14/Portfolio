import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Nay Ye Lin — email, GitHub, and phone.",
};

export default function ContactPage() {
  return <ContactClient />;
}
