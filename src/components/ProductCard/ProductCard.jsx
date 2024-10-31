import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ id, name, imageSrc, price }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const updateQuantity = (value) => {
    setQuantity((prev) => Math.max(1, prev + value));
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '16px' }}>
      <h2>{name}</h2>
      <img
        src={imageSrc}
        alt={name}
        style={{ width: '200px', height: 'auto' }}
        onClick={() => navigate(`/productDetails/${id}`)}
      />
      <p>${price}</p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button onClick={() => updateQuantity(-1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => updateQuantity(1)}>+</button>
        <button onClick={() => addToCart({ id, name, price }, quantity)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
