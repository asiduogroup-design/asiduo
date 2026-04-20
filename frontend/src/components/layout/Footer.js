import { Link } from "react-router-dom";
import { COMPANY_NAME } from "../../utils/constants";

const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-main">
      <div className="footer-brand-block">
        <h3 className="footer-branding" aria-label={COMPANY_NAME}>
          <span className="footer-branding-script">Asiduo</span>
          <span className="footer-branding-small">Enterprises</span>
        </h3>
        <p className="footer-quote">
          "Trade is not the movement of goods - it is the deployment of trust across borders."
        </p>
        <p className="footer-tagline">Established in Global Trade</p>
      </div>
      <div className="footer-grid">
        <div>
          <h4>Navigate</h4>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/services">Services</Link>
          <Link to="/industries">Industries</Link>
        </div>
        <div>
          <h4>Verticals</h4>
          <Link to="/products?category=export">Agricultural Exports</Link>
          <Link to="/products?category=import">Premium Imports</Link>
          <Link to="/services">Technical Procurement</Link>
        </div>
        <div>
          <h4>Trade Desk</h4>
          <p className="footer-contact-item">
            <span className="footer-contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 6.75C4 5.7835 4.7835 5 5.75 5H18.25C19.2165 5 20 5.7835 20 6.75V17.25C20 18.2165 19.2165 19 18.25 19H5.75C4.7835 19 4 18.2165 4 17.25V6.75Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path d="M4.5 7L12 12.5L19.5 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
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
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <a href="tel:+918383961634">+91 8383961634</a>
          </p>
          <p className="footer-contact-item">
            <span className="footer-contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.122 1.524 5.855L.057 23.428a.75.75 0 00.921.921l5.573-1.467A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.694-.502-5.24-1.378l-.376-.214-3.896 1.026 1.026-3.896-.214-.376A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
            </span>
            <a href="https://wa.me/918383961634" target="_blank" rel="noopener noreferrer">+91 8383961634</a>
          </p>
          <p>India - Global Network</p>
          <Link className="footer-cta" to="/request-quote">
            Request a Quote <span aria-hidden="true">-></span>
          </Link>
        </div>
      </div>
    </div>
    <div className="footer-bottom-wrap">
      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} {COMPANY_NAME} - All Rights Reserved</p>
        <p>Volume LXIV - Global Trade Report</p>
      </div>
    </div>
  </footer>
);

export default Footer;
