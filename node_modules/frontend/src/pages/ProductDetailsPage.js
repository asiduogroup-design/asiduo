import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../components/common/LoadingSpinner";
import useAsync from "../hooks/useAsync";
import { productService } from "../services/api";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useAsync(() => productService.getProductById(id), true, [id]);
  const product = data?.data;

  if (loading) {
    return <LoadingSpinner message="Loading product details..." />;
  }

  if (error || !product) {
    return (
      <section className="section">
        <div className="container">
          <div className="status-card">
            <h2>Product not found</h2>
            <p>The requested product could not be loaded.</p>
            <Link className="btn btn-primary" to="/products">
              Back to Products
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container product-details">
        <div className="product-details-image">
          <img src={product.images?.[0]} alt={product.name} />
        </div>
        <div className="product-details-content">
          <span className={`badge badge-${product.category}`}>{product.category}</span>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <div className="details-grid">
            <div>
              <strong>Origin Country</strong>
              <p>{product.originCountry}</p>
            </div>
            <div>
              <strong>Packaging</strong>
              <p>{product.packaging}</p>
            </div>
            <div>
              <strong>MOQ</strong>
              <p>{product.MOQ}</p>
            </div>
            <div>
              <strong>Created</strong>
              <p>{new Date(product.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
          <Link className="btn btn-primary" to="/request-quote">
            Request Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
