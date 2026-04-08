import { useState } from "react";
import CategoryForm from "../../components/forms/CategoryForm";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import EmptyState from "../../components/common/EmptyState";
import useAsync from "../../hooks/useAsync";
import { categoryService } from "../../services/api";

const CategoryManagementPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const { data, loading, execute } = useAsync(() => categoryService.getCategories());

  const handleSubmit = async (payload) => {
    setSubmitting(true);

    try {
      if (selectedCategory?._id) {
        await categoryService.updateCategory(selectedCategory._id, payload);
      } else {
        await categoryService.createCategory(payload);
      }

      setSelectedCategory(null);
      await execute();
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    await categoryService.deleteCategory(id);
    if (selectedCategory?._id === id) {
      setSelectedCategory(null);
    }
    await execute();
  };

  return (
    <div className="admin-grid">
      <div>
        <div className="admin-header">
          <h1>Manage Categories</h1>
          <p>Control the product grouping options shown in the platform.</p>
        </div>
        <CategoryForm
          initialValues={selectedCategory}
          onSubmit={handleSubmit}
          submitLabel={selectedCategory ? "Update Category" : "Add Category"}
          loading={submitting}
        />
      </div>
      <div>
        <h2>Existing Categories</h2>
        {loading ? <LoadingSpinner message="Loading categories..." /> : null}
        {!loading && !data?.data?.length ? (
          <EmptyState title="No categories yet" message="Create your first category using the form." />
        ) : null}
        <div className="admin-list">
          {data?.data?.map((category) => (
            <div className="admin-list-card" key={category._id}>
              <div>
                <h3>{category.name}</h3>
                <p>{category.type}</p>
              </div>
              <div className="inline-actions">
                <button className="btn btn-secondary" type="button" onClick={() => setSelectedCategory(category)}>
                  Edit
                </button>
                <button className="btn btn-danger" type="button" onClick={() => handleDelete(category._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryManagementPage;
