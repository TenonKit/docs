"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { NavItem } from "./Sidebar";

export default function Search({ items }: { items: NavItem[] }) {
  const router = useRouter();
  const dialog = useRef<HTMLDialogElement>(null);
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);

  const query = q.trim().toLowerCase();
  const results = items.filter((i) => `${i.title} ${i.description} ${i.group}`.toLowerCase().includes(query));

  const open = () => {
    setQ("");
    setSel(0);
    dialog.current?.showModal();
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        open();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (href: string) => {
    dialog.current?.close();
    router.push(href);
  };

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="flex h-10 w-full max-w-80 items-center gap-2.5 rounded-[3px] bg-tile px-3.5 text-[15px] text-muted transition-colors hover:bg-tile-2 hover:text-white"
      >
        <svg viewBox="0 0 20 20" aria-hidden className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="9" cy="9" r="6" />
          <path d="m14 14 4 4" strokeLinecap="round" />
        </svg>
        Search docs
        <kbd className="ml-auto rounded-[3px] bg-tile-3 px-1.5 py-0.5 text-[13px] text-soft max-[640px]:hidden">
          Ctrl K
        </kbd>
      </button>

      <dialog
        ref={dialog}
        aria-label="Search docs"
        onClick={(e) => e.target === dialog.current && dialog.current.close()}
        className="m-auto mt-[12vh] w-[min(560px,calc(100vw-32px))] rounded-[6px] bg-tile p-0 text-white shadow-2xl backdrop:bg-black/70"
      >
        <input
          autoFocus
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setSel(0);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setSel((s) => Math.min(s + 1, results.length - 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setSel((s) => Math.max(s - 1, 0));
            } else if (e.key === "Enter" && results[sel]) go(results[sel].href);
          }}
          placeholder="Search docs"
          aria-label="Search docs"
          className="h-14 w-full bg-tile-2 px-5 text-[17px] outline-none placeholder:text-muted"
        />
        <ul className="max-h-[50vh] overflow-y-auto p-2">
          {results.length === 0 && <li className="px-3 py-6 text-center text-[15px] text-muted">No results</li>}
          {results.map((r, i) => (
            <li key={r.href}>
              <button
                type="button"
                onClick={() => go(r.href)}
                onMouseMove={() => setSel(i)}
                className={`block w-full rounded-[3px] px-3 py-2.5 text-left ${i === sel ? "bg-tile-3" : ""}`}
              >
                <span className="block text-[15px] font-medium">
                  {r.title} <span className="font-normal text-muted">in {r.group}</span>
                </span>
                <span className="block text-[14px] text-soft">{r.description}</span>
              </button>
            </li>
          ))}
        </ul>
      </dialog>
    </>
  );
}
