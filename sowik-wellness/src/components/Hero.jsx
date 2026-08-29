import { PhoneMark, WhatsappMark } from "../icons/Marks";
import { contact } from "../data/services";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-inner">
        <div>
          <p className="eyebrow hero-eyebrow">Home-Visit Ayurveda · Since Generations of Practice</p>
          <div className="hero-accent-line"></div>
          <h1 className="hero-title">
            Traditional therapy,
            <br />
            <span className="italic">brought to your door.</span>
          </h1>
          <p className="hero-sub">
            Sovik Wellness sends trained therapists to your home with warm herbal oils, cupping
            glasses, and the same techniques taught in Kerala's massage halls — for pain, stress,
            and the stiffness an ordinary week leaves behind.
          </p>

          <div className="hero-actions">
            <a className="btn btn-gold" href={contact.whatsappHref} target="_blank" rel="noreferrer">
              <WhatsappMark /> Book on WhatsApp
            </a>
            <a className="btn btn-line-on-ink" href={contact.phoneHref}>
              <PhoneMark /> {contact.phone}
            </a>
          </div>

          <div className="hero-stats">
            <span className="stat-chip">
              <b>7</b> therapy chapters
            </span>
            <span className="stat-chip">
              <b>22</b> named treatments
            </span>
            <span className="stat-chip">At-home, <b>no clinic visit</b></span>
          </div>
        </div>

     
      </div>
    </section>
  );
}
