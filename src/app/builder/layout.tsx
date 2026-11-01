import { Footer, Header } from "@/components/site";
import Search from "@/components/docs/Search";
import Sidebar, { type NavItem } from "@/components/docs/Sidebar";
import { href, pages } from "./content";

const items: NavItem[] = pages.map((p) => ({
  href: href(p.slug),
  group: p.group,
  title: p.title,
  description: p.description,
}));

export default function BuilderLayout({ children }: LayoutProps<"/builder">) {
  return (
    <div id="top">
      <Header>
        <Search items={items} />
      </Header>

      <div className="mx-auto flex max-w-[1440px] gap-14 px-10 max-[899px]:px-5">
        <aside className="sticky top-[72px] h-[calc(100svh-72px)] w-60 shrink-0 overflow-y-auto pt-8 pb-10 max-[900px]:hidden">
          <p className="mb-4 px-3 text-[13px] font-semibold tracking-wide text-muted uppercase">Tenonkit Builder</p>
          <Sidebar items={items} />
        </aside>
        <div className="min-w-0 flex-1">
          <details className="group mt-2 rounded-[6px] bg-tile min-[901px]:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3.5 text-[15px] text-white">
              Browse the Builder docs
              <span aria-hidden className="text-muted transition-transform group-open:rotate-180">
                ▾
              </span>
            </summary>
            <div className="px-1 pb-4">
              <Sidebar items={items} />
            </div>
          </details>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
