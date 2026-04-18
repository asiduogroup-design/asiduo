import { useState } from "react";
import { inquiryService } from "../services/api";

const initialState = {
  name: "",
  company: "",
  email: "",
  country: "",
  productInterest: "",
  message: "",
};

const RequestQuotePage = () => {
  const [formData, setFormData] = useState(initialState);
  const [successMessage, setSuccessMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await inquiryService.createQuoteRequest({
        name: formData.name,
        email: formData.email,
        phone: formData.company,
        country: formData.country,
        productInterest: formData.productInterest,
        message: formData.message,
      });
      setFormData(initialState);
      setSuccessMessage("Your quote request has been received. We will respond within 48 hours.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="about-hero section">
        <div className="container">
          <p className="about-eyebrow">TRADE DESK · REQUEST A QUOTATION</p>
          <h1>
            Specify your need.<br />
            We price it with precision.
          </h1>
          <p className="about-hero-text">
            Share your product needs, quantity expectations, and destination market so we can prepare a tailored quotation.
          </p>
        </div>
      </section>

      <section className="section contact-split-section">
        <div className="container">
          <form className="contact-editorial-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <label className="contact-field-label">
                YOUR NAME
                <input
                  className="contact-field-input"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </label>
              <label className="contact-field-label">
                COMPANY
                <input
                  className="contact-field-input"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  autoComplete="organization"
                />
              </label>
            </div>
            <div className="contact-form-row">
              <label className="contact-field-label">
                EMAIL
                <input
                  className="contact-field-input"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </label>
              <label className="contact-field-label">
                COUNTRY / DESTINATION PORT
                <input
                  className="contact-field-input"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  autoComplete="country-name"
                />
              </label>
            </div>
            <label className="contact-field-label contact-field-full">
              PRODUCT / SPECIFICATION
              <input
                className="contact-field-input"
                name="productInterest"
                value={formData.productInterest}
                onChange={handleChange}
                required
              />
            </label>
            <label className="contact-field-label contact-field-full">
              MESSAGE
              <textarea
                className="contact-field-input contact-field-textarea"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>
            <p className="contact-form-disclaimer">
              We never share inquiries. Confidentiality is part of the service.
            </p>
            <button className="btn btn-primary contact-submit-btn" type="submit" disabled={submitting}>
              {submitting ? "SENDING…" : "REQUEST QUOTE"}
            </button>
            {successMessage && (
              <p className="contact-success-msg">{successMessage}</p>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default RequestQuotePage;
