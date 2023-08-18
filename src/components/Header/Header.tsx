import styles from "./Header.module.css"
import Logo from "../Logo/Logo";

import {Link, useNavigate} from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Header: React.FC = () => {

    const authContext = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = () => {
        if(authContext?.isLogged==true){
            console.log("Disconnected");
            authContext.logOut();
        }else if(authContext?.isLogged==false){
            console.log("Connected");
        }
        navigate('/login');
    }
    

    return (
        <header className={styles.content}>
            <div className={styles.subcontent}>
                <Logo/>
                <div className={styles.features}>
                    <input type="text" placeholder="Enter item or restaurant you are looking for"></input>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" >
                        <path d="M19.2857 14.4285V7.88092C19.2857 6.49169 18.7777 5.15936 17.8735 4.17702C16.9693 3.19469 15.743 2.64282 14.4643 2.64282C13.1855 2.64282 11.9592 3.19469 11.055 4.17702C10.1508 5.15936 9.64282 6.49169 9.64282 7.88092V14.4285" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <rect x="5.28577" y="10.0714"  rx="3.6"/>
                    </svg>
                    
                    <button onClick={handleLogin}>{authContext?.isLogged ? "Disconnect" : "Sign In"} {authContext?.userName}</button>
                </div>
            </div>
            
        </header>
    )
}

export default Header;