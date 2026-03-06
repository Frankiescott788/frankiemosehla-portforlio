import type { ComponentType } from "react";
import { NextJs, React, JavaScript, TypeScript } from "developer-icons";

export type StackItem =
  | {
      type: "icon";
      Icon: ComponentType<{ size?: number; className?: string }>;
      label: string;
      category: string;
      description: string;
    }
  | {
      type: "image";
      src: string;
      label: string;
      category: string;
      description: string;
    };

export const STACK_ROW_1: StackItem[] = [
  { type: "icon", Icon: NextJs, label: "Next.js", category: "Framework", description: "React framework for production with SSR, file-based routing, and API routes." },
  { type: "icon", Icon: React, label: "React", category: "Library", description: "Library for building user interfaces with components and a reactive data model." },
  { type: "icon", Icon: TypeScript, label: "TypeScript", category: "Language", description: "Typed superset of JavaScript that compiles to plain JS." },
  { type: "icon", Icon: JavaScript, label: "JavaScript", category: "Language", description: "The language of the web for interactive frontends and Node.js backends." },
  { type: "image", src: "/icons/vercel.svg", label: "Vercel", category: "Platform", description: "Platform for frontend frameworks and serverless functions; optimal for Next.js." },
  { type: "image", src: "/icons/github_light.svg", label: "GitHub", category: "Platform", description: "Code hosting, version control, and collaboration via Git." },
  { type: "image", src: "/icons/docker.svg", label: "Docker", category: "DevOps", description: "Containers for building, shipping, and running apps in a consistent environment." },
  { type: "image", src: "/icons/postgresql.svg", label: "PostgreSQL", category: "Database", description: "Powerful open-source relational database with strong consistency and SQL." },
  { type: "image", src: "/icons/firebase.svg", label: "Firebase", category: "Backend", description: "Google's backend for auth, database, hosting, and serverless functions." },
  { type: "image", src: "/icons/stripe.svg", label: "Stripe", category: "Payments", description: "Payments API for subscriptions, one-time payments, and financial operations." },
];

export const STACK_ROW_2: StackItem[] = [
  { type: "image", src: "/icons/prisma.svg", label: "Prisma", category: "ORM", description: "Next-generation ORM for Node.js and TypeScript with type-safe queries and migrations." },
  { type: "image", src: "/icons/redis.svg", label: "Redis", category: "Database", description: "In-memory store for caching, sessions, queues, and real-time data." },
  { type: "image", src: "/icons/shadcn-ui.svg", label: "shadcn/ui", category: "UI", description: "Re-usable components built with Radix UI and Tailwind that you own and customize." },
  { type: "image", src: "/icons/expo.svg", label: "Expo", category: "Framework", description: "Framework and platform for building and shipping React Native apps." },
  { type: "image", src: "/icons/better-auth_dark.svg", label: "Better Auth", category: "Auth", description: "Auth library for the web with sessions, OAuth, and full customization." },
  { type: "image", src: "/icons/sentry.svg", label: "Sentry", category: "Monitoring", description: "Error and performance monitoring for frontend and backend applications." },
  { type: "image", src: "/icons/clerk-icon-light.svg", label: "Clerk", category: "Auth", description: "Drop-in auth with sign-in, user management, and multi-factor auth." },
  { type: "image", src: "/icons/vscode.svg", label: "VS Code", category: "Editor", description: "Code editor by Microsoft with great JS/TS and extension support." },
  { type: "image", src: "/icons/notion.svg", label: "Notion", category: "Productivity", description: "Workspace for docs, wikis, and project management." },
  { type: "image", src: "/icons/mongodb-icon-light.svg", label: "MongoDB", category: "Database", description: "Document database for flexible schemas and horizontal scaling." },
  { type: "image", src: "/icons/linear.svg", label: "Linear", category: "Productivity", description: "Issue tracking and product development workflow tool." },
  { type: "image", src: "/icons/neon.svg", label: "Neon", category: "Database", description: "Serverless Postgres with branching and autoscaling." },
];
