import React from 'react';
import { useCart } from '../../context/CartContext';

const CartSummary = () => {
  const { cart } = useCart();

  return (
    <div>
      {cart.map(({ id, name, imageSrc, price, quantity }) => (
        <div key={id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
          <h3>Name : {name}</h3>
          <img src={imageSrc} alt="product" style={{ width: '200px', height: 'auto' }} />
          <p>Price = ${price}</p>
          <p> Quantity = {quantity}</p>
          <p>Total price = {price * quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default CartSummary;
