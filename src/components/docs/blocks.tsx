import Image from "next/image";
import Link from "next/link";
import CopyButton from "./CopyButton";

// The pieces docs pages are written with.

/** "Sharing a project" → "sharing-a-project": the anchor every ## heading gets. */
export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** A heading with an anchor link, picked up by "On this page". Markdown ## headings render as this. */
export function H2({ id, children }: { id?: string; children: React.ReactNode }) {
  id ??= slugify(String(children));
  return (
    <h2 id={id} className="group">
      <a href={`#${id}`} className="!no-underline">
        {children}
        <span aria-hidden className="ml-2 text-muted opacity-0 transition-opacity group-hover:opacity-100">
          #
        </span>
      </a>
    </h2>
  );
}

export function Code({ title, children }: { title: string; children: string }) {
  return (
    <div className="overflow-hidden rounded-[6px] bg-tile">
      <div className="flex items-center justify-between bg-tile-2 py-1.5 pr-2 pl-4">
        <span className="text-[13px] text-soft">{title}</span>
        <CopyButton text={children} />
      </div>
      <pre className="overflow-x-auto p-5 text-[14px] leading-[1.7] text-white">
        <code className="font-mono">{children}</code>
      </pre>
    </div>
  );
}

const CALLOUT = {
  note: { label: "Note", box: "bg-teal/[0.09]", ink: "text-teal" },
  tip: { label: "Tip", box: "bg-[#3fc07a]/[0.09]", ink: "text-[#5fd394]" },
  warning: { label: "Warning", box: "bg-[#f5c46b]/[0.09]", ink: "text-[#f5c46b]" },
};

export function Callout({ type = "note", children }: { type?: keyof typeof CALLOUT; children: React.ReactNode }) {
  const c = CALLOUT[type];
  return (
    <div role="note" className={`rounded-[6px] px-5 py-4 text-[16px] ${c.box}`}>
      <p className={`!mt-0 text-[14px] font-semibold ${c.ink}`}>{c.label}</p>
      <div className="mt-1 [&>p+p]:mt-2">{children}</div>
    </div>
  );
}

/** A real sequence: numbered squares joined by a bar. */
export function Steps({ children }: { children: React.ReactNode }) {
  return <ol className="!list-none !pl-0">{children}</ol>;
}

export function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <li className="group relative !mt-0 pb-9 pl-14 last:pb-0">
      <span
        aria-hidden
        className="absolute top-10 bottom-1 left-[15px] w-[2px] rounded-full bg-tile-3 group-last:hidden"
      />
      <span className="absolute top-0 left-0 grid size-8 place-items-center rounded-[3px] bg-teal text-[14px] font-semibold text-ink">
        {n}
      </span>
      <h3 className="!mt-0.5 text-[18px] font-semibold text-white">{title}</h3>
      <div className="mt-2 space-y-3">{children}</div>
    </li>
  );
}

export function Cards({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-3 sm:grid-cols-2">{children}</div>;
}

export function Card({ href, title, children }: { href: string; title: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="card group block rounded-[6px] bg-tile p-6 transition-colors hover:bg-tile-2">
      <span className="block text-[18px] font-semibold text-white transition-colors group-hover:text-teal">
        {title}
      </span>
      <span className="mt-1.5 block text-[15px] leading-relaxed text-soft">{children}</span>
    </Link>
  );
}

export function Figure({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="overflow-hidden rounded-[6px] bg-tile">
      <Image src={`/screens/${src}`} alt={alt} width={3120} height={1984} sizes="768px" className="h-auto w-full" />
    </figure>
  );
}
