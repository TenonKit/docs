"use client";

import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() =>
        navigator.clipboard.writeText(text).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        })
      }
      className="rounded-[3px] px-2 py-1 text-[13px] text-soft transition-colors hover:bg-tile-3 hover:text-white active:translate-y-px"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
