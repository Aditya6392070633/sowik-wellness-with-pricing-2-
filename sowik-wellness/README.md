# Sowik Wellness — Website

A responsive React (Vite) marketing site for Sowik Wellness, a home-visit
Ayurvedic therapy service. Built from the client's service menu: six therapy
chapters (Ayurvedic massage, cupping, basti pain therapy, navel alignment,
Shatkarma detox, and yoga), with call / WhatsApp booking throughout.

Real photos supplied by the client are used throughout: a founder / co-founder
team section, and a photo on every therapy card that has one (all stored in
`public/images/`). A custom line-art icon set is still used for chapter marks
and phone/WhatsApp glyphs.

## Run it

```bash
npm install
npm run dev       # local dev server, usually http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

Requires Node.js 18+.

## Project structure

```
src/
  data/services.js       # ALL service copy lives here — edit this file to change any
                          # therapy name, description, or duration. Also holds the
                          # phone number and WhatsApp link.
  icons/Marks.jsx         # hand-drawn line-art icon set (leaf, cup, droplet, spiral,
                          # wave, lotus) used as chapter marks + phone/WhatsApp glyphs
  components/
    Navbar.jsx            # sticky header, mobile drawer menu
    Hero.jsx               # landing section + signature SVG illustration
    Intro.jsx               # "About" strip
    Formulary.jsx          # renders every chapter from data/services.js
    Chapter.jsx             # one chapter (heading + card grid)
    ServiceCard.jsx        # one therapy "apothecary label" card (photo + details)
    Team.jsx                # Founder / Co-Founder section
    Process.jsx             # "How booking works" 4-step section
    TrustAndCta.jsx         # trust strip + call-to-action band
    Footer.jsx
    BookingBar.jsx          # floating WhatsApp button (desktop) / sticky call+WhatsApp
                            # bar (mobile, under 640px)
  index.css                # entire design system (colors, type, layout) as CSS variables
```

## Editing the service menu

Everything shown under "Our Services" comes from `src/data/services.js`.
To add, remove, or edit a treatment, edit the `chapters` array — no other
file needs to change. Each item takes `name`, `subtitle`, `desc`, and
`duration`.

## Changing the phone / WhatsApp number

Also in `src/data/services.js`:

```js
export const contact = {
  phone: "+91 9690148288",
  phoneHref: "tel:+919690148288",
  whatsappHref: "https://wa.me/919690148288?text=...",
};
```

Update all three. The WhatsApp link pre-fills a booking message; each
individual therapy card also builds its own pre-filled message naming that
specific treatment (see `ServiceCard.jsx`).

## Adding / changing photos

All photos live in `public/images/` and are referenced by filename from
`src/data/services.js` (`image: "abhyanga-massage.jpg"`) and `team` entries
(`founder.jpg`, `cofounder.jpg`). To swap or add a photo:

1. Drop the new image into `public/images/`.
2. Point the relevant `image` field in `src/data/services.js` (or `team`) at
   the new filename.
3. A service item with no `image` field falls back to a plain text card —
   no photo is required for every therapy.

## Design system

Palette, type, and spacing are all defined as CSS custom properties at the
top of `src/index.css`:

- `--ink` (#16241b) — deep green-black, used for the header, hero, and footer
- `--paper` (#f6efdd) — warm turmeric-tinted background for content sections
- `--gold` (#c4832a) — primary accent (buttons, links, chapter numerals)
- `--copper` (#7a1f1f) — secondary accent (subtitles, category labels)
- `--tulsi` (#3e5c46) — supporting green (icons, floating WhatsApp button)

Fonts: **Fraunces** (display/headings), **Manrope** (body), **Space Mono**
(labels, durations, eyebrows) — loaded from Google Fonts in `index.html`.

## Deploying

`npm run build` produces a static `dist/` folder. It can be hosted on any
static host — Vercel, Netlify, Cloudflare Pages, GitHub Pages, or a plain
Nginx server. No backend is required.
