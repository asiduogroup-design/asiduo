import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { COMPANY_NAME, navigationLinks } from "../../utils/constants";
import { clearStoredAuth, getStoredAuth } from "../../utils/auth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [auth, setAuth] = useState(getStoredAuth());
  const toggleRef = useRef(null);
  const navRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const syncAuth = () => setAuth(getStoredAuth());
    window.addEventListener("storage", syncAuth);
    window.addEventListener("auth-changed", syncAuth);

    return () => {
      window.removeEventListener("storage", syncAuth);
      window.removeEventListener("auth-changed", syncAuth);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      const target = event.target;
      if (navRef.current?.contains(target) || toggleRef.current?.contains(target)) {
        return;
      }
      setIsOpen(false);
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleLogout = () => {
    clearStoredAuth();
    setIsOpen(false);
    navigate("/login");
  };

  const dashboardPath = auth?.user?.role === "admin" ? "/admin" : "/user";
  const userInitial = auth?.user?.name?.trim()?.charAt(0)?.toUpperCase() || auth?.user?.role?.charAt(0)?.toUpperCase() || "U";

  return (
    <header className="site-header">
      <div className="container nav-wrapper">
        <Link to="/" className="brand-mark" aria-label={COMPANY_NAME} onClick={() => setIsOpen(false)}>
          <img
            className="brand-logo-image"
            src="https://res.cloudinary.com/dlx9tnj7p/image/upload/v1776399473/ChatGPT_Image_Apr_17_2026_09_45_11_AM_cdauyl.png"
            alt={`${COMPANY_NAME} logo`}
          />
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav ref={navRef} className={`nav-links ${isOpen ? "open" : ""}`}>
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          {auth?.token ? (
            <>
              <NavLink
                to={dashboardPath}
                className={({ isActive }) => `nav-dashboard-link ${isActive ? "active" : ""}`.trim()}
                onClick={() => setIsOpen(false)}
                title="Open dashboard"
              >
                <span className="nav-user-avatar" aria-hidden="true">
                  {userInitial}
                </span>
              </NavLink>
              <button type="button" className="nav-logout" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsOpen(false)}
              >
                Register
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
