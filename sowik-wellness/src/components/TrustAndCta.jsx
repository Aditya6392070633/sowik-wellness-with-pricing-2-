import { PhoneMark, WhatsappMark } from "../icons/Marks";
import { contact } from "../data/services";
import { useLanguage } from "../context/LanguageContext";
import { strings } from "../i18n/strings";

export function Trust() {
  const { t } = useLanguage();
  const items = strings.trust.items;

  return (
    <section className="trust">
      <div className="wrap trust-grid">
        {items.map((item) => (
          <div className="trust-item" key={item.eyebrow.en}>
            <p className="eyebrow">{t(item.eyebrow)}</p>
            <h4>{t(item.heading)}</h4>
            <p>{t(item.text)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CtaBand() {
  const { t } = useLanguage();
  const s = strings.cta;

  return (
    <section id="contact" className="cta-band">
      <div className="wrap cta-band-inner">
        <h2>{t(s.heading)}</h2>
        <div className="cta-band-actions">
          <a className="btn btn-gold" href={contact.whatsappHref} target="_blank" rel="noreferrer">
            <WhatsappMark /> {t(s.whatsappUs)}
          </a>
          <a className="btn btn-line" href={contact.phoneHref}>
            <PhoneMark /> {t(s.callPrefix)} {contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
