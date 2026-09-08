import { useLanguage } from "../context/LanguageContext";
import { strings } from "../i18n/strings";

export default function Intro() {
  const { t } = useLanguage();
  const s = strings.intro;
  const reasons = s.reasons;

  return (
    <>
      <section id="about" className="intro">
        <div className="wrap">
          <div className="intro-grid">
            <h2>
              {t(s.aboutTitleLine1)}
              <br />
              <span className="italic">{t(s.aboutTitleLine2)}</span>
            </h2>

            <div className="intro-copy">
              <p>
                <strong>{t(s.mission.heading)}</strong>
                <br />
                {t(s.mission.text)}
              </p>

              <p>{t(s.para2)}</p>

              <p>
                <strong>{t(s.vision.heading)}</strong>
                <br />
                {t(s.vision.text)}
              </p>

              <p>{t(s.para4)}</p>

              <p>
                <strong>{t(s.philosophy.heading)}</strong>
                <br />
                {t(s.philosophy.text)}
              </p>

              <p>{t(s.para6)}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="wrap">
          <div className="why-choose-header">
            <div>
              <h2>
                {t(s.whyTitleLine1)}
                <br />
                <span className="italic">{t(s.whyTitleLine2)}</span>
              </h2>
            </div>

            <p>{t(s.whyIntro)}</p>
          </div>

          <div className="why-choose-grid">
            {reasons.map((reason) => (
              <article className="why-card" key={reason.number}>
                <span className="why-number">{reason.number}</span>

                <h3>{t(reason.title)}</h3>

                <p>{t(reason.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
