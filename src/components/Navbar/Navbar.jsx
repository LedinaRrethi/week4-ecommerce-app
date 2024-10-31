import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import { MdOutlineWbSunny } from 'react-icons/md';
import { IoMdMoon } from 'react-icons/io';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-link">
        Home
      </Link>

      <Link to="/cart" className="navbar-cart">
        <FaCartShopping />
        {/* <IoMdMoon /> */}
      </Link>

      <MdOutlineWbSunny style={{ marginLeft: '20px' }} />
    </div>
  );
};

export default Navbar;

// src/components/Navbar.js
// import React from 'react';
// import useTheme from '../../hooks/useTheme';
// import useCart from '../../hooks/useCart';

// const Navbar = () => {
//   const { theme, toggleTheme } = useTheme();
//   const { cart } = useCart();
//   const itemCount = cart.reduce((count, item) => count + item.quantity, 0);

//   return (
//     <nav style={{ padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
//       <div>My Store</div>
//       <button onClick={toggleTheme}>Theme: {theme}</button>
//       <div>Cart ({itemCount})</div>
//     </nav>
//   );
// };

// export default Navbar;
