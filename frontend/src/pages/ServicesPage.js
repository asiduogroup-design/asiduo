import { Link } from "react-router-dom";

const serviceDesks = [
  {
    title: "Sourcing & Origination",
    description:
      "We identify, qualify, and negotiate with producers and certified manufacturers for the exact specification you need - not the closest substitute.",
    points: ["Producer due diligence", "Sample dispatch", "Indicative pricing within 48h"]
  },
  {
    title: "Quality & Inspection",
    description:
      "Pre-shipment inspection, grade verification, and packaging integrity checks executed against the contract - not the marketing brochure.",
    points: ["Pre-shipment inspection", "Lab testing coordination", "Grade and moisture verification"]
  },
  {
    title: "Documentation & Compliance",
    description:
      "Export documentation, phytosanitary certificates, and import compliance handled inside one operating rhythm with your customs broker.",
    points: ["Phytosanitary and FSSAI", "ATEX and CE certificates", "Customs broker liaison"]
  },
  {
    title: "Logistics & Execution",
    description:
      "Container booking, port coordination, and shipment tracking with a single point of contact who answers the phone.",
    points: ["Container and vessel booking", "Cold-chain coordination", "Real-time shipment status"]
  },
  {
    title: "Trade Finance Support",
    description:
      "We help structure LC, TT, and DA terms that work for both sides of the table - without the awkward second conversation.",
    points: ["LC at sight and usance", "TT advance and balance", "DA terms with track record"]
  },
  {
    title: "Long-Term Programs",
    description:
      "Annual contracts, rolling forecasts, and dedicated capacity reservations for buyers who treat sourcing as a strategic function.",
    points: ["Annual rate cards", "Rolling 12-month forecasts", "Dedicated origination"]
  }
];

const ServicesPage = () => {
  return (
    <>
      <section className="about-hero section services-hero">
        <div className="container">
          <p className="about-eyebrow">Services · The Operating Rhythm</p>
          <h1>Six disciplines, one trade desk.</h1>
          <p className="about-hero-text">
            Each service is a discipline, not a department. Run together, they remove the small failures that turn
            a routine shipment into a crisis.
          </p>
          <div className="about-hero-actions">
            <Link className="btn btn-primary" to="/request-quote">
              Request Quote
            </Link>
            <Link className="btn btn-secondary" to="/contact">
              Engage Our Desk
            </Link>
          </div>
        </div>
      </section>

      <section className="services-disciplines section">
        <div className="container">
          <div className="services-discipline-grid">
            {serviceDesks.map((desk) => (
              <article className="services-discipline-card" key={desk.title}>
                <h3>{desk.title}</h3>
                <p>{desk.description}</p>
                <ul>
                  {desk.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <Link className="services-engage-link" to="/contact">
                  Engage This Desk <span aria-hidden="true">-></span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
