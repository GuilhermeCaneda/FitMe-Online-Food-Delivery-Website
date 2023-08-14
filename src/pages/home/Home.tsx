import styles from "./Home.module.css";
import Header from '../../components/Header/Header';
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";


const Home: React.FC = () => {
    return(
        <section className={styles.content}>
            <Header/>
            <h4>Restaurants</h4>
            <div className={styles.restaurantsgallery}>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
            
        </section>
    )
}

export default Home;