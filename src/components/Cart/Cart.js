import './Cart.css';
import cart from '../../images/carts.png'

function Cart() {
    return (
        <div className="cart-wrapper">
            <img src={cart} />
            <span>0</span>
        </div>
    );
}

export default Cart;
