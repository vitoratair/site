import { hobbies } from "../data/content";

export function Hobbies() {
  return (
    <section
      id="hobbies"
      className="scroll-mt-20 relative min-h-[420px] overflow-hidden border-t border-slate-600/30 px-4 py-28 sm:px-6"
    >
      <img
        src="/images/bike.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/65 to-slate-950/50" aria-hidden />
      <div className="relative mx-auto flex max-w-6xl justify-end">
        <div className="card-lift max-w-lg rounded-2xl border border-slate-500/35 bg-slate-800/55 p-8 shadow-xl shadow-black/20 backdrop-blur-md sm:p-10">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.26em] text-violet-400/80">
            <span className="text-slate-500">//</span> life
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-white sm:text-4xl">{hobbies.title}</h2>
          <p className="mt-6 text-lg text-slate-200 leading-relaxed">{hobbies.body}</p>
        </div>
      </div>
    </section>
  );
}
