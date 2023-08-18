import styles from "./Restaurant.module.css";
import Header from '../../components/Header/Header';
import RestaurantAbout from "../../components/RestaurantAbout/RestaurantAbout";
import Cart from "../../components/Cart/Cart";
import DishCard from "../../components/DishCard/DishCard";
import { useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";

type DishInfo = {
    dish: String,
    price: Number,
    describe: String
}

type RestaurantInfo = {
    name: String;
    deliveryTime: String;
    location: String;
    rating: Number;
    topDishes: DishInfo[];
}

const Restaurant: React.FC = () => {
    const {id} = useParams();

    const [restaurantInfo, setRestaurantInfo] = useState<RestaurantInfo>({deliveryTime: "...", location: "...", name: "...", rating: 0, 
    topDishes: [{dish: "...", price: 0, describe: "..."}]});
    

    
    useEffect(()=>{
        const bringData = async () => {
            try{
                console.log("Realizando a busca");
                const response = await axios.get('https://parseapi.back4app.com/graphql', {
                    headers: {
                        'X-Parse-Application-Id': 'DSiIkHz2MVbCZutKS7abtgrRVsiLNNGcs0L7VsNL',
                        'X-Parse-Master-Key': '0cpnqkSUKVkIDlQrNxameA6OmjxmrA72tsUMqVG9',
                        'X-Parse-Client-Key': 'zXOqJ2k44R6xQqqlpPuizAr3rs58RhHXfU7Aj20V',
                        'Content-Type': 'application/json'
                    },
                    params: {
                        query: `
                            query GetRestaurantById {
                                fitMe(id: ${id}){
                                    name
                                    location
                                    rating
                                    deliveryTime
                                    topDishes{
                                        ...AllDishes
                                    }
                                }
                            }

                            fragment AllDishes on Dish{
                                name
                                description
                                price
                            }
                        `
                    }
                })
                console.log(response);
                /*setRestaurantInfo(response.data.data.fitMe);
                
                console.log("Dados obtidos (restaurants):", restaurantInfo);
                console.log("Nome do restaurante:", restaurantInfo.name);*/

            } catch(error){
                console.log("erro: " + error);
                console.error(error);
            }
        }
        bringData();
    }, []);


    return(
        <section>
            <Header/>
            <RestaurantAbout name={restaurantInfo.name} rating={restaurantInfo.rating.toString()} deliveryTime={restaurantInfo.deliveryTime} location={restaurantInfo.location}/>
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
                            restaurantInfo.topDishes.map(item=>(
                                <DishCard dish={item.dish} price={item.price.toString()} describe={item.describe}/>
                            ))
                            
                        }
                        <p>{id}</p>
                    </div>
                    <Cart/>
                </div>
            </div>
        </section>
    )
}

export default Restaurant;