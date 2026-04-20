import { useEffect, useState } from "react";
import { productCategories } from "../../utils/constants";

const emptyForm = {
  name: "",
  category: "export",
  description: "",
  images: "",
  originCountry: "",
  packaging: "",
  MOQ: ""
};

const ProductForm = ({ initialValues, onSubmit, submitLabel, loading, onCancel }) => {
  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    if (initialValues) {
      setFormData({
        name: initialValues.name || "",
        category: initialValues.category || "export",
        description: initialValues.description || "",
        images: initialValues.images?.join(", ") || "",
        originCountry: initialValues.originCountry || "",
        packaging: initialValues.packaging || "",
        MOQ: initialValues.MOQ || ""
      });
      return;
    }

    setFormData(emptyForm);
  }, [initialValues]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      ...formData,
      images: formData.images
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
    });
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Product Name
          <input name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Category
          <select name="category" value={formData.category} onChange={handleChange} required>
            {productCategories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </label>
        <label className="full-width">
          Description
          <textarea name="description" rows="4" value={formData.description} onChange={handleChange} required />
        </label>
        <label className="full-width">
          Image URLs
          <input
            name="images"
            value={formData.images}
            onChange={handleChange}
            placeholder="Separate multiple URLs with commas"
          />
        </label>
        <label>
          Origin Country
          <input name="originCountry" value={formData.originCountry} onChange={handleChange} required />
        </label>
        <label>
          Packaging
          <input name="packaging" value={formData.packaging} onChange={handleChange} required />
        </label>
        <label>
          MOQ
          <input name="MOQ" value={formData.MOQ} onChange={handleChange} required />
        </label>
      </div>
      <div className="form-actions">
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? "Saving..." : submitLabel}
        </button>
        {onCancel && (
          <button className="btn btn-secondary" type="button" onClick={onCancel} disabled={loading}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default ProductForm;
