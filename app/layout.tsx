import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { site } from "@/lib/site";
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
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
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
};

const CURSOR_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='24' viewBox='-4 -4 18 20'%3E%3Cg transform='rotate(12 4.5 6)'%3E%3Cpath fill='black' fill-rule='evenodd' d='M0 0v11.188L2.969 8.322 3.129 8.183H8.165L0 0Z'/%3E%3C/g%3E%3C/svg%3E";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: site.email,
  jobTitle: "Software Engineer",
  description: site.description,
  image: `${site.url}/images/frankie.png`,
  sameAs: [
    // Add when you have them: "https://github.com/frankiemosehla", "https://linkedin.com/in/..."
  ].filter(Boolean),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} style={{ cursor: `url(${CURSOR_SVG}) 5 4, auto` }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ cursor: `url(${CURSOR_SVG}) 5 4, auto` }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
