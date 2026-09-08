<<<<<<< HEAD
import { founders, doctors, contact } from "../data/services";
=======
import { team, contact } from "../data/services";
>>>>>>> 9ed06dd9d93d84d7ea52a8761053bc98e1c5e421
import { WhatsappMark } from "../icons/Marks";
import { useLanguage } from "../context/LanguageContext";
import { strings } from "../i18n/strings";

<<<<<<< HEAD
function TeamGrid({ members }) {
  const { t, lang } = useLanguage();
  const s = strings.team;

  return (
    <div className="team-grid">
      {members.map((member) => (
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
            {member.consultationFee && (
  <div className="doctor-consultation-fee">
    {t(member.consultationFee)}
  </div>
)}

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
  );
}

export default function Team() {
  const { t } = useLanguage();
=======
export default function Team() {
  const { t, lang } = useLanguage();
>>>>>>> 9ed06dd9d93d84d7ea52a8761053bc98e1c5e421
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

<<<<<<< HEAD
        <TeamGrid members={founders} />

        <p className="eyebrow" style={{ color: "var(--copper)", marginTop: 56 }}>
          {t(s.doctorsEyebrow)}
        </p>

        <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", marginTop: 10 }}>
          {t(s.doctorsTitlePrefix)}
          <span className="italic">{t(s.doctorsTitleItalic)}</span>
        </h2>

        <TeamGrid members={doctors} />
=======
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
>>>>>>> 9ed06dd9d93d84d7ea52a8761053bc98e1c5e421
      </div>
    </section>
  );
}
