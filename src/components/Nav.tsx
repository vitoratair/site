import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#courses", label: "Courses" },
  { href: "#experience", label: "Experience" },
  { href: "#resume", label: "Resume" },
  { href: "#hobbies", label: "Hobbies" },
  { href: "#contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const shell =
    scrolled
      ? "border-violet-400/25 bg-slate-800/90 shadow-2xl shadow-black/40 shadow-[0_0_60px_-20px_rgba(139,92,246,0.2)]"
      : "border-cyan-500/15 bg-slate-800/70 shadow-lg shadow-black/20";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto flex max-w-5xl items-center gap-2 rounded-2xl border px-2 py-2 backdrop-blur-xl transition-[background,box-shadow,border-color] duration-300 sm:px-3 sm:py-2.5 ${shell}`}
      >
        <a
          href="#home"
          className="shrink-0 bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text pl-2 font-display text-base font-bold tracking-[-0.03em] text-transparent sm:pl-1"
          onClick={() => setOpen(false)}
        >
          Vitor Atair
        </a>
        <nav className="hidden min-w-0 flex-1 justify-end md:flex" aria-label="Primary">
          <div className="nav-scroll flex max-w-[min(100%,36rem)] items-center gap-0.5 overflow-x-auto rounded-full border border-slate-500/30 bg-slate-700/40 px-1 py-0.5 ring-1 ring-cyan-500/10">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="shrink-0 rounded-full px-2.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-wide text-slate-400 transition hover:bg-violet-950/50 hover:text-cyan-100 xl:px-3 xl:text-[11px]"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
        <button
          type="button"
          className="ml-auto inline-flex items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/50 p-2 text-slate-200 md:ml-0 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {open ? (
        <div
          id="mobile-menu"
          className="mx-auto mt-2 max-w-5xl rounded-2xl border border-slate-600/40 bg-slate-800/95 px-3 py-3 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-0.5">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="rounded-xl px-3 py-3 text-sm text-slate-200 hover:bg-slate-800/80"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
