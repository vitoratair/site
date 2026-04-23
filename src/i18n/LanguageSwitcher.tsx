import { useI18n, type Locale } from "./context";

const options: { locale: Locale; flag: string; label: string }[] = [
  { locale: "pt", flag: "🇧🇷", label: "Português" },
  { locale: "en", flag: "🇬🇧", label: "English" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div
      role="group"
      aria-label={locale === "pt" ? "Idioma" : "Language"}
      className="flex items-center gap-1 rounded-xl border border-slate-700/80 bg-slate-900/50 p-0.5"
    >
      {options.map(({ locale: code, flag, label }) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            aria-pressed={active}
            aria-label={label}
            title={label}
            onClick={() => setLocale(code)}
            className={`flex size-9 items-center justify-center rounded-lg text-lg transition sm:size-8 sm:text-base ${
              active
                ? "bg-violet-500/25 text-white ring-1 ring-cyan-400/30"
                : "text-slate-400 hover:bg-white/8 hover:text-slate-200"
            }`}
          >
            <span aria-hidden>{flag}</span>
          </button>
        );
      })}
    </div>
  );
}
