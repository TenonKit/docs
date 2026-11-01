import Link from "next/link";
import { Footer, Header } from "@/components/site";

// One card per product. A new product is a folder in src/app and src/content, plus a line here.
const PRODUCTS = [
  {
    href: "/builder",
    name: "Tenonkit Builder",
    text: "The desktop app for building websites from components: the Design tab, code, Tailwind, preview and export.",
    links: [
      ["/builder/installation", "Install"],
      ["/builder/quickstart", "Quickstart"],
      ["/builder/shortcuts", "Shortcuts"],
    ],
  },
] as const;

export default function DocsHub() {
  return (
    <div>
      <Header />
      <main className="mx-auto max-w-[1440px] px-10 pt-20 max-[899px]:px-5 max-[640px]:pt-12">
        <h1 className="text-[clamp(40px,5vw,64px)] leading-[1.05] font-semibold tracking-[-0.04em]">
          Tenonkit documentation
        </h1>
        <p className="mt-5 max-w-[52ch] text-[clamp(17px,1.5vw,20px)] leading-relaxed text-soft">
          Guides and reference for every Tenonkit product. Pick one to get started.
        </p>

        <ul className="mt-14 grid gap-4 min-[800px]:grid-cols-2 min-[1200px]:grid-cols-3">
          {PRODUCTS.map((p) => (
            <li key={p.href} className="flex flex-col rounded-[6px] bg-tile p-6">
              <Link href={p.href} className="group">
                <h2 className="flex items-center justify-between text-[22px] font-semibold tracking-[-0.01em]">
                  {p.name}
                  <span aria-hidden className="text-muted transition-colors group-hover:text-teal">
                    →
                  </span>
                </h2>
                <p className="mt-3 text-[16px] leading-relaxed text-soft">{p.text}</p>
              </Link>
              <nav aria-label={`${p.name} quick links`} className="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-[15px]">
                {p.links.map(([href, label]) => (
                  <Link key={href} href={href} className="text-white transition-colors hover:text-teal">
                    {label}
                  </Link>
                ))}
              </nav>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
