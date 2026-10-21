import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { strings } from "../i18n/strings";

const images = Array.from({ length: 15 }, (_, i) =>
  `/images/gallery/gallery-${String(i + 1).padStart(2, "0")}.jpg`
);

export default function Gallery() {
  const { t } = useLanguage();
  const [active, setActive] = useState(null); // index of open image

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setActive((i) => (i - 1 + images.length) % images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section className="gallery-page">
      <div className="wrap">
        <h1 className="gallery-title">{t(strings.gallery.title)}</h1>

        <div className="gallery-grid">
          {images.map((src, i) => (
            <button key={src} className="gallery-item" onClick={() => setActive(i)}>
              <img src={src} alt={`Sovik Wellness ${i + 1}`} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <button className="lb-close" aria-label="Close" onClick={() => setActive(null)}>×</button>
          <button
            className="lb-nav lb-prev"
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); setActive((active - 1 + images.length) % images.length); }}
          >‹</button>
          <img src={images[active]} alt="" onClick={(e) => e.stopPropagation()} />
          <button
            className="lb-nav lb-next"
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); setActive((active + 1) % images.length); }}
          >›</button>
        </div>
      )}
    </section>
  );
}