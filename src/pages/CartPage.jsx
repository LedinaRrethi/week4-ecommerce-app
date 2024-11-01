import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem/CartItem';
import './pagesStyles.css';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const [message, setMessage] = useState('');

  const handleRemove = (id) => {
    if (window.confirm('Are you sure you want to remove this item from your cart?')) {
      removeFromCart(id);
      setMessage('Removed successfully!');
      setTimeout(() => setMessage(''), 2000);
    }
  };

  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      {message && <p className="cart-message">{message}</p>}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} {...item} onRemove={handleRemove} />
          ))}
          <div className="total-cost">Total Cost: ${totalCost.toFixed(2)}</div>
        </>
      )}
    </div>
  );
};

export default CartPage;
