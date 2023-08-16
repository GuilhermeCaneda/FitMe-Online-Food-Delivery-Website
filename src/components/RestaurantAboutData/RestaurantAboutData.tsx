
import styles from "./RestaurantAboutData.module.css";

const RestaurantAboutData: React.FC = () => {
    return(
        <div className={styles.content}>
            <h3>LunchBox - Meals and Thalis</h3>
            <p>north indian, punjabi</p>
            <div className={styles.subcontent}>
                <div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                            <path opacity="0.75" d="M20.2666 7.54257L13.9881 6.6301L11.1815 0.940169C11.1049 0.784382 10.9787 0.658269 10.823 0.581612C10.4322 0.388733 9.95747 0.549465 9.76212 0.940169L6.95548 6.6301L0.677016 7.54257C0.50392 7.5673 0.34566 7.6489 0.224492 7.77254C0.0780074 7.9231 -0.00271244 8.12566 6.95995e-05 8.3357C0.00285164 8.54575 0.088908 8.74609 0.239329 8.89272L4.78188 13.3215L3.70868 19.5753C3.68351 19.7207 3.69961 19.8703 3.75515 20.0071C3.81069 20.1439 3.90344 20.2624 4.0229 20.3492C4.14235 20.4359 4.28372 20.4875 4.43099 20.498C4.57825 20.5085 4.72551 20.4775 4.85606 20.4086L10.4718 17.4561L16.0876 20.4086C16.2409 20.4902 16.4189 20.5174 16.5895 20.4877C17.0198 20.4135 17.3091 20.0055 17.2349 19.5753L16.1617 13.3215L20.7043 8.89272C20.8279 8.77156 20.9095 8.6133 20.9343 8.4402C21.001 8.00746 20.6993 7.60686 20.2666 7.54257Z" fill="#1AC84B"/>
                        </svg>
                        <p>4.0</p>
                    </div>
                    <p>100+ ratings</p>
                </div>

                <hr/>

                <div>
                    <p>30 Mins</p>
                    <p>Delivery Time</p>
                </div>

                <hr/>

                <div>
                    <p>₹200</p>
                    <p>Cost for two</p>
                </div>
            </div>
        </div>
        

    )
}

export default RestaurantAboutData;