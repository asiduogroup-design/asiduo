import { NavLink, Outlet } from "react-router-dom";

const adminLinks = [
  { label: "Dashboard", path: "/admin" },
  { label: "Products", path: "/admin/products" },
  { label: "Inquiries", path: "/admin/inquiries" },
  { label: "Categories", path: "/admin/categories" }
];

const AdminLayout = () => (
  <div className="admin-shell">
    <aside className="admin-sidebar">
      <h2>Admin Panel</h2>
      <nav>
        {adminLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/admin"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
    <section className="admin-content">
      <Outlet />
    </section>
  </div>
);

export default AdminLayout;
