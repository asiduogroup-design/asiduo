import { useState } from "react";
import ProductForm from "../../components/forms/ProductForm";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import EmptyState from "../../components/common/EmptyState";
import useAsync from "../../hooks/useAsync";
import { productService } from "../../services/api";

const ProductManagementPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const { data, loading, execute } = useAsync(() => productService.getProducts());

  const handleSubmit = async (payload) => {
    setSubmitting(true);

    try {
      if (selectedProduct?._id) {
        await productService.updateProduct(selectedProduct._id, payload);
      } else {
        await productService.createProduct(payload);
      }

      setSelectedProduct(null);
      await execute();
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    await productService.deleteProduct(id);
    if (selectedProduct?._id === id) {
      setSelectedProduct(null);
    }
    await execute();
  };

  return (
    <div className="admin-grid">
      <div>
        <div className="admin-header">
          <h1>Manage Products</h1>
          <p>Add, edit, or remove products from the public catalogue.</p>
        </div>
        <ProductForm
          initialValues={selectedProduct}
          onSubmit={handleSubmit}
          submitLabel={selectedProduct ? "Update Product" : "Add Product"}
          loading={submitting}
        />
      </div>
      <div>
        <h2>Existing Products</h2>
        {loading ? <LoadingSpinner message="Loading products..." /> : null}
        {!loading && !data?.data?.length ? (
          <EmptyState title="No products yet" message="Create your first product using the form." />
        ) : null}
        <div className="admin-list">
          {data?.data?.map((product) => (
            <div className="admin-list-card" key={product._id}>
              <div>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
              </div>
              <div className="inline-actions">
                <button className="btn btn-secondary" type="button" onClick={() => setSelectedProduct(product)}>
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
