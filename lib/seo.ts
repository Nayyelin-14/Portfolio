import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://nayyelin.dev"),
  title: {
    default: "Nay Ye Lin | Full-Stack Developer Portfolio",
    template: "%s | Nay Ye Lin",
  },
  description:
    "Portfolio of Nay Ye Lin, a passionate Full-Stack Developer from Chiang Rai, Thailand. Specializing in React, Next.js, Node.js, and modern web applications.",
  keywords: [
    "Nay Ye Lin",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web Developer",
    "Portfolio",
    "Chiang Rai",
    "Thailand",
    "Software Engineer",
    "JavaScript",
    "TypeScript",
    "MongoDB",
    "Express.js",
  ],
  authors: [{ name: "Nay Ye Lin" }],
  creator: "Nay Ye Lin",
  publisher: "Nay Ye Lin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nayyelin.dev",
    siteName: "Nay Ye Lin Portfolio",
    title: "Nay Ye Lin | Full-Stack Developer Portfolio",
    description:
      "Portfolio of Nay Ye Lin, a passionate Full-Stack Developer from Chiang Rai, Thailand. Specializing in React, Next.js, Node.js, and modern web applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nay Ye Lin - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nay Ye Lin | Full-Stack Developer Portfolio",
    description:
      "Portfolio of Nay Ye Lin, a passionate Full-Stack Developer from Chiang Rai, Thailand.",
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
  jobTitle: "Full-Stack Developer",
  url: "https://nayyelin.dev",
  email: "nayyelin.dev@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chiang Rai",
    addressCountry: "TH",
  },
  sameAs: ["https://github.com/Nayyelin-14"],
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "PostgreSQL",
    "Prisma",
  ],
  description:
    "Passionate full-stack developer with 1+ year of experience building scalable web applications.",
};
