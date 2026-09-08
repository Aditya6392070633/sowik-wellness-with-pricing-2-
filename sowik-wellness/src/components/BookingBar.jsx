import { PhoneMark, WhatsappMark } from "../icons/Marks";
import { contact } from "../data/services";
import { useLanguage } from "../context/LanguageContext";
import { strings } from "../i18n/strings";

export default function BookingBar() {
  const { t } = useLanguage();
  const s = strings.bookingBar;

  return (
    <>
      <a
        className="float-whatsapp"
        href={contact.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label={t(s.bookOnWhatsapp)}
      >
        <WhatsappMark width={24} height={24} />
      </a>

      <div className="mobile-bookbar">
        <a className="btn btn-line-on-ink" href={contact.phoneHref}>
          <PhoneMark /> {t(s.call)}
        </a>
        <a className="btn btn-gold" href={contact.whatsappHref} target="_blank" rel="noreferrer">
          <WhatsappMark /> {t(s.whatsapp)}
        </a>
      </div>
    </>
  );
}
