import CartItem from "../CartItem/CartItem";
import styles from "./Cart.module.css";
const Cart: React.FC = () => {
    return(
        <div className={styles.content}>
            <div>
                <h3>Cart</h3>
                <h5>2 Items</h5>
            </div>
            <CartItem/>
            <CartItem/>
            <div>
                <div>
                    <h3>Subtotal</h3>
                    <h3>₹799</h3>
                </div>
                <p>Extra charges may apply</p>
            </div>
            <button>Checkout</button>
        </div>
    )
}

export default Cart;