import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://nayyelin.dev"),
  title: {
    default: "Nay Ye Lin | Junior Software Engineer Portfolio",
    template: "%s | Nay Ye Lin",
  },
  description:
    "Portfolio of Nay Ye Lin, a Junior Software Engineer in Bangkok, Thailand. 8 months of enterprise internship experience with Java, Quarkus, React, Next.js, Node.js, Docker, and Azure.",
  keywords: [
    "Nay Ye Lin",
    "Software Engineer",
    "Junior Software Engineer",
    "Full-Stack Developer",
    "Java Developer",
    "Quarkus",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web Developer",
    "Portfolio",
    "Bangkok",
    "Thailand",
    "JavaScript",
    "TypeScript",
    "Docker",
    "Azure DevOps",
    "PostgreSQL",
    "MongoDB",
  ],
  authors: [{ name: "Nay Ye Lin" }],
  creator: "Nay Ye Lin",
  publisher: "Nay Ye Lin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nayyelin.dev",
    siteName: "Nay Ye Lin Portfolio",
    title: "Nay Ye Lin | Junior Software Engineer Portfolio",
    description:
      "Portfolio of Nay Ye Lin, a Junior Software Engineer in Bangkok, Thailand. 8 months of enterprise internship experience with Java, Quarkus, React, Next.js, Node.js, Docker, and Azure.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nay Ye Lin - Junior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nay Ye Lin | Junior Software Engineer Portfolio",
    description:
      "Portfolio of Nay Ye Lin, a Junior Software Engineer in Bangkok, Thailand.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nay Ye Lin",
  jobTitle: "Junior Software Engineer",
  url: "https://nayyelin.dev",
  email: "nayyelin.dev@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangkok",
    addressCountry: "TH",
  },
  sameAs: [
    "https://github.com/Nayyelin-14",
    "https://www.linkedin.com/in/nay-ye-lin-621418331/",
  ],
  knowsAbout: [
    "Java",
    "Quarkus",
    "Spring Boot",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "TypeScript",
    "Docker",
    "GitHub Actions",
    "Azure DevOps",
    "Redis",
    "Apache Kafka",
  ],
  description:
    "Junior Software Engineer with 8 months of enterprise internship experience at Datasabai Thailand, building scalable backends and modern full-stack applications.",
};
