import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { site } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} — ${site.tagline}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.shortName,
  keywords: [
    "Frank Mosehla",
    "Nkululeko Mosehla",
    "software engineer",
    "web developer",
    "React",
    "Next.js",
    "frontend",
    "mobile development",
    "product engineering",
    "South Africa",
    "frankiemosehla.dev",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.shortName,
    title: `${site.shortName} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: site.shortName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortName} — ${site.tagline}`,
    description: site.description,
    ...(site.twitterHandle ? { creator: site.twitterHandle } : {}),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: site.url,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const CURSOR_SVG = "/images/Cursor.svg";
const CURSOR_HOTSPOT = "16 8";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: site.email,
  jobTitle: "Software Engineer",
  description: site.description,
  image: `${site.url}/images/frankie.png`,
  sameAs: [site.github, site.linkedin, site.instagram].filter(Boolean),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.shortName,
  url: site.url,
  description: site.description,
  author: { "@type": "Person" as const, name: site.name },
  inLanguage: site.locale,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} style={{ cursor: `url(${CURSOR_SVG}) ${CURSOR_HOTSPOT}, auto` }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ cursor: `url(${CURSOR_SVG}) ${CURSOR_HOTSPOT}, auto` }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
