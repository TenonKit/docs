import type { Metadata } from "next";
import DocArticle from "@/components/docs/DocArticle";
import { pages } from "./content";

export const metadata: Metadata = {
  title: "Tenonkit Builder docs",
  description: pages[0].description,
};

export default function DocsHome() {
  return <DocArticle page={pages[0]} />;
}
