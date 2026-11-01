import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

// The apps' own typeface, so the docs and the screenshots match.
const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://docs.tenonkit.com"),
  title: "Tenonkit Docs",
  description: "Guides and reference for Tenonkit products.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plex.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
