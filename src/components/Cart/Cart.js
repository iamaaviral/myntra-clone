import './Cart.css';
import cart from '../../images/carts.png'

function Cart(props) {
    return (
        <div className="cart-wrapper">
            <img src={cart} alt="cart-img" />
            <span>{props.cartValue.length}</span>
        </div>
    );
}

export default Cart;
