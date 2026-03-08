const projects: Array<
  {
    title: string;
    description: string;
    tags: string[];
    imageSrc: string;
    imageAlt: string;
  } & { caseStudySlug?: string }
> = [
  {
    title: "E-commerce platform",
    description: "Full-stack online store with checkout, inventory, and analytics.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    imageSrc: "/images/services/web.svg",
    imageAlt: "E-commerce platform",
  },
  {
    title: "CodeTribe Timesheet",
    description: "QR-based attendance and time tracking for CodeTribe Academy with geo-fencing to prevent remote check-ins.",
    tags: ["Mobile", "React Native", "Expo", "Supabase"],
    imageSrc: "/images/case-studies/timesheet.png",
    imageAlt: "CodeTribe Timesheet",
    caseStudySlug: "codetribe-timesheet",
  },
  {
    title: "LuminaLab",
    description: "An AI-powered startup idea validation platform featuring dual debate agents.",
    tags: ["AI", "SaaS", "Full-stack", "Next.js", "Supabase"],
    imageSrc: "/images/case-studies/luminalab.png",
    imageAlt: "LuminaLab",
    caseStudySlug: "luminalab",
  },
  {
    title: "Zeroes and Ones",
    description: "Retro-inspired agency website for zeroesand1s — AI-powered systems and scalable digital products.",
    tags: ["Client work", "Web", "Next.js", "Tailwind"],
    imageSrc: "/images/case-studies/zeroes-and-ones.png",
    imageAlt: "Zeroes and Ones",
    caseStudySlug: "zeroes-and-ones",
  },
];

export { projects };
