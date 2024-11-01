import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ id, name, imageSrc, price }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart({ id, name, imageSrc, price }, quantity);
    setQuantity(1);
    alert('Product added to cart');
  };

  const updateQuantity = (value) => {
    setQuantity((prev) => Math.max(1, prev + value));
  };

  return (
    <div className="product-card">
      <h2>{name}</h2>
      <img src={imageSrc} alt={name} onClick={() => navigate(`/productDetails/${id}`)} />
      <p>${price}</p>

      <div className="quantity-control">
        <button onClick={() => updateQuantity(-1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => updateQuantity(1)}>+</button>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
