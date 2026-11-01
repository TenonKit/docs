// Every docs page (src/content/builder/*.mdx) exports its sidebar and search details as `meta`.
declare module "*.mdx" {
  export const meta: { group: string; title: string; description: string };
}
