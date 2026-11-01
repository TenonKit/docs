import * as introduction from "@/content/builder/index.mdx";
import * as installation from "@/content/builder/installation.mdx";
import * as quickstart from "@/content/builder/quickstart.mdx";
import * as projects from "@/content/builder/projects.mdx";
import * as buildingPages from "@/content/builder/building-pages.mdx";
import * as designTab from "@/content/builder/design-tab.mdx";
import * as code from "@/content/builder/code.mdx";
import * as tailwind from "@/content/builder/tailwind.mdx";
import * as preview from "@/content/builder/preview.mdx";
import * as exporting from "@/content/builder/export.mdx";
import * as themes from "@/content/builder/themes.mdx";
import * as settings from "@/content/builder/settings.mdx";
import * as shortcuts from "@/content/builder/shortcuts.mdx";
import * as fileFormats from "@/content/builder/file-formats.mdx";
import * as troubleshooting from "@/content/builder/troubleshooting.mdx";

type Mdx = typeof introduction;
export type DocPage = Mdx["meta"] & { slug: string; Body: Mdx["default"] };

// The docs in reading order: [slug, page]. Each page is an .mdx file in src/content/builder.
const order: [string, Mdx][] = [
  ["", introduction],
  ["installation", installation],
  ["quickstart", quickstart],
  ["projects", projects],
  ["building-pages", buildingPages],
  ["design-tab", designTab],
  ["code", code],
  ["tailwind", tailwind],
  ["preview", preview],
  ["export", exporting],
  ["themes", themes],
  ["settings", settings],
  ["shortcuts", shortcuts],
  ["file-formats", fileFormats],
  ["troubleshooting", troubleshooting],
];

export const pages: DocPage[] = order.map(([slug, m]) => ({ slug, ...m.meta, Body: m.default }));

export const href = (slug: string) => (slug ? `/builder/${slug}` : "/builder");
