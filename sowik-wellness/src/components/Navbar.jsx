import { useState, useMemo } from "react";
import { LeafMark, WhatsappMark } from "../icons/Marks";
import { contact, chapters, doctors, slugify } from "../data/services";
import { useLanguage } from "../context/LanguageContext";
import { strings } from "../i18n/strings";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { lang, setLang, t } = useLanguage();

  const links = strings.nav.links;

  const allServices = useMemo(() => {
    return chapters.flatMap((chapter) =>
      chapter.items.map((item) => ({ ...item, chapterTitle: chapter.title }))
    );
  }, []);

const results = useMemo(() => {
  if (!query.trim()) return [];

  const q = query.toLowerCase();

  const serviceResults = allServices
    .filter(
      (s) =>
        t(s.name).toLowerCase().includes(q) ||
        t(s.subtitle)?.toLowerCase().includes(q) ||
        t(s.chapterTitle).toLowerCase().includes(q)
    )
    .map((s) => ({
      ...s,
      type: "service",
    }));

  const doctorResults = doctors
    .filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(q) ||
        t(doctor.title).toLowerCase().includes(q) ||
        t(doctor.role).toLowerCase().includes(q) ||
        "doctor".includes(q) ||
        "doctors".includes(q)
    )
    .map((doctor) => ({
      ...doctor,
      type: "doctor",
      chapterTitle: {
        en: "Our Doctors",
        hi: "हमारे डॉक्टर",
      },
    }));

  return [...serviceResults, ...doctorResults].slice(0, 6);
}, [query, allServices, lang, t]); // eslint-disable-line react-hooks/exhaustive-deps

const goToResult = (result) => {
  // Services have name.en / name.hi
  // Doctors have name as a normal string
  const targetName =
    result.type === "doctor"
      ? result.name
      : result.name.en;

  const el = document.getElementById(slugify(targetName));

  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    el.classList.add("label-card-highlight");

    setTimeout(() => {
      el.classList.remove("label-card-highlight");
    }, 1800);
  }

  setSearchOpen(false);
  setQuery("");
};
  const LangToggle = ({ className }) => (
    <div className={`lang-toggle ${className || ""}`} role="group" aria-label="Language">
      <button
        type="button"
        className={`lang-toggle-btn ${lang === "en" ? "is-active" : ""}`}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        type="button"
        className={`lang-toggle-btn ${lang === "hi" ? "is-active" : ""}`}
        onClick={() => setLang("hi")}
        aria-pressed={lang === "hi"}
      >
        हिं
      </button>
    </div>
  );

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="brand">
          <LeafMark width={28} height={28} className="brand-mark" />
          <span className="brand-name">{t(strings.brandName)}</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {t(l.label)}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <LangToggle className="nav-lang-toggle" />

          <div className="nav-search-wrap">
            <button
              className="nav-search-toggle"
              aria-label={t(strings.nav.searchLabel)}
              onClick={() => setSearchOpen((v) => !v)}
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
                <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>

            {searchOpen && (
              <>
                <div className="nav-search-backdrop" onClick={() => setSearchOpen(false)} />
                <div className="nav-search-box">
                  <div className="nav-search-input-row">
                    <input
                      type="text"
                      autoFocus
                      placeholder={t(strings.nav.searchPlaceholder)}
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && results[0] && goToResult(results[0])}
                    />
                    <button
                      className="nav-search-close"
                      aria-label={t(strings.nav.searchClose)}
                      onClick={() => setSearchOpen(false)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>
                  {results.length > 0 && (
                    <div className="nav-search-results">
                      {results.map((r) => (
                        <button
                          key={r.name.en}
                          className="nav-search-result"
                         onClick={() => goToResult(r)}
                        >
                          <span className="nsr-name">{t(r.name)}</span>
                          <span className="nsr-chapter">{t(r.chapterTitle)}</span>
                        </button>
                      ))}
                    </div>
                  )}
                  {query.trim() && results.length === 0 && (
                    <div className="nav-search-results">
                      <div className="nav-search-empty">{t(strings.nav.searchEmpty)}</div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          <span className="nav-phone">{contact.phone}</span>
          <a className="btn btn-gold" href={contact.whatsappHref} target="_blank" rel="noreferrer">
            <WhatsappMark /> {t(strings.nav.bookNow)}
          </a>
        </div>

        <button
          className="nav-toggle"
          aria-label={open ? t(strings.nav.closeMenu) : t(strings.nav.openMenu)}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="nav-drawer">
          <LangToggle className="nav-drawer-lang-toggle" />
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {t(l.label)}
            </a>
          ))}
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a
            className="btn btn-gold"
            href={contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            <WhatsappMark /> {t(strings.nav.bookOnWhatsapp)}
          </a>
        </div>
      )}
    </header>
  );
}
