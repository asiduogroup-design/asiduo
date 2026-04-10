import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authService } from "../services/api";
import { getStoredAuth, setStoredAuth } from "../utils/auth";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({ email: "", password: "" });
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
      const response = await authService.login(formData);
      const authData = {
        token: response.data.token,
        user: response.data.data
      };
      setStoredAuth(authData);

      const from = location.state?.from;
      if (authData.user.role === "admin") {
        navigate(from && from.startsWith("/admin") ? from : "/admin", { replace: true });
      } else {
        navigate(from && from.startsWith("/user") ? from : "/user", { replace: true });
      }
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section">
      <div className="container auth-shell">
        <div className="form-card auth-card">
          <div className="section-header left">
            <h2>Login</h2>
            <p>Sign in to access your dashboard.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-grid auth-grid">
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
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? "Signing in..." : "Login"}
            </button>
            {error ? <p className="error-text">{error}</p> : null}
          </form>
          <p className="auth-meta">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
