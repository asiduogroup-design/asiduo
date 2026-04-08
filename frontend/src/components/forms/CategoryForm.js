import { useEffect, useState } from "react";
import { productCategories } from "../../utils/constants";

const emptyForm = {
  name: "",
  slug: "",
  type: "export",
  description: ""
};

const CategoryForm = ({ initialValues, onSubmit, submitLabel, loading }) => {
  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    setFormData(
      initialValues || {
        ...emptyForm
      }
    );
  }, [initialValues]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Category Name
          <input name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Slug
          <input name="slug" value={formData.slug} onChange={handleChange} required />
        </label>
        <label>
          Type
          <select name="type" value={formData.type} onChange={handleChange} required>
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
      </div>
      <button className="btn btn-primary" type="submit" disabled={loading}>
        {loading ? "Saving..." : submitLabel}
      </button>
    </form>
  );
};

export default CategoryForm;
