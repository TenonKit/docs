import Link from "next/link";
import { href, pages, type DocPage } from "@/app/builder/content";
import Toc from "./Toc";

/** One docs page: title, prose, previous/next, and "On this page" on wide screens. */
export default function DocArticle({ page }: { page: DocPage }) {
  const i = pages.indexOf(page);
  const prev = pages[i - 1];
  const next = pages[i + 1];
  return (
    <div className="flex justify-center gap-14">
      <main className="min-w-0 max-w-[46rem] flex-1 pt-12 pb-24 max-[899px]:pt-8">
        <h1 className="text-[clamp(38px,4.2vw,56px)] leading-[1.05] font-semibold tracking-[-0.035em]">{page.title}</h1>
        <p className="mt-4 max-w-[52ch] text-[20px] leading-relaxed text-soft">{page.description}</p>
        <article className="doc mt-12">
          <page.Body />
        </article>

        <nav aria-label="Previous and next" className="mt-20 grid gap-3 sm:grid-cols-2">
          {prev ? (
            <Link href={href(prev.slug)} className="group rounded-[6px] bg-tile p-5 transition-colors hover:bg-tile-2">
              <span className="block text-[14px] text-muted">Previous</span>
              <span className="mt-1 block text-[18px] font-semibold transition-colors group-hover:text-teal">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={href(next.slug)}
              className="group rounded-[6px] bg-tile p-5 text-right transition-colors hover:bg-tile-2"
            >
              <span className="block text-[14px] text-muted">Next</span>
              <span className="mt-1 block text-[18px] font-semibold transition-colors group-hover:text-teal">
                {next.title}
              </span>
            </Link>
          )}
        </nav>
      </main>
      <aside className="sticky top-[72px] h-fit w-52 shrink-0 pt-12 max-[1279px]:hidden">
        <Toc key={page.slug} />
      </aside>
    </div>
  );
}
