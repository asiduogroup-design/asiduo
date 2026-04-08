import HeroSection from "../components/common/HeroSection";
import SectionHeader from "../components/common/SectionHeader";
import { industries } from "../utils/constants";

const IndustriesPage = () => (
  <>
    <HeroSection
      eyebrow="Industries"
      title="Serving commercial, retail, and industrial sectors with precision."
      description="Our product mix and sourcing capability support businesses with varying quality, safety, and supply-chain requirements."
      primaryAction={{ label: "Contact Us", path: "/contact" }}
    />
    <section className="section">
      <div className="container">
        <SectionHeader title="Industries We Support" />
        <div className="feature-grid">
          {industries.map((industry) => (
            <div className="info-card" key={industry}>
              <h3>{industry}</h3>
              <p>
                Reliable sourcing and coordinated delivery aligned with the
                expectations of modern B2B buyers and distributors.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default IndustriesPage;
