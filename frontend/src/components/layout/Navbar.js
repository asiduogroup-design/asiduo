import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { COMPANY_NAME, navigationLinks } from "../../utils/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrapper">
        <Link to="/" className="brand-mark" onClick={() => setIsOpen(false)}>
          <span className="brand-accent">AE</span>
          <span>{COMPANY_NAME}</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
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
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
