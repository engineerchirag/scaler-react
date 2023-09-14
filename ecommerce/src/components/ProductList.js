
import { Link } from 'react-router-dom';
import { productStyle } from '../styles/product.style';
import { CartContext } from '../context/cart.context';
import { useContext } from 'react';
import Counter from './Counter';

const ProductList = ({ products }) => {
    const { cartItems, addToCart } = useContext(CartContext);

    const handleAddToCart = (product) => (e) => {
        addToCart(product, 1);
    };

    const handleCountChange = (product) => (countDelta) => {
        addToCart(product, countDelta);
    }

    return (
        <div className="product-list">
            {
                products.map(product => (
                    <div className={productStyle} key={product.id}>
                        <img src={product.image} />
                        <p><Link to={`/product/${product.id}`}>{product.title}</Link></p>
                        <p>Rs {product.price}</p>
                        {
                            !cartItems[product.id]?.count ? 
                            (
                                <button id={product.id} onClick={handleAddToCart(product)}>Add To Cart</button>
                            )
                            : (
                                <Counter productId={product} value={cartItems[product.id]?.count} handleCountChange={handleCountChange(product)}/>
                            )
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default ProductList;