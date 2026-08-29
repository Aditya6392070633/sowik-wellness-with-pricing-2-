import { PhoneMark, WhatsappMark } from "../icons/Marks";
import { contact } from "../data/services";

export function Trust() {
  return (
    <section className="trust">
      <div className="wrap trust-grid">
        <div className="trust-item">
          <p className="eyebrow">Trained Hands</p>
          <h4>Therapists trained in classical technique</h4>
          <p>Every therapist is trained specifically in the Ayurvedic and Unani methods behind each service listed here — not generalist spa massage.</p>
        </div>
        <div className="trust-item">
          <p className="eyebrow">Your Space</p>
          <h4>Oils and equipment, brought to you</h4>
          <p>Herbal oils, cupping sets, basti equipment, and neti tools travel with the therapist. You only need a room and a mat.</p>
        </div>
        <div className="trust-item">
          <p className="eyebrow">Straightforward Booking</p>
          <h4>One message on WhatsApp confirms it</h4>
          <p>Tell us the therapy, your address, and a time — we confirm the same way, no app or account needed.</p>
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section id="contact" className="cta-band">
      <div className="wrap cta-band-inner">
        <h2>Ready for a session at home?</h2>
        <div className="cta-band-actions">
          <a className="btn btn-gold" href={contact.whatsappHref} target="_blank" rel="noreferrer">
            <WhatsappMark /> WhatsApp Us
          </a>
          <a className="btn btn-line" href={contact.phoneHref}>
            <PhoneMark /> Call {contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
