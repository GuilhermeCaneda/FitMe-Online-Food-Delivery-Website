import CartItem from "../CartItem/CartItem";
import FormButton from "../FormButton/FormButton";
import styles from "./Cart.module.css";
import { useState, useEffect } from "react";

type CartItemProps = {
    restaurant: String,
    dish: String,
    price: Number
}

const Cart: React.FC = () => {

    
    let dummyItens: CartItemProps[] = [{dish: "Brunch for 2 - Veg", restaurant: "from Lunch box", price: 200}, 
    {dish: "Brunch for 2 - Veg", restaurant: "from Lunch box", price: 200}, {dish: "Brunch for 2 - Veg", restaurant: "from Lunch box", price: 200}, {dish: "Brunch for 2 - Veg", restaurant: "from Lunch box", price: 200}];

    return(
        <div className={styles.content}>
            <div className={styles.header}>
                <h3>Cart</h3>
                <h5>{dummyItens.length} Items</h5>
            </div>
            
            <div className={styles.itemgallery}>
                {dummyItens.map(item => {
                            return <CartItem restaurant={item.restaurant} dish={item.dish} price={item.price.toString()}/>
                        })
                }
            </div>
            <div>
                <div className={styles.totalprice}>
                    <h3>Subtotal</h3>
                    <h3>₹799</h3>
                </div>
                <p>Extra charges may apply</p>
            </div>
            <FormButton text={"Checkout"}/>
        
        </div>
    )
}

export default Cart;