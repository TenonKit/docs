"use client";

import { useEffect, useState } from "react";

type Head = { id: string; text: string };

/** "On this page": the article's h2s, read from the rendered page, highlighting the one in view. */
export default function Toc() {
  const [heads, setHeads] = useState<Head[]>([]);
  const [active, setActive] = useState("");

  useEffect(() => {
    const found = [...document.querySelectorAll<HTMLElement>("article.doc > h2[id]")].map((h) => ({
      id: h.id,
      text: h.textContent?.replace(/#$/, "").trim() ?? "",
    }));
    // Reading the DOM is the only way to see an MDX page's headings, so state is set after mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHeads(found);
    setActive(found[0]?.id ?? "");
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting);
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-80px 0px -70% 0px" },
    );
    heads.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [heads]);

  if (heads.length < 2) return null;
  return (
    <nav aria-label="On this page">
      <h2 className="mb-3 text-[14px] font-semibold text-soft">On this page</h2>
      <ul className="space-y-0.5">
        {heads.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              aria-current={active === h.id ? "location" : undefined}
              className={`relative block py-1 pl-4 text-[14px] transition-colors ${
                active === h.id
                  ? "text-white before:absolute before:top-[0.6em] before:left-0 before:size-1.5 before:rounded-full before:bg-teal"
                  : "text-muted hover:text-white"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
