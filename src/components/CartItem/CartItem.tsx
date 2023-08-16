import styles from "./CartItem.module.css";
import {useState} from 'react';

interface CartItemProps{
    restaurant: String,
    dish: String,
    price: String
}


const CartItem: React.FC<CartItemProps> = (props) => {
    const [counter, setCounter] = useState(1);

    const upValue = () => {
        setCounter(counter + 1);
    }

    const downValue = () => {
        if(counter>0){
            setCounter(counter - 1);
        }
    }
    return(
        <div className={styles.content}>
            <p className={styles.restaurant}>from <span>{props.restaurant}</span></p>
            <div className={styles.subcontent}>
                <div className={styles.food}>
                    <p className={styles.name}>{props.dish}</p>
                    <p className={styles.price}>₹{props.price}</p>
                </div>
                <div className={styles.quantity}>
                    <button onClick={downValue}>-</button>
                    <label htmlFor="text">{counter}</label>
                    <button onClick={upValue}>+</button>
                </div>
            </div>

        </div>
    )
}

export default CartItem;