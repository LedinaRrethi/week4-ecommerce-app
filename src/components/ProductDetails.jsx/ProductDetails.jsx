import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { productId } = useParams();
  const { addToCart } = useCart();

  const foundProducts = products.length === 0 ? [] : products.find((item) => item.id === productId);

  const hasProducts = () => {
    console.log('foundddd', foundProducts);
    const found = foundProducts !== undefined;
    return found;
  };

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch('/data/products.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log('Fetched Data', data);
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

  console.log('Found prod', foundProducts);

  return (
    <div style={{ padding: '20px' }}>
      <h1>{foundProducts.name}</h1>
      <img src={foundProducts.imageSrc} alt={foundProducts.name} style={{ width: '400px', height: 'auto' }} />
      <p>{foundProducts.description}</p>
      <p>Price: ${foundProducts.price}</p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button onClick={() => updateQuantity(-1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => updateQuantity(1)}>+</button>
        <button onClick={() => addToCart(foundProducts, quantity)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
