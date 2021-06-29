import './Cart.css';
import cart from '../../images/carts.png'

function Cart() {
    return (
        <div className="cart-wrapper">
            <img src={cart} alt="cart-img" />
            <span>0</span>
        </div>
    );
}

export default Cart;
