import useAsync from "../../hooks/useAsync";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import { categoryService, inquiryService, productService } from "../../services/api";

const DashboardPage = () => {
  const productsState = useAsync(() => productService.getProducts());
  const inquiriesState = useAsync(() => inquiryService.getInquiries());
  const categoriesState = useAsync(() => categoryService.getCategories());

  if (productsState.loading || inquiriesState.loading || categoriesState.loading) {
    return <LoadingSpinner message="Loading dashboard..." />;
  }

  const stats = [
    { label: "Products", value: productsState.data?.count || 0 },
    { label: "Inquiries", value: inquiriesState.data?.count || 0 },
    { label: "Categories", value: categoriesState.data?.count || 0 }
  ];

  return (
    <div>
      <div className="admin-header">
        <h1>Asiduo Enterprises Admin</h1>
        <p>Manage products, inquiries, and categories from a single dashboard.</p>
      </div>
      <div className="stats-grid">
        {stats.map((item) => (
          <div className="stat-card" key={item.label}>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
