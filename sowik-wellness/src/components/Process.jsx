import { useLanguage } from "../context/LanguageContext";
import { strings } from "../i18n/strings";

export default function Process() {
  const { t } = useLanguage();
  const s = strings.process;

  return (
    <section id="how-it-works" className="process">
      <div className="wrap">
        <div className="process-head">
          <p className="eyebrow">{t(s.eyebrow)}</p>
          <h2>{t(s.title)}</h2>
        </div>
        <div className="process-steps">
          {s.steps.map((step) => (
            <div className="p-step" key={step.n}>
              <div className="num">{step.n}</div>
              <h4>{t(step.title)}</h4>
              <p>{t(step.text)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
