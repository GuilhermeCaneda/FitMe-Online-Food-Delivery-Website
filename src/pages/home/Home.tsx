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
            
            <div className={styles.maincontent}>
                <div>
                    <h1>Premium</h1>
                    <span> quality</span>
                </div>
                
                <div>
                    <h1>Food for your</h1>
                    <div className={styles.banana}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 46" fill="none">
                        <path d="M40.6348 8.95813C40.6348 8.95813 40.648 9.1415 40.652 9.47591L40.6536 9.60854C40.6539 9.65546 40.6561 9.70208 40.6512 9.76154C40.641 9.88555 40.6307 10.0096 40.6204 10.1336C40.608 10.2669 40.5965 10.4169 40.5792 10.5669C40.5615 10.7141 40.5446 10.8724 40.5213 11.0379C40.4121 11.8379 40.2458 12.6291 40.0239 13.4054C39.7683 14.3073 39.4088 15.3107 38.9137 16.3676C38.4203 17.4252 37.7839 18.5299 37.0031 19.6349C36.9084 19.7759 36.8044 19.9098 36.702 20.0474L36.5468 20.2539L36.4687 20.3577L36.4491 20.3838C36.5107 20.3271 36.354 20.4758 36.3673 20.4643L36.3592 20.4752L36.3265 20.5186C36.1536 20.7513 35.9712 20.979 35.7908 21.2135L35.7738 21.2354L35.7498 21.2624L35.7014 21.3167L35.6042 21.4254L35.406 21.6412L35.0021 22.0749L34.9001 22.1835L34.8042 22.2817C34.7401 22.3477 34.6753 22.4128 34.6097 22.4772L34.2141 22.8681C33.1438 23.9049 31.9282 24.8705 30.6079 25.728C29.2692 26.5948 27.8504 27.3313 26.3711 27.9272C24.8907 28.5253 23.3571 28.9822 21.7908 29.2919C20.2424 29.5961 18.6922 29.7484 17.1957 29.7561C15.6988 29.7643 14.2571 29.6312 12.9174 29.3923C12.2469 29.2785 11.603 29.1231 10.9873 28.9633C10.3733 28.7885 9.78643 28.6125 9.23535 28.4031L8.8265 28.2538C8.69211 28.2042 8.56154 28.1449 8.43185 28.0918C8.17267 27.984 7.92152 27.8756 7.67879 27.7669C7.43695 27.6547 7.20441 27.5379 6.9798 27.4245L6.64873 27.2568C6.54029 27.2019 6.43636 27.1388 6.33302 27.0816C5.92133 26.8467 5.5403 26.6288 5.20187 26.3979C4.86207 26.171 4.55274 25.9663 4.28562 25.7568L3.90753 25.4633L3.58076 25.1973C3.38142 25.0266 3.21706 24.874 3.08443 24.7509C2.81947 24.5047 2.68557 24.364 2.68557 24.364C1.43932 23.0545 1.49065 20.9827 2.80017 19.7364C3.32513 19.2352 4.00239 18.9236 4.72455 18.851L5.11714 18.8114C5.11714 18.8114 5.2817 18.7947 5.57634 18.7808C5.72356 18.7739 5.90429 18.7646 6.11057 18.7625L6.44704 18.7428L6.82102 18.7285C7.0805 18.726 7.37161 18.7007 7.67801 18.6908C7.98343 18.6845 8.31617 18.6534 8.66047 18.6396C9.00536 18.6243 9.37229 18.5861 9.74755 18.5685C10.1279 18.5275 10.5169 18.5101 10.9218 18.4627L11.2265 18.4324L11.3799 18.4198L11.5352 18.4006L11.8482 18.3623L12.1637 18.3303C12.3762 18.2993 12.5905 18.2691 12.8062 18.2447L12.9684 18.2247L13.1318 18.1977L13.4601 18.1498C14.3393 18.0166 15.245 17.8552 16.1633 17.6581C18.0001 17.2665 19.8873 16.7334 21.7282 16.0506C22.6475 15.7086 23.5543 15.334 24.447 14.9276C25.3375 14.5245 26.2045 14.0883 27.0492 13.6398L27.3617 13.4671C27.4137 13.4382 27.466 13.4099 27.5192 13.3826L27.5985 13.3414L27.6663 13.3048L27.9369 13.1602L28.0734 13.089L28.1429 13.0548L28.1777 13.0378L28.1952 13.0291L28.2184 13.014C28.4665 12.8528 28.7079 12.689 28.9538 12.5352L28.9996 12.5062L29.0111 12.4989C29.031 12.4814 28.8806 12.624 28.9486 12.561L28.967 12.5497L29.0406 12.5044L29.1878 12.4143L29.4805 12.2344C30.2541 11.7521 30.9966 11.2673 31.6841 10.7869C32.3281 10.338 32.9635 9.87682 33.5899 9.40362C34.1685 8.96959 34.6787 8.56623 35.1106 8.22653C35.2166 8.14062 35.3221 8.06089 35.4195 7.98409C35.5155 7.90926 35.604 7.8453 35.6881 7.78133L35.9223 7.60492C35.9588 7.58092 35.9967 7.54625 36.0321 7.51627L36.1328 7.42998C36.3868 7.21243 36.5333 7.10135 36.5333 7.10135C37.6607 6.24691 39.2672 6.46818 40.1216 7.59552C40.422 7.98989 40.6004 8.46357 40.6348 8.95813Z" fill="#FFAE2C"/>
                        <path d="M3.83046 21.7493C3.42944 22.6649 3.07436 22.7861 2.13245 22.3736C1.19044 21.9611 1.03872 21.618 1.43964 20.7024C1.84055 19.7867 4.23148 20.8336 3.83046 21.7493Z" fill="#B28E7F"/>
                        <path d="M42.7056 10.1346C42.7056 10.1346 42.7495 10.3374 42.8072 10.7105L42.83 10.8585C42.8378 10.9109 42.8477 10.9626 42.8517 11.0298L42.8764 11.4504C42.8838 11.6013 42.8948 11.7708 42.8993 11.9411C42.9029 12.1084 42.9091 12.288 42.9094 12.4766C42.9146 13.3879 42.8546 14.2984 42.73 15.2012C42.5878 16.2497 42.3456 17.428 41.9604 18.6877C41.5772 19.9479 41.0417 21.2836 40.3449 22.6423C40.2615 22.8148 40.1666 22.9811 40.074 23.1511L39.9335 23.4066L39.8627 23.535L39.8449 23.5672C39.9047 23.494 39.7532 23.6851 39.7662 23.6702L39.7589 23.6836L39.7294 23.7373C39.5732 24.0248 39.4055 24.3082 39.2412 24.5989L39.2257 24.6261L39.2032 24.6601L39.1577 24.7283L39.0665 24.8653L38.8793 25.1379L38.497 25.6867L38.4002 25.8242L38.3086 25.9492C38.2478 26.033 38.1855 26.1158 38.1225 26.1985L37.7425 26.6981C36.7114 28.0268 35.5066 29.299 34.1676 30.4671C32.8095 31.6485 31.3412 32.697 29.7829 33.598C28.2238 34.5016 26.5828 35.256 24.8819 35.8511C23.2 36.4372 21.492 36.8539 19.821 37.1003C18.1497 37.3475 16.5175 37.4279 14.9825 37.3739C14.2152 37.3532 13.471 37.2821 12.7576 37.2014C12.0437 37.1036 11.3599 37.0002 10.7109 36.8539L10.2303 36.7521C10.0723 36.7181 9.917 36.6726 9.7636 36.6338C9.4648 36.5567 9.16706 36.4756 8.87047 36.3905C8.5824 36.3036 8.30401 36.2101 8.03494 36.119L7.63833 35.9842C7.50844 35.9401 7.38228 35.8861 7.25769 35.8387C7.01749 35.745 6.77844 35.6484 6.54058 35.5489C6.31049 35.4586 6.09333 35.3523 5.88508 35.2545C5.46927 35.0551 5.09108 34.8754 4.75931 34.6837C4.46405 34.5184 4.17162 34.3481 3.88215 34.1728C3.67153 34.0355 3.46316 33.8948 3.25711 33.7507C2.92192 33.5176 2.74992 33.3818 2.74992 33.3818C1.14918 32.1166 0.877165 29.7934 2.14232 28.1926C2.64923 27.5492 3.35644 27.0933 4.15181 26.8974L4.58417 26.7906C4.58417 26.7906 4.76539 26.7458 5.09245 26.6835C5.25583 26.6525 5.45624 26.6136 5.68702 26.5758C5.91985 26.5287 6.18423 26.4782 6.47495 26.4271C6.7645 26.3831 7.08578 26.3085 7.42656 26.2488C7.76684 26.1932 8.13368 26.1056 8.51628 26.0353C8.89927 25.9634 9.30323 25.8624 9.71972 25.7832C9.93152 25.7307 10.1441 25.6814 10.3574 25.6353C10.5732 25.5899 10.7927 25.5322 11.015 25.4782L11.3507 25.3959L11.5201 25.3575L11.6905 25.3114L12.0341 25.2188L12.3816 25.1329L12.732 25.0308C12.9093 24.9827 13.0866 24.9347 13.2639 24.8868L13.4422 24.8307C13.5613 24.7937 13.6813 24.7603 13.8015 24.7249C14.7626 24.4363 15.7491 24.1119 16.7438 23.7457C18.7341 23.0161 20.758 22.1205 22.7064 21.0647C23.6793 20.5365 24.6331 19.9737 25.5659 19.3776C26.4968 18.7857 27.3964 18.1604 28.2689 17.5249L28.5907 17.2822C28.6442 17.2415 28.6983 17.2017 28.7531 17.1628L28.8352 17.1041L28.9052 17.0524L29.1846 16.8478L29.3258 16.7465L29.3981 16.6972L29.4343 16.6726L29.4525 16.6602L29.476 16.6395C29.7277 16.42 29.9714 16.1986 30.2216 15.9876L30.2682 15.9478L30.2798 15.9379C30.2993 15.9152 30.154 16.0983 30.2198 16.0172L30.2386 16.0017L30.3137 15.9395L30.4638 15.8154L30.7622 15.5679C31.55 14.906 32.3026 14.2463 32.9945 13.6002C33.6427 12.9962 34.2793 12.3799 34.9041 11.7516C35.4816 11.1746 35.9876 10.6429 36.4162 10.1946C36.521 10.0817 36.6262 9.97583 36.7229 9.87454C36.8183 9.77561 36.907 9.6902 36.9907 9.60527L37.2244 9.37087C37.2613 9.33825 37.2982 9.29349 37.3329 9.25431L37.4317 9.14186C37.681 8.85838 37.8271 8.71097 37.8271 8.71097C38.9509 7.57697 40.7812 7.56884 41.9152 8.69265C42.3136 9.086 42.5883 9.5872 42.7056 10.1346Z" fill="#FFB93E"/>
                        <path d="M3.61368 30.2783C3.3112 31.3652 0.473226 30.5754 0.775703 29.4885C1.07818 28.4016 1.45569 28.2098 2.57391 28.521C3.69214 28.8321 3.91616 29.1913 3.61368 30.2783Z" fill="#A07562"/>
                        <path d="M41.0838 1.14914C40.9705 1.11804 40.852 1.11044 40.7356 1.12681C40.6147 1.02322 40.4793 0.938001 40.3336 0.873895C39.7482 0.617553 39.1119 1.18352 38.7881 1.53831C37.8027 2.61764 40.0202 4.03345 38.4445 6.64055C38.2224 7.00787 38.4118 7.95399 38.7507 8.10239C39.133 8.26979 39.5835 8.14784 39.9183 7.82323C39.9087 7.84654 39.8997 7.86956 39.8897 7.89307C39.6999 8.33885 40.062 9.36588 40.4643 9.47784C41.0617 9.64406 41.7122 9.23217 41.9763 8.52731C42.719 6.54505 43.5124 1.82501 41.0838 1.14914Z" fill="#8E6049"/>
                        <path d="M46.2242 8.69366C46.2242 8.69366 46.3251 8.86792 46.4916 9.19655L46.5576 9.32692C46.5807 9.37335 46.6053 9.41733 46.6303 9.48188L46.7852 9.88035C46.8395 10.0236 46.9029 10.1841 46.9606 10.3459C47.0162 10.5046 47.0779 10.6739 47.1376 10.8539C47.4285 11.7227 47.6602 12.6101 47.8312 13.5102C48.0322 14.5554 48.1838 15.756 48.2311 17.0801C48.2805 18.4041 48.2148 19.8493 48.0094 21.3698C47.9879 21.561 47.954 21.7504 47.9233 21.9425L47.876 22.2315L47.852 22.3768L47.846 22.4133C47.8765 22.3186 47.8009 22.5629 47.8079 22.543L47.8053 22.5579L47.7952 22.618C47.7427 22.9391 47.6791 23.2607 47.6206 23.5876L47.615 23.6183L47.6052 23.6582L47.5854 23.7385L47.5454 23.8994C47.5174 24.0069 47.4892 24.1143 47.4611 24.2218L47.2866 24.8721L47.2419 25.0352L47.1977 25.1842C47.1684 25.2841 47.138 25.3837 47.1065 25.4829L46.9178 26.0836C46.3921 27.6861 45.6972 29.2983 44.8417 30.8586C43.9733 32.4363 42.9595 33.9295 41.8135 35.3187C40.6645 36.717 39.3812 38.0034 38.0178 39.1441C36.6546 40.2854 35.211 41.281 33.7425 42.1064C32.2743 42.9329 30.7856 43.5933 29.3405 44.0974C28.6205 44.3552 27.9039 44.5585 27.213 44.7431C26.5153 44.9116 25.8439 45.0651 25.1893 45.1669L24.707 45.2484C24.5482 45.2749 24.3878 45.2897 24.2316 45.3101C23.9185 45.3492 23.6131 45.3836 23.3158 45.4132C23.0174 45.4386 22.7256 45.4549 22.4434 45.4702L22.0271 45.4922C21.8907 45.4996 21.7543 45.4964 21.6217 45.4988C21.0895 45.501 20.5966 45.5037 20.138 45.4701C19.6803 45.4412 19.2646 45.4176 18.8875 45.3656L18.3553 45.2956L17.8885 45.2242C17.5989 45.1723 17.3537 45.1189 17.1558 45.0758C16.7601 44.9895 16.5511 44.9315 16.5511 44.9315C14.6057 44.3919 13.4661 42.3773 14.0058 40.432C14.2399 39.5833 14.7735 38.8481 15.5079 38.3626L15.8687 38.1241C15.8687 38.1241 16.0219 38.0229 16.3053 37.8554C16.4469 37.7717 16.6204 37.6683 16.8232 37.5575L17.145 37.3612L17.5072 37.1495C17.7626 37.0097 18.0368 36.8301 18.3349 36.6569C18.634 36.4879 18.9465 36.279 19.2803 36.0802C19.6138 35.8797 19.9566 35.6441 20.3191 35.4232C20.6737 35.1766 21.0498 34.9477 21.4251 34.6793L21.7105 34.4828L21.8556 34.3862L21.9988 34.282L22.2878 34.0723L22.5827 33.8666L22.8745 33.645L23.1716 33.427L23.3211 33.3174L23.468 33.2003L23.7662 32.9705C24.562 32.3502 25.3666 31.6832 26.1602 30.9707C26.9537 30.2583 27.7397 29.5048 28.4981 28.7097C29.2569 27.9152 29.9875 27.0793 30.6848 26.2182C32.0755 24.4923 33.3225 22.6562 34.3927 20.8185L34.5886 20.4729C34.621 20.4154 34.654 20.3581 34.6885 20.3016L34.7395 20.2165L34.7816 20.1427L34.9502 19.8508L35.0362 19.7057L35.0811 19.6337L35.1036 19.5977L35.1149 19.5796L35.1282 19.5515C35.272 19.252 35.4086 18.9541 35.5539 18.663L35.5809 18.6083L35.5876 18.5947C35.5977 18.5652 35.525 18.7999 35.5582 18.6956L35.5689 18.6742L35.6117 18.5889L35.6974 18.4188L35.8675 18.0802C36.3123 17.179 36.7228 16.2974 37.0822 15.4549C37.418 14.6701 37.7382 13.8787 38.0427 13.0812C38.3246 12.3506 38.5596 11.6899 38.759 11.1339C38.8066 10.9951 38.857 10.8624 38.9019 10.7371C38.9465 10.615 38.9899 10.5098 39.0297 10.4056L39.1416 10.1179C39.161 10.0774 39.1758 10.0217 39.1907 9.97302L39.233 9.83314C39.3398 9.48051 39.4088 9.29137 39.4088 9.29137C40.1245 7.33212 42.2929 6.32409 44.2521 7.03973C45.1154 7.35485 45.7963 7.95637 46.2242 8.69366Z" fill="#FFCE6C"/>
                        <path d="M45.5539 18.2073C45.5539 18.2073 45.6147 18.4897 45.6763 18.9782C45.6843 19.0393 45.693 19.1037 45.6999 19.171L45.7112 19.2743L45.7166 19.3897C45.7247 19.5474 45.7257 19.718 45.7303 19.9021C45.7326 20.085 45.7333 20.2844 45.7282 20.4883L45.6865 21.119C45.6584 21.5613 45.582 22.0311 45.4961 22.5311C45.4771 22.6569 45.4472 22.7809 45.4183 22.9071L45.3271 23.2898C45.2632 23.5474 45.2012 23.813 45.1128 24.0733C45.0288 24.3404 44.9414 24.6064 44.8507 24.8712C44.7504 25.136 44.641 25.401 44.5315 25.6688C44.4738 25.8012 44.4231 25.938 44.3583 26.068L44.1675 26.4612L43.972 26.8542C43.9084 26.9864 43.8366 27.1139 43.763 27.2404C43.6184 27.4945 43.4714 27.7472 43.3221 27.9985C43.1651 28.2417 43.005 28.4829 42.8416 28.7218C42.6846 28.9627 42.5101 29.1882 42.3383 29.4107C42.1643 29.6316 41.9994 29.8549 41.8189 30.0596C41.4589 30.4699 41.1105 30.864 40.7464 31.2058L40.481 31.4612C40.3931 31.5441 40.3089 31.6278 40.2186 31.7033C40.0389 31.8548 39.8702 32.0044 39.7005 32.1403C39.3703 32.4206 39.0433 32.6502 38.754 32.8512C38.6083 32.9507 38.4742 33.0453 38.3457 33.1273C38.2261 33.2007 38.1054 33.2722 37.9837 33.3421C37.8138 33.4411 37.6416 33.536 37.4672 33.6267C37.3461 33.6894 37.2801 33.7206 37.2801 33.7206C37.1289 33.7922 36.959 33.8142 36.7946 33.7835C36.6302 33.7528 36.4796 33.6709 36.3645 33.5496C36.2494 33.4282 36.1755 33.2737 36.1534 33.1079C36.1314 32.9421 36.1622 32.7735 36.2416 32.6263L36.2553 32.6013L36.3517 32.425C36.4158 32.3118 36.5104 32.147 36.6362 31.9459C36.6979 31.8441 36.7689 31.7346 36.8457 31.6157C36.9176 31.492 36.999 31.3626 37.0845 31.2236C37.256 30.9464 37.459 30.646 37.6629 30.3071C37.7649 30.1377 37.8794 29.9697 37.9929 29.7921C38.1036 29.6123 38.215 29.4254 38.3339 29.2377C38.5773 28.866 38.8094 28.4604 39.065 28.0554C39.1311 27.9556 39.1902 27.8502 39.2508 27.7448L39.4372 27.4294L39.629 27.1131C39.6941 27.0077 39.7511 26.897 39.814 26.7893C39.9355 26.5714 40.0648 26.3563 40.1904 26.1383C40.3092 25.916 40.4303 25.6951 40.5539 25.4756C40.6821 25.258 40.7893 25.0306 40.9086 24.8099C41.0254 24.5882 41.1493 24.3705 41.2542 24.1467C41.3642 23.9271 41.4762 23.7084 41.5901 23.4908C41.691 23.2733 41.795 23.0572 41.9021 22.8426C42.012 22.6317 42.1029 22.4185 42.1997 22.2114L42.3449 21.9043C42.3947 21.8053 42.4412 21.7048 42.4843 21.6028C42.569 21.4073 42.6561 21.2128 42.7456 21.0195C42.8399 20.8326 42.9102 20.6464 42.9864 20.4687L43.2132 19.9576C43.2855 19.7973 43.3415 19.6473 43.4054 19.504C43.4694 19.3615 43.5259 19.2262 43.5853 19.1012L43.6282 19.0089L43.6651 18.9117C43.6886 18.8483 43.7133 18.7882 43.7364 18.7311C43.9187 18.2736 44.0485 18.0155 44.0485 18.0155C44.1443 17.8249 44.312 17.6801 44.5146 17.6131C44.7171 17.5461 44.9381 17.5623 45.1287 17.6581C45.3538 17.771 45.5035 17.9793 45.5539 18.2073Z" fill="#FFDF95"/>
                        <path d="M16.2294 41.7262C16.3419 42.8489 16.0597 43.1646 14.9048 43.2804C13.75 43.3961 13.4108 43.1427 13.2982 42.0201C13.1857 40.8975 13.4679 40.5818 14.6227 40.466C15.7776 40.3502 16.1168 40.6036 16.2294 41.7262Z" fill="#8E6049"/>
                        <path d="M43.0209 8.97196C43.6379 8.91015 44.0946 8.29031 44.0849 7.53755C44.0578 5.42089 45.6857 2.1341 43.4414 0.986096C40.7844 -0.372993 38.6956 1.49408 38.5734 2.02224C38.2018 3.62934 41.0368 3.88862 41.931 8.38434C42.0257 8.85941 42.6053 9.01359 43.0209 8.97196Z" fill="#966C5A"/>
                        <path d="M42.7055 4.17949C41.9915 5.33738 42.7063 9.00355 43.0209 8.97201C43.6379 8.9101 45.2815 0.00201416 42.7055 4.17949Z" fill="#1AC84B"/>
                    </svg>
                    </div>
                    <span>healthy</span>
                </div>
                

                <div>
                    <div className={styles.apple}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 50" fill="none">
                        <path d="M15.738 26.7869L13.4833 21.1978L13.5454 12.1502C13.5454 12.1502 19.6185 11.24 22.8081 10.8015C25.9977 10.363 32.3398 7.6905 38.1233 10.2513C44.6929 13.1596 48.1762 19.8905 46.4221 30.1503C44.668 40.41 36.9774 48.713 30.052 49.6066C26.6224 50.0493 26.0102 48.7171 23.3832 48.9075C21.2567 49.0605 21.3726 50.1651 17.7444 49.9789C14.1163 49.7928 11.0383 48.4441 9.22634 46.1936C7.41433 43.943 15.738 26.7869 15.738 26.7869Z" fill="#DC0D28"/>
                        <path d="M5.72647 13.9001C0.526258 18.2439 -1.92698 27.3991 2.22243 37.1707C5.91264 45.8667 11.8079 48.353 11.8079 48.353C11.8079 48.353 22.1173 47.6787 29.3115 43.7982C36.5058 39.9177 43.4518 33.162 43.4518 24.2798C43.4518 15.3977 38.8225 12.3942 38.3219 12.2701C37.8213 12.146 35.757 13.4574 33.4403 13.5195C31.1235 13.5815 29.3115 13.0189 29.3115 13.0189L21.9932 15.4597L15.1506 13.8628C15.1506 13.8628 14.9313 12.9072 15.6718 12.5183C17.2108 11.7157 20.4252 13.081 21.7408 13.0189C23.0564 12.9568 24.1816 11.2028 24.1816 11.2028C24.1816 11.2028 21.1161 10.8883 20.0529 10.6401C18.9897 10.4002 11.7955 8.83225 5.72647 13.9001Z" fill="#FF5117"/>
                        <path d="M22.6054 13.954C20.7106 14.0408 15.6304 12.2578 15.1712 13.652C14.683 15.133 18.4642 17.0981 23.0687 16.7754C27.8718 16.4403 30.8628 13.7843 30.1016 12.3529C29.3446 10.9215 26.2294 13.7843 22.6054 13.954Z" fill="#8D1D0A"/>
                        <path d="M18.0588 5.61367C18.0588 5.61367 17.2604 5.5723 16.8384 5.40268C16.4164 5.23306 15.8207 5.24548 15.8703 4.51736C15.9531 3.29695 17.5169 2.04343 17.8933 1.82004C18.609 1.39806 19.8626 1.5139 20.3383 1.82004C20.9299 2.20064 20.632 3.59067 20.632 3.59067C20.632 3.59067 22.7378 6.75134 23.0315 8.68746C23.3004 10.454 24.4008 15.6087 22.7378 15.9314C21.2195 16.2251 21.8524 12.266 21.0126 10.3299C20.5079 9.17149 19.7922 7.93039 19.1179 7.08644C18.736 6.61691 18.3824 6.12512 18.0588 5.61367Z" fill="#513630"/>
                        <path d="M40.5518 0.686549C40.7214 0.392822 40.3822 0.0949572 38.9921 0.0535872C37.6021 0.0122172 30.019 -0.703484 25.7248 4.64566C22.6386 8.48894 23.1143 11.7654 23.1143 11.7654L25.9357 11.8937L40.5518 0.686549Z" fill="#2F7C31"/>
                        <path d="M31.2393 5.94879C33.7918 4.18643 40.5889 0.34729 40.5889 0.34729C40.5889 0.34729 40.5889 1.31535 40.1669 2.1593C39.7449 3.00325 38.3135 7.17334 32.5011 10.2058C27.0443 13.052 23.4038 12.3529 23.1059 11.8482C22.8163 11.3434 27.0278 8.85711 31.2393 5.94879Z" fill="#709F19"/>
                        <path d="M12.4987 15.133C11.3693 13.5072 8.63469 13.9664 6.18145 17.2387C3.02078 21.4502 3.1904 27.0517 5.3375 27.3909C7.46806 27.726 5.58986 25.5789 8.87464 21.3261C11.3899 18.0703 13.9301 17.1974 12.4987 15.133Z" fill="#FFD2B1"/>
                    </svg>
                    </div>
                    <span>& Daily Life</span>
                </div>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>


            <div className={styles.subcontent}>
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
            </div>
            
        </section>
    )
}

export default Home;