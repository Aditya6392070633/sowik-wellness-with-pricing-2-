import { slugify } from "../data/services";
import { useLanguage } from "../context/LanguageContext";
import { strings } from "../i18n/strings";

export default function ServiceCard({ item }) {
  const { t, lang } = useLanguage();
  const s = strings.serviceCard;

  const message = encodeURIComponent(s.whatsappMessage[lang](t(item.name), t(item.subtitle)));
  const href = `https://wa.me/919690148288?text=${message}`;

  const hasPrice = Boolean(item.original && item.discounted);
  const isQuotePrice = hasPrice && item.original === item.discounted;

  return (
    <article className="label-card" id={slugify(item.name.en)}>
      {item.image && (
        <div className="label-photo">
          <img src={`/images/${item.image}`} alt={t(item.name)} loading="lazy" />
          <span className="label-seal">{t(item.duration)}</span>
        </div>
      )}

      {hasPrice ? (
        isQuotePrice ? (
          <div className="label-price label-price-quote">
            <span className="label-price-note-only">{t(s.priceOnRequest)}</span>
          </div>
        ) : (
          <div className="label-price">
            <div className="label-price-amounts">
              <span className="label-price-original">{item.original}</span>
              <span className="label-price-discounted">{item.discounted}</span>
            </div>
            <span className="label-price-off">{t(s.percentOff)}</span>
          </div>
        )
      ) : null}
      {hasPrice && item.priceNote && !isQuotePrice && (
        <div className="label-price-note-row">{t(item.priceNote)}</div>
      )}

      <div className="label-body">
        <div className="label-top">
          <div>
            <h4 className="label-name">{t(item.name)}</h4>
            <div className="label-subtitle">{t(item.subtitle)}</div>
          </div>
          {!item.image && <div className="label-seal label-seal-static">{t(item.duration)}</div>}
        </div>
        <p className="label-desc">{t(item.desc)}</p>
        <a className="label-book" href={href} target="_blank" rel="noreferrer">
          {t(s.bookThisTherapy)}
        </a>
      </div>
    </article>
  );
}
