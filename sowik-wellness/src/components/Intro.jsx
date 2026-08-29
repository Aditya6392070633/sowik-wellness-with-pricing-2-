export default function Intro() {
  const reasons = [
    {
      number: "01",
      title: "Authentic Ayurvedic Care",
      text: "Rooted in traditional Ayurvedic principles and therapeutic practices, delivered with care, consistency, and respect for the wisdom of Ayurveda.",
    },
    {
      number: "02",
      title: "Experienced Therapists",
      text: "Our skilled therapists bring professional knowledge and thoughtful hands-on care to every home visit.",
    },
    {
      number: "03",
      title: "Personalised Treatments",
      text: "Every individual is different. Our therapies are thoughtfully selected around your concerns, comfort, and wellness goals.",
    },
    {
      number: "04",
      title: "Wellness at Your Doorstep",
      text: "Enjoy professional Ayurvedic care in the comfort and privacy of your own home — without the stress of travelling or waiting.",
    },
    {
      number: "05",
      title: "Traditional Methods & Quality Oils",
      text: "We combine time-honoured Ayurvedic techniques with carefully selected oils to create a genuine therapeutic experience.",
    },
    {
      number: "06",
      title: "Professional & Respectful Service",
      text: "From your first interaction to the completion of your therapy, we prioritise punctuality, privacy, cleanliness, comfort, and client satisfaction.",
    },
  ];

  return (
    <>
      <section id="about" className="intro">
        <div className="wrap">
          <div className="intro-grid">
            <h2>
              The Sovik
              <br />
              <span className="italic">Philosophy.</span>
            </h2>

            <div className="intro-copy">
              <p>
                <strong>Our Mission</strong><br />
                To deliver authentic Ayurvedic wellness with the highest
                standards of care, professionalism, and personal attention —
                bringing time-honoured healing traditions into the comfort and
                privacy of your home.
              </p>

              <p>
                We are committed to creating meaningful wellness experiences
                that support pain management, relaxation, mobility, and
                long-term wellbeing through carefully selected therapies and
                personalised care.
              </p>

              <p>
                <strong>Our Vision</strong><br />
                To become a trusted name in home-based Ayurvedic wellness,
                recognised for exceptional service, authentic therapeutic
                practices, and a genuine commitment to every client’s wellbeing.
              </p>

              <p>
                Our vision is to make traditional Ayurveda more accessible to
                modern lifestyles while preserving the knowledge, values, and
                discipline that make it a timeless approach to wellness.
              </p>

              <p>
                <strong>Our Philosophy</strong><br />
                We believe wellness is personal — and true care begins by
                understanding the person, not simply the symptom. At Sovik
                Wellness, we bring together traditional Ayurvedic principles,
                skilled therapeutic techniques, quality oils, attentive
                service, and a calm home environment.
              </p>

              <p>
                Our approach is simple: authentic Ayurveda, personalised care,
                and wellness delivered with integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="wrap">
          <div className="why-choose-header">
            <div>
              <h2>
                Why Choose
                <br />
                <span className="italic">Sovik?</span>
              </h2>
            </div>

            <p>
              Traditional Ayurvedic care, thoughtfully delivered for modern
              lifestyles — with professional service, personalised attention,
              and genuine care at every step.
            </p>
          </div>

          <div className="why-choose-grid">
            {reasons.map((reason) => (
              <article className="why-card" key={reason.number}>
                <span className="why-number">{reason.number}</span>

                <h3>{reason.title}</h3>

                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}