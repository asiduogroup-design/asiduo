import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.REACT_APP_API_BASE_URL || "https://asiduo.onrender.com/api",
  headers: {
    "Content-Type": "application/json"
  }
});

export const productService = {
  getProducts: (params = {}) => api.get("/products", { params }),
  getProductById: (id) => api.get(`/products/${id}`),
  createProduct: (payload) => api.post("/products", payload),
  updateProduct: (id, payload) => api.put(`/products/${id}`, payload),
  deleteProduct: (id) => api.delete(`/products/${id}`)
};

export const inquiryService = {
  createInquiry: (payload) => api.post("/inquiry", payload),
  createQuoteRequest: (payload) =>
    api.post("/inquiry", { ...payload, inquiryType: "quote" }),
  getInquiries: () => api.get("/inquiries")
};

export const categoryService = {
  getCategories: () => api.get("/categories"),
  createCategory: (payload) => api.post("/categories", payload),
  updateCategory: (id, payload) => api.put(`/categories/${id}`, payload),
  deleteCategory: (id) => api.delete(`/categories/${id}`)
};

export default api;
