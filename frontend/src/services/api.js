import axios from "axios";
import { getAccessToken } from "../utils/auth";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json"
  }
});

api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  register: (payload) => api.post("/auth/register", payload),
  login: (payload) => api.post("/auth/login", payload),
  getProfile: () => api.get("/auth/me")
};

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
