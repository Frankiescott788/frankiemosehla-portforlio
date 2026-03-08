import Link from "next/link";
import type React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
// @ts-expect-error rehype-highlight types not resolved in some setups
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import type { Components } from "react-markdown";

type MDXChildren = { children?: React.ReactNode };

export const caseStudyMarkdownComponents: Components = {
  h1: ({ children }: MDXChildren) => (
    <h1 className="mb-4 mt-10 scroll-mt-24 text-2xl font-semibold tracking-tight text-foreground first:mt-0 md:text-3xl">
      {children}
    </h1>
  ),
  h2: ({ children }: MDXChildren) => (
    <h2 className="mb-3 mt-8 scroll-mt-24 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
      {children}
    </h2>
  ),
  h3: ({ children }: MDXChildren) => (
    <h3 className="mb-2 mt-6 text-lg font-semibold tracking-tight text-foreground">
      {children}
    </h3>
  ),
  p: ({ children }: MDXChildren) => (
    <p className="mb-4 leading-7 text-foreground">{children}</p>
  ),
  ul: ({ children }: MDXChildren) => (
    <ul className="mb-5 ml-4 list-disc space-y-1.5 pl-1 text-foreground [&>li]:leading-7">
      {children}
    </ul>
  ),
  ol: ({ children }: MDXChildren) => (
    <ol className="mb-5 ml-4 list-decimal space-y-1.5 pl-1 text-foreground [&>li]:leading-7">
      {children}
    </ol>
  ),
  li: ({ children }: MDXChildren) => <li className="pl-0.5">{children}</li>,
  blockquote: ({ children }: MDXChildren) => (
    <blockquote className="mb-5 border-l-4 border-primary/40 bg-muted/40 py-1 pl-4 pr-2 font-sans text-base italic text-muted-foreground [&>p]:mb-0">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-8 border-border" />,
  a: (props: { href?: string; children?: React.ReactNode }) => (
    <Link
      href={props.href ?? "#"}
      className="text-primary underline-offset-4 hover:underline"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {props.children}
    </Link>
  ),
  strong: ({ children }: MDXChildren) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  table: ({ children }: MDXChildren) => (
    <div className="mb-6 w-full overflow-x-auto">
      <table className="w-full min-w-[320px] border-collapse text-sm">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }: MDXChildren) => (
    <thead className="border-b border-border bg-muted/50">{children}</thead>
  ),
  tbody: ({ children }: MDXChildren) => (
    <tbody className="divide-y divide-border">{children}</tbody>
  ),
  tr: ({ children }: MDXChildren) => (
    <tr className="border-border">{children}</tr>
  ),
  th: ({ children }: MDXChildren) => (
    <th className="px-4 py-3 text-left font-semibold text-foreground">
      {children}
    </th>
  ),
  td: ({ children }: MDXChildren) => (
    <td className="px-4 py-3 text-muted-foreground">{children}</td>
  ),
  pre: ({ children }: MDXChildren) => (
    <pre className="mb-6 overflow-x-auto rounded-lg bg-[#0d1117] p-4 text-sm">
      {children}
    </pre>
  ),
  code: (props: {
    className?: string;
    children?: React.ReactNode;
    node?: unknown;
  }) => {
    const isBlock = Boolean(props.className);
    if (isBlock) {
      return <code className={props.className}>{props.children}</code>;
    }
    return (
      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
        {props.children}
      </code>
    );
  },
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <span className="my-6 block overflow-hidden rounded-lg border border-border">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img {...props} alt={props.alt ?? ""} className="h-auto w-full object-cover" />
    </span>
  ),
};

type CaseStudyMarkdownProps = { content: string };

export function CaseStudyMarkdown({ content }: CaseStudyMarkdownProps) {
  return (
    <div className="case-study-prose">
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={caseStudyMarkdownComponents}
      >
        {content}
      </Markdown>
    </div>
  );
}
