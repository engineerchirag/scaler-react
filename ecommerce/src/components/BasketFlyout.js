import { useContext } from 'react';
import { CartContext } from '../context/cart.context';
import { useMemo } from 'react';

const BasketFlyout = () => {
    const { cartItems} = useContext(CartContext);
    const totalCartValue = useMemo(() => Math.floor(Object.values(cartItems).reduce((acc, item) => {
        acc += (item.product.price * item.count);
        return acc;
    }, 0)), [cartItems]);
    return (
        <>
            {
                totalCartValue && (
                    <div className="basket-flyout">
                        Basket ₹{totalCartValue}
                    </div>
                )
            }
        </>
    )
}

export default BasketFlyout;