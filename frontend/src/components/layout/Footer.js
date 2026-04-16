import { Link } from "react-router-dom";
import { COMPANY_NAME } from "../../utils/constants";

const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-grid">
      <div>
        <h3>{COMPANY_NAME}</h3>
        <p>
          Trusted import-export partner delivering agricultural products,
          specialty foods, and technical industrial solutions worldwide.
        </p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <h4>Contact</h4>
        <p className="footer-contact-item">
          <span className="footer-contact-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 6.75C4 5.7835 4.7835 5 5.75 5H18.25C19.2165 5 20 5.7835 20 6.75V17.25C20 18.2165 19.2165 19 18.25 19H5.75C4.7835 19 4 18.2165 4 17.25V6.75Z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path d="M4.5 7L12 12.5L19.5 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </span>
          <a href="mailto:sushil.singh@asiduoenterprises.com">sushil.singh@asiduoenterprises.com</a>
        </p>
        <p className="footer-contact-item">
          <span className="footer-contact-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.6 4.75C6.19 3.92 5.14 3.6 4.33 4.05L2.59 5.02C1.81 5.45 1.42 6.34 1.62 7.2C2.79 12.21 6.62 16.12 11.57 17.41C12.45 17.64 13.37 17.25 13.83 16.45L14.77 14.81C15.24 13.99 14.95 12.94 14.15 12.5L12.15 11.4C11.41 10.99 10.49 11.09 9.86 11.66L9.17 12.27C7.45 11.36 6.06 9.93 5.2 8.17L5.77 7.52C6.35 6.86 6.46 5.9 6.06 5.12L6.6 4.75Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <a href="tel:+918383961634">+91 8383961634</a>
        </p>
        <p>Global trade support for sourcing and inquiries.</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>{new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
