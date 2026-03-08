import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getPublishedCaseStudies } from "@/lib/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudies = getPublishedCaseStudies();
  const caseStudyEntries: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${site.url}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...caseStudyEntries,
  ];
}
