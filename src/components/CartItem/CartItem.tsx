import styles from "./CartItem.module.css";

const CartItem: React.FC = () => {
    return(
        <div className={styles.content}>
            <p>from <span>Lunch box</span></p>

            <div>
                <div className={styles.food}>
                    <p className={styles.name}>Brunch for 2 - Veg</p>
                    <p className={styles.price}>₹599</p>
                </div>
                <div className={styles.quantity}>
                    <button>-</button>
                    <label htmlFor="text">1</label>
                    <button>+</button>
                </div>
            </div>

        </div>
    )
}

export default CartItem;