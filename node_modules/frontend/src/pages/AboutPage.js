import HeroSection from "../components/common/HeroSection";
import SectionHeader from "../components/common/SectionHeader";

const AboutPage = () => (
  <>
    <HeroSection
      eyebrow="About Us"
      title="A disciplined import-export company with a global sourcing mindset."
      description="Asiduo Enterprises supports buyers and distributors with dependable export products, curated imported goods, and technical procurement services."
      primaryAction={{ label: "Contact Us", path: "/contact" }}
      secondaryAction={{ label: "View Products", path: "/products" }}
    />

    <section className="section">
      <div className="container two-column">
        <div>
          <SectionHeader title="Who We Are" align="left" />
          <p>
            We are an international trade company committed to quality sourcing,
            reliable documentation, and strong client relationships. Our business
            spans agricultural exports, premium imported food and pet products,
            and technical industrial supplies.
          </p>
        </div>
        <div>
          <SectionHeader title="Our Approach" align="left" />
          <p>
            Every shipment and sourcing engagement is handled with attention to
            compliance, packaging, origin traceability, and responsive commercial
            coordination to support long-term growth for our partners.
          </p>
        </div>
      </div>
    </section>
  </>
);

export default AboutPage;
