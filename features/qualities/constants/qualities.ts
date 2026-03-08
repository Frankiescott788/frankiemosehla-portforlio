import type { LucideIcon } from "lucide-react";
import { RocketIcon } from "@/features/qualities/components/rocket-icon";
import { SystemThinkingIcon } from "@/features/qualities/components/system-thinking-icon";
import { UiUxThinkingIcon } from "@/features/qualities/components/ui-ux-thinking-icon";
import { SeamlessSyncingIcon } from "@/features/qualities/components/seamless-syncing-icon";
import { SystematicThinkingIcon } from "@/features/qualities/components/systematic-thinking-icon";
import { DirectWorkflowsIcon } from "@/features/qualities/components/direct-workflows-icon";

export type QualityItem = {
  icon: LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  linearLink?: { href: string; label: string; logoSrc: string };
};

export const qualities: QualityItem[] = [
  {
    icon: RocketIcon,
    title: "Ship fast, ship right",
    description:
      "Move quickly without cutting corners, clean commits, clear scope, and quality checks that keep velocity high.",
  },
  {
    icon: SystemThinkingIcon,
    title: "Systems thinking",
    description:
      "Design scalable architecture, sensible boundaries, and predictable patterns so the product stays easy to evolve.",
  },
  {
    icon: UiUxThinkingIcon,
    title: "UI/UX thinking",
    description:
      "Engineer user-friendly interfaces: clear hierarchy, sensible states, accessibility, and interactions that feel intuitive.",
  },
  {
    icon: SeamlessSyncingIcon,
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
    icon: SystematicThinkingIcon,
    title: "Systematic thinking",
    description:
      "Everything must have a reason to exist, the same applies with every element created inside your product.",
  },
  {
    icon: DirectWorkflowsIcon,
    title: "Direct workflows",
    description:
      "Fast & uninterrupted process from communication to final result, with nothing standing in between.",
  },
];
