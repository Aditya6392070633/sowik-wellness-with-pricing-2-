import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

const STORAGE_KEY = "sowik-lang";

function getInitialLang() {
  if (typeof window === "undefined") return "en";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "hi") return saved;
  } catch {
    /* localStorage unavailable — fall back silently */
  }
  return "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore write errors (private browsing, etc.) */
    }
    document.documentElement.lang = lang;
    document.documentElement.classList.toggle("lang-hi", lang === "hi");
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((l) => (l === "en" ? "hi" : "en")),
      // Pick a bilingual field. Accepts either a {en, hi} object or a plain string.
      t: (field) => {
        if (field == null) return field;
        if (typeof field === "object" && ("en" in field || "hi" in field)) {
          return field[lang] ?? field.en ?? "";
        }
        return field;
      },
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
