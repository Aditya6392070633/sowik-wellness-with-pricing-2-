import { useState } from "react";
import { LeafMark, WhatsappMark } from "../icons/Marks";
import { contact } from "../data/services";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#formulary", label: "Therapies & Pricing" },
    { href: "#team", label: "Team" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="brand">
          <LeafMark width={28} height={28} className="brand-mark" />
          <span className="brand-name">Sovik Wellness</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <span className="nav-phone">{contact.phone}</span>
          <a className="btn btn-gold" href={contact.whatsappHref} target="_blank" rel="noreferrer">
            <WhatsappMark /> Book Now
          </a>
        </div>

        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="nav-drawer">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a
            className="btn btn-gold"
            href={contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            <WhatsappMark /> Book on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
