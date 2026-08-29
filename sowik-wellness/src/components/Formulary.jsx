import { chapters } from "../data/services";
import Chapter from "./Chapter";

export default function Formulary() {
  return (
    <section id="formulary" className="formulary">
      <div className="wrap">
        <p className="eyebrow" style={{ color: "var(--copper)" }}>
          Our Services
        </p>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", marginTop: 10 }}>
          Seven chapters, <span className="italic">twenty-two therapies.</span>
        </h2>

        {chapters.map((chapter) => (
          <Chapter key={chapter.id} chapter={chapter} />
        ))}
      </div>
    </section>
  );
}
