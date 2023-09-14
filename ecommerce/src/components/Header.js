import { useContext } from 'react';
import { CartContext } from '../context/cart.context';
import { useMemo } from 'react';

const Header = () => {
    const { cartItems} = useContext(CartContext);
    const count = useMemo(() => Object.values(cartItems).reduce((acc, item) => {
        acc += item.count;
        return acc;
    }, 0), [cartItems]);
    return (
        <div className="header">
            <div>E-Commerce</div> 
            <div>Cart ({count})</div>
        </div>
    )   
}

export default Header;