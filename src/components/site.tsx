import Link from "next/link";

// Shared by every docs page: the logo, the header and the footer.

/** The main website; download, privacy and accounts live there. */
export const WEB_URL = "https://tenonkit.com";

/** The action button: square-cornered, teal, one per screen. */
export const button =
  "inline-flex h-12 items-center justify-center gap-2 rounded-[3px] bg-teal px-6 text-[16px] font-semibold text-ink transition-[background-color,transform] hover:bg-[#72d1e2] active:translate-y-px";

/** The logo's T: a white bar with the teal stem set beneath it. */
export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 18" aria-hidden className={className}>
      <rect width="18" height="6.5" rx="1.8" fill="currentColor" />
      <rect x="5.5" y="8" width="7" height="10" rx="1.8" fill="#4fc1d6" />
    </svg>
  );
}

/** Links to the docs home, with the product name after it when given. */
export function Logo({ suffix }: { suffix?: string }) {
  return (
    <Link href="/" className="flex items-center gap-2 text-[17px] font-semibold tracking-[-0.01em]">
      <Mark className="h-[18px] w-auto" />
      Tenonkit Docs
      {suffix && <span className="font-normal text-muted">{suffix}</span>}
    </Link>
  );
}

export function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header className="sticky top-0 z-40 bg-page">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center gap-6 px-10 max-[899px]:px-5">
        <Logo />
        <div className="flex flex-1 justify-center max-[640px]:justify-end">{children}</div>
        <nav aria-label="Main" className="flex items-center gap-7 text-[15px] max-[640px]:hidden">
          <a href={WEB_URL} className="text-white transition-colors hover:text-teal max-[900px]:hidden">
            Website
          </a>
          <a href={`${WEB_URL}/download`} className={`${button} h-10 px-4 text-[15px]`}>
            Download
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-[30svh] grid items-baseline gap-2 px-10 pb-8 text-[15px] text-muted min-[800px]:grid-cols-[1fr_auto_1fr] max-[899px]:px-5 max-[799px]:mt-[20svh]">
      <span>Tenonkit documentation</span>
      <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-1">
        {[
          ["Website", WEB_URL],
          ["Download", `${WEB_URL}/download`],
          ["Terms", `${WEB_URL}/terms`],
        ].map(([label, href]) => (
          <a key={href} href={href} className="text-white transition-colors hover:text-teal">
            {label}
          </a>
        ))}
      </nav>
      <span className="min-[800px]:text-right">
        © 2026,{" "}
        <a href={`${WEB_URL}/privacy`} className="text-white transition-colors hover:text-teal">
          Privacy
        </a>
      </span>
    </footer>
  );
}
