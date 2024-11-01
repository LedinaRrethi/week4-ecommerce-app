import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './footer.css';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-logo">TechStore</p>
        <nav className="footer-nav">
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/cart" className="footer-link">
            Cart
          </Link>
        </nav>
        <p className="footer-rights">&copy; {new Date().getFullYear()} TechStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
