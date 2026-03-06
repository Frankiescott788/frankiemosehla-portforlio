import type { LucideIcon } from "lucide-react";
import {
  Zap,
  LayoutGrid,
  Sparkles,
  MessageSquare,
  Cog,
  Workflow,
} from "lucide-react";

export type QualityItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  linearLink?: { href: string; label: string; logoSrc: string };
};

export const qualities: QualityItem[] = [
  {
    icon: Zap,
    title: "Ship fast, ship right",
    description:
      "Move quickly without cutting corners, clean commits, clear scope, and quality checks that keep velocity high.",
  },
  {
    icon: LayoutGrid,
    title: "Systems thinking",
    description:
      "Design scalable architecture, sensible boundaries, and predictable patterns so the product stays easy to evolve.",
  },
  {
    icon: Sparkles,
    title: "UI/UX thinking",
    description:
      "Engineer user-friendly interfaces: clear hierarchy, sensible states, accessibility, and interactions that feel intuitive.",
  },
  {
    icon: MessageSquare,
    title: "Seamless syncing",
    description:
      "Instant communication via Slack, dedicated workspace on Linear or other project management apps.",
    linearLink: {
      href: "https://linear.app",
      label: "Linear",
      logoSrc: "/icons/linear.svg",
    },
  },
  {
    icon: Cog,
    title: "Systematic thinking",
    description:
      "Everything must have a reason to exist, the same applies with every element created inside your product.",
  },
  {
    icon: Workflow,
    title: "Direct workflows",
    description:
      "Fast & uninterrupted process from communication to final result, with nothing standing in between.",
  },
];
