import "./App.css";
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import CartProvider from "./context/cart.context";

const ProductDetailPage = React.lazy(() => import('./components/ProductDetailPage'));
const ProductListPage = React.lazy(() => import('./components/ProductListPage'));

function App() {
  return (
    <CartProvider>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Suspense fallback={'Loading ...'}><ProductListPage /></Suspense>} />
          <Route path="/product/:productId" element={<Suspense fallback={'Loading ...'}><ProductDetailPage /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
