/**
 * Site-wide config for SEO and metadata.
 * Set NEXT_PUBLIC_SITE_URL to your production URL (e.g. https://frankiemosehla.com).
 * When unset, defaults to Vercel deployment URL so OG and canonical work there too.
 */
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  "https://frankiemosehla.vercel.app";

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
} as const;
