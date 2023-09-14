import { useState } from 'react';
import { productDetailStyle } from '../styles/product.style';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BasketFlyout from './BasketFlyout';

const ProductDetailPage = () => {
    const [product, setProduct] = useState({});
    const { productId } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(json=>setProduct(json));
    }, []);
    return (
        <>
        <h1> Product Detail Page</h1>
        <div className={productDetailStyle} key={product.id}>
            <img src={product.image} />
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>Rs {product.price}</p>
        </div>
        <BasketFlyout />
        </>
    )
}
    
export default ProductDetailPage;