import { LeafMark } from "../icons/Marks";
import { chapters, contact } from "../data/services";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="brand">
              <LeafMark width={26} height={26} style={{ color: "#c4832a" }} />
              <span className="brand-name">Sovik Wellness</span>
            </a>
            <p className="footer-tagline">
              Traditional Ayurvedic massage, cupping, basti pain therapy, Shatkarma detox, and
              yoga — at home, on your schedule.
            </p>
          </div>

          <div className="footer-col">
            <h5>Therapies</h5>
            <ul>
              {chapters.map((c) => (
                <li key={c.id}>
                  <a href={`#${c.id}`}>{c.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>Get In Touch</h5>
            <ul>
              <li>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </li>
              <li>
                <a href={contact.whatsappHref} target="_blank" rel="noreferrer">
                  Book on WhatsApp
                </a>
              </li>
              <li>
                <a href="#how-it-works">How booking works</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Sowik Wellness. Home-visit Ayurvedic therapy.</span>
          <span>Bookings by call or WhatsApp only.</span>
        </div>
      </div>
    </footer>
  );
}
