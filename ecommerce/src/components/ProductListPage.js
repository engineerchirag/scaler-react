import ProductList from './ProductList';
import { useState } from 'react';
import { useEffect } from 'react';
import BasketFlyout from './BasketFlyout';

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=> setProducts(data));
  }, []);

  const AppName = "Ecommerce App";
  return (
    <>
      <div id="wrapper">
        <h1>Hello {AppName}</h1>
        <ProductList products={products} />
        <BasketFlyout />
      </div>
    </>
  );
}

export default ProductListPage;
