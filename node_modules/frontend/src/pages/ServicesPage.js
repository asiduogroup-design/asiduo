import HeroSection from "../components/common/HeroSection";
import SectionHeader from "../components/common/SectionHeader";
import { services } from "../utils/constants";

const ServicesPage = () => (
  <>
    <HeroSection
      eyebrow="Services"
      title="Trade services that support sourcing, compliance, and execution."
      description="Our team helps clients manage the operational details behind international procurement and distribution."
      primaryAction={{ label: "Request Quote", path: "/request-quote" }}
    />
    <section className="section">
      <div className="container">
        <SectionHeader title="What We Offer" />
        <div className="feature-grid">
          {services.map((service) => (
            <div className="info-card" key={service}>
              <h3>{service}</h3>
              <p>
                Structured support tailored to supplier alignment, quality
                assurance, documentation, and commercial readiness.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ServicesPage;
