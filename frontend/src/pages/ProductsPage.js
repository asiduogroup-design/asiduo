import { useState } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/common/SectionHeader";
import LoadingSpinner from "../components/common/LoadingSpinner";
import EmptyState from "../components/common/EmptyState";
import ProductCard from "../components/products/ProductCard";
import useAsync from "../hooks/useAsync";
import { productService } from "../services/api";
import { productCategories } from "../utils/constants";

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { data, loading } = useAsync(() => productService.getProducts());
  const products = data?.data || [];
  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <>
      <section className="about-hero section">
        <div className="container">
          <p className="about-eyebrow">Products · Trade Portfolio</p>
          <h1>A curated trading portfolio built for dependable supply.</h1>
          <p className="about-hero-text">
            Browse export commodities, premium imports, and technical procurement lines with full support on
            grade, packaging, MOQ, and shipment planning.
          </p>
          <div className="about-hero-actions">
            <Link className="btn btn-primary" to="/request-quote">
              Request Quote
            </Link>
            <Link className="btn btn-secondary" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            title="Product Categories"
            subtitle="Switch between categories to view the full trade portfolio."
          />
          <div className="filter-tabs">
            <button
              type="button"
              className={activeCategory === "all" ? "active" : ""}
              onClick={() => setActiveCategory("all")}
            >
              All
            </button>
            {productCategories.map((category) => (
              <button
                key={category.value}
                type="button"
                className={activeCategory === category.value ? "active" : ""}
                onClick={() => setActiveCategory(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>

          {loading ? <LoadingSpinner message="Loading product catalogue..." /> : null}
          {!loading && filteredProducts.length === 0 ? (
            <EmptyState title="No products found" message="Try another category or add products from the admin panel." />
          ) : null}

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
