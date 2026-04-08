import { Link } from "react-router-dom";

const HeroSection = ({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction
}) => (
  <section className="hero-section">
    <div className="container hero-content">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1>{title}</h1>
      {description ? <p className="hero-description">{description}</p> : null}
      <div className="hero-actions">
        {primaryAction ? (
          <Link className="btn btn-primary" to={primaryAction.path}>
            {primaryAction.label}
          </Link>
        ) : null}
        {secondaryAction ? (
          <Link className="btn btn-secondary" to={secondaryAction.path}>
            {secondaryAction.label}
          </Link>
        ) : null}
      </div>
    </div>
  </section>
);

export default HeroSection;
