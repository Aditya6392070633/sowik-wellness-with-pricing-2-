import { marks } from "../icons/Marks";
import ServiceCard from "./ServiceCard";
import { useLanguage } from "../context/LanguageContext";

export default function Chapter({ chapter }) {
  const Mark = marks[chapter.mark];
  const { t } = useLanguage();

  return (
    <div className="chapter" id={chapter.id}>
      <div className="chapter-head">
        <div>
          <div className="chapter-numeral">{chapter.number}</div>
          <Mark className="chapter-mark" width={30} height={30} />
        </div>
        <div>
          <div className="chapter-title-row">
            <h3>{t(chapter.title)}</h3>
          </div>
          <p className="chapter-intro">{t(chapter.intro)}</p>
        </div>
      </div>

      <div className="card-grid">
        {chapter.items.map((item) => (
          <ServiceCard key={item.name.en} item={item} />
        ))}
      </div>
    </div>
  );
}
