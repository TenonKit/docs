import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DocArticle from "@/components/docs/DocArticle";
import { pages } from "../content";

export const dynamicParams = false;

export function generateStaticParams() {
  return pages.filter((p) => p.slug).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/builder/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = pages.find((p) => p.slug === slug);
  return page ? { title: `${page.title}: Tenonkit Builder docs`, description: page.description } : {};
}

export default async function DocPage({ params }: PageProps<"/builder/[slug]">) {
  const { slug } = await params;
  const page = pages.find((p) => p.slug === slug);
  if (!page) notFound();
  return <DocArticle page={page} />;
}
