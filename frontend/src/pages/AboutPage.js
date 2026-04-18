import { Link } from "react-router-dom";

const principles = [
  {
    title: "Quality is the contract",
    text: "Origin, grade, packaging, and certification are confirmed before commercial terms are discussed."
  },
  {
    title: "Speed earns trust",
    text: "Indicative pricing in 48 hours, sampling windows in days, and documentation updates in real time."
  },
  {
    title: "One desk, one accountable name",
    text: "Every relationship is owned end-to-end by a single point of accountability for continuity and clarity."
  },
  {
    title: "Transparency over polish",
    text: "We communicate constraints early and clearly because durable buyer relationships are built on truth."
  }
];

const AboutPage = () => (
  <>
    <section className="about-hero section">
      <div className="container">
        <p className="about-eyebrow">About · House Doctrine</p>
        <h1>A trading house built on restraint.</h1>
        <p className="about-hero-text">
          Asiduo Enterprises was founded on one conviction: global trade is a trust business, and trust
          is earned quietly, consignment by consignment.
        </p>
        <div className="about-hero-actions">
          <Link className="btn btn-primary" to="/contact">
            Contact Us
          </Link>
          <Link className="btn btn-secondary" to="/products">
            View Products
          </Link>
        </div>
      </div>
    </section>

    <section className="about-story section-tight">
      <div className="container about-story-grid">
        <figure className="about-founder">
          <img
            src="https://crisp-visual-alchemy.lovable.app/assets/about-portrait-DfBcGDnH.jpg"
            alt="Founding partner at Asiduo Enterprises"
            loading="lazy"
          />
          <figcaption>Founding Partner, Trade Operations</figcaption>
        </figure>

        <div className="about-story-copy">
          <p>
            We did not begin with a catalog. We began with a buyer who needed a difficult specification
            sourced with precision and delivered without excuses.
          </p>
          <p>
            From that first relationship, Asiduo expanded into a multi-vertical trading desk serving
            distributors, retailers, and industrial buyers across regions.
          </p>
          <p>
            We remain intentionally compact. Every shipment is reviewed by a partner. Every account is owned
            by a name. We scale only when the same standard can be preserved.
          </p>
          <Link className="about-cta" to="/contact">
            Open a Conversation <span aria-hidden="true">-></span>
          </Link>
        </div>
      </div>
    </section>

    <section className="about-principles section">
      <div className="container">
        <p className="about-section-label">House Principles</p>
        <div className="about-principles-grid">
          {principles.map((principle) => (
            <article className="principle-card" key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="about-closing section-tight">
      <div className="container about-closing-shell">
        <h2>Quiet process. Accountable execution. Long-term trust.</h2>
        <p>
          We serve buyers who value consistency over theatrics and operational clarity over sales noise.
        </p>
      </div>
    </section>
  </>
);

export default AboutPage;
