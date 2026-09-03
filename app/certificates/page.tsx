import type { Metadata } from "next";
import { CertificatesClient } from "./CertificatesClient";

export const metadata: Metadata = {
  title: "Certificates",
  description: "Certificates and education — internship completion, bootcamps, and courses.",
};

export default function CertificatesPage() {
  return <CertificatesClient />;
}
