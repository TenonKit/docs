"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavItem = { href: string; group: string; title: string; description: string };

export default function Sidebar({ items }: { items: NavItem[] }) {
  const path = usePathname();
  const groups = [...new Set(items.map((i) => i.group))];
  return (
    <nav aria-label="Docs" className="space-y-8">
      {groups.map((g) => (
        <div key={g}>
          <h2 className="mb-2 px-3 text-[14px] font-semibold text-soft">{g}</h2>
          <ul className="space-y-0.5">
            {items
              .filter((i) => i.group === g)
              .map((i) => {
                const active = i.href === path;
                return (
                  <li key={i.href}>
                    <Link
                      href={i.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative block rounded-[3px] px-3 py-1.5 text-[15px] transition-colors ${
                        active
                          ? "bg-tile-2 font-medium text-white before:absolute before:inset-y-1.5 before:left-0 before:w-[3px] before:rounded-full before:bg-teal"
                          : "text-muted hover:bg-tile hover:text-white"
                      }`}
                    >
                      {i.title}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
