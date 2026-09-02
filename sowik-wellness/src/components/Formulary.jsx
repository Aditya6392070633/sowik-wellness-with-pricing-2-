import { chapters } from "../data/services";
import Chapter from "./Chapter";
import { useLanguage } from "../context/LanguageContext";
import { strings } from "../i18n/strings";

export default function Formulary() {
  const { t } = useLanguage();
  const s = strings.formulary;

  return (
    <section id="formulary" className="formulary">
      <div className="wrap">
        <p className="eyebrow" style={{ color: "var(--copper)" }}>
          {t(s.eyebrow)}
        </p>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", marginTop: 10 }}>
          {t(s.titlePrefix)}
          <span className="italic">{t(s.titleItalic)}</span>
        </h2>

        {chapters.map((chapter) => (
          <Chapter key={chapter.id} chapter={chapter} />
        ))}
      </div>
    </section>
  );
}
