import { LeafMark } from "../icons/Marks";
import { chapters, contact } from "../data/services";
import { useLanguage } from "../context/LanguageContext";
import { strings } from "../i18n/strings";

export default function Footer() {
  const { t } = useLanguage();
  const s = strings.footer;

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="brand">
              <LeafMark width={26} height={26} style={{ color: "#c4832a" }} />
              <span className="brand-name">{t(strings.brandName)}</span>
            </a>
            <p className="footer-tagline">{t(s.tagline)}</p>
          </div>

          <div className="footer-col">
            <h5>{t(s.therapies)}</h5>
            <ul>
              {chapters.map((c) => (
                <li key={c.id}>
                  <a href={`#${c.id}`}>{t(c.title)}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>{t(s.getInTouch)}</h5>
            <ul>
              <li>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </li>
              <li>
                <a href={contact.whatsappHref} target="_blank" rel="noreferrer">
                  {t(s.bookOnWhatsapp)}
                </a>
              </li>
              <li>
                <a href="#how-it-works">{t(s.howBookingWorks)}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {t(s.copyrightSuffix)}
          </span>
          <span>{t(s.bookingsNote)}</span>
        </div>
      </div>
    </footer>
  );
}
