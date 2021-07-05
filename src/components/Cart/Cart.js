import React from 'react'
import './Cart.css';
import cart from '../../images/carts.png'
import { CartContext } from '../../cartContext';

function Cart() {
    let value = React.useContext(CartContext)
    return (
        <div className="cart-wrapper">
            <img src={cart} alt="cart-img" />
            <span>{value.cartValue.length}</span>
        </div>
    );
}

export default Cart;
