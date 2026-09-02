import { team, contact } from "../data/services";
import { WhatsappMark } from "../icons/Marks";
import { useLanguage } from "../context/LanguageContext";
import { strings } from "../i18n/strings";

export default function Team() {
  const { t, lang } = useLanguage();
  const s = strings.team;

  return (
    <section id="team" className="team">
      <div className="wrap">
        <p className="eyebrow" style={{ color: "var(--copper)" }}>
          {t(s.eyebrow)}
        </p>

        <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", marginTop: 10 }}>
          {t(s.titlePrefix)}
          <span className="italic">{t(s.titleItalic)}</span>
        </h2>

        <div className="team-grid">
          {team.map((member) => (
            <article className="team-card" key={member.name}>
              <div className="team-photo">
                <img
                  src={`/images/${member.image}`}
                  alt={`${member.name} - ${t(member.title)}`}
                  loading="lazy"
                />
              </div>

              <div className="team-info">
                <p className="team-role">{t(member.role)}</p>

                <h3 className="team-name">{member.name}</h3>

                <p className="team-title">{t(member.title)}</p>

                <p className="team-bio">{t(member.bio)}</p>

                {member.highlights && (
                  <div className="team-highlights">
                    {member.highlights[lang].map((highlight) => (
                      <span className="team-highlight" key={highlight}>
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}

                <a className="team-link" href={contact.whatsappHref} target="_blank" rel="noreferrer">
                  <WhatsappMark width={15} height={15} />
                  {t(s.messageOnWhatsapp)}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
