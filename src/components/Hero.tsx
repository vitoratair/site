import { useMessages } from "../i18n/context";

function NeuralMesh() {
  return (
    <svg
      className="absolute inset-0 size-full text-cyan-400/25"
      viewBox="0 0 320 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="nm" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(34, 211, 238)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="rgb(167, 139, 250)" stopOpacity="0.45" />
        </linearGradient>
      </defs>
      <g stroke="url(#nm)" strokeWidth="0.75">
        <path d="M48 72 L160 140 L248 96 M160 140 L200 248 L88 280 M200 248 L272 320" />
        <path d="M200 48 L248 96 L280 180 M88 120 L48 72 L32 200 M88 280 L120 360" opacity="0.7" />
      </g>
      <g>
        <circle cx="48" cy="72" r="4" fill="rgba(167, 139, 250, 0.45)" />
        <circle cx="160" cy="140" r="5" fill="rgba(34, 211, 238, 0.55)" />
        <circle cx="248" cy="96" r="4" fill="rgba(167, 139, 250, 0.4)" />
        <circle cx="200" cy="248" r="4" fill="rgba(192, 132, 252, 0.4)" />
        <circle cx="88" cy="280" r="3.5" fill="rgba(34, 211, 238, 0.35)" />
        <circle cx="272" cy="320" r="3" fill="rgba(139, 92, 246, 0.45)" />
      </g>
    </svg>
  );
}

export function Hero() {
  const { heroCopy, heroGraphPanel, site } = useMessages();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-4 pb-28 pt-32 sm:px-6 sm:pt-36"
    >
      <div className="hero-aurora pointer-events-none" aria-hidden />
      <div className="hero-tech-grid pointer-events-none" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_100%,rgba(15,23,42,0.72),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
        <div className="text-center lg:text-left">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.32em] text-cyan-400/85">
            <span className="text-slate-500">{heroCopy.badgeLeft}</span>
            {heroCopy.badgeMid}
            <span className="text-slate-500">{heroCopy.badgeRight}</span>
          </p>
          <h1 className="font-display mt-4 text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[0.98] tracking-[-0.02em] text-white text-balance">
            {heroCopy.titleBefore}{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
              {heroCopy.name}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg text-slate-300 lg:mx-0">{site.tagline}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="#contact"
              className="btn-ai-primary inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold text-white"
            >
              {heroCopy.ctaPrimary}
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-violet-500/25 bg-slate-950/40 px-7 py-3.5 text-sm font-medium text-slate-200 backdrop-blur-sm transition hover:border-cyan-400/35 hover:bg-violet-950/30 hover:text-white"
            >
              {heroCopy.ctaSecondary}
            </a>
          </div>
        </div>
        <div className="relative mx-auto hidden h-[min(420px,55vh)] w-full max-w-md lg:block">
          <NeuralMesh />
          <div className="absolute inset-0 rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-800/85 via-slate-900/90 to-violet-950/35 p-6 shadow-2xl shadow-violet-950/25 backdrop-blur-sm ring-1 ring-white/5">
            <div className="flex h-full min-h-0 flex-col justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-violet-300/70">graph_preview</p>
                <div className="mt-3 h-1.5 w-14 rounded-full bg-gradient-to-r from-cyan-400/50 to-violet-400/40" />
              </div>

              <div className="min-h-0 flex-1 overflow-hidden py-1">
                <p className="font-mono text-[9px] uppercase tracking-wider text-slate-500">
                  <span className="text-slate-600">//</span> {heroGraphPanel.snapshotKicker}
                </p>
                <p className="mt-2 font-display text-sm font-semibold leading-snug text-white">
                  {heroGraphPanel.snapshotTitle}
                </p>
                {heroGraphPanel.snapshotLines.map((line) => (
                  <p key={line} className="mt-2 text-[11px] leading-relaxed text-slate-400">
                    {line}
                  </p>
                ))}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {heroGraphPanel.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-cyan-500/20 bg-cyan-500/[0.07] px-1.5 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wide text-cyan-200/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid shrink-0 grid-cols-2 gap-3">
                <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.04] p-3">
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 size-7 shrink-0 rounded-md bg-gradient-to-br from-cyan-400/35 to-cyan-700/10" />
                    <div className="min-w-0">
                      <p className="font-mono text-[9px] uppercase tracking-wide text-cyan-300/80">
                        {heroGraphPanel.cards[0].title}
                      </p>
                      {heroGraphPanel.cards[0].lines.map((line) => (
                        <p key={line} className="mt-1.5 text-[10px] leading-snug text-slate-400">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-violet-500/25 bg-violet-500/[0.04] p-3">
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 size-7 shrink-0 rounded-full bg-gradient-to-br from-violet-400/35 to-violet-700/10" />
                    <div className="min-w-0">
                      <p className="font-mono text-[9px] uppercase tracking-wide text-violet-300/80">
                        {heroGraphPanel.cards[1].title}
                      </p>
                      {heroGraphPanel.cards[1].lines.map((line) => (
                        <p key={line} className="mt-1.5 text-[10px] leading-snug text-slate-400">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-4 -top-4 -z-10 size-40 rounded-full bg-cyan-500/25 blur-3xl" />
          <div className="absolute -bottom-6 -left-6 -z-10 size-48 rounded-full bg-violet-600/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
