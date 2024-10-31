import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';

const Home = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/data/products.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
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

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Our Products</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
        }}
      >
        {products.map(({ id, name, description, imageSrc, price }) => (
          <ProductCard key={id} id={id} name={name} description={description} imageSrc={imageSrc} price={price} />
        ))}
      </div>
    </div>
  );
};

export default Home;
