import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import AdminLayout from "./components/layout/AdminLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ServicesPage from "./pages/ServicesPage";
import IndustriesPage from "./pages/IndustriesPage";
import ContactPage from "./pages/ContactPage";
import RequestQuotePage from "./pages/RequestQuotePage";
import DashboardPage from "./pages/admin/DashboardPage";
import ProductManagementPage from "./pages/admin/ProductManagementPage";
import InquiryManagementPage from "./pages/admin/InquiryManagementPage";
import CategoryManagementPage from "./pages/admin/CategoryManagementPage";

const App = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/industries" element={<IndustriesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/request-quote" element={<RequestQuotePage />} />
    </Route>

    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<DashboardPage />} />
      <Route path="products" element={<ProductManagementPage />} />
      <Route path="inquiries" element={<InquiryManagementPage />} />
      <Route path="categories" element={<CategoryManagementPage />} />
    </Route>
  </Routes>
);

export default App;
