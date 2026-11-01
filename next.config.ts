import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

// Docs pages are .mdx files in src/content/<product>, imported by src/app/<product>/content.ts.
export default createMDX()(nextConfig);
