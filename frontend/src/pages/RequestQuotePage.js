import HeroSection from "../components/common/HeroSection";
import InquiryForm from "../components/forms/InquiryForm";
import { inquiryService } from "../services/api";

const RequestQuotePage = () => {
  const handleSubmit = async (payload) => {
    await inquiryService.createQuoteRequest(payload);
  };

  return (
    <>
      <HeroSection
        eyebrow="Request Quote"
        title="Request pricing and trade details for your target products."
        description="Share your product needs, quantity expectations, and destination market so we can prepare a tailored quotation."
      />

      <section className="section">
        <div className="container">
          <InquiryForm
            title="Quote Request Form"
            description="Provide the core details for pricing, MOQ, and delivery planning."
            onSubmit={handleSubmit}
            submitLabel="Request Quote"
          />
        </div>
      </section>
    </>
  );
};

export default RequestQuotePage;
