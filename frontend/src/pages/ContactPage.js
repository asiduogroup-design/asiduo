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

const contactDetails = [
  {
    label: "TRADE DESK",
    value: "sushil.singh@asiduoenterprises.com",
    href: "mailto:sushil.singh@asiduoenterprises.com",
  },
  {
    label: "OPERATIONS",
    value: "India · Global Network",
  },
  {
    label: "HOURS",
    value: "Mon — Sat · 09:00 – 19:00 IST",
  },
  {
    label: "INDICATIVE QUOTE",
    value: "Within 48 hours of a complete specification.",
  },
];

const ContactPage = () => {
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
      await inquiryService.createInquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.company,
        country: formData.country,
        productInterest: formData.productInterest,
        message: formData.message,
      });
      setFormData(initialState);
      setSuccessMessage("Your inquiry has been received. A partner will respond within 48 hours.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ── Editorial Hero ── */}
      <section className="about-hero section">
        <div className="container">
          <p className="about-eyebrow">TRADE DESK · OPEN A CONVERSATION</p>
          <h1>
            Tell us what to source.<br />
            We respond like partners.
          </h1>
          <p className="about-hero-text">
            Share your specification, destination, and timeline. A partner — not a
            form-handler — will reply within 48 hours.
          </p>
        </div>
      </section>

      {/* ── Split: Info + Form ── */}
      <section className="section contact-split-section">
        <div className="container contact-split-grid">

          {/* Left — contact details */}
          <div className="contact-details-col">
            {contactDetails.map(({ label, value, href }) => (
              <div className="contact-detail-card" key={label}>
                <span className="contact-detail-label">{label}</span>
                {href ? (
                  <a className="contact-detail-value" href={href}>{value}</a>
                ) : (
                  <span className="contact-detail-value">{value}</span>
                )}
              </div>
            ))}
          </div>

          {/* Right — inquiry form */}
          <div className="contact-form-col">
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
                {submitting ? "SENDING…" : "SEND INQUIRY"}
              </button>
              {successMessage && (
                <p className="contact-success-msg">{successMessage}</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
