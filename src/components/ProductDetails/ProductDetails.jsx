import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './ProductDetails.css';

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { productId } = useParams();
  const { addToCart } = useCart();

  const foundProducts = products.length === 0 ? [] : products.find((item) => item.id === productId);

  const hasProducts = () => {
    return foundProducts !== undefined;
  };

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch('/data/products.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching products.</div>;
  }

  if (!hasProducts()) return <div>Product not found</div>;

  const updateQuantity = (value) => {
    setQuantity((prev) => Math.max(1, prev + value));
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Product Details</h1>
      <br />
      <div className="product-container">
        <div className="product-image">
          <img src={foundProducts.imageSrc} alt={foundProducts.name} />
        </div>
        <div className="product-details">
          <h1>{foundProducts.name}</h1>
          <p>{foundProducts.description}</p>
          <p>Price: ${foundProducts.price}</p>

          <div className="quantity-controls">
            <button onClick={() => updateQuantity(-1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => updateQuantity(1)}>+</button>
            <button className="add-to-cart-button" onClick={() => addToCart(foundProducts, quantity)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
