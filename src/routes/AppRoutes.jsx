import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import CartPage from '../pages/CartPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productDetails/:productId" element={<ProductDetailsPage />} />
      <Route path="/cart" element={<CartPage />}></Route>
    </Routes>
  );
};

export default AppRoutes;
