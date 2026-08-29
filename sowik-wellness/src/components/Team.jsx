import { team, contact } from "../data/services";
import { WhatsappMark } from "../icons/Marks";

export default function Team() {
  return (
    <section id="team" className="team">
      <div className="wrap">
        <p className="eyebrow" style={{ color: "var(--copper)" }}>
          Who's Behind It
        </p>

        <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", marginTop: 10 }}>
          Built by people who{" "}
          <span className="italic">practice this daily.</span>
        </h2>

        <div className="team-grid">
          {team.map((member) => (
            <article className="team-card" key={member.role}>
              
              <div className="team-photo">
                <img
                  src={`/images/${member.image}`}
                  alt={`${member.name} - ${member.title}`}
                  loading="lazy"
                />
              </div>

              <div className="team-info">
                <p className="team-role">
                  {member.role}
                </p>

                <h3 className="team-name">
                  {member.name}
                </h3>

                <p className="team-title">
                  {member.title}
                </p>

                <p className="team-bio">
                  {member.bio}
                </p>

                {member.highlights && (
                  <div className="team-highlights">
                    {member.highlights.map((highlight) => (
                      <span
                        className="team-highlight"
                        key={highlight}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}

                <a
                  className="team-link"
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsappMark width={15} height={15} />
                  Message on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}