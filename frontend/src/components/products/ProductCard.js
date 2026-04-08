import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <article className="product-card">
    <div className="product-card-image">
      <img src={product.images?.[0]} alt={product.name} />
    </div>
    <div className="product-card-body">
      <span className={`badge badge-${product.category}`}>{product.category}</span>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="product-meta">
        <span>Origin: {product.originCountry}</span>
        <span>MOQ: {product.MOQ}</span>
      </div>
      <Link className="text-link" to={`/products/${product._id}`}>
        View details
      </Link>
    </div>
  </article>
);

export default ProductCard;
