import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  country: "",
  productInterest: "",
  message: ""
};

const InquiryForm = ({ title, description, onSubmit, submitLabel, loading = false }) => {
  const [formData, setFormData] = useState(initialState);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onSubmit(formData);
    setFormData(initialState);
    setSuccessMessage("Your request has been submitted successfully.");
  };

  return (
    <div className="form-card">
      <div className="section-header left">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>
            Full Name
            <input name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input name="email" type="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Phone
            <input name="phone" value={formData.phone} onChange={handleChange} required />
          </label>
          <label>
            Country
            <input name="country" value={formData.country} onChange={handleChange} required />
          </label>
          <label className="full-width">
            Product Interest
            <input name="productInterest" value={formData.productInterest} onChange={handleChange} required />
          </label>
          <label className="full-width">
            Message
            <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
          </label>
        </div>
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? "Submitting..." : submitLabel}
        </button>
        {successMessage ? <p className="success-text">{successMessage}</p> : null}
      </form>
    </div>
  );
};

export default InquiryForm;
