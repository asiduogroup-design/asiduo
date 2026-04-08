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
        <p>info@asiduoenterprises.com</p>
        <p>+91 90000 00000</p>
        <p>Global trade support for sourcing and inquiries.</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>{new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
