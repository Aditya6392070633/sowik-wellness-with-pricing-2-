import { PhoneMark, WhatsappMark } from "../icons/Marks";
import { contact } from "../data/services";
import { useLanguage } from "../context/LanguageContext";
import { strings } from "../i18n/strings";

export default function Hero() {
  const { t } = useLanguage();
  const s = strings.hero;

  return (
    <section id="top" className="hero">
      <div className="wrap hero-inner">
        <div>
          <p className="eyebrow hero-eyebrow">{t(s.eyebrow)}</p>
          <div className="hero-accent-line"></div>
          <h1 className="hero-title">
            {t(s.titleLine1)}
            <br />
            <span className="italic">{t(s.titleLine2)}</span>
          </h1>
          <p className="hero-sub">{t(s.sub)}</p>

          <div className="hero-actions">
            <a className="btn btn-gold" href={contact.whatsappHref} target="_blank" rel="noreferrer">
              <WhatsappMark /> {t(s.whatsappCta)}
            </a>
            <a className="btn btn-line-on-ink" href={contact.phoneHref}>
              <PhoneMark /> {contact.phone}
            </a>
          </div>

          <div className="hero-stats">
            <span className="stat-chip">
              <b>7</b> {t(s.statChapters)}
            </span>
            <span className="stat-chip">
              <b>22</b> {t(s.statTreatments)}
            </span>
            <span className="stat-chip">
              {t(s.statHome1)} <b>{t(s.statHome2)}</b>
            </span>
          </div>
        </div>

     
      </div>
    </section>
  );
}
