export default function ServiceCard({ item }) {
  const message = encodeURIComponent(
    `Namaste Sowik Wellness, I'd like to book ${item.name} (${item.subtitle}) at home.`
  );
  const href = `https://wa.me/919690148288?text=${message}`;

  const hasPrice = Boolean(item.original && item.discounted);
  const isQuotePrice = hasPrice && item.original === item.discounted;

  return (
    <article className="label-card">
      {item.image && (
        <div className="label-photo">
          <img src={`/images/${item.image}`} alt={item.name} loading="lazy" />
          <span className="label-seal">{item.duration}</span>
        </div>
      )}

      {hasPrice ? (
        isQuotePrice ? (
          <div className="label-price label-price-quote">
            <span className="label-price-note-only">Price on request — WhatsApp us for a quote</span>
          </div>
        ) : (
          <div className="label-price">
            <div className="label-price-amounts">
              <span className="label-price-original">{item.original}</span>
              <span className="label-price-discounted">{item.discounted}</span>
            </div>
            <span className="label-price-off">20% Off</span>
          </div>
        )
      ) : null}
      {hasPrice && item.priceNote && !isQuotePrice && (
        <div className="label-price-note-row">{item.priceNote}</div>
      )}

      <div className="label-body">
        <div className="label-top">
          <div>
            <h4 className="label-name">{item.name}</h4>
            <div className="label-subtitle">{item.subtitle}</div>
          </div>
          {!item.image && <div className="label-seal label-seal-static">{item.duration}</div>}
        </div>
        <p className="label-desc">{item.desc}</p>
        <a className="label-book" href={href} target="_blank" rel="noreferrer">
          Book this therapy →
        </a>
      </div>
    </article>
  );
}
