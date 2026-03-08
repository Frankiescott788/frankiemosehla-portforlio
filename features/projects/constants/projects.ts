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
    title: "KBY Fitness",
    description: "Women-only fitness mobile app design — onboarding, progress tracking, workouts, goals, and in-app store.",
    tags: ["UI/UX", "Mobile", "Client work", "Figma"],
    imageSrc: "/content/kby-home-screen.svg",
    imageAlt: "KBY Fitness",
    caseStudySlug: "kby-fitness",
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
    imageSrc: "/content/lumina-labs-home.svg",
    imageAlt: "LuminaLab",
    caseStudySlug: "luminalab",
  },
  {
    title: "Zeroes and Ones",
    description: "Retro-inspired agency website for zeroesand1s — AI-powered systems and scalable digital products.",
    tags: ["Client work", "Web", "Next.js", "Tailwind"],
    imageSrc: "/content/zeroes-and-one.svg",
    imageAlt: "Zeroes and Ones",
    caseStudySlug: "zeroes-and-ones",
  },
];

export { projects };
