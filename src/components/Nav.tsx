import { useEffect, useState } from "react";
import { useMessages } from "../i18n/context";
import { LanguageSwitcher } from "../i18n/LanguageSwitcher";

export function Nav() {
  const { navLinks, navAriaLabel } = useMessages();
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
        className={`mx-auto flex w-full max-w-6xl items-center justify-between gap-2 rounded-2xl border px-2 py-2 backdrop-blur-xl transition-[background,box-shadow,border-color] duration-300 sm:px-3 sm:py-2.5 md:justify-start ${shell}`}
      >
        <div className="flex min-w-[9.5rem] shrink-0 items-center justify-start pl-1 sm:min-w-[10.5rem] sm:pl-2">
          <a
            href="#home"
            className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text font-display text-base font-bold tracking-[-0.03em] text-transparent"
            onClick={() => setOpen(false)}
          >
            Vitor Atair
          </a>
        </div>

        <nav
          className="nav-scroll hidden min-w-0 flex-1 items-center justify-center gap-0.5 overflow-x-auto px-1 md:flex"
          aria-label={navAriaLabel}
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="shrink-0 rounded-lg px-2 py-2 font-mono text-[10px] font-medium uppercase tracking-wide text-slate-400 transition hover:bg-white/6 hover:text-cyan-100 lg:px-2.5 xl:text-[11px]"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-2 pr-1 sm:pr-2">
          <LanguageSwitcher />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/50 p-2 text-slate-200 md:hidden"
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
      </div>
      {open ? (
        <div
          id="mobile-menu"
          className="mx-auto mt-2 max-w-6xl rounded-2xl border border-slate-600/40 bg-slate-800/95 px-3 py-3 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-0.5">
            {navLinks.map(({ href, label }) => (
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
