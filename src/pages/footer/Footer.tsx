import "./Footer.module.css";
import React from 'react';

const Footer: React.FC = () => {
    return(
        <footer>
            <div className="content">
                <img src="./images/logo-white.png"/>
                <nav>
                    <ul>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Help & Support</li>
                        <li>T&C</li>
                    </ul>
                </nav>
                <div>
                    <p className="teste">Contact: </p>
                    <p>+91 1234567899</p>
                </div>
            </div>
            <div className="socialmedia">
                <img src=""/>
                <img src=""/>
                <img src=""/>
            </div>

        </footer>
    )
}

export default Footer;