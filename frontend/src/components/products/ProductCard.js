import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const imgSrc = product.images?.[0];

  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.closest(".product-card-image").classList.add("img-error");
  };

  return (
  <article className="product-card">
    <div className="product-card-image">
      {imgSrc && <img src={imgSrc} alt={product.name} onError={handleImgError} />}
      <div className="product-card-no-image">
        <span>{product.name?.charAt(0)?.toUpperCase()}</span>
      </div>
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
};

export default ProductCard;
