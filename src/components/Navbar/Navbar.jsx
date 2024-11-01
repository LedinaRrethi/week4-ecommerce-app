import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import { MdOutlineWbSunny } from 'react-icons/md';
import { IoMdMoon } from 'react-icons/io';
import { useTheme } from '../../context/ThemeContext';
import { useCart } from '../../context/CartContext';
import { THEMES } from '../../config/themeConfig';
import './navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { cart } = useCart();
  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="navbar">
      <Link to="/" className="navbar-link">
        Home
      </Link>

      <Link to="/cart" className="navbar-cart">
        <FaCartShopping />
        <span className="cart-count">{totalCount}</span>
      </Link>

      <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
        {theme === THEMES.LIGHT ? <IoMdMoon /> : <MdOutlineWbSunny />}
      </button>
    </div>
  );
};

export default Navbar;
