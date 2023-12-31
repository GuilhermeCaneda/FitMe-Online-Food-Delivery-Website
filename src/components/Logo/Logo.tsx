import styles from "./Logo.module.css";
import {useNavigate} from "react-router-dom";

const Logo: React.FC = () => {

    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    }

    return(
        <figure className={styles.content} onClick={handleHome}>
            <svg>
                <path d="M0 4.27414C0 -0.00536072 5.35289 -0.948061 7.80629 2.55836C10.2648 6.07204 11.7134 10.3468 11.7301 14.9596C11.7301 10.3873 13.1371 6.14426 15.5409 2.64121C17.8898 -0.781849 23.0647 0.122685 23.0647 4.27415V9.76576C23.0647 16.1349 17.9015 21.2981 11.5324 21.2981C5.16321 21.2981 0 16.1349 0 9.76575V4.27414Z"/>
            </svg>
            <h5>FitMe</h5>
        </figure>
    )
}

export default Logo;