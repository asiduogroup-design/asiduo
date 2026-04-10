import { Link } from "react-router-dom";
import { getStoredAuth } from "../utils/auth";

const UserDashboardPage = () => {
  const user = getStoredAuth()?.user;

  return (
    <section className="section">
      <div className="container">
        <div className="info-panel">
          <Link className="btn btn-ghost back-home-btn" to="/">
            Back to Home
          </Link>
          <h2>User Dashboard</h2>
          <p>Welcome back, {user?.name || "User"}.</p>
          <p>Email: {user?.email || "-"}</p>
          <p>Role: {user?.role || "user"}</p>
          <div className="hero-actions" style={{ marginTop: "1.5rem" }}>
            <Link className="btn btn-primary" to="/products">
              Browse Products
            </Link>
            <Link className="btn btn-secondary" to="/request-quote">
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDashboardPage;
