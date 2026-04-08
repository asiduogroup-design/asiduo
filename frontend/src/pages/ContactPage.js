import HeroSection from "../components/common/HeroSection";
import InquiryForm from "../components/forms/InquiryForm";
import { inquiryService } from "../services/api";

const ContactPage = () => {
  const handleSubmit = async (payload) => {
    await inquiryService.createInquiry(payload);
  };

  return (
    <>
      <HeroSection
        eyebrow="Contact"
        title="Connect with our trade team."
        description="Share your sourcing, distribution, or product inquiry and we will respond with the right next steps."
      />

      <section className="section">
        <div className="container contact-grid">
          <InquiryForm
            title="Send an Inquiry"
            description="Tell us what you need and our team will get back to you."
            onSubmit={handleSubmit}
            submitLabel="Submit Inquiry"
          />
          <div className="info-panel">
            <h3>Office Contacts</h3>
            <p>Email: info@asiduoenterprises.com</p>
            <p>Phone: +91 90000 00000</p>
            <p>Hours: Monday to Saturday, 9:00 AM - 6:00 PM</p>
            <p>
              We support product sourcing, bulk orders, technical procurement,
              and trade documentation discussions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
