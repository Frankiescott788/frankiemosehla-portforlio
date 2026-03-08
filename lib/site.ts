/**
 * Site-wide config for SEO and metadata.
 * Set NEXT_PUBLIC_SITE_URL to override (e.g. for preview deployments).
 * Production: https://frankiemosehla.dev
 */
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  "https://frankiemosehla.dev";

export const site = {
  name: "Nkululeko Frank Mosehla",
  shortName: "Frank Mosehla",
  tagline: "Software engineer — ship fast, ship right",
  description:
    "Portfolio of Nkululeko Frank Mosehla. Software engineer focused on web and mobile apps, AI systems, and product engineering. Available for contracts and 20-minute intro calls.",
  url: baseUrl,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "frankiemosehla@gmail.com",
  locale: "en_ZA",
  twitterHandle: "", // optional: e.g. "@frankiemosehla"
  github: "https://github.com/Frankiescott788",
  linkedin: "https://www.linkedin.com/in/frankiemosehla",
  instagram: "https://www.instagram.com/frankie.intech/",
} as const;
