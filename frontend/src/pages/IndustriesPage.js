import { Link } from "react-router-dom";
import SectionHeader from "../components/common/SectionHeader";
import { industries } from "../utils/constants";

const industryIcons = {
  "Food & Agriculture": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V12M12 12C12 7 7 4 2 6M12 12C12 7 17 4 22 6"/>
    </svg>
  ),
  "Retail Distribution": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  ),
  "Industrial Infrastructure": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  ),
  "Oil & Gas": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
    </svg>
  ),
  Hospitality: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9,22 9,12 15,12 15,22"/>
    </svg>
  ),
  "Pet Care": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="4" r="2"/>
      <circle cx="18" cy="8" r="2"/>
      <circle cx="20" cy="16" r="2"/>
      <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/>
    </svg>
  )
};

const industryDescriptions = {
  "Food & Agriculture": "Reliable sourcing and coordinated delivery aligned with the expectations of modern B2B buyers and distributors.",
  "Retail Distribution": "Supply planning, packaging consistency, and importer-ready coordination designed for organized retail and wholesale channels.",
  "Industrial Infrastructure": "Certified technical sourcing and disciplined execution for projects where compliance, documentation, and continuity matter.",
  "Oil & Gas": "Procurement support built for specification-led environments with high attention to certification, durability, and traceability.",
  Hospitality: "Curated sourcing programs that support service quality, repeat ordering cycles, and dependable delivery windows.",
  "Pet Care": "Structured import and distribution support for premium pet care lines with attention to quality, labeling, and retail readiness."
};

const IndustriesPage = () => (
  <>
    <section className="about-hero section services-hero">
      <div className="container">
        <p className="about-eyebrow">Industries · Demand Environments</p>
        <h1>Supply disciplines shaped by the industries we serve.</h1>
        <p className="about-hero-text">
          Our sourcing capability supports commercial, retail, and industrial buyers with different quality,
          compliance, and continuity requirements across each demand environment.
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
    <section className="section home-offerings-section industries-support-section">
      <div className="container">
        <SectionHeader
          title="Industries We Support"
          subtitle="Serving a diverse portfolio of product-driven and compliance-led sectors."
          align="left"
        />
        <div className="industries-support-grid">
          {industries.map((industry) => (
            <div className="service-line-card" key={industry}>
              <span className="service-icon">{industryIcons[industry]}</span>
              <div className="industry-support-copy">
                <p className="offering-line-text">{industry}</p>
                <p className="industry-support-description">{industryDescriptions[industry]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default IndustriesPage;
