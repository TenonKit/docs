import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { isValidElement } from "react";
import { Callout, Card, Cards, Code, Figure, H2, Step, Steps } from "@/components/docs/blocks";

// What the docs' .mdx files render with: markdown elements mapped onto the doc components,
// plus the components themselves, so pages can use <Callout> and the rest without importing them.
const components: MDXComponents = {
  h2: ({ children }) => <H2>{children}</H2>,
  a: ({ href = "", children }) =>
    href.startsWith("/") ? <Link href={href}>{children}</Link> : <a href={href}>{children}</a>,
  // A fenced block's info string is its title: ```Counter.jsx
  pre: ({ children }) => {
    const code = isValidElement<{ className?: string; children?: string }>(children) ? children.props : {};
    const title = code.className?.replace(/^language-/, "") ?? "Code";
    return <Code title={title}>{String(code.children ?? "").replace(/\n$/, "")}</Code>;
  },
  Callout,
  Card,
  Cards,
  Code,
  Figure,
  Step,
  Steps,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
