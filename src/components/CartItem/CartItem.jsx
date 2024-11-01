import React from 'react';
import './CartItem.css';

const CartItem = ({ id, name, imageSrc, price, quantity, onRemove }) => {
  return (
    <div className="cart-item" key={id}>
      <img src={imageSrc} alt={name} />
      <div className="cart-item-details">
        <h3>{name}</h3>
        <p>Price: ${price.toFixed(2)}</p>
        <p>Quantity: {quantity}</p>
        <p>Total: ${(price * quantity).toFixed(2)}</p>
        <button onClick={() => onRemove(id)}>Remove from Cart</button>
      </div>
    </div>
  );
};

export default CartItem;
