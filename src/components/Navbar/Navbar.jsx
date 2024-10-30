import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../../assets/shopping-cart.png';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/cart" className="navbar-cart">
        <img src={cartIcon} alt="Cart" />
      </Link>
    </div>
  );
};

export default Navbar;
