import styles from "./Restaurant.module.css";
import Header from '../../components/Header/Header';
import RestaurantAbout from "../../components/RestaurantAbout/RestaurantAbout";
import Cart from "../../components/Cart/Cart";
import DishCard from "../../components/DishCard/DishCard";
import { useParams } from "react-router-dom";

type DishItems = {
    dish: String,
    price: Number,
    describe: String
}

const Restaurant: React.FC = () => {
    let describe: String = "Brunch: One meal to rule them all! Grab this mega saver combo with your choice of 2 veg wraps, Aloo Paratha (2 pcs), chole and Curd lunchbox and 2 choco lava cakes. This is just bliss on a plate!";
    let dummyItens: DishItems[] = [{dish: "Brunch for 2 - Veg", price: 599, describe: describe}, 
    {dish: "Brunch for 2 - Veg", price: 599, describe: describe},{dish: "Brunch for 2 - Veg", price: 599, describe: describe}];

    const {id} = useParams();


    return(
        <section>
            <Header/>
            <RestaurantAbout/>
            <div className={styles.search}>
                <input type="text" placeholder="Search for dish" />
                <button>Favourite</button>
            </div>
            
            <div className={styles.content}>
                <div className={styles.subcontent}>
                    <nav>
                        <ul>
                            <li><a>Recommended</a></li>
                            <li><a>Breakfast Box</a></li>
                            <li><a>Lunch Box</a></li>
                            <li><a>Combo Box</a></li>
                            <li><a>Biriyani Box</a></li>
                        </ul>
                    </nav>
                    <hr/>
                    <div className={styles.dishgallery}>
                        {
                            dummyItens.map(item => {
                                return <DishCard dish={item.dish} price={item.price.toString()} describe={item.describe}/>
                            })
                        }
                    </div>
                    <Cart/>
                </div>
                
                
            </div>
            
        </section>
    )
}

export default Restaurant;