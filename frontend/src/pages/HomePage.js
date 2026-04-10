import { Link } from "react-router-dom";
import SectionHeader from "../components/common/SectionHeader";
import LoadingSpinner from "../components/common/LoadingSpinner";
import EmptyState from "../components/common/EmptyState";
import ProductCard from "../components/products/ProductCard";
import useAsync from "../hooks/useAsync";
import { productService } from "../services/api";
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

const capabilities = [
  {
    title: "Agricultural Exports",
    description: "Rice, pulses, turmeric, spices, and crafted goods handled with quality-first packing and documentation."
  },
  {
    title: "Premium Imports",
    description: "Curated international food and pet care products selected for premium retail and distribution channels."
  },
  {
    title: "Technical Procurement",
    description: "ATEX panels, industrial lighting, and hazardous-area equipment sourced for industrial buyers."
  }
];

const tradeSteps = [
  "Share your product requirement, destination market, and volume targets.",
  "We align sourcing, MOQ, packaging, and compliance expectations.",
  "Commercial coordination, documentation, and shipment planning move into execution."
];

const HomePage = () => {
  const { data, loading } = useAsync(() => productService.getProducts());
  const featuredProducts = data?.data?.slice(0, 6) || [];

  return (
    <>
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow hero-dark">Asiduo Enterprises</p>
            <h1>Global sourcing and trade execution for products that demand reliability.</h1>
            <p className="home-hero-text">
              We help international buyers source export commodities, premium imported
              goods, and technical industrial products through a disciplined,
              partnership-led trade model.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/products">
                Explore Products
              </Link>
              <Link className="btn btn-ghost" to="/request-quote">
                Request Quote
              </Link>
            </div>
            <div className="hero-metrics">
              {highlights.map((item) => (
                <div className="hero-metric-card" key={item.title}>
                  <strong>{item.value}</strong>
                  <span>{item.title}</span>
                </div>
              ))}
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

      <section className="section section-tight">
        <div className="container">
          <div className="trust-band">
            {highlights.map((item) => (
              <div className="trust-band-item" key={item.title}>
                <h3>{item.value}</h3>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            title="Trade Verticals"
            subtitle="A focused business structure designed to serve commercial buyers across food, retail, and industrial sectors."
          />
          <div className="capability-grid">
            {capabilities.map((item) => (
              <div className="capability-card" key={item.title}>
                <div className="capability-accent" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeader
            title="Featured Products"
            subtitle="A modern product showcase across consumer, agricultural, and industrial sourcing categories."
          />
          {loading ? <LoadingSpinner message="Loading featured products..." /> : null}
          {!loading && featuredProducts.length === 0 ? (
            <EmptyState title="No products available" message="Seed the database or add products from the admin panel." />
          ) : null}
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div>
            <SectionHeader
              title="Services"
              subtitle="Commercial and operational support designed for smooth cross-border trade."
              align="left"
            />
            <div className="stack-list">
              {services.map((service) => (
                <div className="service-line-card" key={service}>
                  <span className="service-line-mark" />
                  <p>{service}</p>
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
            <div className="stack-list">
              {industries.map((industry) => (
                <div className="service-line-card" key={industry}>
                  <span className="service-line-mark" />
                  <p>{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container process-shell">
          <div>
            <SectionHeader
              title="How We Work"
              subtitle="Simple, direct, and built around commercial clarity from inquiry to shipment."
              align="left"
            />
          </div>
          <div className="process-list">
            {tradeSteps.map((step, index) => (
              <div className="process-card" key={step}>
                <span>{`0${index + 1}`}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="home-cta">
            <div>
              <p className="eyebrow">Ready To Trade</p>
              <h2>Let’s build your next import or export supply channel with confidence.</h2>
              <p>
                Connect with Asiduo Enterprises for sourcing discussions, technical
                requirements, MOQ planning, and tailored quotations.
              </p>
            </div>
            <div className="home-cta-actions">
              <Link className="btn btn-primary" to="/contact">
                Talk to Our Team
              </Link>
              <Link className="btn btn-secondary" to="/request-quote">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
