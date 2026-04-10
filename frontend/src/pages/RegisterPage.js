import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../services/api";
import { getStoredAuth, setStoredAuth } from "../utils/auth";

const initialState = {
  name: "",
  email: "",
  password: "",
  role: "user"
};

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const auth = getStoredAuth();
    if (auth?.user?.role === "admin") {
      navigate("/admin", { replace: true });
    } else if (auth?.user?.role === "user") {
      navigate("/user", { replace: true });
    }
  }, [navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await authService.register(formData);
      const authData = {
        token: response.data.token,
        user: response.data.data
      };
      setStoredAuth(authData);

      if (authData.user.role === "admin") {
        navigate("/admin", { replace: true });
      } else {
        navigate("/user", { replace: true });
      }
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section">
      <div className="container auth-shell">
        <div className="form-card auth-card">
          <div className="section-header left">
            <h2>Register</h2>
            <p>Create an account and choose user type.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-grid auth-grid">
              <label className="full-width">
                Full Name
                <input name="name" value={formData.name} onChange={handleChange} required />
              </label>
              <label className="full-width">
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="full-width">
                Password
                <input
                  type="password"
                  name="password"
                  minLength="6"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="full-width">
                Account Type
                <select name="role" value={formData.role} onChange={handleChange}>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </label>
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? "Creating account..." : "Register"}
            </button>
            {error ? <p className="error-text">{error}</p> : null}
          </form>
          <p className="auth-meta">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
