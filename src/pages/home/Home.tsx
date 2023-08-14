import styles from "./Home.module.css";
import Header from '../../components/Header/Header';
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import InstanceAxios from "../../axios/config";
import { useState, useEffect } from 'react';

const Home: React.FC = () => {
    const [restaurants, setRestaurants] = useState([]);
    
    /*
    const instanceAxios = async () => {
        try{
            const response = await InstanceAxios({
                method: 'post',
                url: ('classes/FitMe'),
                {
                    query: `
                        query{
                            name
                            location
                            rating
                            deliveryTime
                        }
                    `
                }
            });
            setRestaurants(response.data.data);
        } catch(error){
            console.error(`Error: ${error}`);
        }
    };
    
    useEffect(()=>{
        instanceAxios();
    }, []);*/


    return(
        <section className={styles.content}>
            <Header/>
            <h4>Restaurants</h4>
            <div className={styles.restaurantsgallery}>
                <RestaurantCard key={1} name={"Ramachandra Parlour"} rating={4} deliveryTime={"30 Mins"} 
                isExpensive={true} location={"south indian"} image={"abcd"} topDishes={[1, "A string"]}/>
                <RestaurantCard key={1} name={"Ramachandra Parlour"} rating={4} deliveryTime={"30 Mins"} 
                isExpensive={true} location={"south indian"} image={"abcd"} topDishes={[1, "A string"]}/>
                <RestaurantCard key={1} name={"Ramachandra Parlour"} rating={4} deliveryTime={"30 Mins"} 
                isExpensive={true} location={"south indian"} image={"abcd"} topDishes={[1, "A string"]}/>
                <RestaurantCard key={1} name={"Ramachandra Parlour"} rating={4} deliveryTime={"30 Mins"} 
                isExpensive={true} location={"south indian"} image={"abcd"} topDishes={[1, "A string"]}/>
                <RestaurantCard key={1} name={"Ramachandra Parlour"} rating={4} deliveryTime={"30 Mins"} 
                isExpensive={true} location={"south indian"} image={"abcd"} topDishes={[1, "A string"]}/>
                <RestaurantCard key={1} name={"Ramachandra Parlour"} rating={4} deliveryTime={"30 Mins"} 
                isExpensive={true} location={"south indian"} image={"abcd"} topDishes={[1, "A string"]}/>
                <RestaurantCard key={1} name={"Ramachandra Parlour"} rating={4} deliveryTime={"30 Mins"} 
                isExpensive={true} location={"south indian"} image={"abcd"} topDishes={[1, "A string"]}/>
                <RestaurantCard key={1} name={"Ramachandra Parlour"} rating={4} deliveryTime={"30 Mins"} 
                isExpensive={true} location={"south indian"} image={"abcd"} topDishes={[1, "A string"]}/>
            </div>
        </section>
    )
}

export default Home;