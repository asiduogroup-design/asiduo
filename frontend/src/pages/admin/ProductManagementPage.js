import { useState } from "react";
import ProductForm from "../../components/forms/ProductForm";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import EmptyState from "../../components/common/EmptyState";
import useAsync from "../../hooks/useAsync";
import { productService } from "../../services/api";
import { productCategories } from "../../utils/constants";

const ALL_FILTER = "all";

const ProductManagementPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [activeFilter, setActiveFilter] = useState(ALL_FILTER);
  const [submitting, setSubmitting] = useState(false);
  const { data, loading, execute } = useAsync(() => productService.getProducts());

  const allProducts = data?.data || [];

  const countFor = (cat) => allProducts.filter((p) => p.category === cat).length;

  const filteredProducts =
    activeFilter === ALL_FILTER
      ? allProducts
      : allProducts.filter((p) => p.category === activeFilter);

  const handleAddClick = () => {
    setSelectedProduct(null);
    setShowForm(true);
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setShowForm(true);
  };

  const handleCancel = () => {
    setSelectedProduct(null);
    setShowForm(false);
  };

  const handleSubmit = async (payload) => {
    setSubmitting(true);
    try {
      if (selectedProduct?._id) {
        await productService.updateProduct(selectedProduct._id, payload);
      } else {
        await productService.createProduct(payload);
      }
      setSelectedProduct(null);
      setShowForm(false);
      await execute();
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    await productService.deleteProduct(id);
    if (selectedProduct?._id === id) {
      setSelectedProduct(null);
      setShowForm(false);
    }
    await execute();
  };

  return (
    <div>
      <div className="admin-header">
        <h1>Manage Products</h1>
        <p>Add, edit, or remove products from the public catalogue.</p>
      </div>

      {showForm && (
        <div className="admin-form-overlay">
          <div className="admin-form-panel">
            <div className="admin-form-panel-header">
              <h2>{selectedProduct ? "Edit Product" : "Add Product"}</h2>
              <button className="btn-icon-close" type="button" onClick={handleCancel} aria-label="Close">
                &#x2715;
              </button>
            </div>
            <ProductForm
              initialValues={selectedProduct}
              onSubmit={handleSubmit}
              submitLabel={selectedProduct ? "Update Product" : "Add Product"}
              loading={submitting}
              onCancel={handleCancel}
            />
          </div>
        </div>
      )}

      <div className="pm-list-section">
        <div className="pm-list-header">
          <h2>
            Products ({filteredProducts.length}/{allProducts.length})
          </h2>
          <button className="btn btn-primary" type="button" onClick={handleAddClick}>
            Add Product
          </button>
        </div>

        <div className="pm-filters">
          <button
            className={`pm-filter-btn${activeFilter === ALL_FILTER ? " active" : ""}`}
            type="button"
            onClick={() => setActiveFilter(ALL_FILTER)}
          >
            All <span className="pm-filter-count">{allProducts.length}</span>
          </button>
          {productCategories.map((cat) => (
            <button
              key={cat.value}
              className={`pm-filter-btn${activeFilter === cat.value ? " active" : ""}`}
              type="button"
              onClick={() => setActiveFilter(cat.value)}
            >
              {cat.label} <span className="pm-filter-count">{countFor(cat.value)}</span>
            </button>
          ))}
        </div>

        {loading ? <LoadingSpinner message="Loading products..." /> : null}
        {!loading && !filteredProducts.length ? (
          <EmptyState title="No products found" message="No products match the selected filter." />
        ) : null}

        <div className="admin-list">
          {filteredProducts.map((product) => (
            <div className="admin-list-card" key={product._id}>
              <div>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
              </div>
              <div className="inline-actions">
                <button className="btn btn-secondary" type="button" onClick={() => handleEditClick(product)}>
                  Edit
                </button>
                <button className="btn btn-danger" type="button" onClick={() => handleDelete(product._id)}>
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

export default ProductManagementPage;
