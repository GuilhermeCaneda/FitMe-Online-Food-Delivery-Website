import React from 'react'
import styles from "./DishCard.module.css"
import images from "../../images/food1.jpg";

interface DishCardProps{
    dish: String,
    price: String,
    describe: String
}

const DishCard: React.FC<DishCardProps> = (props) => {
  return (
    <div className={styles.content}>
        <div className={styles.describe}>
            <h5>{props.dish}</h5>
            <h6>₹{props.price}</h6>
            <p>{props.describe}</p>
        </div>

        <div className={styles.image}>
            <img src={images}/>
            <button className={styles.add}>Add +</button>
        </div>
    </div>
  )
}

export default DishCard