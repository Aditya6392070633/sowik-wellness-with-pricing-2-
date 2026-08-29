import { PhoneMark, WhatsappMark } from "../icons/Marks";
import { contact } from "../data/services";

export default function BookingBar() {
  return (
    <>
      <a
        className="float-whatsapp"
        href={contact.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Book on WhatsApp"
      >
        <WhatsappMark width={24} height={24} />
      </a>

      <div className="mobile-bookbar">
        <a className="btn btn-line-on-ink" href={contact.phoneHref}>
          <PhoneMark /> Call
        </a>
        <a className="btn btn-gold" href={contact.whatsappHref} target="_blank" rel="noreferrer">
          <WhatsappMark /> WhatsApp
        </a>
      </div>
    </>
  );
}
