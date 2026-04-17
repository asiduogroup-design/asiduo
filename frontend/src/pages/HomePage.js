import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import SectionHeader from "../components/common/SectionHeader";
import { industries, services } from "../utils/constants";

const highlights = [
  {
    title: "Export Network",
    value: "06+",
    description: "High-demand export categories ready for global distribution."
  },
  {
    title: "Import Portfolio",
    value: "08+",
    description: "Premium food, pet care, and technical sourcing solutions."
  },
  {
    title: "Trade Focus",
    value: "24/7",
    description: "Responsive commercial coordination for buyers and distributors."
  }
];

const verticals = [
  {
    number: "01",
    title: "Agricultural",
    titleItalic: "Exports",
    image: "https://crisp-visual-alchemy.lovable.app/assets/vertical-agri-DWxhO5TB.jpg",
    description: "Rice, pulses, turmeric, spices, and crafted goods — handled with quality-first packing, MOQ planning, and full export documentation.",
    items: ["Basmati & Non-Basmati Rice", "Turmeric & Spices", "Pulses & Lentils", "Crafted Goods"]
  },
  {
    number: "02",
    title: "Premium",
    titleItalic: "Imports",
    image: "https://crisp-visual-alchemy.lovable.app/assets/vertical-imports-DPIfv6pq.jpg",
    description: "Curated international food and pet care products selected for premium retail and distribution channels with cold-chain integrity.",
    items: ["Gourmet Foods", "Pet Care", "Health & Wellness", "Specialty Beverages"]
  },
  {
    number: "03",
    title: "Technical",
    titleItalic: "Procurement",
    image: "https://crisp-visual-alchemy.lovable.app/assets/vertical-industrial-CGr9IEy2.jpg",
    description: "ATEX panels, industrial lighting, and hazardous-area equipment sourced from certified manufacturers for serious industrial buyers.",
    items: ["ATEX Control Panels", "Industrial LED Lighting", "Hazardous-Area Equipment", "Custom Enclosures"]
  }
];

const tradeSteps = [
  {
    title: "Discovery",
    description: "We map your specifications, MOQ, certifications, and destination ports in a single discovery call."
  },
  {
    title: "Sourcing",
    description: "Our network of vetted producers and certified manufacturers responds with samples and indicative pricing."
  },
  {
    title: "Execution",
    description: "Quality inspection, export documentation, and shipment readiness — coordinated from a single trade desk."
  },
  {
    title: "Delivery",
    description: "Shipment tracking, port clearance support, and a post-delivery review to refine the next cycle."
  }
];

const serviceIcons = {
  "Global sourcing and procurement": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10A15.3 15.3 0 0 1 8 12a15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  "Export documentation and compliance": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14,2 14,8 20,8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
    </svg>
  ),
  "Import coordination and customs support": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    </svg>
  ),
  "Private labeling and packaging advisory": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
      <line x1="7" y1="7" x2="7.01" y2="7"/>
    </svg>
  ),
  "Industrial technical procurement": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.07 4.93a10 10 0 1 1-14.14 0M12 2v4"/>
    </svg>
  ),
  "End-to-end logistics consultation": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13"/>
      <path d="M16 8h4l3 3v5h-7V8z"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  )
};

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
  "Hospitality": (
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

const HomePage = () => {
  const servicesRef = useRef(null);
  const industriesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (industriesRef.current) observer.observe(industriesRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow hero-dark">ASIDUO ENTERPRISES</p>
            <h1>Global Trading & Import Experts</h1>
            <p className="home-hero-text">
              Connecting World Markets. Wm Scenarios. Soft Gain Solutions
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/request-quote">
                Request a Quote
              </Link>
              <Link className="btn btn-secondary" to="/products">
                Explore More
              </Link>
            </div>
          </div>

          <div className="home-hero-panel">
            <div className="hero-panel-card hero-panel-primary">
              <span className="hero-panel-tag">Trade Categories</span>
              <h3>Export, import, and technical procurement in one unified platform.</h3>
              <p>
                From agricultural staples to hazardous-area equipment, our portfolio
                is structured for modern B2B buying teams.
              </p>
            </div>
            <div className="hero-panel-stack">
              <div className="hero-panel-card">
                <span className="panel-stat">Quality</span>
                <p>Packaging, origin, and MOQ planning built into every conversation.</p>
              </div>
              <div className="hero-panel-card">
                <span className="panel-stat">Execution</span>
                <p>Commercial responsiveness and shipment readiness for cross-border trade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="stats-band-grid">
          <div className="stats-band-item">
            <span className="stats-band-label">Trade Corridors</span>
            <span className="stats-band-value">16</span>
          </div>
          <div className="stats-band-item">
            <span className="stats-band-label">Product Lines</span>
            <span className="stats-band-value">120+</span>
          </div>
          <div className="stats-band-item">
            <span className="stats-band-label">Reliability Score</span>
            <span className="stats-band-value">99.4%</span>
          </div>
        </div>
      </section>

      <section className="trade-doctrine-section">
        <div className="container trade-doctrine-grid">
          <div className="trade-doctrine-label">
            <span className="doctrine-rule"></span>
            <span className="doctrine-eyebrow">Trade Doctrine</span>
          </div>
          <p className="trade-doctrine-text">
            We exist to remove the quiet anxieties of international procurement — origin,
            packaging, MOQ, documentation, and arrival — through a single disciplined desk
            that <em>treats every shipment as a relationship.</em>
          </p>
        </div>
      </section>

      <section className="section verticals-section">
        <div className="container">
          <div className="section-header-flex">
            <h2 className="strategic-verticals-title">Strategic <span>Verticals</span></h2>
            <p className="section-tagline">THREE DESKS · ONE OPERATION</p>
          </div>
          <div className="verticals-grid">
            {verticals.map((vertical) => (
              <div className="vertical-card" key={vertical.number}>
                <div className="vertical-image">
                  <img src={vertical.image} alt={vertical.title} />
                </div>
                <h3 className="vertical-title">{vertical.title} <span>{vertical.titleItalic}</span></h3>
                <p className="vertical-description">{vertical.description}</p>
                <ul className="vertical-items">
                  {vertical.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <Link to="/products" className="explore-desk-link">EXPLORE DESK →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-offerings-section">
        <div className="container two-column">
          <div>
            <SectionHeader
              title="Services"
              subtitle="Commercial and operational support designed for smooth cross-border trade."
              align="left"
            />
            <div className="stack-list" ref={servicesRef}>
              {services.map((service, i) => (
                <div className="service-line-card" key={service} style={{ "--i": i }}>
                  <span className="service-icon">{serviceIcons[service]}</span>
                  <p className="offering-line-text">
                    {service.split("").map((char, li) => (
                      <span key={li} className="letter" style={{ "--li": li }}>
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader
              title="Industries"
              subtitle="Serving a diverse portfolio of product-driven and compliance-led sectors."
              align="left"
            />
            <div className="stack-list" ref={industriesRef}>
              {industries.map((industry, i) => (
                <div className="service-line-card" key={industry} style={{ "--i": i }}>
                  <span className="service-icon">{industryIcons[industry]}</span>
                  <p className="offering-line-text">
                    {industry.split("").map((char, li) => (
                      <span key={li} className="letter" style={{ "--li": li }}>
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section method-section">
        <div className="container">
          <div className="method-header">
            <div className="method-eyebrow">
              <span className="method-rule"></span>
              <span>The Method</span>
            </div>
            <div className="method-intro">
              <h2 className="method-title">Four movements, <span>one shipment.</span></h2>
              <p className="method-subtitle">A method designed for buyers who treat procurement as strategy — not as a transaction.</p>
            </div>
          </div>
          <div className="method-grid">
            {tradeSteps.map((step) => (
              <div className="method-card" key={step.title}>
                <h3 className="method-card-title">{step.title}</h3>
                <p className="method-card-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="container">
          <div className="testimonial-content">
            <div className="testimonial-mark">"</div>
            <p className="testimonial-text">Asiduo treats every consignment as if their name were on the bill of lading. In commodities, that is the only quality that compounds.</p>
          </div>
        </div>
      </section>

      <section className="section home-cta-section">
        <div className="home-cta">
          <div className="home-cta-copy">
            <p className="eyebrow">Open A Trade Desk</p>
            <h2>
              Tell us what to source.
              <span>We will respond like partners.</span>
            </h2>
          </div>
          <div className="home-cta-actions">
            <Link className="btn home-cta-button" to="/request-quote">
              Request A Quote →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
