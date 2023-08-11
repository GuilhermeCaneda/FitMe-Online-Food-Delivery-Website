import styles from "./Restaurant.module.css";
import Header from '../../components/Header';
import RestaurantAbout from "../../components/RestaurantAbout";
import Cart from "../../components/Cart";

const Restaurant: React.FC = () => {
    return(
        <section>
            <Header/>
            <RestaurantAbout/>
            
            <div className={styles.content}>
                <nav>
                    <ul>
                        <li><a href="#">Recommended</a></li>
                        <li><a href="#">Breakfast Box</a></li>
                        <li><a href="#">Lunch Box</a></li>
                        <li><a href="#">Combo Box</a></li>
                        <li><a href="#">Biriyani Box</a></li>
                    </ul>
                </nav>
                <hr/>
                <Cart/>
                
            </div>
            
        </section>
    )
}

export default Restaurant;