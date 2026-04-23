import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { messages as en } from "../locales/en";
import { messages as pt, type Messages } from "../locales/pt";

export type Locale = "pt" | "en";

const STORAGE_KEY = "site-locale";

const bundles: Record<Locale, Messages> = { pt, en };

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: Messages;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function readStoredLocale(): Locale | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === "pt" || v === "en") return v;
  } catch {
    /* ignore */
  }
  return null;
}

function detectLocale(): Locale {
  if (typeof navigator === "undefined") return "pt";
  const lang = navigator.language?.toLowerCase() ?? "";
  if (lang.startsWith("en")) return "en";
  return "pt";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => readStoredLocale() ?? detectLocale());

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-PT" : "en";
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  };

  const value = useMemo(
    () => ({ locale, setLocale, messages: bundles[locale] }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LocaleProvider");
  return ctx;
}

export function useMessages(): Messages {
  return useI18n().messages;
}
