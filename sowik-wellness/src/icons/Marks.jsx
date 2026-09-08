// A small, consistent line-art icon system for the six chapters,
// drawn in the same stroke weight so the set reads as one hand.

const base = {
  width: 40,
  height: 40,
  viewBox: "0 0 40 40",
  fill: "none",
};

export function LeafMark(props) {
  return (
    <svg {...base} {...props}>
      <path
        d="M20 6c8 4 12 10 12 16 0 6-5 11-12 11S8 28 8 22c0-6 4-12 12-16z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M20 11v21M20 17c-4 0-6.5 2.5-6.5 2.5M20 24c4 0 6.5 2.5 6.5 2.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CupMark(props) {
  return (
    <svg {...base} {...props}>
      <path
        d="M13 9c0-1 1.5-2 2.5-2M27 9c0-1-1.5-2-2.5-2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M11 12c0-2 4-3.5 9-3.5s9 1.5 9 3.5c0 8.5-4 18.5-9 18.5S11 20.5 11 12z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M14.5 12.5c1.5.9 3.4 1.4 5.5 1.4s4-.5 5.5-1.4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function DropletMark(props) {
  return (
    <svg {...base} {...props}>
      <path
        d="M20 6c5 6.5 9 12.4 9 17.2C29 29 25 33 20 33s-9-4-9-9.8C11 18.4 15 12.5 20 6z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M20 33c4.5-3 7.5-6 8.6-9.4" stroke="currentColor" strokeWidth="0" />
      <circle cx="14.5" cy="24" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function SpiralMark(props) {
  return (
    <svg {...base} {...props}>
      <path
        d="M20 20c0-1.4 1.1-2.5 2.5-2.5S25 18.6 25 20s-1.6 3-3.5 3-4.5-1.8-4.5-4.5 2.2-5.5 5-5.5 6 2.4 6 6-3 6.5-6.5 6.5-7.5-3-7.5-7.5S16.5 9 21 9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WaveMark(props) {
  return (
    <svg {...base} {...props}>
      <path
        d="M8 15c2.5-2 5-2 7.5 0s5 2 7.5 0 5-2 7.5 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M8 22c2.5-2 5-2 7.5 0s5 2 7.5 0 5-2 7.5 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M8 29c2.5-2 5-2 7.5 0s5 2 7.5 0 5-2 7.5 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LotusMark(props) {
  return (
    <svg {...base} {...props}>
      <path d="M20 30c0-9-4-13-9-15 1 8 3 13 9 15z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 30c0-9 4-13 9-15-1 8-3 13-9 15z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 30c0-11-2.5-17-2.5-20 2.5 1.5 2.5 8 2.5 8s0-6.5 2.5-8c0 3-2.5 9-2.5 20z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 31c4-1.6 18-1.6 22 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export const marks = {
  leaf: LeafMark,
  cup: CupMark,
  droplet: DropletMark,
  spiral: SpiralMark,
  wave: WaveMark,
  lotus: LotusMark,
};

export function PhoneMark(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6.6 10.8c1.3 2.6 3 4.3 5.6 5.6l1.9-1.9c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V19.5c0 .6-.4 1-1 1C10.9 20.5 3.5 13.1 3.5 4c0-.6.4-1 1-1H7.9c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.2 1.1L6.6 10.8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FacebookMark(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M14.5 21v-7.2h2.4l.4-2.8h-2.8v-1.8c0-.8.2-1.4 1.4-1.4h1.5V5.3c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.6v2.2H9.3v2.8h2.4V21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function InstagramMark(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export function LocationMark(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 21s-6.8-6.1-6.8-11.2A6.8 6.8 0 0 1 12 3a6.8 6.8 0 0 1 6.8 6.8C18.8 14.9 12 21 12 21z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.8" r="2.3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function WhatsappMark(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8.3 8.6c.2-.5.5-.5.8-.5h.6c.2 0 .4 0 .6.5.2.5.7 1.6.7 1.7.1.1.1.3 0 .5-.1.2-.1.3-.3.4-.1.2-.3.3-.4.5-.2.1-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1.9 2 1.2 2.3 1.3.3.1.5.1.6-.1.2-.2.7-.8.9-1 .2-.3.4-.2.6-.1.2 0 1.5.7 1.7.8.2.1.4.2.4.3.1.2.1.9-.2 1.6-.3.7-1.6 1.4-2.2 1.4-.6.1-1.2.1-3.8-1-3-1.2-4.9-4.2-5.1-4.4-.1-.2-1.2-1.6-1.2-3S8 8.9 8.3 8.6z"
        fill="currentColor"
      />
    </svg>
  );
}
