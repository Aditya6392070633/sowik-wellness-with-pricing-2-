const steps = [
  {
    n: "01",
    title: "Message or call",
    text: "Tell us the therapy and a rough time on WhatsApp or by phone.",
  },
  {
    n: "02",
    title: "We confirm the slot",
    text: "A therapist and time are confirmed for your address, same day where possible.",
  },
  {
    n: "03",
    title: "Therapist arrives",
    text: "Oils, cupping sets, and basti equipment come with them — nothing for you to arrange.",
  },
  {
    n: "04",
    title: "Session at home",
    text: "Your room, your pace. Pay after the session, in person or online.",
  },
];

export default function Process() {
  return (
    <section id="how-it-works" className="process">
      <div className="wrap">
        <div className="process-head">
          <p className="eyebrow">How Booking Works</p>
          <h2>Four steps, one visit.</h2>
        </div>
        <div className="process-steps">
          {steps.map((s) => (
            <div className="p-step" key={s.n}>
              <div className="num">{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
